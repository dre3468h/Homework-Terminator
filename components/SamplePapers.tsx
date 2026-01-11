import React from 'react';
import { FileText, Award, Lock, BookOpen } from 'lucide-react';
import { Language, translations } from '../translations';

interface SamplePapersProps {
  language: Language;
}

const SamplePapers: React.FC<SamplePapersProps> = ({ language }) => {
  const t = translations[language].dashboard.sample_papers;

  const samples = [
    {
      title: "Nursing: Reflective Practice (Gibbs Cycle)",
      grade: "A",
      words: "2500",
      topic: "Clinical deterioration management in elderly ward",
      type: "Reflection"
    },
    {
      title: "MBA: Strategic Management Analysis",
      grade: "A-",
      words: "3500",
      topic: "Tesla's entry strategy into SE Asia market",
      type: "Case Study"
    },
    {
      title: "Social Work: Case Intervention Plan",
      grade: "A",
      words: "2000",
      topic: "Family therapy approach for youth delinquency",
      type: "Proposal"
    }
  ];

  return (
    <div className="bg-white text-black h-full">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="text-black" size={20} />
        <h3 className="text-lg font-bold uppercase tracking-wide">{t.title}</h3>
      </div>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed border-l-2 border-accent pl-4">
        {t.subtitle}
      </p>

      <div className="space-y-4">
        {samples.map((paper, idx) => (
            <div key={idx} className="border border-gray-200 p-4 hover:border-black transition-colors group cursor-pointer relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-2 py-1 uppercase">
                    Grade {paper.grade}
                </div>
                <div className="flex items-start gap-3">
                    <div className="bg-gray-100 p-3 rounded-none">
                        <FileText size={20} className="text-gray-600" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm text-black leading-tight mb-1 group-hover:underline">{paper.title}</h4>
                        <p className="text-xs text-gray-500 mb-2">{paper.type} • {paper.words} words</p>
                        <p className="text-xs text-gray-400 italic">Topic: {paper.topic}</p>
                    </div>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-1 text-yellow-600 text-xs font-bold">
                        <Award size={12} />
                        <span>Verified Score</span>
                    </div>
                    <button className="text-[10px] uppercase font-bold tracking-widest text-black flex items-center gap-1 hover:text-accent">
                        <Lock size={10} /> {t.access_btn}
                    </button>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default SamplePapers;