import React, { useState, useEffect } from 'react';
import { Calculator, ShoppingBag, ArrowRight, Percent, Package } from 'lucide-react';
import { Language, translations } from '../translations';

interface QuoteCalculatorProps {
  language: Language;
}

const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ language }) => {
  const t = translations[language].calculator;

  // Single Quote State
  const [words, setWords] = useState(1500);
  const [subject, setSubject] = useState('general');
  const [urgency, setUrgency] = useState('normal');
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  // Bulk Quote State
  const [bulkQty, setBulkQty] = useState(20);
  const [bulkSubject, setBulkSubject] = useState('general'); 
  const [bulkSavings, setBulkSavings] = useState(0);
  const [bulkTotal, setBulkTotal] = useState(0);
  const [bulkOriginal, setBulkOriginal] = useState(0);

  // Constants
  const BASE_RATE_GENERAL = 0.7; // HKD per word
  const BASE_RATE_STEM = 1.0;    // HKD per word
  const SURCHARGE_SUPER_URGENT = 0.3; // +$0.3 per word
  const AVG_WORDS_PER_ASSIGNMENT = 2000; 

  useEffect(() => {
    // --- Single Quote Calculation ---
    // 1. Determine Base Rate
    let rate = BASE_RATE_GENERAL;
    if (subject === 'tech') rate = BASE_RATE_STEM;
    
    // 2. Add Surcharge for Super Urgent
    // Normal and Urgent are same price. Only Super Urgent adds cost.
    if (urgency === 'super_urgent') {
        rate += SURCHARGE_SUPER_URGENT;
    }

    const price = words * rate;
    setEstimatedPrice(Math.round(price));

    // --- Bulk Quote Calculation ---
    // Bulk assumes Standard deadline
    const bulkUnitRate = bulkSubject === 'tech' ? BASE_RATE_STEM : BASE_RATE_GENERAL;
    const singleUnitPrice = AVG_WORDS_PER_ASSIGNMENT * bulkUnitRate;
    
    const originalTotal = bulkQty * singleUnitPrice;
    let discountRate = 0;

    if (bulkQty >= 5) discountRate = 0.05;
    if (bulkQty >= 10) discountRate = 0.10;
    if (bulkQty >= 20) discountRate = 0.15;
    if (bulkQty >= 50) discountRate = 0.20;

    const discountAmount = originalTotal * discountRate;
    setBulkOriginal(originalTotal);
    setBulkSavings(discountAmount);
    setBulkTotal(originalTotal - discountAmount);

  }, [words, subject, urgency, bulkQty, bulkSubject]);

  return (
    <div className="bg-paper py-32 md:py-40 px-6 md:px-12 border-t border-ink">
       <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center reveal active">
             <span className="text-ink-light font-mono font-bold tracking-widest text-xs uppercase mb-4 block">04 / ESTIMATION</span>
             <h1 className="text-4xl md:text-6xl font-black text-ink uppercase mb-4">{t.title}</h1>
             <p className="text-ink-light uppercase tracking-widest">{t.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {/* Calculator 1: Single Assignment */}
             <div className="bg-surface border border-ink p-8 md:p-12 shadow-[8px_8px_0px_0px_var(--color-ink)] animate-fade-in h-full flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-4 mb-8 border-b border-ink-light/20 pb-4">
                        <div className="bg-ink text-paper p-3 rounded-none">
                            <Calculator size={24} />
                        </div>
                        <h2 className="text-xl font-bold uppercase text-ink">{t.single_title}</h2>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold uppercase text-ink-light mb-2">{t.labels.words}: {words}</label>
                            <input 
                            type="range" 
                            min="500" 
                            max="10000" 
                            step="100" 
                            value={words} 
                            onChange={(e) => setWords(parseInt(e.target.value))}
                            className="w-full h-2 bg-ink-light/20 rounded-lg appearance-none cursor-pointer accent-accent"
                            />
                            <div className="flex justify-between text-[10px] text-ink-light mt-1 font-mono">
                                <span>500</span>
                                <span>10000+</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold uppercase text-ink-light mb-2">{t.labels.subject}</label>
                                <select 
                                    value={subject} 
                                    onChange={(e) => setSubject(e.target.value)}
                                    className="w-full p-3 bg-paper border border-ink-light/30 focus:border-accent outline-none text-sm font-medium text-ink"
                                >
                                    {/* Removed price display from text */}
                                    <option value="general">{t.options.general}</option>
                                    <option value="special">{t.options.special}</option>
                                    <option value="tech">{t.options.tech}</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-ink-light mb-2">{t.labels.deadline}</label>
                                <select 
                                    value={urgency} 
                                    onChange={(e) => setUrgency(e.target.value)}
                                    className="w-full p-3 bg-paper border border-ink-light/30 focus:border-accent outline-none text-sm font-medium text-ink"
                                >
                                    <option value="normal">{t.options.normal}</option>
                                    <option value="urgent">{t.options.urgent}</option>
                                    <option value="super_urgent">{t.options.super_urgent} (+$0.3/w)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-ink bg-paper -mx-8 -mb-12 px-8 py-8 flex flex-col items-center text-center">
                    <span className="text-xs font-bold uppercase text-ink-light mb-2">{t.result.est_price}</span>
                    <div className="text-5xl font-black text-ink font-display mb-4">
                        <span className="text-lg align-top mr-1 font-sans font-normal text-ink-light">HKD</span>
                        {estimatedPrice.toLocaleString()}
                        <span className="text-lg align-bottom ml-1 font-sans font-normal text-ink-light">~ {(estimatedPrice * 1.1).toLocaleString()}</span>
                    </div>
                    <a href="https://wa.me/85297723792" target="_blank" className="w-full bg-ink text-paper py-4 font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-2">
                        {t.result.contact_btn} <ArrowRight size={16} />
                    </a>
                </div>
             </div>

             {/* Calculator 2: Bulk Package (Light Theme) */}
             <div className="bg-blue-50 dark:bg-surface text-blue-900 dark:text-ink border border-ink p-8 md:p-12 shadow-[8px_8px_0px_0px_var(--color-accent)] animate-fade-in relative overflow-hidden flex flex-col justify-between transition-colors">
                <div>
                    {/* Decorative BG */}
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <ShoppingBag size={120} />
                    </div>

                    <div className="flex items-center gap-4 mb-8 border-b border-blue-200 dark:border-ink/20 pb-4 relative z-10">
                        <div className="bg-blue-200 dark:bg-ink text-blue-900 dark:text-paper p-3 rounded-none">
                            <Percent size={24} />
                        </div>
                        <h2 className="text-xl font-bold uppercase">{t.bulk_title}</h2>
                    </div>

                    <div className="space-y-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase opacity-70 mb-2">{t.labels.quantity}</label>
                                <div className="flex items-center gap-4">
                                    <button onClick={() => setBulkQty(Math.max(1, bulkQty - 1))} className="w-10 h-10 border border-blue-200 dark:border-ink/50 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-paper dark:hover:text-ink transition-colors">-</button>
                                    <input 
                                        type="number" 
                                        value={bulkQty}
                                        onChange={(e) => setBulkQty(parseInt(e.target.value) || 0)}
                                        className="w-20 bg-transparent border-b-2 border-accent text-center text-3xl font-black focus:outline-none"
                                    />
                                    <button onClick={() => setBulkQty(bulkQty + 1)} className="w-10 h-10 border border-blue-200 dark:border-ink/50 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-paper dark:hover:text-ink transition-colors">+</button>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase opacity-70 mb-2">{t.labels.subject}</label>
                                <select 
                                    value={bulkSubject} 
                                    onChange={(e) => setBulkSubject(e.target.value)}
                                    className="w-full p-3 bg-white/50 dark:bg-paper/10 border border-blue-200 dark:border-ink/30 focus:border-accent outline-none text-sm font-medium"
                                >
                                    <option value="general" className="text-black dark:text-ink">Standard</option>
                                    <option value="tech" className="text-black dark:text-ink">STEM/IT</option>
                                </select>
                            </div>
                        </div>
                        <p className="text-xs text-accent font-mono">* Bulk rates assume avg. 2000 words/unit</p>

                        <div className="grid grid-cols-2 gap-8 border-t border-blue-200 dark:border-ink/20 pt-8">
                            <div>
                                <span className="block text-xs opacity-50 uppercase mb-1">{t.result.total_value}</span>
                                <span className="text-xl font-bold opacity-70 line-through decoration-red-500 decoration-2">HKD {bulkOriginal.toLocaleString()}</span>
                            </div>
                            <div className="text-right">
                                <span className="block text-xs text-accent uppercase mb-1 font-bold">{t.result.save}</span>
                                <span className="text-2xl font-black text-accent">- HKD {bulkSavings.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mt-8">
                    <div className="bg-white/50 dark:bg-paper/10 p-6 rounded border border-blue-200 dark:border-ink/20 mb-6">
                         <div className="flex justify-between items-end">
                            <span className="text-sm font-bold uppercase">{t.result.pay_only}</span>
                            <span className="text-4xl font-black font-display text-blue-900 dark:text-ink">HKD {bulkTotal.toLocaleString()}</span>
                         </div>
                    </div>
                    
                    <a href="https://wa.me/85297723792" target="_blank" className="block w-full text-center bg-blue-900 dark:bg-accent text-white dark:text-ink py-4 font-bold uppercase tracking-widest hover:bg-accent dark:hover:bg-paper hover:text-white transition-all">
                        {t.result.contact_btn}
                    </a>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default QuoteCalculator;