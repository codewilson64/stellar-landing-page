import { useEffect } from 'react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10 font-sans text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service for Stellar</h1>
      <p className="mb-6">
        <strong>Effective Date:</strong> June 15th, 2025
      </p>

      <p className="mb-6">
        Welcome to Stellar. These Terms of Service ("Terms") govern your use of our mobile
        application, operated by codewilson ("we", "our", "us"). By using the app, you agree to
        these Terms.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">1. Use of the App</h2>
      <p className="mb-6">
        You must be at least 18 years old to use Stellar. You agree to use the app only for lawful
        purposes and not to misuse the services provided.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">2. User Accounts</h2>
      <p className="mb-6">
        Creating an account is not required for this app. You can still use the app with or without an account. 
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">3. Subscriptions</h2>
      <p className="mb-6">
        Stellar offers subscription-based content. Payments are handled securely through RevenueCat.
        We do not store payment data directly.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">4. Intellectual Property</h2>
      <p className="mb-6">
        All content and materials within the app are owned by codewilson or licensed for use. You
        may not copy, modify, or distribute any part without permission.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">5. Termination</h2>
      <p className="mb-6">
        We reserve the right to suspend or terminate your access to Stellar at any time for
        violations of these Terms or misuse of the app.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">6. Limitation of Liability</h2>
      <p className="mb-6">
        We are not liable for any damages or losses arising from your use of the app. The app is
        provided "as is" without warranties of any kind.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">7. Changes to These Terms</h2>
      <p className="mb-6">
        We may update these Terms at any time. Continued use of the app after changes means you
        accept the revised Terms.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-2">8. Contact</h2>
      <p>
        For questions about these Terms, contact us at:{' '}
        <a
          href="mailto:wilsongambit@gmail.com"
          className="text-blue-600 hover:underline"
        >
          wilsongambit@gmail.com
        </a>
      </p>
    </div>
  );
};

export default TermsOfService;
