import React from 'react';
import { User, UserRole } from '../types';
import { BarChart, DollarSign, Settings, Users, FileText, Briefcase } from 'lucide-react';
import { BarChart as ReBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import SamplePapers from './SamplePapers';
import BrandGenerator from './BrandGenerator';
import { Language, translations } from '../translations';

interface DashboardProps {
  user: User;
  language?: Language;
}

const mockAgentData = [
  { name: 'JAN', commission: 4000 },
  { name: 'FEB', commission: 3000 },
  { name: 'MAR', commission: 2000 },
  { name: 'APR', commission: 2780 },
  { name: 'MAY', commission: 1890 },
  { name: 'JUN', commission: 6390 },
];

const Dashboard: React.FC<DashboardProps> = ({ user, language = 'zh' }) => {
  const t = translations[language].dashboard;
  const commonT = translations[language].common;
  const writerT = translations[language].dashboard.writer;

  const renderCustomerView = () => (
    <div className="space-y-12">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 border border-black divide-y md:divide-y-0 md:divide-x divide-black bg-white">
        <div className="p-8">
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">{t.metrics.active_orders}</h3>
          <p className="text-5xl font-bold text-black font-display">02 <span className="text-sm text-green-600 font-mono align-top ml-2">● PROCESSING</span></p>
        </div>
        <div className="p-8">
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">{t.metrics.completed_units}</h3>
          <p className="text-5xl font-bold text-black font-display">14 <span className="text-sm text-gray-400 font-mono align-top ml-2">SUBJECTS</span></p>
        </div>
        <div className="p-8 bg-black text-white">
          <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">{t.metrics.membership}</h3>
          <p className="text-5xl font-bold text-white font-display">GOLD <span className="text-sm text-yellow-500 font-mono align-top ml-2">VIP</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="border border-black p-8 bg-white">
          <h3 className="text-xl font-bold text-black mb-8 uppercase flex items-center border-b border-black pb-4">
            <DollarSign className="mr-3" size={20} /> {t.pricing.title}
          </h3>
          <div className="space-y-0 divide-y divide-gray-200">
            {t.pricing.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-6 hover:bg-gray-50 transition-colors cursor-pointer group px-2">
                <div>
                  <h4 className="font-bold text-black uppercase text-sm group-hover:text-gray-600">{item.title}</h4>
                  <span className="text-[10px] bg-black text-white px-2 py-0.5 mt-2 inline-block tracking-widest uppercase">{item.tag}</span>
                </div>
                <div className="text-right">
                  <p className="font-bold text-black font-mono">HK$ ---</p>
                  <button className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 group-hover:text-black">{t.pricing.view_specs}</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Replaced Gemini AI with Sample Papers */}
        <div>
            <div className="border border-black p-8 bg-gray-50 h-full">
                <SamplePapers language={language} />
            </div>
        </div>
      </div>
    </div>
  );

  const renderAgentView = () => (
    <div className="space-y-12">
      <div className="bg-black text-white p-12 border border-black">
        <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
                <h2 className="text-3xl font-bold uppercase font-display mb-2">{t.agent.title}</h2>
                <p className="text-gray-400 max-w-xl font-light">{t.agent.subtitle}</p>
            </div>
            <div className="flex gap-4">
                <button className="bg-white text-black px-6 py-3 text-sm font-bold uppercase hover:bg-gray-200 transition-colors">{t.agent.copy_link}</button>
            </div>
        </div>
      </div>

      {/* Commission Structure - New Feature */}
      <div className="border border-black p-8 bg-white">
         <div className="flex items-center gap-3 mb-6">
            <Briefcase size={24} className="text-accent" />
            <h3 className="text-xl font-bold uppercase">{t.agent.commission_title}</h3>
         </div>
         <p className="text-sm text-gray-500 mb-8">{t.agent.commission_desc}</p>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.agent.tiers.map((tier, idx) => (
                <div key={idx} className="border border-gray-200 p-6 hover:border-black transition-all group relative">
                    <div className="absolute top-0 right-0 bg-gray-100 px-3 py-1 text-[10px] font-bold uppercase group-hover:bg-accent group-hover:text-white transition-colors">
                        {tier.req}
                    </div>
                    <div className="text-4xl font-black text-black font-display mb-2 group-hover:text-accent transition-colors">
                        {tier.rate}
                    </div>
                    <h4 className="text-sm font-bold uppercase mb-4">{tier.name}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                        {tier.desc}
                    </p>
                </div>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="border border-black p-8 bg-white">
          <h3 className="text-xl font-bold text-black mb-8 uppercase flex items-center">
            <BarChart className="mr-3" size={20} /> {t.metrics.revenue}
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ReBarChart data={mockAgentData}>
                <CartesianGrid strokeDasharray="0 0" vertical={false} stroke="#e5e5e5" />
                <XAxis dataKey="name" tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                <YAxis tick={{fontSize: 12}} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{backgroundColor: '#000', color: '#fff', border: 'none'}} />
                <Bar dataKey="commission" fill="#000" />
              </ReBarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border border-black p-8 bg-white">
          <h3 className="text-xl font-bold text-black mb-8 uppercase flex items-center">
            <Users className="mr-3" size={20} /> {t.metrics.leads}
          </h3>
          <ul className="space-y-6">
            {[
              { name: 'Ms. Chen', status: 'INQUIRY', desc: 'Nursing Year 3, Final Project' },
              { name: 'Mr. Zhang', status: 'CONFIRMED', desc: 'MPH Masters, Full Management' },
              { name: 'Student Li', status: 'PENDING', desc: 'Part-time, Budget inquiry' },
            ].map((lead, idx) => (
              <li key={idx} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-black uppercase">{lead.name}</span>
                  <span className="text-[10px] px-2 py-1 font-bold uppercase tracking-widest ${lead.status === 'CONFIRMED' ? 'bg-black text-white' : 'bg-gray-200 text-gray-600'}">
                    {lead.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 font-mono">{lead.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Brand Asset Generator */}
      <BrandGenerator language={language} />

    </div>
  );

  const renderWriterView = () => (
    <div className="space-y-12">
      <div className="border border-black p-8 bg-white">
        <h3 className="text-xl font-bold text-black mb-8 uppercase flex items-center">
          <Settings className="mr-3" size={20} /> {writerT?.config_title || 'Configuration'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-4 tracking-widest">{writerT?.tags_label || 'Expertise Tags'}</label>
            <div className="flex flex-wrap gap-2">
              {['Nursing', 'Public Health', 'Psychology', 'Social Work', 'Business'].map(tag => (
                <span key={tag} className="border border-black text-black px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors cursor-pointer uppercase">{tag}</span>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text