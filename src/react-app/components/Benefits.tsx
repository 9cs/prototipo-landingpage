import { motion } from 'framer-motion';
import { 
  Globe, 
  Brain, 
  MapPin 
} from 'lucide-react';
import { useLanguage } from '@/shared/LanguageContext';

export default function Benefits() {
  const { t } = useLanguage();
  
  const benefits = [
    {
      icon: Globe,
      title: t('noInstallTitle'),
      description: t('noInstallDesc'),
      color: "text-[#0A4A73]"
    },
    {
      icon: Brain,
      title: t('aiReportsTitle'),
      description: t('aiReportsDesc'),
      color: "text-[#0A4A73]"
    },
    {
      icon: MapPin,
      title: t('lessTravelTitle'),
      description: t('lessTravelDesc'),
      color: "text-[#0A4A73]"
    }
  ];

  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-6 tracking-tight">
            {t('benefitsTitle')}
          </h2>
          <p className="font-inter text-lg text-[#1F2937] max-w-3xl mx-auto leading-relaxed">
            {t('benefitsSubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-[#E2E8F0]"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A4A73]/10 to-[#0A4A73]/20 mb-6">
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              
              <h3 className="font-space-grotesk font-semibold text-xl text-[#0F172A] mb-3">
                {benefit.title}
              </h3>
              
              <p className="font-inter text-[#1F2937] leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
