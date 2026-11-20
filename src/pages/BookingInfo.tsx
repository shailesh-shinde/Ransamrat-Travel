import React, { useState } from 'react';
import { 
  Phone, MessageSquare, ExternalLink, Copy, Check, ShieldCheck, 
  AlertCircle, Luggage, Clock, CheckCircle2, HelpCircle, ArrowRight 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { SeatLayoutGuide } from '../components/SeatLayoutGuide';

export const BookingInfo: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#071B3A] via-[#102B5C] to-[#071B3A] py-16 sm:py-20 text-white border-b-2 border-[#D9A441]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D9A441]/40 text-[#D9A441] text-xs font-semibold mb-4">
            <span className="font-marathi text-sm font-bold text-white">तिकीट आरक्षण माहिती</span>
            <span>•</span>
            <span>Independent Booking Channels</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            BOOKING INFORMATION & TICKET RESERVATIONS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal">
            Choose from three independent, transparent methods to discover seat availability and confirm your bus ticket.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Core Transparent Notice */}
        <div className="p-6 rounded-3xl bg-[#071B3A] border border-[#D9A441]/40 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D9A441] text-[#071B3A] flex items-center justify-center shrink-0 font-extrabold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Notice to All Passengers</h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                RanSamrat Travels does not operate an internal online checkout or payment gateway on this company portal. Instead, we offer three verified options: direct telephone reservation, instant WhatsApp inquiry, or external verified portals (RedBus & Paytm).
              </p>
            </div>
          </div>
        </div>

        {/* SECTION A: DIRECT PHONE BOOKING */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#102B5C] bg-[#102B5C]/10 px-3 py-1 rounded-full">
              Option A
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B3A] mt-2">
              Direct Phone Booking
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Speak directly with our reservation team in Kalamb or Pune. Quickest way to check berth availability, confirm bus pickup timings, and reserve seats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Contact Card 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border-t-4 border-t-[#D9A441]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    Booking Contact 1 (Head Office Desk)
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Lines Active
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-[#071B3A] tracking-tight">
                  {COMPANY_INFO.contacts.primaryPhone}
                </div>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Call our primary Kalamb headquarters reservation desk for all routes connecting Pune, PCMC, Ambajogai, Kaij, Barshi, and Latur.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-2">
                <a
                  href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#102B5C] hover:bg-[#071B3A] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#D9A441]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow active:scale-95 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Now</span>
                </a>

                <button
                  onClick={() => handleCopy(COMPANY_INFO.contacts.primaryPhone, 'c1')}
                  className="py-3 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1 transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedId === 'c1' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedId === 'c1' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border-t-4 border-t-[#102B5C]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#102B5C] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    Booking Contact 2 (Dispatch & Enquiries)
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Lines Active
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-[#071B3A] tracking-tight">
                  {COMPANY_INFO.contacts.secondaryPhone}
                </div>

                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Dedicated line for Pune & PCMC passenger pickups, late evening departure boarding status, and return booking reservations.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-2">
                <a
                  href={`tel:${COMPANY_INFO.contacts.secondaryPhoneRaw}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#102B5C] hover:bg-[#071B3A] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#D9A441]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/919860451641?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow active:scale-95 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Now</span>
                </a>

                <button
                  onClick={() => handleCopy(COMPANY_INFO.contacts.secondaryPhone, 'c2')}
                  className="py-3 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center gap-1 transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedId === 'c2' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedId === 'c2' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION B: ONLINE BOOKING PLATFORMS */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#102B5C] bg-[#102B5C]/10 px-3 py-1 rounded-full">
              Option B
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B3A] mt-2">
              Online Booking Platforms (External)
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Prefer booking online with debit/credit cards or UPI? Visit our official listings on accredited national travel platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Platform 1: RedBus */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between border-t-4 border-t-red-600">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-bold">
                    Official Partner
                  </span>
                  <span className="text-xs text-slate-400">External Platform</span>
                </div>

                <h3 className="text-lg font-bold text-[#071B3A]">{COMPANY_INFO.externalPlatforms.redBus.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {COMPANY_INFO.externalPlatforms.redBus.description}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600">
                  URL: <span className="font-mono text-slate-700">redbus.in/travels/ransamrat-travels</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={COMPANY_INFO.externalPlatforms.redBus.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow transition-all active:scale-95"
                >
                  <span>{COMPANY_INFO.externalPlatforms.redBus.buttonText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Platform 2: Paytm */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between border-t-4 border-t-sky-600">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200 text-xs font-bold">
                    Official Partner
                  </span>
                  <span className="text-xs text-slate-400">External Platform</span>
                </div>

                <h3 className="text-lg font-bold text-[#071B3A]">{COMPANY_INFO.externalPlatforms.paytm.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {COMPANY_INFO.externalPlatforms.paytm.description}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600">
                  URL: <span className="font-mono text-slate-700">tickets.paytm.com/bus/ransamrat-travels</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={COMPANY_INFO.externalPlatforms.paytm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow transition-all active:scale-95"
                >
                  <span>{COMPANY_INFO.externalPlatforms.paytm.buttonText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Platform 3: AbhiBus */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between border-t-4 border-t-orange-500">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs font-bold">
                    Travel Aggregator
                  </span>
                  <span className="text-xs text-slate-400">External Portal</span>
                </div>

                <h3 className="text-lg font-bold text-[#071B3A]">{COMPANY_INFO.externalPlatforms.abhiBus.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {COMPANY_INFO.externalPlatforms.abhiBus.description}
                </p>

                <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600">
                  URL: <span className="font-mono text-slate-700">abhibus.com</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={COMPANY_INFO.externalPlatforms.abhiBus.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#F28C28] hover:bg-amber-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow transition-all active:scale-95"
                >
                  <span>{COMPANY_INFO.externalPlatforms.abhiBus.buttonText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          <div className="p-4 rounded-2xl bg-slate-100 text-xs text-slate-600 leading-relaxed border border-slate-200">
            <strong>Important External Booking Advisory:</strong> RedBus, Paytm, and AbhiBus are third-party online booking aggregators. Clicking the buttons above opens their independent platforms in a new tab. Ticket policies, cancellation fees, and promotional discounts on those portals are governed by their respective terms of service.
          </div>
        </section>

        {/* SECTION C: WHATSAPP BOOKING */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#102B5C] bg-[#102B5C]/10 px-3 py-1 rounded-full">
              Option C
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B3A] mt-2">
              WhatsApp Booking & Instant Assistance
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              One-click WhatsApp chat pre-loaded with your journey enquiry request.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-900 to-[#071B3A] rounded-3xl p-8 sm:p-12 text-white border-2 border-emerald-500/50 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant Messaging Helpdesk</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Chat with RanSamrat Travels on WhatsApp
                </h3>

                <div className="text-sm text-slate-200 space-y-2">
                  <p>
                    WhatsApp Helpline Number: <strong className="text-white text-base">+91 9168683006</strong>
                  </p>
                  <p className="text-xs text-slate-300">
                    Pre-filled message template:
                  </p>
                  <div className="p-4 rounded-xl bg-black/40 border border-emerald-500/30 font-mono text-xs text-emerald-200 italic">
                    "{COMPANY_INFO.contacts.whatsappPreFilledText}"
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-2xl transition-all active:scale-95"
                  >
                    <MessageSquare className="w-5 h-5 text-slate-950" />
                    <span>BOOK THROUGH WHATSAPP</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3">
                <h4 className="font-bold text-sm text-emerald-300 uppercase tracking-wider">How it works:</h4>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>1. Click the button above to launch WhatsApp.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>2. Send your date, passenger count, and route.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>3. Executive confirms available berths and lock details.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 36-Berth Seat Numbers & Cabin Layout Guide */}
        <SeatLayoutGuide />

        {/* PASSENGER GUIDELINES & LUGGAGE POLICY */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="w-10 h-10 rounded-xl bg-[#102B5C] text-[#D9A441] flex items-center justify-center">
              <Luggage className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#071B3A]">Luggage & Travel Guidelines</h3>
              <span className="text-xs text-slate-500">Essential rules for a comfortable and smooth journey</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="p-4 rounded-xl bg-[#F5F7FB] border border-slate-200 space-y-2">
              <strong className="text-[#071B3A] block text-sm">Personal Luggage Allowance</strong>
              <p>
                Each passenger is permitted up to 15–20 kg of personal luggage without extra charge. Luggage must be securely packed and handed over to the crew for placement in the under-deck storage hold.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F7FB] border border-slate-200 space-y-2">
              <strong className="text-[#071B3A] block text-sm">Valuables & Handbags</strong>
              <p>
                Small backpacks, laptops, and hand luggage are permitted inside the sleeper berth. Passengers are advised to keep cash, jewelry, and electronic gadgets with them at all times.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F5F7FB] border border-slate-200 space-y-2">
              <strong className="text-[#071B3A] block text-sm">Boarding & Verification</strong>
              <p>
                Please report at your pickup stop 15 minutes before the departure time. Keep your phone reachable as our bus conductor calls passengers as the bus approaches the pickup location.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
