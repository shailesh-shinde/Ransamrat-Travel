import React, { useState } from 'react';
import { Bus, ZoomIn, CheckCircle2, ShieldCheck, Phone, MessageSquare, Info, Sparkles } from 'lucide-react';
import { FLEET_DATA, FleetVehicle, COMPANY_INFO } from '../data/companyData';
import { FleetModal } from '../components/FleetModal';
import { SeatLayoutGuide } from '../components/SeatLayoutGuide';

export const Fleet: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<FleetVehicle | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const categories = ['all', 'AC Sleeper', 'Non-AC Sleeper', 'Semi-Sleeper', 'Luxury Coaches'];

  const filteredFleet = FLEET_DATA.filter(v => 
    filterCategory === 'all' || v.category === filterCategory
  );

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#071B3A] via-[#102B5C] to-[#071B3A] py-16 sm:py-20 text-white border-b-2 border-[#D9A441]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D9A441]/40 text-[#D9A441] text-xs font-semibold mb-4">
            <span className="font-marathi text-sm font-bold text-white">आमची आधुनिक बस ताफा</span>
            <span>•</span>
            <span>Premium Passenger Fleet</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Luxury Coaches & Sleeper Fleet
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal">
            Designed for superior road suspension, supreme quietness, and deep restful sleep throughout the journey.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
                filterCategory === cat
                  ? 'bg-[#102B5C] text-white shadow-md ring-2 ring-[#D9A441]'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'all' ? 'All Vehicles' : cat}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredFleet.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Container with Zoom Trigger */}
              <div className="relative h-64 sm:h-80 overflow-hidden cursor-pointer" onClick={() => setSelectedVehicle(vehicle)}>
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#071B3A]/90 backdrop-blur-md text-white text-xs font-bold border border-[#D9A441]/40">
                    {vehicle.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-600/90 text-white text-xs font-semibold">
                    {vehicle.capacity}
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVehicle(vehicle);
                  }}
                  className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-[#071B3A] p-2.5 rounded-xl shadow-lg flex items-center gap-1.5 text-xs font-bold transition-transform active:scale-95"
                >
                  <ZoomIn className="w-4 h-4 text-[#D9A441]" />
                  <span>View Photos & Amenities</span>
                </button>
              </div>

              {/* Vehicle Details */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-[#071B3A]">{vehicle.title}</h3>
                    <p className="text-xs text-[#D9A441] font-semibold mt-0.5">{vehicle.layout}</p>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {vehicle.description}
                </p>

                {/* Actual Amenities Display */}
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#102B5C] block mb-2.5">
                    Vehicle Amenities
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {vehicle.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Charter or Enquiry Assistance */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-slate-500">
                    Daily scheduled runs & private group bookings.
                  </span>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <a
                      href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
                      className="flex-1 sm:flex-none px-4 py-2 bg-[#102B5C] text-white rounded-xl text-xs font-bold hover:bg-[#071B3A] transition-colors flex items-center justify-center gap-1.5 shadow"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
                      <span>Call Desk</span>
                    </a>
                    <a
                      href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(`Enquiry regarding ${vehicle.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-4 py-2 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-500 transition-colors flex items-center justify-center gap-1.5 shadow"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* 36-Berth Seat Numbers & Cabin Layout Guide */}
        <SeatLayoutGuide />

        {/* Official Fleet Showcase Gallery */}
        <section className="bg-white dark:bg-[#121215] p-6 sm:p-10 rounded-3xl border border-slate-200 dark:border-zinc-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-zinc-800 pb-4">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#102B5C] dark:text-[#D9A441] bg-[#102B5C]/10 dark:bg-amber-950/40 px-3 py-1 rounded-full">
                Authentic Fleet Gallery
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#071B3A] dark:text-white mt-2">
                Real RanSamrat Travels Coaches on the Road
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-1">
                Explore actual photographs of our Ashok Leyland / BharatBenz luxury sleeper coaches in service.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800/40">
                ● 100% Verified Fleet Photos
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { title: 'RanSamrat Luxury Sleeper (AR01 T 3006)', img: '/images/bus-hero.jpg', tag: 'AR01 T 3006' },
              { title: 'RanSamrat Sleeper Coach (AR01 T 6003)', img: '/images/bus-twin.jpg', tag: 'AR01 T 6003' },
              { title: 'Executive High-Deck Front Profile (AR01 T 3006)', img: '/images/bus-front-angle.jpg', tag: 'AR01 T 3006' },
              { title: 'Departure Preparation (AR01 T 6003)', img: '/images/bus-front-garland.jpg', tag: 'AR01 T 6003' },
              { title: 'Stationed Coach (AR01 T 6003)', img: '/images/bus-front-palm.jpg', tag: 'AR01 T 6003' },
              { title: 'Official RanSamrat Sleeper Amenities', img: '/images/bus-amenities-poster.jpg', tag: 'Verified Amenities' },
              { title: 'RanSamrat Travels Twin Fleet Poster', img: '/images/bus-twin-poster.jpg', tag: 'Official Brand' }
            ].map((item, i) => (
              <div 
                key={i}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 bg-slate-900 cursor-pointer shadow-sm hover:shadow-xl transition-all"
                onClick={() => setSelectedVehicle({
                  id: `gallery-${i}`,
                  title: item.title,
                  category: item.tag,
                  capacity: '36 Berths',
                  layout: '2+1 Luxury Sleeper Configuration (36 Berths)',
                  description: 'Authentic photograph of RanSamrat Travels 36-berth operational bus fleet.',
                  image: item.img,
                  gallery: [
                    '/images/bus-hero.jpg',
                    '/images/bus-twin.jpg',
                    '/images/bus-front-angle.jpg',
                    '/images/bus-front-garland.jpg',
                    '/images/bus-amenities-poster.jpg'
                  ],
                  amenities: [
                    'Free Wi-Fi',
                    'Live GPS Tracking',
                    'Individual Charging Points',
                    'Pillows & Blankets',
                    'Clean White Bedsheets',
                    'Air Conditioning'
                  ]
                })}
              >
                <div className="h-52 w-full overflow-hidden flex items-center justify-center bg-slate-950">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#102B5C]/90 text-[#D9A441] border border-[#D9A441]/40">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-bold truncate">{item.title}</div>
                  <span className="text-[10px] text-slate-300 flex items-center gap-1 mt-0.5">
                    <ZoomIn className="w-3 h-3 text-[#D9A441]" />
                    Click to enlarge
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Private Travel Vehicles & Charter Notice */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase text-[#D9A441]">Private Travel Vehicles</span>
            <h3 className="text-xl font-bold text-[#071B3A]">Family Functions, Weddings & Corporate Group Charters</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              RanSamrat Travels provides luxury sleeper and semi-sleeper coach charter services for private tours, weddings, pilgrimage yatras, and corporate excursions departing from Marathwada and Pune.
            </p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
            className="px-6 py-3 bg-[#D9A441] text-[#071B3A] font-bold text-xs sm:text-sm rounded-xl hover:bg-[#F3C96E] transition-all shrink-0 shadow"
          >
            Inquire for Private Bus Hire
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      <FleetModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
      />
    </div>
  );
};
