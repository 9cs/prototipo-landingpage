import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/shared/LanguageContext';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Simple section detection for active nav item
      const sections = ['hero', 'solutions', 'pricing', 'faq', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'solutions', label: t('solutions') },
    { id: 'pricing', label: t('pricing') },
    { id: 'faq', label: t('faq') },
    { id: 'contact', label: t('contact') },
  ];

  const languages = [
    { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
    { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
    { code: 'en-US', name: 'English', flag: '🇺🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-4 right-4 z-50 bg-white/70 backdrop-blur-lg shadow-sm rounded-lg border border-gray-200"
    >
      <div className="w-full px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/vertex-light.png"
              alt="Vertex4D"
              className="h-8 w-auto lg:h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-inter font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-[#0A4A73]'
                    : 'text-gray-700 hover:text-[#0A4A73]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center px-4 py-2 border border-[#0A4A73] text-[#0A4A73] font-inter font-medium rounded-lg hover:bg-[#0A4A73] hover:text-white transition-all duration-200"
            >
              {t('scheduleCall')}
            </button>
            <a 
              href="https://vertex4d.ai/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-[#0A4A73] text-white font-inter font-medium rounded-lg hover:bg-[#083C5C] transition-all duration-200 shadow-sm"
            >
              {t('accessFree')}
            </a>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                <span className="text-lg">{currentLanguage.flag}</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>
              
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as any);
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 ${
                        language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-inter text-sm">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
