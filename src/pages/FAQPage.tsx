import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      question: "What is Bicol Artistry?",
      answer: "Bicol Artistry is a platform showcasing the finest crafts and artistry from the Bicol region.",
    },
    {
      question: "How can I place an order?",
      answer: "You can place an order by visiting our product pages and adding items to your cart. Once ready, proceed to checkout.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping. Shipping fees and delivery times may vary depending on your location.",
    },
    {
      question: "Can I return or exchange an item?",
      answer: "Yes, we have a return and exchange policy. Please contact our support team within 14 days of receiving your order.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach us via email at hello@bicolartistry.com or call us at (123) 456-7890.",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We've got answers. Browse through our FAQs to find the information you need.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;
