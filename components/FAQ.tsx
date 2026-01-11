import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Language, translations } from '../translations';

interface FAQProps {
  language: Language;
}

const FAQ: React.FC<FAQProps> = ({ language }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = translations[language].faq;

  return (
    <div className="bg-surface border-t border-ink">
      <div className="max-w-[1920px] mx-auto">
        <div className="border-b border-ink px-8 md:px-16 py-20 bg-paper">
            <span className="text-ink-light font-mono font-bold tracking-widest text-xs uppercase mb-4 block">06 / F.A.Q.</span>
            <div className="flex items-center gap-4 mb-4">
                <HelpCircle size={40} className="text-ink" />
                <h2 className="text-4xl md:text-6xl font-bold uppercase font-display leading-none text-ink">
                {t.title}
                </h2>
            </div>
            <p className="font-mono text-sm uppercase tracking-widest text-ink-light">
                {t.subtitle}
            </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="border border-ink">
                {t.items.map((item, index) => (
                    <div key={index} className="border-b border-ink last:border-b-0">
                        <button 
                            className={`w-full text-left p-8 md:p-10 flex justify-between items-center transition-colors group ${openIndex === index ? 'bg-ink text-paper' : 'bg-surface text-ink hover:bg-paper'}`}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <span className="text-xl md:text-2xl font-bold uppercase pr-8 leading-tight">
                                {item.q}
                            </span>
                            <span className="flex-shrink-0">
                                {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                            </span>
                        </button>
                        
                        {openIndex === index && (
                            <div className="p-8 md:p-10 bg-paper border-t border-ink animate-fade-in">
                                <p className="text-lg md:text-xl leading-relaxed font-medium text-ink-light">
                                    {item.a}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;