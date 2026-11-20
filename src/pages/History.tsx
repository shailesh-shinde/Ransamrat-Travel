import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, Bus, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { HISTORY_MILESTONES, COMPANY_INFO } from '../data/companyData';

export const History: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#071B3A] via-[#102B5C] to-[#071B3A] py-16 sm:py-20 text-white border-b-2 border-[#D9A441]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D9A441]/40 text-[#D9A441] text-xs font-semibold mb-4">
            <span className="font-marathi text-sm font-bold text-white">रणसम्राट ट्रॅव्हल्स</span>
            <span>•</span>
            <span>Organizational Journey</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Company History & Milestones
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal">
            A continuous commitment to reliable passenger connectivity linking Kalamb and Marathwada with Pune and Pimpri-Chinchwad.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-extrabold tracking-wider text-[#102B5C] bg-[#102B5C]/10 px-3 py-1 rounded-full">
            Chronological Development
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B3A] mt-3">
            Milestones in Road Passenger Transport
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            The operational evolution of RanSamrat Travels from local roots in Kalamb to a regional transport choice.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-[#D9A441] ml-4 sm:ml-8 md:ml-32 space-y-12">
          {HISTORY_MILESTONES.map((milestone, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Dot Marker */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#102B5C] border-4 border-[#D9A441] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                <span className="w-2 h-2 rounded-full bg-[#F28C28]" />
              </div>

              {/* Milestone Card */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all group-hover:border-[#D9A441]/60">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#102B5C] text-[#D9A441] font-bold text-xs">
                    {milestone.year}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F5F7FB] text-slate-600 font-semibold text-xs border border-slate-200">
                    {milestone.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#071B3A]">
                  {milestone.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-[#F5F7FB] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-lg text-[#071B3A]">Interested in our operational routes?</h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Explore our 11 confirmed daily bus connections across Maharashtra.</p>
          </div>
          <Link
            to="/routes"
            className="px-6 py-3 rounded-xl bg-[#102B5C] hover:bg-[#071B3A] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-all shadow"
          >
            <span>Explore Confirmed Routes</span>
            <ArrowRight className="w-4 h-4 text-[#D9A441]" />
          </Link>
        </div>

      </div>
    </div>
  );
};
