import React, { useState } from 'react';
import { 
  Bus, Search, Filter, Phone, MessageSquare, MapPin, Clock, 
  ArrowRight, ShieldCheck, AlertCircle, Sparkles 
} from 'lucide-react';
import { ROUTES_DATA, COMPANY_INFO } from '../data/companyData';
import { RouteCard } from '../components/RouteCard';

export const Routes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedCityFilter, setSelectedCityFilter] = useState<string>('all');

  // Filter routes
  const filteredRoutes = ROUTES_DATA.filter((route) => {
    const matchesSearch = 
      route.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.via.some(stop => stop.toLowerCase().includes(searchTerm.toLowerCase())) ||
      route.busType.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = 
      selectedCategory === 'all' || route.category === selectedCategory;

    const matchesCity = 
      selectedCityFilter === 'all' ||
      (selectedCityFilter === 'pune' && (route.from.includes('Pune') || route.to.includes('Pune'))) ||
      (selectedCityFilter === 'kalamb' && (route.from.includes('Kalamb') || route.to.includes('Kalamb'))) ||
      (selectedCityFilter === 'ambajogai' && (route.from.includes('Ambajogai') || route.to.includes('Ambajogai'))) ||
      (selectedCityFilter === 'latur' && (route.from.includes('Latur') || route.to.includes('Latur')));

    return matchesSearch && matchesCategory && matchesCity;
  });

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#09090B] text-slate-900 dark:text-zinc-100 transition-colors">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#071B3A] via-[#102B5C] to-[#071B3A] dark:from-[#09090B] dark:via-[#0F1E36] dark:to-[#09090B] py-16 sm:py-20 text-white border-b-2 border-[#D9A441]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D9A441]/40 text-[#D9A441] text-xs font-semibold mb-4">
            <span className="font-marathi text-sm font-bold text-white">रणसम्राट ट्रॅव्हल्स मार्ग</span>
            <span>•</span>
            <span>Confirmed Operational Schedules</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Bus Routes & Schedules
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal">
            Direct, daily passenger connections connecting Marathwada with Pune and Pimpri-Chinchwad.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Notice Card: Transparent Booking */}
        <div className="bg-amber-50 dark:bg-amber-950/20 border-l-4 border-[#D9A441] p-4 sm:p-5 rounded-r-2xl text-xs sm:text-sm text-amber-950 dark:text-amber-200 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm border border-amber-200 dark:border-amber-900/40">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-[#071B3A] dark:text-amber-300">Passenger Information Notice:</strong>
              <span className="ml-1 text-slate-700 dark:text-zinc-300">
                All routes shown below are confirmed operational daily services. To book your seats, call our booking desk directly or message us on WhatsApp. You can also reserve seats on external portals RedBus and Paytm.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
              className="px-4 py-2 rounded-xl bg-[#102B5C] hover:bg-[#071B3A] text-white font-bold text-xs transition-colors shadow"
            >
              Call {COMPANY_INFO.contacts.primaryPhone}
            </a>
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="bg-white dark:bg-[#121215] p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by city (e.g., Kalamb, Pune, Ambajogai, Barshi, Latur)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-zinc-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#102B5C] bg-[#F8FAFC] dark:bg-[#18181D] text-slate-900 dark:text-white placeholder-slate-400"
              />
            </div>

            {/* City Filter Pills */}
            <div className="md:col-span-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 mr-1">City Hub:</span>
              <button
                onClick={() => setSelectedCityFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCityFilter === 'all'
                    ? 'bg-[#102B5C] dark:bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedCityFilter('pune')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCityFilter === 'pune'
                    ? 'bg-[#102B5C] dark:bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700'
                }`}
              >
                Pune / PCMC
              </button>
              <button
                onClick={() => setSelectedCityFilter('kalamb')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCityFilter === 'kalamb'
                    ? 'bg-[#102B5C] dark:bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700'
                }`}
              >
                Kalamb
              </button>
              <button
                onClick={() => setSelectedCityFilter('ambajogai')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCityFilter === 'ambajogai'
                    ? 'bg-[#102B5C] dark:bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700'
                }`}
              >
                Ambajogai
              </button>
              <button
                onClick={() => setSelectedCityFilter('latur')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  selectedCityFilter === 'latur'
                    ? 'bg-[#102B5C] dark:bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700'
                }`}
              >
                Latur
              </button>
            </div>

          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-zinc-800">
            <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400 mr-2">Coach Type:</span>
            {['all', 'AC Sleeper', 'Non-AC Sleeper', 'Luxury Coach'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#D9A441] text-[#071B3A] font-bold shadow-sm'
                    : 'text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800'
                }`}
              >
                {cat === 'all' ? 'All Coach Types' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Route Cards Grid */}
        {filteredRoutes.length === 0 ? (
          <div className="bg-white dark:bg-[#121215] p-12 text-center rounded-3xl border border-slate-200 dark:border-zinc-800 space-y-3">
            <Bus className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-[#071B3A] dark:text-white">No matching routes found</h3>
            <p className="text-sm text-slate-500 dark:text-zinc-400">
              Try adjusting your search keyword or city filter. For custom enquiries or special booking requests, please contact our team.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCityFilter('all'); setSelectedCategory('all'); }}
              className="mt-2 px-4 py-2 rounded-xl bg-[#102B5C] dark:bg-blue-600 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoutes.map((route) => (
              <RouteCard key={route.id} route={route} />
            ))}
          </div>
        )}

        {/* Route Matrix Table */}
        <div className="bg-white dark:bg-[#121215] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="border-b border-slate-200 dark:border-zinc-800 pb-3">
            <h3 className="text-lg font-bold text-[#071B3A] dark:text-white">Complete Confirmed Route Matrix</h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400">Fast overview of all 11 active routes and typical departure windows.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700 dark:text-zinc-300">
              <thead className="bg-[#F8FAFC] dark:bg-[#18181F] text-[#071B3A] dark:text-zinc-100 uppercase font-bold text-[11px] border-b border-slate-200 dark:border-zinc-800">
                <tr>
                  <th className="py-3 px-4">Route Path</th>
                  <th className="py-3 px-3">Coach Type</th>
                  <th className="py-3 px-3">Departure</th>
                  <th className="py-3 px-3">Arrival</th>
                  <th className="py-3 px-3">Approx Duration</th>
                  <th className="py-3 px-4 text-right">Direct Booking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-zinc-800">
                {ROUTES_DATA.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-[#102B5C] dark:text-[#D9A441]">
                      {r.from} ↔ {r.to}
                    </td>
                    <td className="py-3 px-3 text-slate-600 dark:text-zinc-400">{r.busType}</td>
                    <td className="py-3 px-3 font-semibold text-[#071B3A] dark:text-white tabular-nums">{r.departure}</td>
                    <td className="py-3 px-3 text-slate-600 dark:text-zinc-400 tabular-nums">{r.arrival}</td>
                    <td className="py-3 px-3 text-slate-600 dark:text-zinc-400 tabular-nums">{r.duration}</td>
                    <td className="py-3 px-4 text-right">
                      <a
                        href={`tel:${r.primaryPhone.replace(/\s+/g, '')}`}
                        className="inline-flex items-center gap-1 text-[#102B5C] dark:text-[#D9A441] font-bold hover:underline tabular-nums"
                      >
                        <Phone className="w-3 h-3 text-[#D9A441]" />
                        <span>{r.primaryPhone}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
