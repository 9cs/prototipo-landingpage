import { motion } from 'framer-motion';
import { Check, Brain } from 'lucide-react';
import { useLanguage } from '@/shared/LanguageContext';

export default function Pricing() {
  const { t, language } = useLanguage();
  
  // Função para obter preços baseado no idioma
  const getPrice = (planType: 'free' | 'basic' | 'pro') => {
    if (language === 'pt-BR') {
      switch (planType) {
        case 'free': return "R$ 0,00";
        case 'basic': return "R$ 59,00";
        case 'pro': return "R$ 399,00";
      }
    } else if (language === 'es-ES') {
      // Para espanhol, usar euro
      switch (planType) {
        case 'free': return "€0.00";
        case 'basic': return "€11.00";
        case 'pro': return "€75.00";
      }
    } else {
      // Para inglês, usar dólar
      switch (planType) {
        case 'free': return "$0.00";
        case 'basic': return "$12.00";
        case 'pro': return "$80.00";
      }
    }
  };
  
  const plans = [
    {
      name: t('freePlan'),
      price: getPrice('free'),
      period: t('periodMonth'),
      description: t('freePlanDescription'),
      features: t('freePlanFeatures') as unknown as string[],
      buttonText: t('currentPlan'),
      buttonStyle: "bg-gray-300 text-gray-500 cursor-not-allowed",
      popular: false,
      current: true
    },
    {
      name: t('basicPlan'),
      price: getPrice('basic'),
      period: t('periodMonth'),
      description: t('basicPlanDescription'),
      features: t('basicPlanFeatures') as unknown as string[],
      buttonText: t('subscribeNow'),
      buttonStyle: "bg-white text-[#0A4A73] hover:bg-[#0A4A73] hover:text-white border-2 border-[#0A4A73]",
      popular: true,
      current: false,
      badges: [t('mostPopular'), t('recommended')]
    },
    {
      name: t('proPlan'), 
      price: getPrice('pro'),
      period: t('periodMonth'),
      description: t('proPlanDescription'),
      features: t('proPlanFeatures') as unknown as string[],
      buttonText: t('subscribeNow'),
      buttonStyle: "bg-[#0A4A73] text-white hover:bg-[#083C5C]",
      popular: false,
      current: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-6 tracking-tight">
            {t('pricingTitle')}
          </h2>
          <p className="font-inter text-lg text-[#1F2937] max-w-3xl mx-auto leading-relaxed">
            {t('pricingSubtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-2 ${
                plan.popular 
                  ? 'bg-[#0A4A73] text-white scale-105 border-[#0A4A73]' 
                  : 'bg-white border-[#0A4A73]'
              }`}
            >
              {/* Popular Badges */}
              {plan.badges && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {plan.badges.map((badge, badgeIndex) => (
                    <div key={badgeIndex} className={`px-3 py-1 rounded-full font-inter font-semibold text-xs ${
                      badge === t('mostPopular') 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-400 text-black'
                    }`}>
                      {badge}
                    </div>
                  ))}
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className={`font-space-grotesk font-bold text-xl mb-2 ${
                    plan.popular ? 'text-white' : 'text-[#0F172A]'
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`font-inter text-sm mb-4 ${
                    plan.popular ? 'text-gray-200' : 'text-[#1F2937]'
                  }`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className={`font-space-grotesk font-bold text-3xl ${
                      plan.popular ? 'text-white' : 'text-[#0A4A73]'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`font-inter ml-1 ${
                      plan.popular ? 'text-gray-200' : 'text-[#1F2937]'
                    }`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => {
                    const getIcon = () => {
                      // Verificar se a feature contém palavras relacionadas à IA em qualquer idioma
                      if (feature.toLowerCase().includes('ia ') || 
                          feature.toLowerCase().includes('ai:')) {
                        return <Brain className="w-5 h-5 mt-0.5 flex-shrink-0" />;
                      }
                      return <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />;
                    };

                    const getIconColor = () => {
                      const isAIFeature = feature.toLowerCase().includes('ia ') || 
                                        feature.toLowerCase().includes('ai:');
                      
                      if (plan.popular) {
                        return isAIFeature ? 'text-yellow-400' : 'text-white';
                      }
                      return isAIFeature ? 'text-[#14B8C4]' : 'text-[#14B8C4]';
                    };

                    return (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className={getIconColor()}>
                          {getIcon()}
                        </div>
                        <span className={`font-inter text-sm ${
                          plan.popular ? 'text-gray-200' : 'text-[#1F2937]'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA Button */}
                {plan.current ? (
                  <button
                    disabled={plan.current}
                    className={`w-full py-3 px-6 rounded-xl font-inter font-semibold transition-all duration-300 ${plan.buttonStyle} ${
                      !plan.current ? 'shadow-lg hover:shadow-xl hover:-translate-y-1' : ''
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                ) : (
                  <a
                    href="https://vertex4d.ai/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-6 rounded-xl font-inter font-semibold transition-all duration-300 ${plan.buttonStyle} ${
                      !plan.current ? 'shadow-lg hover:shadow-xl hover:-translate-y-1' : ''
                    } block text-center`}
                  >
                    {plan.buttonText}
                  </a>
                )}

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
