import { Plus } from 'lucide-react';
import React from 'react';
import { faqs } from './data/SectionData';


const FAQSection = () => {
  return (
    <section className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="mt-12 flex flex-col lg:flex-row justify-between gap-3 bg-gray-100 p-4 rounded-xl shadow-sm">
             <h3 className="font-semibold text-lg">{faq.question}</h3>
            <Plus size={32} className=''/>
           
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
