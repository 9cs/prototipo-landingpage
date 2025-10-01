import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '@/shared/LanguageContext';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = (t('faqQuestions') as unknown as string[]).map((question, index) => ({
    question,
    answer: (t('faqAnswers') as unknown as string[])[index]
  }));

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-6 tracking-tight">
            {t('faqTitle')}
          </h2>
          <p className="font-inter text-lg text-[#1F2937] max-w-3xl mx-auto leading-relaxed">
            {t('faqSubtitle')}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-[#E2E8F0] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-[#F8FAFC] transition-colors duration-200"
              >
                <h3 className="font-space-grotesk font-semibold text-lg text-[#0F172A] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-[#14B8C4]" />
                  ) : (
                    <Plus className="w-6 h-6 text-[#14B8C4]" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 border-t border-[#E2E8F0]">
                      <p className="font-inter text-[#1F2937] leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-inter text-[#1F2937] mb-6">
            {t('notFoundAnswer')}
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-[#14B8C4] text-white font-inter font-semibold rounded-2xl hover:bg-[#0F9BA6] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {t('contactUs')}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
