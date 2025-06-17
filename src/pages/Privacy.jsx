import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10 font-sans text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy for Stellar</h1>
      <p className="mb-6"><strong>Effective Date:</strong> June 15th, 2025</p>

      <p className="mb-6">
        Welcome to <strong>Stellar</strong>, a mobile application developed by <strong>codewilson</strong>. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our app.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">1. Information We Collect</h2>
      <p className="mb-2">When you use Stellar, we may collect the following information:</p>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Email Address:</strong> Collected during account creation and used to manage user access.</li>
        <li><strong>Payment Information:</strong> Managed through our third-party service RevenueCat for processing subscriptions. We do not store payment information directly.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">2. How We Use Your Information</h2>
      <p className="mb-2">We use the information we collect to:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Create and manage user accounts</li>
        <li>Process and validate subscriptions</li>
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
        <a href="mailto:wilsongambit@gmail.com" className="text-blue-600 hover:underline">
          wilsongambit@gmail.com
        </a>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">5. Data Security</h2>
      <p className="mb-6">
        We implement security measures to protect your data from unauthorized access or disclosure. While we strive to use commercially acceptable means to protect your information, no method is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">6. Eligibility</h2>
      <p className="mb-6">
        Stellar is intended for users <strong>at least 18 years of age</strong>. We do not knowingly collect personal data from individuals under 18. If we become aware that such data has been collected, we will delete it promptly.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">7. Your Rights</h2>
      <p className="mb-6">
        Depending on your location, you may have rights under data protection laws, such as access to your data, correction, deletion, or objection to processing. To exercise your rights, contact us at{' '}
        <a href="mailto:wilsongambit@gmail.com" className="text-blue-600 hover:underline">
          wilsongambit@gmail.com
        </a>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">8. Changes to This Policy</h2>
      <p className="mb-6">
        We may update this policy from time to time. If we make material changes, we will notify you via the app or email. Continued use of the app after such updates constitutes your acceptance of the revised policy.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">9. Contact Us</h2>
      <p className="mb-1">If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
      <p><strong>Email:</strong>{' '}
        <a href="mailto:wilsongambit@gmail.com" className="text-blue-600 hover:underline">
          wilsongambit@gmail.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
