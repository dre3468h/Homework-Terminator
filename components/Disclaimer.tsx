import React from 'react';
import { ShieldAlert, Info, AlertTriangle } from 'lucide-react';
import { Language, translations } from '../translations';

interface DisclaimerProps {
  language: Language;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ language }) => {
  // Simple internal translations for this specific page if not in global
  const content = {
    zh: {
      title: '免責聲明與使用條款',
      subtitle: '請仔細閱讀以下條款',
      sections: [
        {
          title: '學術誠信聲明',
          icon: <ShieldAlert size={24} />,
          text: 'Homework Terminator (本平台) 提供的所有文檔、範文、研究報告及諮詢服務，僅供客戶作為學術研究的參考、學習範本或思路引導。我們嚴格反對將本平台提供的資料直接作為自己的作品提交給學校或學術機構（即直接抄襲）。客戶應當運用我們提供的資料進行消化、理解，並撰寫屬於自己的原創作品。'
        },
        {
          title: '版權歸屬',
          icon: <Info size={24} />,
          text: '本平台交付的所有內容，其版權歸屬於 Homework Terminator 或撰寫該內容的導師所有，直至交易完成且版權轉讓（視具體合約而定）。未經允許，客戶不得將這些資料公開發布、轉售或用於商業用途。'
        },
        {
          title: '服務範圍與責任限制',
          icon: <AlertTriangle size={24} />,
          text: '雖然我們致力於提供高質量的學術輔導，但我們不對客戶最終的學術成績（Grade）做出絕對的法律承諾。學術評分受多種主觀因素影響。此外，若因客戶提供錯誤的指引或延遲回覆導致的後果，本平台不承擔相應責任。'
        },
        {
          title: '退款政策',
          icon: <Info size={24} />,
          text: '一旦訂單確認並開始製作，若非本平台重大失誤（如嚴重逾期或完全偏題），原則上不接受無故退款。任何爭議將依據雙方確認的 Assignment Brief 進行裁定。'
        }
      ]
    },
    en: {
      title: 'Disclaimer & Terms of Use',
      subtitle: 'Please read the following terms carefully',
      sections: [
        {
          title: 'Academic Integrity Statement',
          icon: <ShieldAlert size={24} />,
          text: 'All documents, sample papers, research reports, and consulting services provided by Homework Terminator are intended solely for academic reference, study modeling, or conceptual guidance. We strictly discourage submitting our materials directly as your own work to schools or academic institutions (plagiarism). Clients should use our materials to understand the topic and produce their own original work.'
        },
        {
          title: 'Copyright',
          icon: <Info size={24} />,
          text: 'Copyright of all delivered content belongs to Homework Terminator or the respective tutor until the transaction is complete and rights are transferred (subject to specific agreements). Clients may not publish, resell, or use these materials for commercial purposes without permission.'
        },
        {
          title: 'Limitation of Liability',
          icon: <AlertTriangle size={24} />,
          text: 'While we strive to provide high-quality academic tutoring, we do not make absolute legal guarantees regarding the client\'s final grade. Academic grading is subject to various subjective factors. Furthermore, we are not liable for consequences resulting from incorrect instructions provided by the client or delayed responses.'
        },
        {
          title: 'Refund Policy',
          icon: <Info size={24} />,
          text: 'Once an order is confirmed and work has commenced, refunds are generally not accepted unless there is a major error on our part (e.g., severe delay or completely off-topic). Any disputes will be adjudicated based on the mutually agreed Assignment Brief.'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-paper py-32 md:py-40 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-surface border border-ink shadow-[8px_8px_0px_0px_var(--color-ink)] p-8 md:p-12 animate-fade-in">
        <div className="border-b border-ink pb-8 mb-8 text-center">
            <h1 className="text-3xl md:text-5xl font-black uppercase text-ink mb-4">{t.title}</h1>
            <p className="text-ink-light font-mono uppercase tracking-widest">{t.subtitle}</p>
        </div>

        <div className="space-y-12">
            {t.sections.map((section, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0 text-accent mt-1">
                        {section.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-ink uppercase mb-3">{section.title}</h3>
                        <p className="text-ink-light leading-loose text-sm md:text-base text-justify">
                            {section.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-12 pt-8 border-t border-ink text-center">
            <p className="text-xs text-ink-light font-mono">Last updated: May 2024 • Homework Terminator Legal Team</p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;