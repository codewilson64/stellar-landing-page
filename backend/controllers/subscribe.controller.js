const createSubscription = async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

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
    await response.json()

    res.status(200).json({ success: 'Successfully subscribed' });
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