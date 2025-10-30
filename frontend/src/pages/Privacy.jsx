import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
  <div className="max-w-[1280px] mx-auto px-6 py-10 font-sans text-gray-800 leading-relaxed">
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
    <p className="mb-6"><strong>Effective Date:</strong> October 30th, 2025</p>

    <p className="mb-6">
      Welcome to <strong>Stellary</strong>, a mobile application developed by <strong>codewilson</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our app.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">1. Information We Collect</h2>
    <p className="mb-2">When you use our app, we may collect the following information:</p>
    <ul className="list-disc list-inside mb-6">
      <li><strong>Email Address:</strong> Collected during account creation, however user can skip this part and still use the app.</li>
      <li><strong>Device ID:</strong> Collected to help prevent fraudulent activity.</li>
      <li><strong>Payment Information:</strong> Managed through our third-party service RevenueCat for processing subscriptions. We do not store payment information directly.</li>
    </ul>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">2. How We Use Your Information</h2>
    <p className="mb-2">We use the information we collect to:</p>
    <ul className="list-disc list-inside mb-6">
      <li>Allow users who choose to sign up to create and manage their accounts</li>
      <li>Provide customer support</li>
      <li>Improve app functionality and user experience</li>
    </ul>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">3. Third-Party Services</h2>
    <p className="mb-2">We use the following third-party services, which may collect and process data as described in their respective privacy policies:</p>
    <ul className="list-disc list-inside mb-6">
      <li>
        <strong>RevenueCat:</strong> Manages in-app purchases and subscriptions.{' '}
        <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          View Privacy Policy
        </a>
      </li>
      <li>
        <strong>Appwrite:</strong> Handles backend infrastructure including authentication and data storage.{' '}
        <a href="https://appwrite.io/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          View Privacy Policy
        </a>
      </li>
    </ul>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">4. Data Retention</h2>
    <p className="mb-6">
      We retain your data only for as long as necessary to fulfill the purposes outlined in this policy. You may request deletion of your data by contacting us at{' '}
      <a href="mailto:hellostellarapp@gmail.com" className="text-blue-600 hover:underline">
        hellostellarapp@gmail.com
      </a>.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">5. Data Security</h2>
    <p className="mb-6">
      We implement security measures to protect your data from unauthorized access or disclosure. While we strive to use commercially acceptable means to protect your information, no method is 100% secure.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">6. Eligibility</h2>
    <p className="mb-6">
      Stellary is intended for users <strong>at least 18 years of age</strong>. We do not knowingly collect personal data from individuals under 18. If we become aware that such data has been collected, we will delete it promptly.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">7. Legal Basis for Processing</h2>
    <p className="mb-6">
      We process your personal data under the following legal bases:
      to fulfill a contract with you (such as providing app services),
      to comply with legal obligations,
      to pursue legitimate business interests (such as app improvement and analytics),
      and when you have given consent for specific processing activities.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">8. Your Rights</h2>
    <p className="mb-6">
      Depending on your location, you may have rights under data protection laws, such as access to your data, correction, deletion, or objection to processing. To exercise your rights, contact us at{' '}
      <a href="mailto:hellostellarapp@gmail.com" className="text-blue-600 hover:underline">
        hellostellarapp@gmail.com
      </a>.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">8.1 Right to Know About Data Sales</h2>
    <p className="mb-6">
      We do not sell personal data. However, under certain privacy laws such as the California Consumer Privacy Act (CCPA), you have the right to know if your personal data has been sold. 
      Stellary does not engage in the sale of personal or sensitive user data for monetary gain or any other purpose.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">8.2 Right to Know About Data Sharing</h2>
    <p className="mb-6">
      You have the right to know whether we share your personal data with third parties. Stellary only shares limited data with service providers that help operate the app (such as RevenueCat for payments and Appwrite for backend services). 
      These third parties are bound by agreements to protect your data and cannot use it for any other purpose.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">8.3 Right to Opt-Out of Data Sale</h2>
    <p className="mb-6">
      If our practices ever change to include data sales, you will be notified in advance and given the option to opt out. 
      Currently, Stellary does not sell any user data and does not use personal information for targeted advertising.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">8.4 How to Opt-Out of Data Sharing or Targeted Ads</h2>
    <p className="mb-6">
      You can contact us at 
      <a href="mailto:hellostellarapp@gmail.com" className="text-blue-600 hover:underline"> hellostellarapp@gmail.com</a> 
      {" "}to request that your data not be shared for purposes beyond essential app functionality. 
      We will respond to your request within a reasonable time frame and confirm once your preferences have been applied.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">8.5 Your Rights Under GDPR</h2>
    <p className="mb-6">
      If you are located in the European Union (EU) or European Economic Area (EEA), you have the following rights under the General Data Protection Regulation (GDPR):
      the right to access, correct, or delete your data; the right to restrict or object to processing; the right to data portability; and the right to withdraw consent at any time.
      You also have the right to lodge a complaint with a supervisory authority if you believe your data has been processed unlawfully.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">8.6 Your Rights Under the CCPA (California)</h2>
    <p className="mb-6">
      If you are a California resident, you have the right under the California Consumer Privacy Act (CCPA) to request details about the personal data we collect,
      to request deletion of your data, to opt out of the sale of your data (if applicable), and to not be discriminated against for exercising your privacy rights.
      To make a request, contact us at <a href="mailto:hellostellarapp@gmail.com" className="text-blue-600 hover:underline">hellostellarapp@gmail.com</a>.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">8.7 Your Rights Under the VCDPA (Virginia)</h2>
    <p className="mb-6">
      If you are a resident of the Commonwealth of Virginia, you have certain rights under the Virginia Consumer Data Protection Act (VCDPA). 
      These include the right to access and obtain a copy of your personal data, the right to correct inaccuracies, the right to delete personal data you have provided, 
      the right to data portability, and the right to opt out of the processing of your personal data for targeted advertising, the sale of personal data, or profiling. 
      To exercise any of these rights, please contact us at{' '}
      <a href="mailto:hellostellarapp@gmail.com" className="text-blue-600 hover:underline">
        hellostellarapp@gmail.com
      </a>. We will respond to your request in accordance with applicable law.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">8.8 Right to Lodge a Complaint</h2>
    <p className="mb-6">
      If you believe your personal data has been processed in violation of applicable data protection laws, you have the right to lodge a complaint with your local data protection authority.
      For example, users in the EU may contact their national supervisory authority for further assistance.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">9. Changes to This Policy</h2>
    <p className="mb-6">
      We may update this policy from time to time. If we make material changes, we will notify you via the app or email. Continued use of the app after such updates constitutes your acceptance of the revised policy.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">10. Personal Data Controller</h2>
    <p className="mb-6">
      Wilson, an independent app developer based in Indonesia, will be the controller of your personal data.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">11. Data Protection Officer (DPO)</h2>
    <p className="mb-6">
      Our Data Protection Officer (DPO) can be contacted for any privacy or data protection inquiries at:
      <p><strong>Email:</strong>{' '}
      <a href="mailto:hellostellarapp@gmail.com" className="text-blue-600 hover:underline">
        hellostellarapp@gmail.com
      </a>
    </p>
    </p>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">12. Contact Us</h2>
    <p className="mb-1">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
    <p><strong>Email:</strong>{' '}
      <a href="mailto:hellostellarapp@gmail.com" className="text-blue-600 hover:underline">
        hellostellarapp@gmail.com
      </a>
    </p>
  </div>
);

};

export default PrivacyPolicy;
