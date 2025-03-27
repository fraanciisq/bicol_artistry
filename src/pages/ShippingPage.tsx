import React from "react";
import { Layout } from "@/components/layout/Layout";

const ShippingPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shipping Information</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about our shipping options, delivery times, and policies to ensure a smooth shopping experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Shipping Options</h2>
            <p className="text-gray-700">
              We offer the following shipping options to meet your needs:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Standard Shipping:</strong> Delivery within 5-7 business days.</li>
              <li><strong>Express Shipping:</strong> Delivery within 2-3 business days.</li>
              <li><strong>International Shipping:</strong> Delivery times vary by destination, typically 7-14 business days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Shipping Rates</h2>
            <p className="text-gray-700">
              Shipping rates are calculated based on the weight of your order and your location. The exact shipping cost will be displayed during checkout.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Order Processing Time</h2>
            <p className="text-gray-700">
              Orders are processed within <strong>1-2 business days</strong> after payment is confirmed. Please note that orders placed on weekends or holidays will be processed on the next business day.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Tracking Your Order</h2>
            <p className="text-gray-700">
              Once your order is shipped, you will receive a confirmation email with a tracking number. Use this number to track your package on the carrier's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">International Shipping</h2>
            <p className="text-gray-700">
              We ship to most countries worldwide. Please note that customs duties, taxes, and additional fees may apply depending on your country's regulations. These charges are the responsibility of the customer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Lost or Damaged Packages</h2>
            <p className="text-gray-700">
              If your package is lost or arrives damaged, please contact our support team at <a href="mailto:hello@bicolartistry.com" className="text-blue-600 hover:underline">hello@bicolartistry.com</a> within 7 days of delivery. We will work with the carrier to resolve the issue.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ShippingPage;
