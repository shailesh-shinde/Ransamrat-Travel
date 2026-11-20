import React from 'react';
import { 
  Building2, MapPin, Phone, Clock, ShieldCheck, ExternalLink, 
  CheckCircle2, Compass, MessageSquare, AlertCircle 
} from 'lucide-react';
import { OFFICES_DATA, COMPANY_INFO } from '../data/companyData';

export const OfficesContact: React.FC = () => {
  const headOffice = OFFICES_DATA.find(o => o.type === 'Head Office');
  const agentCounters = OFFICES_DATA.filter(o => o.type !== 'Head Office');

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#071B3A] via-[#102B5C] to-[#071B3A] py-16 sm:py-20 text-white border-b-2 border-[#D9A441]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D9A441]/40 text-[#D9A441] text-xs font-semibold mb-4">
            <span className="font-marathi text-sm font-bold text-white">कार्यालय व संपर्क केंद्रे</span>
            <span>•</span>
            <span>Head Office & Passenger Counters</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            OUR OFFICES & CONTACT INFORMATION
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal">
            Visit our central administration headquarters in Kalamb or coordinate with our authorized boarding counters in Pune and PCMC.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* SECTION 1: HEAD OFFICE – KALAMB (Clearly distinguished) */}
        {headOffice && (
          <section className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-[#D9A441] text-[#071B3A] font-extrabold text-xs uppercase tracking-wider shadow">
                Central Corporate Headquarters
              </span>
            </div>

            <div className="bg-white rounded-3xl border-2 border-[#D9A441] shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Office Info Side */}
                <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-[#D9A441] uppercase tracking-wider mb-1">
                      <Building2 className="w-4 h-4 text-[#D9A441]" />
                      <span>Administrative & Ticketing Headquarters</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B3A]">
                      {headOffice.title}
                    </h2>
                    <span className="text-sm font-semibold text-slate-500 font-marathi">
                      रणसम्राट ट्रॅव्हल्स - मुख्य कार्यालय, कळंब (जि. धाराशिव)
                    </span>
                  </div>

                  <div className="space-y-3 text-sm text-slate-700">
                    <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F5F7FB] border border-slate-200">
                      <MapPin className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#071B3A] block">Full Postal Address:</strong>
                        <span>{headOffice.address}</span>
                        <div className="text-xs text-slate-500 mt-0.5 italic">
                          Landmark: {headOffice.landmark}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F5F7FB] border border-slate-200">
                        <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#071B3A] block">Opening Hours:</strong>
                          <span className="text-xs">{headOffice.timing}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F5F7FB] border border-slate-200">
                        <Phone className="w-5 h-5 text-[#102B5C] shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-[#071B3A] block">Official Contacts:</strong>
                          <div className="text-xs font-bold text-[#102B5C]">
                            {headOffice.phoneNumbers.join(' / ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Available Services */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#102B5C] mb-2.5">
                      Available Head Office Services:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {headOffice.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#D9A441] shrink-0" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="pt-2 flex flex-wrap gap-3">
                    <a
                      href={`tel:${headOffice.phoneNumbers[0].replace(/\s+/g, '')}`}
                      className="px-5 py-3 rounded-xl bg-[#102B5C] hover:bg-[#071B3A] text-white font-bold text-xs flex items-center gap-2 shadow"
                    >
                      <Phone className="w-4 h-4 text-[#D9A441]" />
                      <span>Call Head Office</span>
                    </a>

                    <a
                      href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent('Hello RanSamrat Travels Kalamb Head Office, I would like to inquire about bus service.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp Desk</span>
                    </a>

                    <a
                      href={headOffice.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#071B3A] font-bold text-xs flex items-center gap-2"
                    >
                      <span>Google Maps Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Map View / Location Visual */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#102B5C] to-[#071B3A] p-6 sm:p-10 text-white flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#D9A441] text-xs font-semibold">
                      <Compass className="w-3.5 h-3.5" />
                      <span>Kalamb Bus Stand Corridor</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Easily Accessible in Kalamb Town
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Situated right along Main Bus Stand Road near the Sub-District Hospital and opposite Priyadarshini Bank. Passengers can easily walk from the Kalamb MSRTC Bus Stand.
                    </p>
                  </div>

                  <div className="mt-8 p-4 rounded-2xl bg-black/40 border border-white/10 text-xs space-y-2">
                    <div className="text-slate-400 font-medium">Google Maps Search Query:</div>
                    <div className="font-mono text-white text-[11px] bg-white/5 p-2 rounded-lg">
                      {headOffice.mapEmbedQuery}
                    </div>
                    <a
                      href={headOffice.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full mt-2 py-2.5 px-3 rounded-xl bg-[#D9A441] text-[#071B3A] font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#F3C96E] transition-colors"
                    >
                      <span>Open Location in Google Maps App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* SECTION 2: OTHER COUNTER / AGENT LOCATIONS */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#102B5C] bg-[#102B5C]/10 px-3 py-1 rounded-full">
              Pimpri-Chinchwad & Pune Counters
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B3A] mt-2">
              Boarding Counters & Agent Pickup Points
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Authorized partner counter spots and evening passenger assembly points across PCMC and Pune.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agentCounters.map((counter, idx) => (
              <div
                key={counter.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group hover:border-[#102B5C]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                      Counter #{idx + 1} • {counter.city}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Evening Boarding
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#071B3A] group-hover:text-[#102B5C] transition-colors">
                    {counter.title}
                  </h3>

                  <div className="mt-3 space-y-2 text-xs text-slate-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                      <span>{counter.address}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500">
                      <span className="font-semibold text-slate-700">Landmark:</span>
                      <span>{counter.landmark}</span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500">
                      <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{counter.timing}</span>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                      Counter Facilities:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {counter.services.map((s, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={`tel:${counter.phoneNumbers[0].replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102B5C] hover:text-[#D9A441]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
                    <span>{counter.phoneNumbers[0]}</span>
                  </a>

                  <a
                    href={counter.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#071B3A] text-xs font-semibold transition-colors"
                  >
                    <span>View Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
