import React, { useState } from 'react';
import { UserRole } from '../types';
import { X, User, Briefcase, Users, GraduationCap } from 'lucide-react';
import { Language, translations } from '../translations';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (role: UserRole, name: string) => void;
  language: Language;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin, language }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.CUSTOMER);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');

  const t = translations[language].auth;

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      onLogin(selectedRole, name);
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="bg-surface w-full max-w-lg shadow-2xl animate-fade-in overflow-hidden border border-ink cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 bg-ink text-paper">
          <div>
              <h2 className="text-xl font-bold tracking-wide">
                {isRegister ? t.register_title : t.login_title}
              </h2>
              <p className="text-xs opacity-70 mt-1">Homework Terminator Secure Portal</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-paper hover:text-accent bg-paper/20 hover:bg-paper/30 rounded-full p-2 transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 bg-surface">
          {/* Role Selection */}
          <div className="mb-8">
            <label className="block text-xs font-bold uppercase tracking-widest text-ink-light mb-3">{t.role}</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setSelectedRole(UserRole.CUSTOMER)}
                className={`flex flex-col items-center justify-center p-4 border transition-all ${
                  selectedRole === UserRole.CUSTOMER 
                    ? 'bg-paper border-accent text-ink shadow-inner ring-1 ring-accent' 
                    : 'bg-surface border-ink-light/30 text-ink-light hover:border-ink'
                }`}
              >
                <User size={24} className={selectedRole === UserRole.CUSTOMER ? "text-accent mb-2" : "mb-2"} />
                <span className="text-[10px] font-bold text-center leading-tight">{t.roles.client}</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole(UserRole.AGENT)}
                className={`flex flex-col items-center justify-center p-4 border transition-all ${
                  selectedRole === UserRole.AGENT 
                    ? 'bg-paper border-accent text-ink shadow-inner ring-1 ring-accent' 
                    : 'bg-surface border-ink-light/30 text-ink-light hover:border-ink'
                }`}
              >
                <Users size={24} className={selectedRole === UserRole.AGENT ? "text-accent mb-2" : "mb-2"} />
                <span className="text-[10px] font-bold text-center leading-tight">{t.roles.agent}</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole(UserRole.WRITER)}
                className={`flex flex-col items-center justify-center p-4 border transition-all ${
                  selectedRole === UserRole.WRITER 
                    ? 'bg-paper border-accent text-ink shadow-inner ring-1 ring-accent' 
                    : 'bg-surface border-ink-light/30 text-ink-light hover:border-ink'
                }`}
              >
                <Briefcase size={24} className={selectedRole === UserRole.WRITER ? "text-accent mb-2" : "mb-2"} />
                <span className="text-[10px] font-bold text-center leading-tight">{t.roles.staff}</span>
              </button>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-ink mb-2">{t.name_ph}</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-paper text-ink border border-ink-light/30 focus:bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors placeholder-ink-light/50 text-sm"
                placeholder={t.name_ph}
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-ink mb-2">{t.email_ph}</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-paper text-ink border border-ink-light/30 focus:bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors placeholder-ink-light/50 text-sm"
                placeholder={t.email_ph}
              />
            </div>

            {/* Lead Collection Field for Registering Clients */}
            {isRegister && selectedRole === UserRole.CUSTOMER && (
               <div className="animate-fade-in">
                  <label className="block text-xs font-bold text-ink mb-2 flex items-center gap-1">
                      <GraduationCap size={14} className="text-accent"/> {t.info_ph}
                  </label>
                  <input
                    type="text"
                    required
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    className="w-full px-4 py-3 bg-paper text-ink border border-ink-light/30 focus:bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors placeholder-ink-light/50 text-sm"
                    placeholder="e.g. PolyU Nursing, HKU MBA..."
                  />
                  <p className="text-[10px] text-ink-light mt-1">* Used to match you with specialized writers.</p>
               </div>
            )}

            {isRegister && (
               <div className="animate-fade-in">
                  <label className="block text-xs font-bold text-ink mb-2">{t.pass_ph}</label>
                  <input
                    type="password"
                    required
                    className="w-full px-4 py-3 bg-paper text-ink border border-ink-light/30 focus:bg-surface focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors placeholder-ink-light/50 text-sm"
                    placeholder="••••••••"
                  />
               </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-ink text-paper py-4 font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-transparent"
          >
            {isRegister ? t.submit_reg : t.submit_login}
          </button>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              className="text-xs text-ink-light hover:text-ink font-medium underline decoration-ink-light/50 underline-offset-4"
            >
              {isRegister ? t.switch_login : t.switch_reg}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;