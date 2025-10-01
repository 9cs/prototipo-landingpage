import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Factory, 
  Zap, 
  Mountain, 
  Landmark,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from '@/shared/LanguageContext';

export default function Solutions() {
  const [activeTab, setActiveTab] = useState('obras');
  const { t } = useLanguage();

  const sectors = [
    {
      id: 'obras',
      name: t('obrasName'),
      icon: Building2,
      color: 'text-[#0A4A73]',
      bgColor: 'bg-[#0A4A73]/10',
      content: {
        problems: t('obrasProblems') as unknown as string[],
        solutions: t('obrasSolutions') as unknown as string[],
        kpis: t('obrasKpis') as unknown as string[]
      }
    },
    {
      id: 'industria',
      name: t('industriaName'),
      icon: Factory,
      color: 'text-[#14B8C4]',
      bgColor: 'bg-[#14B8C4]/10',
      content: {
        problems: t('industriaProblems') as unknown as string[],
        solutions: t('industriaSolutions') as unknown as string[],
        kpis: t('industriaKpis') as unknown as string[]
      }
    },
    {
      id: 'utilities',
      name: t('utilitiesName'), 
      icon: Zap,
      color: 'text-[#0A4A73]',
      bgColor: 'bg-[#0A4A73]/10',
      content: {
        problems: t('utilitiesProblems') as unknown as string[],
        solutions: t('utilitiesSolutions') as unknown as string[],
        kpis: t('utilitiesKpis') as unknown as string[]
      }
    },
    {
      id: 'mineracao',
      name: t('mineracaoName'),
      icon: Mountain,
      color: 'text-[#14B8C4]',
      bgColor: 'bg-[#14B8C4]/10',
      content: {
        problems: t('mineracaoProblems') as unknown as string[],
        solutions: t('mineracaoSolutions') as unknown as string[],
        kpis: t('mineracaoKpis') as unknown as string[]
      }
    },
    {
      id: 'patrimonio',
      name: t('patrimonioName'),
      icon: Landmark,
      color: 'text-[#0A4A73]',
      bgColor: 'bg-[#0A4A73]/10',
      content: {
        problems: t('patrimonioProblems') as unknown as string[],
        solutions: t('patrimonioSolutions') as unknown as string[],
        kpis: t('patrimonioKpis') as unknown as string[]
      }
    }
  ];

  const activeSector = sectors.find(s => s.id === activeTab);

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] mb-6 tracking-tight">
            {t('solutionsTitle')}
          </h2>
          <p className="font-inter text-lg text-[#1F2937] max-w-3xl mx-auto leading-relaxed">
            {t('solutionsSubtitle')}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {sectors.map((sector) => (
            <button
              key={sector.id}
              onClick={() => setActiveTab(sector.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-inter font-medium transition-all duration-300 ${
                activeTab === sector.id
                  ? `${sector.bgColor} ${sector.color} shadow-lg`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <sector.icon className="w-5 h-5" />
              <span>{sector.name}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {activeSector && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Problems */}
            <div className="bg-rose-50 rounded-2xl p-8 border border-rose-100">
              <h3 className="font-space-grotesk font-semibold text-xl text-rose-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-rose-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-rose-700 font-bold">!</span>
                </div>
{t('currentChallenges')}
              </h3>
              <ul className="space-y-4">
                {activeSector.content.problems.map((problem, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="font-inter text-rose-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className={`${activeSector.bgColor} rounded-2xl p-8 border ${activeSector.color.replace('text-', 'border-')}/20`}>
              <h3 className={`font-space-grotesk font-semibold text-xl ${activeSector.color} mb-6 flex items-center`}>
                <activeSector.icon className="w-8 h-8 mr-3" />
{t('howWeSolve')}
              </h3>
              <ul className="space-y-4">
                {activeSector.content.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className={`w-5 h-5 ${activeSector.color} mt-0.5 flex-shrink-0`} />
                    <span className={`font-inter ${activeSector.color.replace('text-', 'text-').replace('/10', '/80')}`}>
                      {solution}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* KPIs */}
            <div className="bg-green-50 rounded-2xl p-8 border border-green-100">
              <h3 className="font-space-grotesk font-semibold text-xl text-green-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center mr-3">
                  <ArrowRight className="w-4 h-4 text-green-700" />
                </div>
{t('expectedResults')}
              </h3>
              <ul className="space-y-4">
                {activeSector.content.kpis.map((kpi, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="font-space-grotesk font-bold text-2xl text-green-600">
                      {kpi.split(' ')[0]}
                    </div>
                    <span className="font-inter text-green-700">
                      {kpi.split(' ').slice(1).join(' ')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-[#14B8C4] text-white font-inter font-semibold rounded-2xl hover:bg-[#0F9BA6] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {t('scheduleDiagnosis')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
