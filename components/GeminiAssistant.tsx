import React, { useState } from 'react';
import { generateStudyAdvice } from '../services/geminiService';
import { UserRole } from '../types';
import { Sparkles, Send, Loader2 } from 'lucide-react';

interface GeminiAssistantProps {
  userRole: UserRole;
}

const GeminiAssistant: React.FC<GeminiAssistantProps> = ({ userRole }) => {
  const [topic, setTopic] = useState('');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    setAdvice('');
    
    let userTypeStr = "在職學生";
    if (userRole === UserRole.CUSTOMER) userTypeStr = "護理系在職學生";
    if (userRole === UserRole.AGENT) userTypeStr = "教育代理";

    const result = await generateStudyAdvice(topic, userTypeStr);
    setAdvice(result);
    setLoading(false);
  };

  return (
    <div className="bg-white text-black h-full">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="text-black" size={20} />
        <h3 className="text-lg font-bold uppercase tracking-wide">AI Research Consultant</h3>
      </div>
      <p className="text-gray-500 text-sm mb-6 leading-relaxed">
        Input your research parameters or thesis topic. System will generate a structural outline or strategic advice.
      </p>

      <div className="space-y-6">
        <div className="relative">
          <textarea
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="// Enter research topic parameters here..."
            className="w-full bg-gray-50 border border-black p-4 text-black placeholder-gray-400 focus:ring-0 focus:outline-none rounded-none h-32 font-mono text-sm"
          />
          <button
            onClick={handleConsult}
            disabled={loading || !topic.trim()}
            className="absolute bottom-4 right-4 bg-black text-white p-2 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 className="animate-spin" size={16} /> : <Send size={16} />}
          </button>
        </div>

        {advice && (
          <div className="bg-white border border-black p-6 animate-fade-in">
            <h4 className="text-black font-bold mb-3 text-xs uppercase tracking-widest border-b border-gray-200 pb-2">Output Generated</h4>
            <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap font-mono">{advice}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeminiAssistant;