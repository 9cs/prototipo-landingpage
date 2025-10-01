import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLanguage } from '@/shared/LanguageContext';

export default function Calendly() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Carrega o script do Calendly se ainda não foi carregado
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);


  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="font-space-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-6 tracking-tight"
            dangerouslySetInnerHTML={{ __html: t('scheduleCallTitle') }}
          />
          <p className="font-inter text-lg text-[#1F2937] max-w-3xl mx-auto leading-relaxed">
            {t('scheduleCallSubtitle')}
          </p>
        </motion.div>

        {/* Calendly Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full bg-white rounded-2xl shadow-lg border border-[#E2E8F0] overflow-hidden"
        >
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/vertex4d-ai/30min" 
            style={{ minWidth: '100%', height: '700px' }}
          />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-inter text-[#1F2937] mb-6">
            {t('preferOtherChannel')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:contato@vertex4d.com"
              className="inline-flex items-center px-6 py-3 border border-[#0A4A73] text-[#0A4A73] font-inter font-medium rounded-xl hover:bg-[#0A4A73] hover:text-white transition-all duration-200"
            >
              contato@vertex4d.com
            </a>
            <a
              href="tel:+5511999999999"
              className="inline-flex items-center px-6 py-3 border border-[#0A4A73] text-[#0A4A73] font-inter font-medium rounded-xl hover:bg-[#0A4A73] hover:text-white transition-all duration-200"
            >
              +55 11 99999-9999
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
