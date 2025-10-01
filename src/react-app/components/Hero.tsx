import { motion } from 'framer-motion';
import { Play, Upload, Brain, Share2 } from 'lucide-react';
import { useLanguage } from '@/shared/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Upload,
      text: t('uploadFeature'),
      image: "/images/envie.png"
    },
    {
      icon: Brain,
      text: t('aiFeature'),
      image: "/images/solicite.png"
    },
    {
      icon: Share2,
      text: t('shareFeature'),
      image: "/images/compartilhe.png"
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/mywlqLGfJSk?autoplay=1&mute=1&loop=1&playlist=mywlqLGfJSk&controls=0&modestbranding=1&showinfo=0"
          className="w-full h-full object-cover"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-900/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-space-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-12"
            >
              {t('heroTitle')}
            </motion.h1>



            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a 
                href="https://vertex4d.ai/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#14B8C4] text-white font-inter font-semibold rounded-2xl hover:bg-[#0F9BA6] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Play className="w-5 h-5 mr-2" />
                {t('accessFreeButton')}
              </a>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-inter font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                {t('talkToExpert')}
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-inter text-slate-300"
            >
              {Array.isArray(t('trustBadges')) && (t('trustBadges') as string[]).map((badge: string, index: number) => (
                <span key={index}>
                  {badge}
                  {index < (t('trustBadges') as string[]).length - 1 && <span>•</span>}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={feature.image}
                      alt=""
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div>
                      <feature.icon className="w-6 h-6 text-[#14B8C4] mb-2" />
                      <p className="font-inter text-white text-sm">{feature.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
