import React, { useState } from 'react';
import { RouteItem } from '../data/companyData';
import { 
  Bus, Clock, MapPin, Phone, MessageSquare, ArrowRight, 
  Copy, Check, Moon, Sun, Shield, Sparkles 
} from 'lucide-react';

interface RouteCardProps {
  route: RouteItem;
}

export const RouteCard: React.FC<RouteCardProps> = ({ route }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(route.primaryPhone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = `Hello RanSamrat Travels, I want to enquire about ticket availability for ${route.from} to ${route.to} (${route.busType}). Please share departure timings and fare.`;

  return (
    <div 
      id={route.id}
      className="group relative bg-white dark:bg-[#121215] rounded-3xl border border-slate-200/90 dark:border-zinc-800/90 shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/50 transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      {/* Top Accent Gradient Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#102B5C] via-[#D9A441] to-[#F28C28]" />

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 pb-4">
        
        {/* Category & Status Pill Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#102B5C]/10 dark:bg-blue-950/40 text-[#102B5C] dark:text-blue-300 border border-[#102B5C]/15 dark:border-blue-800/40">
            <Bus className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>{route.busType}</span>
          </span>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Confirmed Daily Service
          </span>
        </div>

        {/* Origin & Destination Display */}
        <div className="bg-[#F8FAFC] dark:bg-[#18181D] p-4 rounded-2xl border border-slate-100 dark:border-zinc-800/80 mb-4">
          <div className="flex items-center justify-between gap-2">
            
            {/* From City */}
            <div className="flex-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-600 dark:text-zinc-300 block mb-0.5">
                From City
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-[#071B3A] dark:text-white tracking-tight">
                {route.from}
              </h3>
            </div>

            {/* Travel Route Visual Flow */}
            <div className="flex flex-col items-center px-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#102B5C] to-[#071B3A] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <ArrowRight className="w-4 h-4 text-[#D9A441]" />
              </div>
              {route.distance && (
                <span className="text-[10px] font-semibold text-slate-600 dark:text-zinc-300 mt-1 tabular-nums">
                  {route.distance}
                </span>
              )}
            </div>

            {/* To City */}
            <div className="flex-1 text-right">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-600 dark:text-zinc-300 block mb-0.5">
                To City
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-[#071B3A] dark:text-white tracking-tight">
                {route.to}
              </h3>
            </div>

          </div>

          {/* Departure / Duration / Arrival Grid */}
          <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-200/70 dark:border-zinc-800 text-center text-xs">
            <div>
              <div className="flex items-center justify-center gap-1 text-[10px] text-slate-600 dark:text-zinc-300 uppercase font-bold">
                <Moon className="w-3 h-3 text-indigo-400" />
                <span>Departure</span>
              </div>
              <span className="text-sm font-black text-[#102B5C] dark:text-[#D9A441] tabular-nums mt-0.5 block">
                {route.departure}
              </span>
            </div>

            <div className="border-x border-slate-200 dark:border-zinc-800 px-1">
              <div className="flex items-center justify-center gap-1 text-[10px] text-slate-600 dark:text-zinc-300 uppercase font-bold">
                <Clock className="w-3 h-3 text-[#D9A441]" />
                <span>Duration</span>
              </div>
              <span className="text-xs font-bold text-slate-800 dark:text-zinc-200 tabular-nums mt-0.5 block">
                {route.duration}
              </span>
            </div>

            <div>
              <div className="flex items-center justify-center gap-1 text-[10px] text-slate-600 dark:text-zinc-300 uppercase font-bold">
                <Sun className="w-3 h-3 text-amber-500" />
                <span>Arrival</span>
              </div>
              <span className="text-sm font-black text-[#102B5C] dark:text-[#D9A441] tabular-nums mt-0.5 block">
                {route.arrival}
              </span>
            </div>
          </div>
        </div>

        {/* Boarding and Dropping Highlights */}
        <div className="space-y-2.5 text-xs">
          <div>
            <div className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300 font-semibold mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#D9A441] shrink-0" />
              <span>Key Boarding Points:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {route.boardingHighlights.slice(0, 4).map((bp, i) => (
                <span 
                  key={i} 
                  className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 text-[11px] font-medium"
                >
                  {bp}
                </span>
              ))}
              {route.boardingHighlights.length > 4 && (
                <span className="px-2 py-0.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 text-[11px] font-bold">
                  +{route.boardingHighlights.length - 4} more
                </span>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-slate-700 dark:text-zinc-300 font-semibold mb-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Key Dropping Points:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {route.droppingHighlights.map((dp, i) => (
                <span 
                  key={i} 
                  className="px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 text-[11px] font-medium"
                >
                  {dp}
                </span>
              ))}
            </div>
          </div>

          {route.notes && (
            <p className="text-[11px] text-slate-600 dark:text-zinc-300 italic pt-1 border-t border-slate-100 dark:border-zinc-800/80">
              * {route.notes}
            </p>
          )}
        </div>

      </div>

      {/* Card Action Footer */}
      <div className="p-4 sm:p-5 bg-slate-50 dark:bg-[#15151A] border-t border-slate-200/80 dark:border-zinc-800 space-y-2.5">
        
        {/* Phone Copy & Reservation Assistance Row */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-600 dark:text-zinc-300 font-medium">Direct Booking Desk:</span>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-[#071B3A] dark:text-zinc-100 tabular-nums">
              {route.primaryPhone}
            </span>
            <button
              onClick={handleCopyPhone}
              className="p-1 rounded-md text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
              title="Copy Phone Number"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* 2 Big Action Buttons: Call & WhatsApp */}
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${route.primaryPhone.replace(/\s+/g, '')}`}
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#102B5C] hover:bg-[#071B3A] dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Call to Book</span>
          </a>

          <a
            href={`https://wa.me/919168683006?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

      </div>
    </div>
  );
};
