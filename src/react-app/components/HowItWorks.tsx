import { motion } from 'framer-motion';
import { Camera, Upload, FileSearch, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/shared/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "01",
      title: t('captureTitle'),
      description: t('captureDesc'),
      icon: Camera,
      color: "from-[#14B8C4] to-[#0A4A73]"
    },
    {
      number: "02", 
      title: t('uploadTitle'),
      description: t('uploadDesc'),
      icon: Upload,
      color: "from-[#0A4A73] to-[#14B8C4]"
    },
    {
      number: "03",
      title: t('analyzeTitle'),
      description: t('analyzeDesc'),
      icon: FileSearch,
      color: "from-[#14B8C4] to-[#0A4A73]"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-6 tracking-tight">
            {t('howItWorksTitle')}
          </h2>
          <p className="font-inter text-lg text-[#1F2937] max-w-3xl mx-auto leading-relaxed">
            {t('howItWorksSubtitle')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Steps */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} text-white font-space-grotesk font-bold text-2xl mb-4 shadow-lg`}>
                    {step.number}
                  </div>
                  <step.icon className={`w-8 h-8 mx-auto text-[#0A4A73]`} />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-space-grotesk font-semibold text-2xl text-[#0F172A] mb-4">
                    {step.title}
                  </h3>
                  <p className="font-inter text-[#1F2937] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-6 xl:-right-8">
                    <ArrowRight className="w-6 h-6 text-[#E2E8F0]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Visual Flow Indicator (mobile) */}
          <div className="lg:hidden flex justify-center items-center space-x-4 mt-12">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#14B8C4]" />
                {index < steps.length - 1 && (
                  <div className="w-8 h-px bg-[#E2E8F0] mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a 
            href="https://vertex4d.ai/login" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#0A4A73] text-white font-inter font-semibold rounded-2xl hover:bg-[#083C5C] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {t('startNow')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
