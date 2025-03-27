import React from "react";
import { Layout } from "@/components/layout/Layout";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-700">
              We collect personal information that you provide to us, such as your name, email address, shipping address, and payment details. We also collect non-personal information, such as your IP address and browsing behavior, to improve our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="text-gray-700">
              We use your information to process orders, provide customer support, and improve your shopping experience. We may also use your information to send promotional emails, but you can opt out at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
            <p className="text-gray-700">
              We do not sell or rent your personal information to third parties. However, we may share your information with trusted service providers who help us operate our business, such as payment processors and shipping companies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-gray-700">
              Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and analyze website traffic. You can disable cookies in your browser settings, but some features of our website may not function properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-700">
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-700">
              You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at <a href="mailto:hello@bicolartistry.com" className="text-blue-600 hover:underline">hello@bicolartistry.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated policy will take effect immediately upon posting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:hello@bicolartistry.com" className="text-blue-600 hover:underline">hello@bicolartistry.com</a>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
