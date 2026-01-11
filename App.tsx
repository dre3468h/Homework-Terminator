import React, { useState, useEffect } from 'react';
import { User, UserRole, ServiceItem } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Dashboard from './components/Dashboard';
import FAQ from './components/FAQ';
import Disclaimer from './components/Disclaimer';
import QuoteCalculator from './components/QuoteCalculator';
import TeamSection from './components/TeamSection';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Zap, Feather, MessageSquare, Award, Crown, X } from 'lucide-react';
import { Language, translations } from './translations';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState('home'); // 'home' covers main scroll page. 'dashboard', 'disclaimer' are views.
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('zh');
  const [darkMode, setDarkMode] = useState(false);
  
  // Info Modal State for Footer Links
  const [infoModal, setInfoModal] = useState<{isOpen: boolean, title: string, content: string}>({
    isOpen: false,
    title: '',
    content: ''
  });

  const t = translations[language];

  // Theme Toggler logic
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Scroll Animation Logic
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, [currentPage]);

  const handleLogin = (role: UserRole, name: string) => {
    setUser({
      id: 'user-' + Math.random().toString(36).substr(2, 9),
      name: name,
      email: 'user@example.com',
      role: role
    });
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };
  
  const handleShowInfo = (title: string, content: string) => {
    setInfoModal({ isOpen: true, title, content });
  };

  // --- Components ---

  const HeroSection = () => (
    <div id="home" className="relative min-h-[90vh] flex items-center bg-paper pt-32 md:pt-40 border-b border-ink overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.1]" style={{ backgroundImage: 'linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 w-full relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="col-span-1 lg:col-span-7 reveal active space-y-8 relative">
            
            <div className="inline-flex items-center gap-3 border border-ink bg-surface px-4 py-2 shadow-sm relative z-10">
               <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
               <span className="text-xs font-bold uppercase tracking-widest text-ink">{t.hero.est}</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-ink leading-[0.9] tracking-tighter relative z-10">
              {t.hero.title_1}<br/>
              <span className="text-ink-light font-light italic">{t.hero.title_2}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-ink-light max-w-xl leading-relaxed font-normal border-l-4 border-accent pl-6 relative z-10">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 relative z-10">
              <a 
                href="https://wa.me/85297723792"
                target="_blank"
                className="bg-ink text-paper px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-colors shadow-lg flex items-center justify-center gap-3 group"
              >
                {t.hero.cta_primary} 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                 onClick={() => {
                     const el = document.getElementById('services');
                     if(el) el.scrollIntoView({ behavior: 'smooth' });
                 }}
                className="bg-transparent text-ink border border-ink px-10 py-5 font-bold text-sm uppercase tracking-widest hover:bg-surface transition-colors"
              >
                {t.hero.cta_secondary}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex gap-8 pt-6 relative z-10">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-ink" size={18} />
                    <span className="text-xs font-bold text-ink-light uppercase">No AI</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-ink" size={18} />
                    <span className="text-xs font-bold text-ink-light uppercase">Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-ink" size={18} />
                    <span className="text-xs font-bold text-ink-light uppercase">Native Writers</span>
                </div>
            </div>
          </div>

          {/* Right Side Visual - The "File/Document" Look */}
          <div className="col-span-1 lg:col-span-5 relative reveal active delay-200 hidden lg:block">
             <div className="relative z-10 bg-surface p-8 border border-ink shadow-[10px_10px_0px_0px_var(--color-ink)]">
                 <div className="flex justify-between items-start mb-8 border-b border-ink pb-4">
                     <div>
                         <h3 className="font-bold text-2xl text-ink uppercase">{t.hero.priority_title}</h3>
                         <p className="text-xs text-accent uppercase tracking-widest font-mono mt-1">Status: High Demand</p>
                     </div>
                     <Zap className="text-ink" size={32} />
                 </div>
                 <p className="text-ink-light text-lg leading-relaxed mb-8 font-normal">
                    {t.hero.priority_text}
                 </p>
                 <div className="flex justify-between items-center bg-paper p-4 border border-ink">
                    <span className="text-xs font-bold text-ink-light uppercase tracking-widest">{t.hero.capacity}</span>
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <span className="text-sm font-bold text-red-600 font-mono tracking-widest">{t.hero.full}</span>
                    </div>
                 </div>

                 {/* Priority Access Form */}
                 <div className="mt-8 pt-6 border-t border-ink/20">
                    <p className="text-xs font-bold uppercase mb-4 text-ink tracking-widest flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        {t.hero.priority_form.title}
                    </p>
                    <div className="space-y-3">
                        <input 
                            type="email" 
                            placeholder={t.hero.priority_form.email}
                            className="w-full bg-paper border border-ink p-3 text-sm focus:outline-none focus:border-accent placeholder-ink-light/50 transition-colors"
                        />
                        <input 
                            type="tel" 
                            placeholder={t.hero.priority_form.phone}
                            className="w-full bg-paper border border-ink p-3 text-sm focus:outline-none focus:border-accent placeholder-ink-light/50 transition-colors"
                        />
                        <button className="w-full bg-ink text-paper py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all shadow-sm">
                            {t.hero.priority_form.submit}
                        </button>
                    </div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutSection = () => (
    <div id="about" className="min-h-screen bg-paper flex items-center justify-center py-32 md:py-40 px-6 border-b border-ink">
         <div className="max-w-5xl w-full bg-surface p-12 md:p-16 reveal relative border border-ink shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-ink"></div>
            <span className="text-ink-light font-mono font-bold tracking-widest text-xs uppercase mb-4 block">01 / ABOUT</span>
            <div className="flex items-center gap-6 mb-10">
                <Feather className="w-12 h-12 text-ink" />
                <h2 className="text-3xl md:text-4xl font-black text-ink uppercase">{t.about.title}</h2>
            </div>
            <div className="space-y-8 text-lg text-ink-light leading-loose">
                <p>
                   {t.about.p1}
                </p>
                <p>
                   {t.about.p2}
                </p>
                <div className="bg-paper p-8 border-l-4 border-accent mt-8 italic text-ink font-serif relative">
                   "{t.about.p3}"
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-ink-light/20 mt-8">
                    {[
                        { num: "4", suffix: "+", label: "Years Exp." },
                        { num: "500", suffix: "+", label: "Projects" },
                        { num: "98", suffix: "%", label: "Pass Rate" },
                        { num: "24/7", suffix: "", label: "Support" }
                    ].map((stat, i) => (
                        <div key={i}>
                            <div className="text-4xl font-black text-ink font-display">{stat.num}<span className="text-accent text-2xl">{stat.suffix}</span></div>
                            <div className="text-xs text-ink-light uppercase tracking-widest mt-2">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
         </div>
    </div>
  );

  const ServicesSection = () => (
    <div id="services" className="bg-surface py-32 md:py-40 relative border-b border-ink">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal border-b-2 border-ink pb-6">
            <div className="max-w-2xl">
              <span className="text-ink-light font-mono font-bold tracking-widest text-xs uppercase mb-3 block">02 / {t.services.catalog}</span>
              <h2 className="text-4xl md:text-5xl font-black text-ink uppercase">
                {t.services.title}
              </h2>
            </div>
            <p className="text-ink-light text-right mt-4 md:mt-0 italic font-serif">
              {t.services.version}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-ink">
          {t.services.items.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-surface p-10 border-r border-b border-ink hover:bg-paper transition-all duration-300 group cursor-default reveal"
              style={{transitionDelay: `${idx * 100}ms`}}
            >
              <div className="flex justify-between items-start mb-8">
                  <span className="text-xl font-bold text-ink-light font-mono">0{idx + 1}</span>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity -rotate-45 group-hover:rotate-0 transform duration-300 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-ink uppercase leading-none min-h-[3rem]">{service.title}</h3>
              <p className="text-ink-light mb-8 leading-relaxed h-24 text-sm">{service.desc}</p>
              
              <button 
                onClick={() => isAuthModalOpen || user ? null : setIsAuthModalOpen(true)}
                className={`w-full py-3 font-bold text-xs uppercase tracking-widest border border-ink flex items-center justify-center gap-2 transition-all ${
                    user ? 'bg-ink text-paper' : 'bg-transparent text-ink hover:bg-ink hover:text-paper'
                }`}
              >
                 {user ? service.price : t.services.login_view}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const TestimonialsSection = () => (
    <div id="testimonials" className="bg-surface py-32 md:py-40 relative border-b border-ink">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
            <div className="max-w-2xl">
                <span className="text-ink-light font-mono font-bold tracking-widest text-xs uppercase mb-3 block">04 / FEEDBACK</span>
                <h2 className="text-4xl md:text-5xl font-black text-ink uppercase">{t.testimonials.title}</h2>
            </div>
            <div className="hidden md:block">
                <Award size={48} className="text-ink" />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
                { 
                    name: "Sarah (RN)", 
                    role: "Master of Nursing", 
                    text: "本來趕唔切交份 Reflection，好彩有你哋！真係好專業，跟着個 Rubric 寫，最後拿咗 A-。真心推薦畀還要返 Shift 嘅姑娘。" 
                },
                { 
                    name: "Jason", 
                    role: "MBA Student", 
                    text: "份 Case Study 數據分析做得好詳盡，完全係我要嘅野。幫我慳返好多時間專心做野。最緊要係準時交貨，無甩拖。" 
                },
                { 
                    name: "Michelle", 
                    role: "Social Work", 
                    text: "客服秒回，完全無 AI 成分，過到 Turnitin。之前試過第二間中伏，呢間真係神仙救命，以後 Assignment 靠晒你哋。" 
                }
             ].map((tr, i) => (
                <div key={i} className="bg-paper p-8 border border-ink relative reveal group hover:shadow-[5px_5px_0px_0px_var(--color-ink)] transition-shadow">
                    <div className="absolute -top-3 -right-3 bg-surface border border-ink p-2 rounded-full z-10">
                        <MessageSquare size={16} className="text-ink" />
                    </div>
                    <div className="flex gap-1 text-accent mb-6">
                        {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" stroke="none" />)}
                    </div>
                    <p className="text-ink mb-8 leading-relaxed text-sm font-medium">"{tr.text}"</p>
                    <div className="flex items-center gap-4 pt-6 border-t border-ink-light/20">
                        <div className="w-10 h-10 bg-ink flex items-center justify-center font-bold text-paper text-xs rounded-full">
                            {tr.name.charAt(0)}
                        </div>
                        <div>
                            <div className="font-bold text-sm text-ink">{tr.name}</div>
                            <div className="text-xs text-ink-light uppercase">{tr.role}</div>
                        </div>
                    </div>
                </div>
             ))}
        </div>
      </div>
    </div>
  );

  
  const FAQSection = () => (
      <div id="faq" className="bg-surface py-32 md:py-40 border-b border-ink">
          <FAQ language={language} />
      </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-paper font-sans text-ink transition-colors duration-300">
      <Header 
        currentUser={user} 
        onOpenAuth={() => setIsAuthModalOpen(true)} 
        onLogout={handleLogout}
        onNavigate={setCurrentPage}
        currentPage={currentPage}
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <main className="flex-grow">
        {/* Main Single Page Scroll Flow */}
        {currentPage === 'home' && (
          <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <TeamSection language={language} />
            <TestimonialsSection />
            <div id="calculator">
                <QuoteCalculator language={language} />
            </div>
            <FAQSection />
          </>
        )}

        {/* Separate View Pages */}
        {currentPage === 'disclaimer' && <Disclaimer language={language} />}
        {currentPage === 'dashboard' && user && (
          <div className="pt-20">
            <Dashboard user={user} language={language} />
          </div>
        )}
      </main>

      <Footer language={language} onLinkClick={handleShowInfo} onNavigate={setCurrentPage} />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLogin={handleLogin} 
        language={language}
      />
      
      {/* Information Modal for Footer Links */}
      {infoModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
             <div className="bg-surface max-w-lg w-full p-8 border-2 border-ink shadow-2xl relative max-h-[90vh] overflow-y-auto">
                <button 
                  onClick={() => setInfoModal({...infoModal, isOpen: false})}
                  className="absolute top-4 right-4 p-2 hover:bg-paper transition-colors text-ink"
                >
                    <X size={20} />
                </button>
                <h3 className="text-xl font-black uppercase mb-4 text-ink pr-8">{infoModal.title}</h3>
                <div className="h-0.5 w-12 bg-accent mb-6"></div>
                <div className="text-ink-light leading-relaxed whitespace-pre-wrap font-sans text-sm">
                    {infoModal.content}
                </div>
                <button 
                   onClick={() => setInfoModal({...infoModal, isOpen: false})}
                   className="mt-8 w-full bg-ink text-paper py-3 font-bold text-xs uppercase hover:bg-accent transition-colors"
                >
                    {language === 'zh' ? '關閉' : 'Close'}
                </button>
             </div>
        </div>
      )}

      {/* Floating CTA */}
      <a 
        href="https://wa.me/85297723792" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-ink text-paper p-4 rounded-full shadow-2xl hover:bg-accent transition-all hover:-translate-y-1 animate-pulse flex items-center justify-center border-2 border-surface"
      >
         <span className="font-bold text-xs tracking-widest flex items-center gap-2 uppercase">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-5 h-5 filter invert dark:filter-none" />
            WhatsApp Quote
         </span>
      </a>
    </div>
  );
};

export default App;