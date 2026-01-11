import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { Language, translations } from '../translations';

interface TeamSectionProps {
  language: Language;
}

const TeamSection: React.FC<TeamSectionProps> = ({ language }) => {
  const t = translations[language].team;

  return (
    <div id="team" className="bg-paper py-32 md:py-40 border-b border-ink relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
            {/* Section Header */}
            <div className="max-w-4xl mb-20 reveal">
                <span className="text-ink-light font-mono font-bold tracking-widest text-xs uppercase mb-4 block">03 / QUALIFICATIONS</span>
                <h2 className="text-4xl md:text-6xl font-black text-ink uppercase leading-none mb-6">
                    {t.title}
                </h2>
                <p className="text-xl text-ink-light font-light leading-relaxed border-l-4 border-accent pl-6">
                    {t.subtitle}
                </p>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-ink mb-16 reveal">
                <div className="p-8 border-b md:border-b-0 md:border-r border-ink bg-surface flex flex-col items-center text-center">
                    <div className="text-5xl font-black text-ink font-display mb-2">100<span className="text-2xl text-accent">%</span></div>
                    <div className="text-xs font-bold uppercase tracking-widest text-ink-light">{t.stats.phd}</div>
                </div>
                <div className="p-8 border-b md:border-b-0 md:border-r border-ink bg-surface flex flex-col items-center text-center">
                    <div className="text-5xl font-black text-ink font-display mb-2">50<span className="text-2xl text-accent">%</span></div>
                    <div className="text-xs font-bold uppercase tracking-widest text-ink-light">{t.stats.masters}</div>
                </div>
                <div className="p-8 bg-surface flex flex-col items-center text-center">
                    <div className="text-5xl font-black text-ink font-display mb-2">3<span className="text-2xl text-accent">+</span></div>
                    <div className="text-xs font-bold uppercase tracking-widest text-ink-light">{t.stats.exp}</div>
                </div>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {t.members.map((member, idx) => (
                    <div 
                        key={idx} 
                        className="bg-surface border border-ink p-8 hover:shadow-[8px_8px_0px_0px_var(--color-ink)] transition-shadow duration-300 group reveal"
                        style={{ transitionDelay: `${idx * 150}ms` }}
                    >
                        <div className="flex justify-between items-start mb-6 border-b border-ink-light/20 pb-4">
                            <div className="bg-ink text-paper p-3">
                                {idx === 0 ? <GraduationCap size={24} /> : idx === 1 ? <Award size={24} /> : <BookOpen size={24} />}
                            </div>
                            <div className="text-right">
                                <span className="block font-bold text-accent text-xs uppercase tracking-widest mb-1">Education</span>
                                <span className="block font-bold text-ink text-sm">{member.edu}</span>
                            </div>
                        </div>

                        <h3 className="text-2xl font-black text-ink uppercase mb-4 group-hover:text-accent transition-colors">
                            {member.role}
                        </h3>
                        <p className="text-ink-light text-sm leading-relaxed mb-8 min-h-[5rem]">
                            {member.desc}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {member.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-paper text-ink border border-ink text-[10px] font-bold uppercase tracking-wider">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Trust Badge Bar */}
            <div className="mt-16 pt-8 border-t border-ink-light/20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
                <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-ink" />
                    <span className="text-xs font-bold uppercase tracking-widest text-ink">Strict Recruitment</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-ink" />
                    <span className="text-xs font-bold uppercase tracking-widest text-ink">NDA Signed</span>
                </div>
                <div className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-ink" />
                    <span className="text-xs font-bold uppercase tracking-widest text-ink">Regular Training</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TeamSection;