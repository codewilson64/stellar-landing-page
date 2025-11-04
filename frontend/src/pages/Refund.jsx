import React, { useEffect } from 'react'

const Refund = () => {
  useEffect(() => {
          window.scrollTo(0, 0)
        }, [])

 return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full text-gray-800 leading-relaxed">
        <h1 className="text-3xl font-semibold mb-10 text-center">
          How to Get a Refund
        </h1>

        <p className="mb-10 text-lg">
          To get a refund, please follow the instructions below.
        </p>

        <div>
          <p className="text-lg">
            • If you are subscribed through the{" "}
            <span className="font-semibold">Google Play Store</span>, please
            request it via this link:
          </p>
          <a
            href="https://support.google.com/googleplay/answer/2479637"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 underline text-lg ml-5"
          >
            https://support.google.com/googleplay/answer/2479637
          </a>

          <p className="text-lg mt-10">
            • If you are subscribed through the{" "}
            <span className="font-semibold">Apple Store</span>, please use this
            link:
          </p>
          <a
            href="https://support.apple.com/apps"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-600 underline text-lg ml-5"
          >
            https://support.apple.com/apps
          </a>
        </div>
      </div>
    </div>
  );
}

export default Refund