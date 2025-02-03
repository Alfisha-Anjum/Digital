"use client"
import React, { useState } from "react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the return policy for your products?",
      answer:
        "You can return your products within 30 days of purchase as long as they are in their original condition and packaging. Please refer to our return policy page for more details.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to select countries. Shipping fees and delivery times vary based on the destination.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking link via email or SMS. You can use this link to monitor your package's progress.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit/debit cards, PayPal, and digital wallets like Apple Pay and Google Pay.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team via email at support@example.com or through our 24/7 live chat available on our website.",
    },
  ];

  return (
    <div className="p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-600">
        Frequently Asked Questions
      </h1>
      <div className="space-y-5 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm bg-white p-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <h2 className="font-semibold text-lg text-gray-800">
                {faq.question}
              </h2>
              <span className="text-green-600 font-bold">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
