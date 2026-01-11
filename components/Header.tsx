import React, { useState, useEffect } from 'react';
import { User } from '../types';
import { Menu, X, UserCircle, LogIn, Globe, Moon, Sun } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeaderProps {
  currentUser: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentUser, 
  onOpenAuth, 
  onLogout, 
  onNavigate, 
  currentPage,
  language,
  setLanguage,
  darkMode,
  toggleTheme
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Ticker Logic
  const [tickerIndex, setTickerIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  const tickerMessages = language === 'zh' ? [
    "專為香港在職醫護人員 / 碩士生服務",
    "24/7 全天候學術支援 • 絕密保密",
    "100% 真人撰寫 • 拒絕 AI 生成",
    "已有超過 500+ 成功畢業案例"
  ] : [
    "Exclusive for HK Nurses & Master Students",
    "24/7 Academic Support • Strictly Confidential",
    "100% Human Writing • No AI Content",
    "Over 500+ Successful Graduation Cases"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);

      // Scroll Spy Logic for One-Page - Updated Sequence with 'team'
      if (currentPage === 'home') {
        // Order: Home -> About -> Services -> Team -> Testimonials -> Calculator -> FAQ
        const sections = ['home', 'about', 'services', 'team', 'testimonials', 'calculator', 'faq'];
        let current = 'home';
        
        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                // Offset of 150px for header
                if (scrollY >= (element.offsetTop - 150)) {
                    current = section;
                }
            }
        }
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setTickerIndex((prev) => (prev + 1) % tickerMessages.length);
        setFade(true); 
      }, 500); 
    }, 4000); 

    return () => clearInterval(interval);
  }, [tickerMessages.length]);

  const t = translations[language].nav;

  // Updated Navigation Order with Team
  const navItems = [
    { label: t.about, value: 'about' },
    { label: t.services, value: 'services' },
    { label: t.team, value: 'team' },
    { label: t.testimonials, value: 'testimonials' },
    { label: t.calculator, value: 'calculator' },
    { label: t.faq, value: 'faq' },
  ];

  const handleNavClick = (value: string) => {
    if (value === 'dashboard' || value === 'disclaimer') {
        // These are separate pages/views
        onNavigate(value);
    } else {
        // Ensure we are on the main page first
        if (currentPage !== 'home') {
             onNavigate('home');
             // Wait for render then scroll
             setTimeout(() => {
                scrollToSection(value);
             }, 100);
        } else {
            scrollToSection(value);
        }
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80, // Offset for fixed header
            behavior: 'smooth'
        });
    } else if (id === 'home') {
         window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 border-b border-ink ${isScrolled ? 'bg-paper/95 backdrop-blur-md py-2 shadow-sm' : 'bg-paper py-4'}`}>
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <div 
            className="flex-shrink-0 cursor-pointer group flex items-center gap-4" 
            onClick={() => handleNavClick('home')}
          >
            <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-black tracking-tighter text-ink leading-none">
                    HOMEWORK<span className="font-light">TERMINATOR</span>.
                </h1>
                {/* Fading Status Text */}
                <div className="h-4 overflow-hidden relative mt-1">
                    <p className={`text-[10px] font-mono text-ink-light uppercase transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                        {tickerMessages[tickerIndex]}
                    </p>
                </div>
            </div>
          </div>

          {/* Desktop Nav */}
          {currentPage === 'home' && (
            <nav className="hidden lg:flex items-center gap-6 bg-surface px-6 py-2 border border-ink rounded-full shadow-sm">
                {navItems.map((item) => (
                <button
                    key={item.value}
                    onClick={() => handleNavClick(item.value)}
                    className={`text-sm font-bold uppercase tracking-wide transition-all hover:text-accent ${
                    activeSection === item.value 
                        ? 'text-ink underline underline-offset-4 decoration-2' 
                        : 'text-ink-light'
                    }`}
                >
                    {item.label}
                </button>
                ))}
            </nav>
          )}

          {/* Controls Section */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="p-2 text-ink hover:text-accent border border-ink rounded hover:bg-surface transition-all"
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
                {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-xs font-bold text-ink hover:text-accent transition-colors border border-ink px-3 py-2 hover:bg-ink hover:text-paper"
            >
                <Globe size={14} />
                {language === 'en' ? 'EN' : '繁'}
            </button>

            {currentUser ? (
              <div className="flex items-center gap-4 ml-2">
                <button 
                  onClick={() => handleNavClick('dashboard')}
                  className={`text-sm font-bold flex items-center gap-2 border-b border-transparent ${currentPage === 'dashboard' ? 'text-accent border-accent' : 'text-ink hover:text-accent hover:border-ink'}`}
                >
                  <UserCircle size={20} />
                  {t.console}
                </button>
                <button 
                  onClick={onLogout} 
                  className="text-xs text-ink-light hover:text-red-500 transition-colors"
                >
                  {t.logout}
                </button>
              </div>
            ) : (
              // Login / Register Button
              <button
                onClick={onOpenAuth}
                className="ml-2 group relative px-6 py-2 bg-ink text-paper font-bold uppercase text-sm hover:bg-accent hover:text-white transition-colors shadow-md"
              >
                <div className="flex items-center gap-2">
                   {t.login} <LogIn size={16} /> 
                </div>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
             <button
                onClick={toggleTheme}
                className="p-1 text-ink"
            >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleLanguage} className="text-xs font-bold text-ink border border-ink px-2 py-1">
                 {language === 'en' ? 'EN' : '繁'}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-ink p-1">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden bg-paper fixed inset-0 z-40 pt-28 px-8 animate-fade-in border-t border-ink">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNavClick(item.value)}
                className={`text-2xl font-black uppercase text-left hover:text-accent transition-colors border-b border-ink-light/20 pb-4 ${activeSection === item.value && currentPage === 'home' ? 'text-accent' : 'text-ink'}`}
              >
                {item.label}
              </button>
            ))}
             {currentUser ? (
                 <div className="space-y-4 pt-4">
                  <button 
                    onClick={() => handleNavClick('dashboard')}
                    className="text-xl font-medium text-ink text-left flex items-center gap-2"
                  >
                    <UserCircle size={24} /> {t.console}
                  </button>
                  <button 
                    onClick={onLogout}
                    className="text-lg font-medium text-ink-light text-left"
                  >
                    {t.logout}
                  </button>
                 </div>
               ) : (
                  <button
                    onClick={() => {
                      onOpenAuth();
                      setIsMenuOpen(false);
                    }}
                    className="w-full py-4 bg-ink text-paper font-bold text-lg mt-4 hover:bg-accent"
                  >
                    {t.login}
                  </button>
               )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;