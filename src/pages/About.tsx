import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bus, ShieldCheck, Heart, Award, MapPin, Phone, MessageSquare, 
  Clock, Compass, CheckCircle2, ArrowRight, Sparkles 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const About: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#071B3A] via-[#102B5C] to-[#071B3A] py-16 sm:py-20 text-white border-b-2 border-[#D9A441]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D9A441]/40 text-[#D9A441] text-xs font-semibold mb-4">
            <span className="font-marathi text-sm font-bold text-white">रणसम्राट ट्रॅव्हल्स</span>
            <span>•</span>
            <span>Company Profile</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About RanSamrat Travels
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal">
            Your Journey, Our Responsibility. Connecting Marathwada with Pune and Pimpri-Chinchwad through dependable, safe road transport.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Company Overview & Head Office Card */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#102B5C] bg-[#102B5C]/10 px-3 py-1 rounded-full">
              Passenger Transportation Company
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B3A]">
              Connecting Marathwada to Maharashtra's Economic Lifeline
            </h2>
            <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                <strong>RanSamrat Travels (रणसम्राट ट्रॅव्हल्स)</strong> is based in <strong>Kalamb, District Dharashiv, Maharashtra</strong>. Our core focus is intercity passenger transportation, connecting communities across the Marathwada region with Pune and the twin-city industrial hub of Pimpri-Chinchwad.
              </p>
              <p>
                Recognizing the critical need for punctual, clean, and safe road transit between rural and semi-urban taluka towns and the state’s educational and employment centers, RanSamrat Travels provides overnight luxury AC sleeper and executive coach operations that commuters, families, and business travelers count on daily.
              </p>
              <p>
                From our central Head Office in Kalamb, our network spans major transit corridors serving Ambajogai, Kaij, Barshi, Yermala, Latur, Murud, Dhoki, Ahmedpur, and Sirur Tajband, reaching more than 20 prominent boarding and drop-off hubs in Pune and PCMC.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#D9A441] shrink-0 mt-1" />
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-[#071B3A]">Headquarters Location:</strong> Near Sub-District Hospital, Main Bus Stand Road, Kalamb, District Dharashiv, Maharashtra – 413507.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-zinc-800">
              <img
                src="/images/bus-hero.jpg"
                alt="RanSamrat Travels Luxury Coach (AR01 T 3006)"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B3A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-semibold text-[#D9A441] block">Our Promise</span>
                <span className="text-lg font-bold">Safe, Restful & Dignified Road Travel</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-[#D9A441]/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#102B5C] text-[#D9A441] flex items-center justify-center mb-5">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#071B3A]">Our Mission</h3>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              To provide comfortable, punctual, and safe intercity passenger transportation connecting Marathwada with Pune and Pimpri-Chinchwad. We strive to maintain disciplined vehicle maintenance, courteous staff assistance, and transparent customer service across all touchpoints.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-[#F28C28]/50 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#071B3A] text-[#F28C28] flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#071B3A]">Our Vision</h3>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              To be the premier and most trusted passenger travel partner across Marathwada, celebrated for our commitment to passenger well-being, hygienic coaches, modern safety technologies, and dependable connectivity for everyday commuters.
            </p>
          </div>
        </section>

        {/* Passenger Comfort & Service Commitment */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase font-extrabold tracking-wider text-[#102B5C] bg-[#102B5C]/10 px-3 py-1 rounded-full">
              Quality Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071B3A] mt-3">
              Passenger Comfort & Service Commitment
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Every RanSamrat Travels journey is managed with rigorous attention to safety, cleanliness, and passenger peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#F5F7FB] border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#102B5C] text-[#D9A441] flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#071B3A]">Safety & GPS Tracking</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Coaches equipped with GPS tracking, CCTV surveillance, emergency safety exits, fire extinguishers, and speed limiters adhering to regional transport safety mandates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F7FB] border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#102B5C] text-emerald-400 flex items-center justify-center font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#071B3A]">Passenger Comfort</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plush wide sleeper berths with clean linens, reading lights, individual mobile charging points, powerful air-conditioning, and smooth air-suspension on long highways.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F7FB] border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#102B5C] text-[#F28C28] flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-[#071B3A]">Disciplined Punctuality</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Carefully coordinated departure windows from Pune and Marathwada hubs ensure travelers arrive comfortably in the morning, on schedule for workday commitments.
              </p>
            </div>

          </div>
        </section>

        {/* Milestone Callout */}
        <section className="bg-gradient-to-r from-[#102B5C] to-[#071B3A] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="text-xs font-semibold text-[#D9A441] uppercase tracking-wider block mb-1">
              Our Journey Over The Years
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Discover RanSamrat Travels Company History
            </h3>
            <p className="text-sm text-slate-300 mt-2 max-w-xl">
              Learn about our origins in Kalamb, route expansions across Marathwada, and fleet modernization.
            </p>
          </div>
          <div>
            <Link
              to="/history"
              className="px-6 py-3.5 rounded-xl bg-[#D9A441] hover:bg-[#F3C96E] text-[#071B3A] font-bold text-sm inline-flex items-center gap-2 shadow-lg transition-all"
            >
              <span>Explore History Milestones</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};
