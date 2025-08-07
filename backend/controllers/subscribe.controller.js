import nodemailer from 'nodemailer';

const createSubscription = async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Save to Mailchimp
  const data = {
    email_address: email,
    status: 'subscribed',
  };

  try {
    const response = await fetch(`https://${process.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      }
    })  
    const result = await response.json()

    // Send Thank You Email
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // your gmail
        pass: process.env.GMAIL_PASS, // your app password
      },
    });

    await transporter.sendMail({
      from: `"Stellar" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Welcome to Stellar!',
      html: `
        <!DOCTYPE html>
          <html lang="en" style="margin:0; padding:0; background-color:#f9fafb; font-family: Arial, sans-serif;">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>Welcome to Stellar</title>
            </head>
            <body style="margin:0; padding:0; background-color:#f9fafb;">
              <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin:auto; background-color:#ffffff; border-radius:12px; overflow:hidden;">
                <!-- Header -->
                <tr>
                  <td align="center" style="padding: 30px 20px; background-color:#13a2f5;">
                    <h1 style="margin:0; font-size:28px; font-weight:bold; color:white;">Welcome to Stellar 🚀</h1>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding: 30px 20px; color:#111827; font-size:16px; line-height:1.6;">
                    <p>Hi there,</p>
                    <p>Thanks for subscribing to <strong>Stellar</strong>! We're thrilled to have you join our community of curious minds and lifelong learners.</p>
                    <p>When we launch, you'll be among the first to explore our library of concise, powerful book summaries — designed to help you learn faster and get inspired daily.</p>
                  

                    <p>We'll notify you as soon as Stellar goes live. Until then, stay curious! 🌟</p>
                    <p>— The Stellar Team</p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td align="center" style="padding: 20px; font-size:12px; color:#6b7280; background-color:#f3f4f6;">
                    <p style="margin:0;">You’re receiving this email because you subscribed to updates from Stellar.</p>
                    <p style="margin:0;">© 2025 Stellar. All rights reserved.</p>
                  </td>
                </tr>
              </table>
            </body>
          </html>`,
    });

    res.status(200).json({ message: 'Successfully subscribed and email sent' })
  } 
  catch (error) {
    if (error.response && error.response.data.title === 'Member Exists') {
      return res.status(200).json({ message: 'Already subscribed' });
    }

    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Subscription failed' });
  }
}

export { createSubscription }