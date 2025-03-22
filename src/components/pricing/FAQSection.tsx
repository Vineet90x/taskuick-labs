
import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-transparent to-black/50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="inline-block text-sm font-semibold text-taskuick-purple px-3 py-1 border border-taskuick-purple/30 rounded-full mb-3">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Pricing Questions</h3>
          <p className="text-taskuick-gray text-lg">
            Find answers to common questions about our pricing and packages.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6">
                  <h4 className="text-lg font-semibold text-white pr-6">{faq.question}</h4>
                  <span className="flex-shrink-0 w-5 h-5 border-l-2 border-t-2 border-taskuick-purple transform rotate-45 group-open:rotate-225 transition-transform duration-300"></span>
                </summary>
                <div className="p-6 pt-0">
                  <p className="text-taskuick-gray">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
