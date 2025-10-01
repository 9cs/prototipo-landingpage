import { motion } from 'framer-motion';
import { useLanguage } from '@/shared/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  const videos = [
    {
      src: "https://www.youtube.com/embed/mywlqLGfJSk?autoplay=1&mute=1&loop=1&playlist=mywlqLGfJSk&controls=0&modestbranding=1&showinfo=0",
      title: t('tour360Title')
    },
    {
      src: "https://www.youtube.com/embed/RCB_pgFk8SI?autoplay=1&mute=1&loop=1&playlist=RCB_pgFk8SI&controls=0&modestbranding=1&showinfo=0", 
      title: t('model3dTitle')
    },
    {
      src: "https://www.youtube.com/embed/rfJCJpUA8o8?autoplay=1&mute=1&loop=1&playlist=rfJCJpUA8o8&controls=0&modestbranding=1&showinfo=0",
      title: t('aiReportTitle')
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
            {t('galleryTitle')}
          </h2>
          <p className="font-inter text-lg text-[#1F2937] max-w-3xl mx-auto leading-relaxed">
            {t('gallerySubtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-video relative overflow-hidden">
                <iframe
                  src={video.src}
                  className="w-full h-full object-cover"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-space-grotesk font-semibold text-white text-lg">
                    {video.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="font-space-grotesk font-bold text-3xl text-[#0A4A73] mb-2">−60%</div>
            <div className="font-inter text-[#1F2937]">{t('travelReduction')}</div>
          </div>
          <div>
            <div className="font-space-grotesk font-bold text-3xl text-[#14B8C4] mb-2">+70%</div>
            <div className="font-inter text-[#1F2937]">{t('reportSpeed')}</div>
          </div>
          <div>
            <div className="font-space-grotesk font-bold text-3xl text-[#0A4A73] mb-2">100%</div>
            <div className="font-inter text-[#1F2937]">{t('traceability')}</div>
          </div>
          <div>
            <div className="font-space-grotesk font-bold text-3xl text-[#14B8C4] mb-2">↑</div>
            <div className="font-inter text-[#1F2937]">{t('compliance')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
