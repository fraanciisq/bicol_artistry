import React from "react";
import { Layout } from "@/components/layout/Layout";

const ReturnsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Returns & Exchanges</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We want you to be completely satisfied with your purchase. If you're not happy, here's how you can return or exchange your item.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
            <p className="text-gray-700">
              Items can be returned or exchanged within <strong>14 days</strong> of receiving your order. To be eligible for a return, the item must be unused, in its original condition, and in the original packaging.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Initiate a Return</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Contact our support team at <a href="mailto:hello@bicolartistry.com" className="text-blue-600 hover:underline">hello@bicolartistry.com</a> with your order details.</li>
              <li>Wait for our team to provide you with a return authorization and instructions.</li>
              <li>Ship the item back to the address provided, ensuring it is securely packaged.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Non-Returnable Items</h2>
            <p className="text-gray-700">
              Certain items are not eligible for returns, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Custom or personalized items</li>
              <li>Items marked as final sale</li>
              <li>Gift cards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Refunds</h2>
            <p className="text-gray-700">
              Once we receive your returned item, we will inspect it and notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-7 business days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
            <p className="text-gray-700">
              If you need to exchange an item for a different size, color, or style, please contact us at <a href="mailto:hello@bicolartistry.com" className="text-blue-600 hover:underline">hello@bicolartistry.com</a>. Exchanges are subject to product availability.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ReturnsPage;
