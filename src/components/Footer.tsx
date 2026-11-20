import React from 'react';
import { Link } from 'react-router-dom';
import { Bus, Phone, MessageSquare, MapPin, Clock, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { COMPANY_INFO, ROUTES_DATA } from '../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071B3A] dark:bg-[#070D18] text-slate-300 border-t-2 border-[#D9A441]">
      {/* Top CTA Band */}
      <div className="bg-gradient-to-r from-[#102B5C] via-[#0b244d] to-[#102B5C] dark:from-[#0E1B33] dark:via-[#091324] dark:to-[#0E1B33] py-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#D9A441] block mb-1">
                Direct Passenger Reservation & Support
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Planning your journey between Pune and Marathwada?
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                Call our 24/7 reservation desks or message us on WhatsApp for instant seat assistance.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
                className="flex items-center gap-2 bg-[#D9A441] hover:bg-[#F3C96E] text-[#071B3A] font-extrabold px-5 py-3 rounded-2xl transition-all shadow-lg active:scale-95 text-xs sm:text-sm"
              >
                <Phone className="w-4 h-4 text-[#071B3A]" />
                <span className="tabular-nums">Call {COMPANY_INFO.contacts.primaryPhone}</span>
              </a>
              <a
                href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-5 py-3 rounded-2xl transition-all shadow-lg active:scale-95 text-xs sm:text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-1 shadow-md shrink-0 flex items-center justify-center border border-white/20">
                <img 
                  src="/logo.jpg" 
                  alt="RanSamrat Travels RT Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-wide">
                  RANSAMRAT TRAVELS
                </span>
                <span className="block text-xs font-semibold text-[#D9A441] font-marathi">
                  {COMPANY_INFO.marathiName}
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              Headquartered in Kalamb, District Dharashiv, RanSamrat Travels provides trusted, punctual, and safe passenger intercity transportation linking towns across Marathwada with Pune and Pimpri-Chinchwad.
            </p>

            <div className="p-3.5 rounded-2xl bg-[#102B5C]/60 border border-[#D9A441]/20 space-y-1.5 text-xs">
              <div className="flex items-start gap-2 text-slate-200">
                <MapPin className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                <span>
                  <strong>Head Office:</strong> Near Sub-District Hospital, Main Bus Stand Road, Kalamb, Dist. Dharashiv, MH – 413507
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-300 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Office Hours: 08:00 AM – 10:30 PM (Daily)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-[#D9A441] transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D9A441] transition-colors">About RanSamrat Travels</Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-[#D9A441] transition-colors">Company History</Link>
              </li>
              <li>
                <Link to="/routes" className="hover:text-[#D9A441] transition-colors">Our Routes & Schedules</Link>
              </li>
              <li>
                <Link to="/boarding-points" className="hover:text-[#D9A441] transition-colors">Boarding & Dropping Points</Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-[#D9A441] transition-colors">Our Luxury Fleet</Link>
              </li>
              <li>
                <Link to="/booking-info" className="hover:text-[#D9A441] transition-colors">Ticket Booking Guide</Link>
              </li>
              <li>
                <Link to="/offices-contact" className="hover:text-[#D9A441] transition-colors">Offices & Counters</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D9A441] transition-colors">Contact & Enquiry</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Routes */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Confirmed Routes
            </h4>
            <ul className="space-y-2 text-xs">
              {ROUTES_DATA.slice(0, 8).map((route) => (
                <li key={route.id}>
                  <Link 
                    to={`/routes#${route.id}`}
                    className="hover:text-[#D9A441] flex items-center justify-between group transition-colors py-0.5"
                  >
                    <span>{route.from} ↔ {route.to}</span>
                    <span className="text-[#D9A441] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Booking Channels & Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              External Ticketing
            </h4>
            <p className="text-xs text-slate-400">
              RanSamrat Travels tickets are also bookable on India's top online travel portals:
            </p>
            <div className="space-y-2">
              <a
                href={COMPANY_INFO.externalPlatforms.redBus.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-xl bg-red-950/40 border border-red-500/30 text-white text-xs hover:border-red-400 transition-all group"
              >
                <span className="font-semibold text-red-300">Book on RedBus</span>
                <ExternalLink className="w-3.5 h-3.5 text-red-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={COMPANY_INFO.externalPlatforms.paytm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-xl bg-sky-950/40 border border-sky-500/30 text-white text-xs hover:border-sky-400 transition-all group"
              >
                <span className="font-semibold text-sky-300">Book on Paytm</span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={COMPANY_INFO.externalPlatforms.abhiBus.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3 py-2 rounded-xl bg-orange-950/40 border border-orange-500/30 text-white text-xs hover:border-orange-400 transition-all group"
              >
                <span className="font-semibold text-orange-300">Search on AbhiBus</span>
                <ExternalLink className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <div className="pt-2">
              <div className="flex flex-col gap-1 text-xs">
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-slate-400 hover:text-white transition-colors">Terms & Conditions</Link>
              </div>
            </div>
          </div>

        </div>

        {/* Transparent Company Notice */}
        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-slate-400 leading-relaxed bg-[#05142b] p-4 rounded-2xl">
          <p>
            <strong className="text-slate-200">Information Notice:</strong> This website is the official corporate information portal for <strong>RanSamrat Travels (रणसम्राट ट्रॅव्हल्स)</strong>. It does not operate an internal payment checkout or seat locking engine. Passengers can confirm bookings via direct phone call, WhatsApp, or through accredited ticketing partners like RedBus and Paytm.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} RanSamrat Travels. All Rights Reserved. Kalamb, District Dharashiv, Maharashtra.
          </div>
          <div className="flex items-center gap-2">
            <span>Tagline: <em>"{COMPANY_INFO.tagline}"</em></span>
          </div>
        </div>
      </div>
    </footer>
  );
};
