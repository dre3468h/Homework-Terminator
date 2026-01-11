export type Language = 'en' | 'zh';

export const translations = {
  zh: {
    common: {
      view_details: '查看詳情',
      status: '狀態',
      date: '日期',
      action: '操作',
      close: '關閉'
    },
    nav: {
      services: '專業方案',
      about: '關於我們',
      team: '師資團隊',
      testimonials: '客戶好評',
      faq: '常見問題',
      calculator: '智能報價',
      login: '會員中心 (即將推出)',
      logout: '登出',
      console: '會員中心',
      access: '會員中心 (即將推出)'
    },
    hero: {
      est: 'Est. 2020 • 專業學術諮詢',
      title_1: '讓您專注職涯發展',
      title_2: '毫不費勁完成學位',
      subtitle: '專為在職護理人員及高階專業人士打造的學術支援服務。自 2020 年以來，我們協助無數專業人士在繁忙工作中，依然能兼顧學業要求，順利畢業。',
      cta_primary: 'WhatsApp 諮詢',
      cta_secondary: '了解服務',
      stat_label: '客戶推薦',
      priority_title: '優先預約通道',
      priority_text: '現正處於學期高峰，護理系 (Nursing) 與商科 (MBA) 的諮詢需求較大，建議提前預約以確保名額。',
      capacity: '本月名額',
      full: '緊張',
      priority_form: {
        title: '訂閱優惠情報',
        email: '您的電郵地址',
        phone: 'WhatsApp / 電話號碼',
        submit: '登記優先通知'
      }
    },
    calculator: {
      title: '專案預算評估',
      subtitle: '透明收費標準，即時參考。',
      single_title: '單項專案估算',
      bulk_title: '學期託管優惠方案',
      labels: {
        words: '字數 (Words)',
        subject: '學科領域',
        deadline: '交付期限',
        level: '學位等級',
        quantity: '預計委託數量 (份)'
      },
      options: {
        general: '一般通識 / 社科',
        special: '護理 (Nursing) / 商業 (MBA)',
        tech: '數據分析 / 編程 (IT)',
        normal: '標準 (7天+)',
        urgent: '急件 (3-6天)',
        super_urgent: '特急 (24-48小時)',
        bachelor: '學士 (Bachelor)',
        master: '碩士 (Master)'
      },
      result: {
        est_price: '預估價格範圍',
        currency: 'HKD',
        save: '組合優惠節省',
        total_value: '原價總值',
        pay_only: '優惠價',
        contact_btn: '獲取詳細報價單'
      }
    },
    services: {
      title: '專業學術支援服務',
      catalog: 'Academic Solutions',
      version: '收費透明 • 嚴守保密 • 準時交付',
      items: [
        {
          title: '畢業論文 / 專題指導',
          desc: '從 Proposal 選題、文獻回顧到數據分析，由相關領域的碩博士導師提供一對一指導。專攻 Nursing, Social Work, Education 等學科。',
          price: '登入查看詳情'
        },
        {
          title: '全學期進度管理',
          desc: '為忙碌的在職人士設計。我們協助您規劃學期時間表，提供各類 Assessment 的輔導與範本，讓您更有效率地管理時間。',
          price: '登入查看詳情'
        },
        {
          title: '緊急學術寫作支援',
          desc: '面對緊迫的 Deadline？我們的急件團隊能提供高效率的寫作支援與潤飾服務，助您在限時內完成高品質文案。',
          price: '登入查看詳情'
        }
      ],
      login_view: '了解更多'
    },
    team: {
      title: '頂尖學術團隊',
      subtitle: '團隊匯聚來自海外名校及香港三大（HKU/CUHK/UST）的一級榮譽畢業生。平均擁有3年實戰經驗，核心成員更具備碩士或博士學歷。',
      stats: {
        phd: '名校 / 一級榮譽',
        masters: '碩博學歷持有',
        exp: '平均指導經驗'
      },
      members: [
        {
          role: '首席醫護顧問',
          edu: 'PhD in Nursing, HKU',
          desc: '前公立醫院資深護師，專攻臨床反思 (Clinical Reflection) 與實證護理 (EBP)。擁有 8 年學術指導經驗。',
          tags: ['Nursing', 'Public Health', 'Gibbs Cycle']
        },
        {
          role: '商科策略總監',
          edu: 'MBA, Manchester UK',
          desc: '跨國企業策略顧問背景。擅長商業案例分析 (Case Study)、市場營銷策略及數據分析 (SPSS/R)。',
          tags: ['MBA', 'Marketing', 'Data Analysis']
        },
        {
          role: '社科研究導師',
          edu: 'M.Soc.Sc, CUHK',
          desc: '專精社會工作與心理學。熟悉本地社福機構運作與質性研究方法 (Qualitative Research)。',
          tags: ['Social Work', 'Psychology', 'Education']
        }
      ]
    },
    gallery: {
      title: '服務成效',
      subtitle: 'Experience & Trust'
    },
    testimonials: {
      title: '客戶真實回饋',
      desc: '信任源於品質。我們不使用誇大宣傳，只專注於協助客戶解決學術難題。以下是部分客戶的真實評價：'
    },
    about: {
      title: '關於 Homework Terminator',
      p1: 'Homework Terminator 成立於 2020 年，初衷是為了支援香港前線醫護人員與全職專業人士。我們深知在輪班工作與高壓環境下，進修學位是極大的挑戰。',
      p2: '我們相信學位應是職涯晉升的助力，而非生活的重擔。我們的團隊匯聚了來自香港三大（HKU/CUHK/HKUST）的碩博士精英，以及八大院校的一級榮譽畢業生，為您提供精準、地道且合規的學術協助。',
      p3: '我們致力於提供專業學術支援，助您在繁忙工作中高效完成學位。'
    },
    faq: {
      title: '常見問題 Q&A',
      subtitle: '了解我們的服務流程',
      items: [
        { q: '內容是否原創？學校對 AI 檢測嚴格。', a: '我們堅持 100% 真人原創撰寫。團隊深知香港院校對學術誠信的要求，所有文案均經過嚴格審核，可應要求提供 Turnitin 或 GPTZero 檢測報告，確保符合原創性標準。' },
        { q: '客戶資料如何保密？', a: '我們極度重視客戶私隱。所有交易與諮詢內容均受嚴格保密協議保護。您的個人資料僅用於訂單聯繫，絕不會向第三方透露，並會在服務結束後定期銷毀檔案。' },
        { q: '能否處理護理系 (Nursing) 的實習報告？', a: '可以，這是我們的核心專業之一。我們的團隊包含具備臨床背景的導師，熟悉香港醫療體制與 Gibbs Cycle 等反思寫作格式，能提供專業且切題的協助。' },
        { q: '售後服務包括修訂嗎？', a: '包含。若產出內容未符合原始指引要求，我們提供免費修訂服務，確保最終成品符合您的期望與學術標準。' },
        { q: '如何開始諮詢？', a: '您可以點擊右下角的 WhatsApp 按鈕或註冊會員，將您的題目指引 (Assignment Brief) 發送給我們，我們將儘快為您提供專業評估與報價。' }
      ]
    },
    auth: {
      login_title: '會員登入',
      register_title: '註冊新帳戶',
      role: '請選擇您的身分',
      roles: { client: '學生 / 客戶', agent: '合作夥伴', staff: '學術導師' },
      name_ph: '如何稱呼您?',
      email_ph: '您的電郵地址',
      pass_ph: '設定密碼',
      info_ph: '就讀學位 / 主修 (例如: Master of Nursing)',
      submit_login: '登入',
      submit_reg: '立即免費註冊',
      switch_login: '已有帳戶？按此登入',
      switch_reg: '未有帳戶？免費註冊'
    },
    dashboard: {
      welcome: '歡迎回來,',
      role_label: {
        customer: '學術進度管理',
        agent: '合作夥伴中心',
        writer: '訂單管理系統'
      },
      metrics: {
        active_orders: '進行中項目',
        completed_units: '已完成科目',
        membership: '會員等級',
        revenue: '收益分析',
        leads: '客戶追蹤'
      },
      pricing: {
        title: '會員專屬方案',
        items: [
          { title: '全學期託管 (Nursing)', tag: '熱門' },
          { title: '單篇論文 (3000字)', tag: '急件' },
          { title: '研究計劃書 (Proposal)', tag: '保證' }
        ],
        view_specs: '查看規格'
      },
      agent: {
        title: '代理控制台',
        subtitle: '合作夥伴專屬介面。',
        copy_link: '複製推廣連結',
        commission_title: '佣金制度詳情',
        commission_desc: '我們提供具競爭力的回報機制，期待與您長期合作。',
        tiers: [
          { name: '標準代理', rate: '10%', req: '無需門檻', desc: '適合剛開始推廣的合作夥伴，每單即時結算。' },
          { name: '銀級代理', rate: '15%', req: '月單量 > 5', desc: '穩定客源代理，享有優先客服支援。' },
          { name: '金牌合夥人', rate: '20%', req: '月單量 > 15', desc: '最高佣金比例，年末享有額外獎勵。' }
        ]
      },
      writer: {
        config_title: '接案設定',
        tags_label: '擅長領域標籤',
        rate_label: '期望費率 (每千字)',
        pool_title: '接案大廳',
        col_subject: '題目 / 主題',
        col_type: '類型',
        col_payout: '稿費',
        btn_apply: '申請接案'
      },
      sample_papers: {
        title: '優異範文庫',
        subtitle: '僅供參考，嚴禁抄襲。以下範文均已獲得優異成績。',
        access_btn: '閱覽全文'
      },
      brand_gen: {
        title: '品牌素材生成器',
        subtitle: '生成適用於 Instagram (1080x1080) 的官方品牌標誌圖片。',
        btn_download: '下載 JPG'
      }
    },
    footer: {
      desc: 'Since 2020 • 立足香港',
      contact: '聯絡我們',
      rights: '© 2024 Homework Terminator. 版權所有。',
      links: {
        nursing: '護理系畢業論文',
        mba: 'MBA Capstone',
        practicum: '實習反思報告',
        writer_join: '加盟導師',
        agent_portal: '代理登入',
        affiliate: '推薦計劃',
        privacy: '私隱政策',
        terms: '服務條款'
      }
    }
  },
  en: {
    common: {
      view_details: 'View Details',
      status: 'Status',
      date: 'Date',
      action: 'Action',
      close: 'Close'
    },
    nav: {
      services: 'Services',
      about: 'About',
      team: 'Our Team',
      testimonials: 'Reviews',
      faq: 'FAQ',
      calculator: 'Calculator',
      login: 'Member Center (Coming Soon)',
      logout: 'Logout',
      console: 'Console',
      access: 'Member Center (Coming Soon)'
    },
    hero: {
      est: 'Est. 2020 • HK Based',
      title_1: 'Career First',
      title_2: 'Degree Secured',
      subtitle: 'Tailored for working students, nurses, and senior professionals. With a reputation of excellence since 2020, we help you secure your degree while you excel in your career.',
      cta_primary: 'Get a Quote',
      cta_secondary: 'Learn More',
      stat_label: 'Satisfaction',
      priority_title: 'Priority Lane',
      priority_text: 'High demand for Nursing & MBA modules currently. Reserve your slot early.',
      capacity: 'Capacity',
      full: 'Limited',
      priority_form: {
        title: 'Get Promotion Alerts',
        email: 'Email Address',
        phone: 'WhatsApp / Phone',
        submit: 'Notify Me'
      }
    },
    calculator: {
      title: 'Project Budget Estimator',
      subtitle: 'Transparent pricing for your reference.',
      single_title: 'Single Project Estimate',
      bulk_title: 'Semester Package',
      labels: {
        words: 'Word Count',
        subject: 'Subject Area',
        deadline: 'Deadline',
        level: 'Academic Level',
        quantity: 'Estimated Quantity'
      },
      options: {
        general: 'General / Social Sci',
        special: 'Nursing / MBA',
        tech: 'Data / IT / Code',
        normal: 'Standard (7 days+)',
        urgent: 'Urgent (3-6 days)',
        super_urgent: 'Rush (24-48 hrs)',
        bachelor: 'Bachelor',
        master: 'Master'
      },
      result: {
        est_price: 'Estimated Range',
        currency: 'HKD',
        save: 'Package Savings',
        total_value: 'Total Value',
        pay_only: 'Package Price',
        contact_btn: 'Get Exact Quote'
      }
    },
    services: {
      title: 'Comprehensive Academic Solutions',
      catalog: 'Professional Services',
      version: 'Transparent Pricing, Premium Quality',
      items: [
        {
          title: 'Thesis Guidance',
          desc: 'From topic selection to final proofreading. Specialized in Nursing, Business, and Social Sciences.',
          price: 'Login for details'
        },
        {
          title: 'Full Semester Management',
          desc: 'We handle the schedule and assignments; you handle your job.',
          price: 'Login for details'
        },
        {
          title: 'Emergency Writing Support',
          desc: 'Tight deadline? Our 24/7 team is ready to deliver high-quality work urgently.',
          price: 'Login for details'
        }
      ],
      login_view: 'Learn More'
    },
    team: {
      title: 'Expert Academic Team',
      subtitle: 'Our team gathers elites from top overseas universities and the HK "Big Three", including many First Class Honours graduates. We have an average of 3 years of academic guidance experience, with some members holding Masters or PhD degrees.',
      stats: {
        phd: 'Top Uni / First Class',
        masters: 'Masters / PhD Holders',
        exp: 'Avg. Experience'
      },
      members: [
        {
          role: 'Head Medical Consultant',
          edu: 'PhD in Nursing, HKU',
          desc: 'Former Senior Nurse in public hospitals. Specialized in Clinical Reflection, EBP, and Capstone Projects. 8 years experience.',
          tags: ['Nursing', 'Public Health', 'Gibbs Cycle']
        },
        {
          role: 'Strategy Director',
          edu: 'MBA, Manchester UK',
          desc: 'Background in multinational corporate strategy. Expert in Case Studies, Marketing Strategy, and Data Analysis (SPSS/R).',
          tags: ['MBA', 'Marketing', 'Data Analysis']
        },
        {
          role: 'Social Science Lead',
          edu: 'M.Soc.Sc, CUHK',
          desc: 'Specialized in Social Work and Psychology. Familiar with local NGO operations and Qualitative Research methods.',
          tags: ['Social Work', 'Psychology', 'Education']
        }
      ]
    },
    gallery: {
      title: 'Why Choose Us',
      subtitle: 'Experience & Trust'
    },
    testimonials: {
      title: 'Real Client Reviews',
      desc: 'Our reputation is built on every successful delivery. No gimmicks, just results.'
    },
    about: {
      title: 'About Homework Terminator',
      p1: 'Founded in 2020, we support excellent nurses and professionals who struggle to balance heavy workloads with academic requirements.',
      p2: 'We believe your degree should facilitate your career, not hinder your life. Our team brings together Masters and PhD elites from Hong Kong\'s "Big Three" (HKU/CUHK/HKUST) and First Class Honours graduates from the top eight universities, providing you with precise, authentic, and compliant academic assistance.',
      p3: 'We are committed to providing professional academic support to help you efficiently complete your degree.'
    },
    faq: {
      title: 'F.A.Q.',
      subtitle: 'Common Questions',
      items: [
        { q: 'Is AI detection included?', a: 'Yes. We strictly provide 100% human writing. Turnitin or GPTZero reports can be provided upon request.' },
        { q: 'Is my data safe?', a: 'Absolutely. We have a strict privacy policy. Your details are never shared.' },
        { q: 'Do you handle Nursing practicum reports?', a: 'Yes, this is our specialty. Our writers have clinical experience and know formats like Gibbs Cycle.' },
        { q: 'What if I need revisions?', a: 'We offer free revisions within the scope of the original requirements until you are satisfied.' },
        { q: 'How to start?', a: 'Click WhatsApp or Register, send us your brief, and we will quote you immediately.' }
      ]
    },
    auth: {
      login_title: 'Welcome Back',
      register_title: 'Create Account',
      role: 'I am a...',
      roles: { client: 'Client (Student)', agent: 'Partner Agent', staff: 'Writer' },
      name_ph: 'Your Name',
      email_ph: 'Email Address',
      pass_ph: 'Password',
      info_ph: 'Degree / Major (e.g., Master of Nursing)',
      submit_login: 'Login',
      submit_reg: 'Register Now',
      switch_login: 'Have an account? Login',
      switch_reg: 'New here? Register free'
    },
    dashboard: {
      welcome: 'Welcome,',
      role_label: {
        customer: 'Academic Progress Tracker',
        agent: 'Partner Network Hub',
        writer: 'Assignment Operations'
      },
      metrics: {
        active_orders: 'Active Orders',
        completed_units: 'Completed Units',
        membership: 'Membership Tier',
        revenue: 'Revenue Analytics',
        leads: 'Lead Tracker'
      },
      pricing: {
        title: 'Exclusive Pricing',
        items: [
          { title: 'Full Semester (Nursing)', tag: 'POPULAR' },
          { title: 'Single Thesis (3k words)', tag: 'EXPEDITED' },
          { title: 'Research Proposal', tag: 'GUARANTEED' }
        ],
        view_specs: 'View Specs'
      },
      agent: {
        title: 'Agent Console',
        subtitle: 'Partner Access Level 1. Maximize your network efficiency.',
        copy_link: 'Copy Uplink',
        commission_title: 'Commission Structure',
        commission_desc: 'We offer a competitive tier system to ensure your efforts are rewarded profitably.',
        tiers: [
          { name: 'Standard', rate: '10%', req: 'No Entry Barrier', desc: 'Instant payout per order. Ideal for starters.' },
          { name: 'Silver', rate: '15%', req: '>5 Orders/Month', desc: 'Priority support and higher margins.' },
          { name: 'Gold Partner', rate: '20%', req: '>15 Orders/Month', desc: 'Maximum commission with year-end bonuses.' }
        ]
      },
      writer: {
        config_title: 'Configuration',
        tags_label: 'Expertise Tags',
        rate_label: 'Rate Expectation (per 1k words)',
        pool_title: 'Order Pool',
        col_subject: 'Subject / Topic',
        col_type: 'Type',
        col_payout: 'Payout',
        btn_apply: 'Apply'
      },
      sample_papers: {
        title: 'A-Grade Sample Library',
        subtitle: 'For reference only. Strictly no plagiarism. These papers achieved A/A- grades.',
        access_btn: 'Read Full Text'
      },
      brand_gen: {
        title: 'Brand Asset Generator',
        subtitle: 'Generate official brand logo images optimized for Instagram (1080x1080).',
        btn_download: 'Download JPG'
      }
    },
    footer: {
      desc: 'Since 2020 • Hong Kong Based',
      contact: 'Contact Us',
      rights: '© 2024 Homework Terminator. All rights reserved.',
      links: {
        nursing: 'Nursing Thesis',
        mba: 'MBA Capstone',
        practicum: 'Practicum Report',
        writer_join: 'Join as Writer',
        agent_portal: 'Agent Portal',
        affiliate: 'Affiliate Program',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      }
    }
  }
};