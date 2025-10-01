import { motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/shared/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  
  const footerLinks = [
    {
      title: t('product'),
      links: [
        { name: t('features'), href: "#" },
        { name: t('plans'), href: "#pricing" }
      ]
    },
    {
      title: t('solutions'),
      links: [
        { name: t('construction'), href: "#solutions" },
        { name: t('industry'), href: "#solutions" },
        { name: t('utilities'), href: "#solutions" },
        { name: t('mining'), href: "#solutions" }
      ]
    }
  ];

  const legalLinks = [
    { name: t('termsOfUse'), href: "#" },
    { name: t('privacyPolicy'), href: "#" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn", 
      icon: Linkedin,
      href: "https://linkedin.com/company/vertex4d",
      color: "hover:text-[#0077B5]"
    },
    {
      name: "Instagram",
      icon: Instagram, 
      href: "https://instagram.com/vertex4d",
      color: "hover:text-[#E4405F]"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:contato@vertex4d.com",
      color: "hover:text-[#14B8C4]"
    }
  ];

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src="/images/vertex-light.png"
                  alt="Vertex4D"
                  className="h-10 w-auto mb-6"
                />
                <p className="font-inter text-slate-300 leading-relaxed mb-6 max-w-sm">
                  {t('footerDescription')}
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-[#14B8C4] flex-shrink-0" />
                    <span className="font-inter text-sm text-slate-300">
                      Salvador, BA - Brasil
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-[#14B8C4] flex-shrink-0" />
                    <span className="font-inter text-sm text-slate-300">
                      +55 71 99999-9999
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-[#14B8C4] flex-shrink-0" />
                    <span className="font-inter text-sm text-slate-300">
                      contato@vertex4d.com
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={String(section.title)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-space-grotesk font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={String(link.name)}>
                      <a
                        href={link.href}
                        className="font-inter text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              {legalLinks.map((link) => (
                <a
                  key={String(link.name)}
                  href={link.href}
                  className="font-inter text-slate-400 hover:text-slate-300 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-slate-400 transition-colors duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="font-inter text-slate-400 text-sm">
              © {new Date().getFullYear()} Vertex4D. {t('allRightsReserved')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
