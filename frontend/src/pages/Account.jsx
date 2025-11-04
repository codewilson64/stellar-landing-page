import { useEffect } from "react";

const DeleteAccount = () => {
  useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="bg-white max-w-lg w-full shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Delete Your Stellary Account
        </h1>
        <p className="text-gray-700 mb-6">
          If you wish to delete your Stellary account and associated personal data,
          please follow these steps within the app:
        </p>
        <ol className="text-left text-gray-700 list-decimal list-inside space-y-2 mb-6">
          <li>Open the <strong>Stellary</strong> app.</li>
          <li>Go to <strong>Settings</strong>.</li>
          <li>Select <strong>Delete Account</strong>.</li>
          <li>Confirm your decision.</li>
        </ol>
        <p className="text-gray-700 mb-6">
          Once confirmed, your account and associated data such as email
          will be permanently deleted. Please note that some limited technical data, 
          such as your device ID, may be retained for fraud prevention and security purposes 
          as described in our Privacy Policy.
        </p>
        <p className="text-gray-700">
          If you no longer have access to the app or need assistance,
          please contact us at{" "}
          <a
            href="mailto:hellostellarapp@gmail.com"
            className="text-blue-600 hover:underline font-medium"
          >
            hellostellarapp@gmail.com
          </a>.
        </p>
        <div className="mt-8 text-sm text-gray-500">
          <p>Developer: <strong>codewilson</strong></p>
          <p>Last updated: November 2025</p>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
