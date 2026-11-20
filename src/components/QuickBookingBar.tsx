import React, { useState } from 'react';
import { Phone, MessageCircle, ExternalLink, Copy, Check, ChevronUp, MapPin, Bus } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const QuickBookingBar: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <>
      {/* Mobile Floating Action Bar */}
      <aside 
        aria-label="Quick Booking Contact Bar"
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#071B3A] border-t-2 border-[#D9A441] shadow-2xl p-2.5 sm:hidden"
      >
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
            className="flex flex-col items-center justify-center py-2 px-1 bg-[#D9A441] text-[#071B3A] font-bold rounded-lg text-xs active:scale-95 shadow"
          >
            <Phone className="w-4 h-4 mb-0.5" />
            <span>Call Now</span>
          </a>

          <a
            href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 bg-emerald-600 text-white font-bold rounded-lg text-xs active:scale-95 shadow"
          >
            <MessageCircle className="w-4 h-4 mb-0.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href={COMPANY_INFO.externalPlatforms.redBus.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 bg-red-600 text-white font-bold rounded-lg text-xs active:scale-95 shadow"
          >
            <ExternalLink className="w-4 h-4 mb-0.5" />
            <span>RedBus</span>
          </a>
        </div>
      </aside>

      {/* Desktop Quick Booking Floating Widget (Bottom-Right) */}
      <aside 
        aria-label="Desktop Quick Booking Widget"
        className="hidden sm:block fixed bottom-6 right-6 z-40"
      >
        <div className="relative">
          {expanded && (
            <div className="mb-3 w-80 bg-[#071B3A] border border-[#D9A441]/40 rounded-2xl shadow-2xl p-4 text-white animate-in fade-in slide-in-from-bottom-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white p-0.5 flex items-center justify-center shrink-0">
                    <img src="/logo.jpg" alt="RT Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-bold text-sm text-white">Instant Ticket Enquiry</span>
                </div>
                <button
                  onClick={() => setExpanded(false)}
                  className="text-slate-400 hover:text-white text-xs"
                >
                  Close
                </button>
              </div>

              <div className="space-y-3 mt-3">
                {/* Phone 1 */}
                <div className="bg-[#102B5C] p-2.5 rounded-xl flex items-center justify-between border border-white/10">
                  <div>
                    <div className="text-[11px] text-[#D9A441] font-semibold">Primary Booking Phone</div>
                    <div className="font-bold text-sm text-white">{COMPANY_INFO.contacts.primaryPhone}</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleCopy(COMPANY_INFO.contacts.primaryPhone, 'p1')}
                      className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                      title="Copy Number"
                    >
                      {copied === 'p1' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
                      className="p-1.5 bg-[#D9A441] text-[#071B3A] rounded-md font-bold hover:bg-[#F3C96E] transition-colors"
                      title="Call Now"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-medium text-xs transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </div>
                  <span className="text-[11px] bg-emerald-800 px-2 py-0.5 rounded-full">Instant</span>
                </a>

                {/* External Partner Badges */}
                <div className="pt-2 border-t border-white/10">
                  <span className="text-[11px] text-slate-400 block mb-2 font-medium">Or Book Online Via:</span>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={COMPANY_INFO.externalPlatforms.redBus.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2 bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/30 rounded-lg text-xs font-semibold text-center flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>RedBus</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={COMPANY_INFO.externalPlatforms.paytm.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-1.5 px-2 bg-sky-600/20 hover:bg-sky-600/30 text-sky-300 border border-sky-500/30 rounded-lg text-xs font-semibold text-center flex items-center justify-center gap-1 transition-colors"
                    >
                      <span>Paytm</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 bg-[#D9A441] hover:bg-[#F3C96E] text-[#071B3A] font-bold px-4 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-[#071B3A]"
          >
            <Phone className="w-5 h-5 text-[#071B3A]" />
            <span className="text-sm">Quick Booking Desk</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </button>
        </div>
      </aside>
    </>
  );
};
