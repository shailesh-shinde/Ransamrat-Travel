import React from 'react';
import { Phone, MessageSquare, AlertCircle, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const NoticeBanner: React.FC = () => {
  return (
    <div className="bg-[#071B3A] text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-[#D9A441]/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#D9A441]/20 text-[#D9A441] font-semibold text-[11px] uppercase tracking-wider">
            <AlertCircle className="w-3 h-3 text-[#D9A441]" />
            Official Portal
          </span>
          <span className="text-slate-300">
            Tickets reserved via <strong className="text-white">Phone</strong>, <strong className="text-white">WhatsApp</strong>, or external platforms (<strong className="text-[#D9A441]">RedBus & Paytm</strong>).
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <a 
            href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`} 
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#D9A441] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>{COMPANY_INFO.contacts.primaryPhone}</span>
          </a>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <a 
            href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`}
            target="_blank"
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
};
