import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "What purity of gold do you use?", a: "We primarily use 22K (916) gold for our traditional and bridal collections, and 18K gold for our diamond and modern everyday pieces to ensure durability." },
  { q: "How do I know my ring size?", a: "You can refer to our Size Guide section which provides a detailed printable chart and instructions on how to measure your finger accurately at home." },
  { q: "How do I care for gold jewellery?", a: "Store it in a soft-lined box, away from moisture and perfumes. Clean it gently using warm water and a soft cloth." },
  { q: "How should I clean diamond jewellery?", a: "Soak your diamond pieces in a mild degreasing solution, like water with a few drops of mild dish soap, and use a soft, clean toothbrush to remove any remaining dirt." },
  { q: "How long does delivery take?", a: "For in-stock items, delivery typically takes 7-10 business days. Made-to-order pieces may take 3-4 weeks." },
  { q: "Do you provide certificates?", a: "Yes, all our diamond and gemstone jewellery comes with a certificate of authenticity from recognized gemological laboratories." },
  { q: "Can I return jewellery?", a: "We offer a 15-day return policy for unused pieces in their original packaging with all tags attached." },
  { q: "Can I exchange a product?", a: "Yes, we offer a lifetime exchange policy on all our gold and diamond jewellery at prevailing market rates minus making charges." },
  { q: "Can I cancel my order?", a: "Orders can be cancelled within 24 hours of placement before they are processed for shipping." },
  { q: "Do you offer gift packaging?", a: "Yes, all our jewellery comes in premium MAJIN JEWELLERY signature gift packaging." },
  { q: "Can I track my order?", a: "Once your order is shipped, you will receive a tracking link via email and SMS." },
  { q: "How do I choose a necklace length?", a: "Our size guide provides a visual representation of different necklace lengths (choker, princess, matinee, etc.) on a standard neckline." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif text-brand-charcoal mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-500">Everything you need to know about our products and services.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 bg-white">
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-medium text-brand-charcoal">{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-brand-gold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600 font-light leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
