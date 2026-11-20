import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { FAQ_DATA, COMPANY_INFO } from '../data/companyData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white dark:bg-[#121215] border-t border-slate-200 dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B5C]/10 dark:bg-blue-950/40 text-[#102B5C] dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#D9A441]" />
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B3A] dark:text-white">
            Everything You Need To Know Before Traveling
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-zinc-400">
            Have questions about RanSamrat Travels ticket booking, boarding stops, timings, or policies? Find direct answers below.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${isOpen
                    ? 'border-[#D9A441] bg-[#F8FAFC] dark:bg-[#18181F] shadow-md ring-1 ring-[#D9A441]/40'
                    : 'border-slate-200 dark:border-zinc-800 bg-white dark:bg-[#121215] hover:border-slate-300 dark:hover:border-zinc-700'
                  }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-[#071B3A] dark:text-white transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#D9A441] shrink-0" />
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#102B5C] dark:text-zinc-400 transition-transform duration-200 shrink-0 ${isOpen ? 'transform rotate-180 text-[#D9A441]' : ''
                      }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-700 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 dark:border-zinc-800">
                    <p>{item.answer}</p>

                    {item.id === 'faq-1' || item.id === 'faq-2' ? (
                      <div className="mt-3 flex flex-wrap gap-2 pt-2">
                        <a
                          href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#102B5C] text-white text-xs rounded-lg font-medium hover:bg-[#071B3A]"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
                          Call {COMPANY_INFO.contacts.primaryPhone}
                        </a>
                        <a
                          href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white text-xs rounded-lg font-medium hover:bg-emerald-500"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          Chat on WhatsApp
                        </a>
                      </div>
                    ) : null}

                    {item.id === 'faq-7' ? (
                      <div className="mt-3">
                        <a
                          href={COMPANY_INFO.externalPlatforms.redBus.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs rounded-lg font-medium hover:bg-red-500"
                        >
                          Visit RanSamrat on RedBus <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    ) : null}

                    {item.id === 'faq-8' ? (
                      <div className="mt-3">
                        <a
                          href={COMPANY_INFO.externalPlatforms.paytm.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-sky-600 text-white text-xs rounded-lg font-medium hover:bg-sky-500"
                        >
                          Visit RanSamrat on Paytm <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Helper Box */}
        <div className="mt-10 p-6 rounded-3xl bg-gradient-to-r from-[#102B5C] to-[#071B3A] dark:from-[#181822] dark:to-[#0D182B] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#D9A441]/30">
          <div>
            <h4 className="font-bold text-base text-white">Still have a question?</h4>
            <p className="text-xs text-slate-300 mt-0.5">Our Kalamb Head Office & reservation desk are ready to help you.</p>
          </div>
          <div className="flex gap-2">
            <a
              href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
              className="px-4 py-2 bg-[#D9A441] text-[#071B3A] text-xs font-bold rounded-xl hover:bg-[#F3C96E] transition-colors"
            >
              Call Desk Now
            </a>
            <a
              href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-500 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
