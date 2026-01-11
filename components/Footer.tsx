import React from 'react';
import { Instagram, Mail, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Language, translations } from '../translations';

interface FooterProps {
    language?: Language;
    onLinkClick: (title: string, content: string) => void;
    onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ language = 'zh', onLinkClick, onNavigate }) => {
  const t = translations[language].footer;
  const navT = translations[language].nav;
  const links = t.links;

  // Helper to create content for the modals
  const getContent = (key: string) => {
    // Content Generation Logic
    if (key === links.privacy) {
        return language === 'zh' 
          ? `**私隱政策聲明**\n\n1. **資料收集**：我們僅收集提供學術諮詢服務所需的必要資料（如聯絡方式、學科要求）。\n\n2. **資料使用**：您的資料僅用於訂單處理及客戶服務，絕不會出售或轉讓予第三方。\n\n3. **保密承諾**：所有學術文檔在交易完成後的 30 天內，系統將自動清除存檔，保障您的學術私隱。\n\n4. **安全性**：我們使用 SSL 加密技術傳輸您的資料，確保數據在傳輸過程中不被竊取。`
          : `**Privacy Policy Statement**\n\n1. **Data Collection**: We collect only the necessary information required to provide academic consulting services (e.g., contact details, subject requirements).\n\n2. **Data Usage**: Your data is used solely for order processing and customer service and will never be sold or transferred to third parties.\n\n3. **Confidentiality**: All academic documents are automatically purged from our system 30 days after transaction completion to protect your academic privacy.\n\n4. **Security**: We use SSL encryption to transmit your data, ensuring it remains secure during transmission.`;
    }
    
    if (key === links.terms) {
        return language === 'zh'
          ? `**服務條款**\n\n1. **服務性質**：本平台提供的所有內容僅供學術參考與研究用途。客戶不應將其直接提交作為自己的評核作品。\n\n2. **付款條款**：所有訂單需預付訂金，尾款需在交付前結清。若中途取消訂單，訂金將不予退還。\n\n3. **修訂政策**：我們提供免費修訂服務，前提是修訂要求未偏離原始訂單指引。若有新增要求，可能產生額外費用。\n\n4. **免責聲明**：我們不對客戶的最終成績負責，亦不承擔因客戶不當使用本平台資料而產生的任何學術後果。`
          : `**Terms of Service**\n\n1. **Nature of Service**: All content provided by this platform is for academic reference and research purposes only. Clients should not submit it directly as their own assessed work.\n\n2. **Payment Terms**: All orders require a deposit, with the balance cleared before delivery. Deposits are non-refundable if the order is cancelled midway.\n\n3. **Revision Policy**: We offer free revisions provided the request does not deviate from the original order instructions. Additional requirements may incur extra fees.\n\n4. **Disclaimer**: We are not responsible for the client's final grade, nor do we assume liability for any academic consequences resulting from the misuse of our materials.`;
    }

    // Default content for other links
    if (language === 'zh') {
        return `關於 ${key} 的詳細資訊：\n\n我們提供專業的諮詢服務。請聯繫客服獲取報價單或合作細節。\n\nWhatsApp: +852 9772 3792`;
    }
    return `Detailed information regarding ${key}:\n\nWe provide professional consulting services. Please contact support for quotations or partnership details.\n\nWhatsApp: +852 9772 3792`;
  };

  return (
    <footer className="bg-surface text-ink pt-20 pb-10 border-t border-ink">
      <div className="max-w-[1920px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          <div className="col-span-1">
            <h3 className="text-2xl font-black mb-6 tracking-tighter text-ink uppercase">HOMEWORK<br/><span className="font-light">Terminator</span>.</h3>
            <p className="text-sm text-ink-light mb-8 leading-relaxed max-w-xs font-medium">
              {t.desc}<br/>
              Professional Academic Solutions
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/homework.terminator/" target="_blank" rel="noreferrer" className="bg-paper p-3 hover:bg-ink hover:text-paper transition-all border border-ink rounded-none">
                <Instagram size={18} />
              </a>
              <a href="mailto:hw.terminators@gmail.com" className="bg-paper p-3 hover:bg-ink hover:text-paper transition-all border border-ink rounded-none">
                <Mail size={18} />
              </a>
              <a href="https://wa.me/85297723792" target="_blank" className="bg-paper p-3 hover:bg-ink hover:text-paper transition-all border border-ink rounded-none">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-ink-light border-b border-ink-light/20 pb-2 inline-block">{navT.services}</h4>
            <ul className="space-y-4 text-sm font-bold text-ink">
              <li>
                  <button onClick={() => onLinkClick(links.nursing, getContent(links.nursing))} className="hover:text-accent transition-colors flex items-center group text-left">
                      {links.nursing} <ArrowUpRight className="opacity-0 group-hover:opacity-100 ml-1 w-3 h-3 transition-opacity"/>
                  </button>
              </li>
              <li>
                  <button onClick={() => onLinkClick(links.mba, getContent(links.mba))} className="hover:text-accent transition-colors flex items-center group text-left">
                      {links.mba} <ArrowUpRight className="opacity-0 group-hover:opacity-100 ml-1 w-3 h-3 transition-opacity"/>
                  </button>
              </li>
              <li>
                  <button onClick={() => onLinkClick(links.practicum, getContent(links.practicum))} className="hover:text-accent transition-colors flex items-center group text-left">
                      {links.practicum} <ArrowUpRight className="opacity-0 group-hover:opacity-100 ml-1 w-3 h-3 transition-opacity"/>
                  </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-ink-light border-b border-ink-light/20 pb-2 inline-block">Partner</h4>
            <ul className="space-y-4 text-sm font-bold text-ink">
              <li><button onClick={() => onLinkClick(links.writer_join, getContent(links.writer_join))} className="hover:text-accent transition-colors text-left">{links.writer_join}</button></li>
              <li><button onClick={() => onLinkClick(links.agent_portal, getContent(links.agent_portal))} className="hover:text-accent transition-colors text-left">{links.agent_portal}</button></li>
              <li><button onClick={() => onLinkClick(links.affiliate, getContent(links.affiliate))} className="hover:text-accent transition-colors text-left">{links.affiliate}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-8 text-ink-light border-b border-ink-light/20 pb-2 inline-block">{t.contact}</h4>
            <p className="text-sm mb-4 font-mono text-ink">hw.terminators@gmail.com</p>
            <p className="text-xs text-ink-light leading-relaxed mt-8">
              {t.rights}
            </p>
          </div>
        </div>
        
        <div className="border-t border-ink-light/20 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.1em] text-ink-light">
            <div className="flex gap-8">
                <button onClick={() => onLinkClick(links.privacy, getContent(links.privacy))} className="hover:text-ink">{links.privacy}</button>
                <button onClick={() => onLinkClick(links.terms, getContent(links.terms))} className="hover:text-ink">{links.terms}</button>
                {/* Disclaimer Link - Now opens as a Pop-up with Disclaimer Content */}
                <button 
                  onClick={() => onLinkClick(language === 'zh' ? '免責聲明' : 'Disclaimer', 
                    language === 'zh' 
                    ? `**免責聲明**\n\n1. **學術用途**：本平台提供的所有資料僅供學習參考。\n2. **原創性**：我們反對抄襲，請勿直接將本平台的內容作為個人作品提交。\n3. **責任**：本平台不對任何學術評級結果負責。\n\n詳細內容請參閱完整的免責聲明頁面。`
                    : `**Disclaimer**\n\n1. **Academic Use**: All materials are for reference only.\n2. **Originality**: We oppose plagiarism; do not submit our content as your own.\n3. **Liability**: We are not responsible for grading outcomes.\n\nSee full Disclaimer page for details.`
                  )} 
                  className="hover:text-ink font-bold text-accent"
                >
                    {language === 'zh' ? '免責聲明' : 'Disclaimer'}
                </button>
            </div>
            <span className="mt-4 md:mt-0 italic">Excellence in Academic Engineering</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;