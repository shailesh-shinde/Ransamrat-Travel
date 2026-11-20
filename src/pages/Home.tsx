import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bus, Phone, MessageSquare, MapPin, Clock, ShieldCheck, ArrowRight, 
  Sparkles, CheckCircle2, ExternalLink, Calendar, Users, Star, Award, Compass, Search 
} from 'lucide-react';
import { COMPANY_INFO, ROUTES_DATA, FLEET_DATA } from '../data/companyData';
import { RouteCard } from '../components/RouteCard';
import { FaqSection } from '../components/FaqSection';

export const Home: React.FC = () => {
  const [selectedFrom, setSelectedFrom] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Informational route filtering (Discovery only)
  const filteredRoutes = ROUTES_DATA.filter((route) => {
    const matchesFrom = selectedFrom === 'all' || 
      (selectedFrom === 'pune' && route.from.toLowerCase().includes('pune')) ||
      (selectedFrom === 'kalamb' && route.from.toLowerCase().includes('kalamb')) ||
      (selectedFrom === 'ambajogai' && route.from.toLowerCase().includes('ambajogai'));
    
    const matchesSearch = searchQuery === '' || 
      route.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
      route.via.some(v => v.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFrom && matchesSearch;
  });

  return (
    <div className="space-y-0 bg-[#F8FAFC] dark:bg-[#09090B] text-slate-900 dark:text-zinc-100 transition-colors">
      
      {/* 1. ULTRA-MODERN CINEMATIC HERO SECTION */}
      <section className="relative min-h-[640px] lg:min-h-[740px] flex items-center justify-center overflow-hidden bg-[#071B3A] dark:bg-[#070D18]">
        {/* Cinematic Luxury Bus Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/bus-hero.jpg"
            alt="RanSamrat Travels Luxury AC Sleeper Bus"
            className="w-full h-full object-cover object-center opacity-35 transform scale-105"
          />
          {/* Multi-layered Gradients for readability & low glare */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A] via-[#071B3A]/85 to-[#102B5C]/90 dark:from-[#09090B] dark:via-[#09090B]/90 dark:to-[#071B3A]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D9A441]/20 via-transparent to-transparent" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          
          {/* Official RT Logo Presentation & Badge */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-1.5 shadow-2xl shadow-[#D9A441]/30 ring-4 ring-[#D9A441]/60 mb-4 hover:scale-105 transition-transform flex items-center justify-center">
              <img
                src="/logo.jpg"
                alt="RanSamrat Travels RT Official Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 dark:bg-zinc-800/60 backdrop-blur-md border border-[#D9A441]/40 text-[#D9A441] text-xs sm:text-sm font-semibold shadow-xl">
              <span className="font-marathi text-sm sm:text-base font-bold text-white">रणसम्राट ट्रॅव्हल्स</span>
              <span className="text-[#D9A441]">•</span>
              <span className="text-slate-200">Headquartered in Kalamb, District Dharashiv</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-1" />
            </div>
          </div>

          {/* Main Hero Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Travel with Comfort. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#F8E3A8] via-[#D9A441] to-[#F28C28] bg-clip-text text-transparent">
              Travel with Confidence.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-5 text-base sm:text-xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed">
            Connecting Marathwada with Pune and Pimpri-Chinchwad through RanSamrat Travels. Safe, punctual, and premium overnight sleeper transportation.
          </p>

          {/* Quick Hero Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Call for Booking */}
            <a
              href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
              className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#D9A441] hover:bg-[#F3C96E] text-[#071B3A] font-extrabold text-sm sm:text-base transition-all shadow-xl hover:shadow-[#D9A441]/30 active:scale-95"
            >
              <Phone className="w-5 h-5 text-[#071B3A]" />
              <span>Call for Booking</span>
            </a>

            {/* WhatsApp Booking */}
            <a
              href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base transition-all shadow-xl hover:shadow-emerald-600/30 active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp Booking</span>
            </a>

            {/* Explore Our Routes */}
            <Link
              to="/routes"
              className="flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-sm sm:text-base backdrop-blur-md transition-all active:scale-95"
            >
              <Compass className="w-5 h-5 text-[#D9A441]" />
              <span>Explore Our Routes</span>
            </Link>
          </div>

          {/* 4 Crucial Highlight Badges */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto text-left">
            
            <div className="p-4 rounded-2xl bg-white/5 dark:bg-zinc-900/40 backdrop-blur-md border border-white/10 dark:border-zinc-800 hover:border-[#D9A441]/40 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#D9A441]/20 flex items-center justify-center text-[#D9A441] mb-2.5">
                <Bus className="w-4 h-4" />
              </div>
              <h2 className="text-white font-bold text-sm">Passenger Transportation</h2>
              <p className="text-xs text-slate-300 mt-1">Intercity road transport engineered for family & business comfort.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 dark:bg-zinc-900/40 backdrop-blur-md border border-white/10 dark:border-zinc-800 hover:border-[#D9A441]/40 transition-all">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-2.5">
                <Clock className="w-4 h-4" />
              </div>
              <h2 className="text-white font-bold text-sm">Daily Travel Connections</h2>
              <p className="text-xs text-slate-300 mt-1">Confirmed daily evening departures and early morning arrivals.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 dark:bg-zinc-900/40 backdrop-blur-md border border-white/10 dark:border-zinc-800 hover:border-[#D9A441]/40 transition-all">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 mb-2.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <h2 className="text-white font-bold text-sm">AC Sleeper Services</h2>
              <p className="text-xs text-slate-300 mt-1">Modern BharatBenz sleeper coaches with individual charging points.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 dark:bg-zinc-900/40 backdrop-blur-md border border-white/10 dark:border-zinc-800 hover:border-[#D9A441]/40 transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#F28C28]/20 flex items-center justify-center text-[#F28C28] mb-2.5">
                <MapPin className="w-4 h-4" />
              </div>
              <h2 className="text-white font-bold text-sm">Marathwada to Pune</h2>
              <p className="text-xs text-slate-300 mt-1">Direct routes linking Kalamb, Ambajogai, Kaij, Barshi, Latur & PCMC.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 2. INSTANT ROUTE SCHEDULE & TIMINGS FINDER (Fresh & User-Friendly) */}
      <section className="py-12 bg-white dark:bg-[#121215] border-b border-slate-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#071B3A] dark:bg-[#15151C] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-[#D9A441]/30">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase font-extrabold text-[#D9A441] tracking-wider block mb-1">
                  Interactive Route Information
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  Find Confirmed Services & Timings
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Search operational bus schedules. Book your seat by calling our desk or reserving via RedBus & Paytm.
                </p>
              </div>

              {/* Informational Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setSelectedFrom('all')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedFrom === 'all'
                      ? 'bg-[#D9A441] text-[#071B3A] shadow-md'
                      : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  All Routes ({ROUTES_DATA.length})
                </button>
                <button
                  onClick={() => setSelectedFrom('pune')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedFrom === 'pune'
                      ? 'bg-[#D9A441] text-[#071B3A] shadow-md'
                      : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  Pune / PCMC
                </button>
                <button
                  onClick={() => setSelectedFrom('kalamb')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedFrom === 'kalamb'
                      ? 'bg-[#D9A441] text-[#071B3A] shadow-md'
                      : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  Kalamb
                </button>
                <button
                  onClick={() => setSelectedFrom('ambajogai')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedFrom === 'ambajogai'
                      ? 'bg-[#D9A441] text-[#071B3A] shadow-md'
                      : 'bg-white/10 text-slate-200 hover:bg-white/20'
                  }`}
                >
                  Ambajogai
                </button>
              </div>
            </div>

            {/* Search Input Box */}
            <div className="mt-6 flex flex-col sm:flex-row items-stretch gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search city, boarding stop or destination (e.g. Kalamb, Swargate, Ambajogai, Barshi, Latur)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#102B5C] dark:bg-[#1E1E28] border border-white/20 dark:border-zinc-700 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D9A441]"
                />
              </div>
              <Link
                to="/routes"
                className="px-6 py-3 rounded-xl bg-[#D9A441] text-[#071B3A] font-extrabold text-sm flex items-center justify-center gap-2 hover:bg-[#F3C96E] transition-all shadow"
              >
                <span>View Full Schedule Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Quick Informational Preview Cards */}
            <div className="mt-6 pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredRoutes.slice(0, 6).map((route) => (
                <div 
                  key={route.id}
                  className="bg-[#102B5C]/80 dark:bg-[#1C1C24] border border-white/10 dark:border-zinc-800 rounded-2xl p-4 hover:border-[#D9A441]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#D9A441] font-semibold mb-1">
                      <span>{route.category}</span>
                      <span className="tabular-nums">Dep: {route.departure}</span>
                    </div>
                    <div className="font-extrabold text-sm sm:text-base text-white flex items-center gap-1.5">
                      <span>{route.from}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#D9A441]" />
                      <span>{route.to}</span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      Arrival: <strong className="text-white tabular-nums">{route.arrival}</strong> ({route.duration})
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-white/10 dark:border-zinc-800 flex items-center justify-between gap-2">
                    <a
                      href={`tel:${route.primaryPhone.replace(/\s+/g, '')}`}
                      className="text-[11px] font-bold text-[#D9A441] hover:text-white flex items-center gap-1 tabular-nums"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{route.primaryPhone}</span>
                    </a>
                    <a
                      href={`https://wa.me/919168683006?text=${encodeURIComponent(`Enquiry for ${route.from} to ${route.to}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. ABOUT RANSAMRAT TRAVELS SPOTLIGHT */}
      <section className="py-20 bg-[#F5F7FB] dark:bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#102B5C]/10 dark:bg-blue-950/40 text-[#102B5C] dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
                About Our Company
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B3A] dark:text-white tracking-tight">
                Pioneering Intercity Bus Travel Across Marathwada & Pune
              </h2>

              <p className="text-slate-600 dark:text-zinc-300 text-base leading-relaxed">
                <strong>RanSamrat Travels (रणसम्राट ट्रॅव्हल्स)</strong> is based in <strong>Kalamb, District Dharashiv, Maharashtra</strong>. Our core focus is intercity passenger transportation connecting Marathwada with Pune and Pimpri-Chinchwad.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white dark:bg-[#121215] border border-slate-200 dark:border-zinc-800 shadow-sm">
                  <div className="font-bold text-[#102B5C] dark:text-[#D9A441] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
                    To deliver dependable, clean, and highly comfortable road passenger transportation backed by disciplined departure schedules and courteous customer assistance.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-[#121215] border border-slate-200 dark:border-zinc-800 shadow-sm">
                  <div className="font-bold text-[#102B5C] dark:text-[#F28C28] text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F28C28]" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
                    To remain the most trusted transportation lifeline connecting families, students, and businesses between Marathwada and Western Maharashtra.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-xl bg-[#102B5C] hover:bg-[#071B3A] dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold text-sm flex items-center gap-2 transition-all shadow-md"
                >
                  <span>Read Full Company Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/history"
                  className="px-6 py-3 rounded-xl bg-white dark:bg-[#18181D] hover:bg-slate-100 dark:hover:bg-zinc-800 text-[#102B5C] dark:text-zinc-200 border border-slate-300 dark:border-zinc-700 font-bold text-sm flex items-center gap-2 transition-all"
                >
                  <span>Company History Timeline</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800">
                <img
                  src="/images/bus-twin.jpg"
                  alt="RanSamrat Travels Official Bus Fleet (AR01 T 3006 & AR01 T 6003)"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                
                {/* Floating Headquarters Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#071B3A]/90 dark:bg-zinc-900/90 backdrop-blur-md text-white border border-[#D9A441]/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#D9A441] text-[#071B3A] flex items-center justify-center font-bold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-[#D9A441] font-semibold uppercase">Head Office</div>
                      <div className="text-sm font-bold text-white">Kalamb, District Dharashiv</div>
                      <div className="text-[11px] text-slate-300">Near Sub-District Hospital, Main Bus Stand Road</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CONFIRMED OPERATIONAL ROUTES */}
      <section className="py-20 bg-white dark:bg-[#121215] border-t border-slate-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#102B5C] dark:text-blue-300 bg-[#102B5C]/10 dark:bg-blue-950/40 px-3 py-1 rounded-full">
              Punctual & Confirmed Connectivity
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B3A] dark:text-white mt-3">
              Our Confirmed Bus Routes
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 text-sm sm:text-base mt-2">
              Every route published on our website is an active, confirmed operational route connecting Marathwada taluka towns with Pune and PCMC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROUTES_DATA.slice(0, 6).map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/routes"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#102B5C] hover:bg-[#071B3A] dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-extrabold text-sm shadow-xl transition-all"
            >
              <span>View All 11 Operational Routes & Timings</span>
              <ArrowRight className="w-4 h-4 text-[#D9A441]" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. HOW TO BOOK – 3 SIMPLE WAYS */}
      <section className="py-20 bg-gradient-to-br from-[#071B3A] to-[#102B5C] dark:from-[#09090B] dark:to-[#0F1E36] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#D9A441] bg-[#D9A441]/10 px-3.5 py-1.5 rounded-full border border-[#D9A441]/30">
              No Complicated Booking Forms
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
              Three Effortless Ways To Reserve Your Seats
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              We provide transparent, direct ticket booking without online account registrations or hidden gateway charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Method 1: Phone */}
            <div className="bg-white/5 dark:bg-zinc-900/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 dark:border-zinc-800 hover:border-[#D9A441]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#D9A441] text-[#071B3A] flex items-center justify-center font-extrabold text-xl mb-6 shadow-lg shadow-[#D9A441]/20">
                  <Phone className="w-7 h-7" />
                </div>
                <span className="text-xs text-[#D9A441] font-bold uppercase tracking-wider">Method 01</span>
                <h3 className="text-xl font-bold text-white mt-1">Direct Phone Booking</h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Call our dedicated reservation desks directly. Confirm available upper/lower berths, pick-up points, and arrival schedule in under 2 minutes.
                </p>
                <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <div className="text-xs text-slate-400">Desk 1: <strong className="text-white tabular-nums">+91 9168683006</strong></div>
                  <div className="text-xs text-slate-400">Desk 2: <strong className="text-white tabular-nums">+91 9860451641</strong></div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
                  className="w-full py-3 px-4 rounded-xl bg-[#D9A441] hover:bg-[#F3C96E] text-[#071B3A] font-bold text-sm flex items-center justify-center gap-2 transition-all shadow"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_INFO.contacts.primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* Method 2: WhatsApp */}
            <div className="bg-white/5 dark:bg-zinc-900/40 backdrop-blur-md rounded-3xl p-8 border border-emerald-500/30 hover:border-emerald-500/60 transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-xl mb-6 shadow-lg shadow-emerald-600/30">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Method 02</span>
                <h3 className="text-xl font-bold text-white mt-1">WhatsApp Booking</h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Send an instant message on WhatsApp. Our reservation team will immediately share available berth layout, exact timings, and seat confirmation.
                </p>
                <div className="mt-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200">
                  Quick WhatsApp Support: <strong className="tabular-nums">+91 9168683006</strong>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Method 3: RedBus & Paytm */}
            <div className="bg-white/5 dark:bg-zinc-900/40 backdrop-blur-md rounded-3xl p-8 border border-white/10 dark:border-zinc-800 hover:border-[#D9A441]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-sky-600 text-white flex items-center justify-center font-extrabold text-xl mb-6 shadow-lg">
                  <ExternalLink className="w-7 h-7" />
                </div>
                <span className="text-xs text-[#D9A441] font-bold uppercase tracking-wider">Method 03</span>
                <h3 className="text-xl font-bold text-white mt-1">External Portals</h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Prefer booking with online payment portals? Visit our verified pages on <strong>RedBus</strong> and <strong>Paytm</strong> with digital tickets on your phone.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 font-semibold">
                    RedBus Verified
                  </div>
                  <div className="p-2 rounded-lg bg-sky-950/40 border border-sky-500/30 text-sky-300 font-semibold">
                    Paytm Travel
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                <a
                  href={COMPANY_INFO.externalPlatforms.redBus.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow"
                >
                  <span>Book on RedBus Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={COMPANY_INFO.externalPlatforms.paytm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow"
                >
                  <span>Book on Paytm Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Link
              to="/booking-info"
              className="text-xs font-semibold text-[#D9A441] hover:text-white underline underline-offset-4"
            >
              Read Detailed Reservation & Luggage Information →
            </Link>
          </div>

        </div>
      </section>

      {/* 6. OUR LUXURY FLEET SPOTLIGHT */}
      <section className="py-20 bg-slate-50 dark:bg-[#09090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#102B5C] dark:text-blue-300 bg-[#102B5C]/10 dark:bg-blue-950/40 px-3 py-1 rounded-full">
                Safe & Luxurious Fleet
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B3A] dark:text-white mt-3">
                Engineered For Restful Journeys
              </h2>
              <p className="text-slate-600 dark:text-zinc-400 text-sm mt-2 max-w-xl">
                Experience superior ride quality with our BharatBenz luxury sleeper coaches equipped with air suspension, hygienic bedding, and real-time GPS tracking.
              </p>
            </div>
            <div>
              <Link
                to="/fleet"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#102B5C] hover:bg-[#071B3A] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-bold transition-colors"
              >
                <span>View Entire Fleet & Gallery</span>
                <ArrowRight className="w-4 h-4 text-[#D9A441]" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FLEET_DATA.slice(0, 3).map((vehicle) => (
              <div 
                key={vehicle.id}
                className="bg-white dark:bg-[#121215] rounded-3xl overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#071B3A]/85 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border border-[#D9A441]/40">
                    {vehicle.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2.5 py-1 rounded-md text-[11px]">
                    {vehicle.capacity}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-base text-[#071B3A] dark:text-white">{vehicle.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {vehicle.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800 flex flex-wrap gap-1.5">
                    {vehicle.amenities.slice(0, 3).map((amenity, i) => (
                      <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                        {amenity}
                      </span>
                    ))}
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#D9A441]/10 text-[#102B5C] dark:text-[#D9A441]">
                      +{vehicle.amenities.length - 3} more
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. BOARDING POINTS CITY PREVIEW */}
      <section className="py-20 bg-white dark:bg-[#121215] border-t border-slate-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#102B5C] dark:text-blue-300 bg-[#102B5C]/10 dark:bg-blue-950/40 px-3 py-1 rounded-full">
              Convenient Pick-up Hubs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071B3A] dark:text-white mt-3">
              City-Wise Boarding Points
            </h2>
            <p className="text-slate-600 dark:text-zinc-400 text-sm mt-2">
              Strategically placed boarding and dropping points across Kalamb, Pune, PCMC, and Ambajogai for seamless connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Kalamb Hub Card */}
            <div className="p-6 rounded-3xl bg-[#F5F7FB] dark:bg-[#18181F] border border-slate-200 dark:border-zinc-800 hover:border-[#D9A441] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#102B5C] text-white flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5 text-[#D9A441]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#071B3A] dark:text-white">Kalamb Hub</h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">8 Boarding & Drop Points</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
                  <strong>RanSamrat Travels Office</strong> (Opp. Priyadarshini Bank)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
                  Chhatrapati Shivaji Maharaj Chowk
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
                  Hasegaon Bus Stand & Andora Stand
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-zinc-800">
                <Link to="/boarding-points#kalamb" className="text-xs font-bold text-[#102B5C] dark:text-[#D9A441] hover:underline">
                  View all Kalamb stops →
                </Link>
              </div>
            </div>

            {/* Pune / PCMC Hub Card */}
            <div className="p-6 rounded-3xl bg-[#F5F7FB] dark:bg-[#18181F] border border-slate-200 dark:border-zinc-800 hover:border-[#D9A441] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#102B5C] text-white flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#071B3A] dark:text-white">Pune / PCMC Hub</h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">21 Boarding & Drop Points</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Nigdi LIC Corner, Akurdi & Chinchwad
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Bhosari Landewadi Chowk & Thermax Chowk
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Wakad, Hinjewadi Bridge, Swargate & Hadapsar
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-zinc-800">
                <Link to="/boarding-points#pune" className="text-xs font-bold text-[#102B5C] dark:text-[#D9A441] hover:underline">
                  View all 21 Pune/PCMC stops →
                </Link>
              </div>
            </div>

            {/* Ambajogai Hub Card */}
            <div className="p-6 rounded-3xl bg-[#F5F7FB] dark:bg-[#18181F] border border-slate-200 dark:border-zinc-800 hover:border-[#D9A441] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#102B5C] text-white flex items-center justify-center font-bold">
                  <MapPin className="w-5 h-5 text-[#F28C28]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#071B3A] dark:text-white">Ambajogai Hub</h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">7 Dropping Points</span>
                </div>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28]" />
                  Tathagat Chowk & Panyachi Taki
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28]" />
                  Morewadi & Lokhandi Sawargaon
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F28C28]" />
                  Hol Stand, Chandan Sawargaon & Kumbefal
                </li>
              </ul>
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-zinc-800">
                <Link to="/boarding-points#ambajogai" className="text-xs font-bold text-[#102B5C] dark:text-[#D9A441] hover:underline">
                  View all Ambajogai stops →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. INTERACTIVE FAQ SECTION */}
      <FaqSection />

    </div>
  );
};
