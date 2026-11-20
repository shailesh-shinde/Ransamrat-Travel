import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Search, CheckCircle2, Phone, Compass, Info } from 'lucide-react';
import { BOARDING_POINTS, COMPANY_INFO } from '../data/companyData';

export const BoardingPoints: React.FC = () => {
  const [activeCityTab, setActiveCityTab] = useState<'all' | 'kalamb' | 'pune' | 'ambajogai'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterList = (list: typeof BOARDING_POINTS.kalamb) => {
    return list.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.landmark && item.landmark.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

  const kalambFiltered = filterList(BOARDING_POINTS.kalamb);
  const puneFiltered = filterList(BOARDING_POINTS.pune);
  const ambajogaiFiltered = filterList(BOARDING_POINTS.ambajogai);

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#071B3A] via-[#102B5C] to-[#071B3A] py-16 sm:py-20 text-white border-b-2 border-[#D9A441]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D9A441]/40 text-[#D9A441] text-xs font-semibold mb-4">
            <span className="font-marathi text-sm font-bold text-white">स्थानक व थांबे</span>
            <span>•</span>
            <span>Convenient Pickup & Drop Locations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Boarding & Dropping Points
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal">
            City-wise verified pickup stops across Kalamb, Pune, Pimpri-Chinchwad, and Ambajogai with direct Google Maps search navigation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Information Callout */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#102B5C] text-[#D9A441] flex items-center justify-center shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-sm text-[#071B3A]">Passenger Boarding Protocol</h2>
              <p className="text-xs text-slate-600">
                Please arrive at your designated boarding point at least 15 minutes prior to scheduled departure. Our bus crew coordinates pick-ups via telephone.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
              className="px-4 py-2 bg-[#D9A441] text-[#071B3A] rounded-xl text-xs font-bold hover:bg-[#F3C96E] transition-colors shrink-0"
            >
              Verify Stop with Desk
            </a>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* City Tabs */}
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveCityTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeCityTab === 'all'
                  ? 'bg-[#102B5C] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Hubs ({BOARDING_POINTS.kalamb.length + BOARDING_POINTS.pune.length + BOARDING_POINTS.ambajogai.length})
            </button>
            <button
              onClick={() => setActiveCityTab('kalamb')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeCityTab === 'kalamb'
                  ? 'bg-[#102B5C] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Kalamb ({BOARDING_POINTS.kalamb.length})
            </button>
            <button
              onClick={() => setActiveCityTab('pune')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeCityTab === 'pune'
                  ? 'bg-[#102B5C] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Pune / PCMC ({BOARDING_POINTS.pune.length})
            </button>
            <button
              onClick={() => setActiveCityTab('ambajogai')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeCityTab === 'ambajogai'
                  ? 'bg-[#102B5C] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Ambajogai ({BOARDING_POINTS.ambajogai.length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search stop or landmark..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#102B5C] bg-[#F5F7FB]"
            />
          </div>
        </div>

        {/* SECTION 1: KALAMB BOARDING POINTS */}
        {(activeCityTab === 'all' || activeCityTab === 'kalamb') && (
          <section id="kalamb" className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#D9A441] text-[#071B3A] flex items-center justify-center font-bold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#071B3A]">Kalamb Boarding & Dropping Points</h2>
                  <span className="text-xs text-slate-500">Headquarters Station & Surrounding Taluka Stops</span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#102B5C] bg-[#102B5C]/10 px-3 py-1 rounded-full">
                {kalambFiltered.length} Locations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {kalambFiltered.map((point) => (
                <div
                  key={point.id}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#D9A441]"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-2">
                      <span className="text-[#D9A441] uppercase tracking-wider font-bold">Kalamb Zone</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {point.type}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-[#071B3A] group-hover:text-[#102B5C] transition-colors">
                      {point.name}
                    </h3>

                    {point.landmark && (
                      <p className="text-xs text-slate-500 mt-1 flex items-start gap-1">
                        <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{point.landmark}</span>
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">{point.area}</span>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(point.mapSearchQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#102B5C] hover:text-[#D9A441] transition-colors"
                    >
                      <span>Google Map</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 2: PUNE / PCMC BOARDING AND DROPPING POINTS */}
        {(activeCityTab === 'all' || activeCityTab === 'pune') && (
          <section id="pune" className="space-y-4 pt-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#071B3A]">Pune / PCMC Boarding & Dropping Points</h2>
                  <span className="text-xs text-slate-500">Comprehensive Pickup Network across Pimpri-Chinchwad, Highway Corridor & Central Pune</span>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                {puneFiltered.length} Locations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {puneFiltered.map((point) => (
                <div
                  key={point.id}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-emerald-500"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-2">
                      <span className="text-emerald-700 uppercase tracking-wider font-bold">{point.area}</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {point.type}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-[#071B3A] group-hover:text-emerald-800 transition-colors">
                      {point.name}
                    </h3>

                    {point.landmark && (
                      <p className="text-xs text-slate-500 mt-1 flex items-start gap-1">
                        <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{point.landmark}</span>
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Pune / PCMC</span>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(point.mapSearchQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#102B5C] hover:text-emerald-700 transition-colors"
                    >
                      <span>Open in Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 3: AMBAJOGAI DROPPING POINTS */}
        {(activeCityTab === 'all' || activeCityTab === 'ambajogai') && (
          <section id="ambajogai" className="space-y-4 pt-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#F28C28] text-white flex items-center justify-center font-bold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#071B3A]">Ambajogai Dropping Points</h2>
                  <span className="text-xs text-slate-500">Key Town & Highway Delivery Points</span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#F28C28] bg-orange-100 px-3 py-1 rounded-full">
                {ambajogaiFiltered.length} Locations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ambajogaiFiltered.map((point) => (
                <div
                  key={point.id}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#F28C28]"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-2">
                      <span className="text-[#F28C28] uppercase tracking-wider font-bold">Ambajogai</span>
                      <span className="px-2 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200">
                        {point.type}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-[#071B3A] group-hover:text-[#F28C28] transition-colors">
                      {point.name}
                    </h3>

                    {point.landmark && (
                      <p className="text-xs text-slate-500 mt-1 flex items-start gap-1">
                        <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{point.landmark}</span>
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">{point.area}</span>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(point.mapSearchQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#102B5C] hover:text-[#F28C28] transition-colors"
                    >
                      <span>Google Map</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
