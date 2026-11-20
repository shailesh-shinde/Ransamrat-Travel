import React, { useState, useEffect } from 'react';
import { X, ZoomIn, CheckCircle2, Bus, Shield, Phone, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { FleetVehicle, COMPANY_INFO } from '../data/companyData';

interface FleetModalProps {
  vehicle: FleetVehicle | null;
  onClose: () => void;
}

export const FleetModal: React.FC<FleetModalProps> = ({ vehicle, onClose }) => {
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (vehicle) {
      setActiveImage(vehicle.image);
    }
  }, [vehicle]);

  if (!vehicle) return null;

  const galleryImages = vehicle.gallery && vehicle.gallery.length > 0 ? vehicle.gallery : [vehicle.image];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071B3A]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-[#121215] rounded-3xl overflow-hidden shadow-2xl border border-[#D9A441]/40 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#102B5C] text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center shrink-0">
              <img src="/logo.jpg" alt="RT Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">{vehicle.title}</h3>
              <span className="text-xs text-[#D9A441] font-semibold">{vehicle.category} • {vehicle.capacity}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Large Image */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-inner group bg-slate-950 flex items-center justify-center min-h-[280px] sm:min-h-[380px]">
            <img
              src={activeImage || vehicle.image}
              alt={vehicle.title}
              className="w-full max-h-[420px] object-contain transition-all duration-300"
            />
            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs flex items-center gap-1.5 border border-white/10">
              <ZoomIn className="w-3.5 h-3.5 text-[#D9A441]" />
              <span>Official RanSamrat Travels Fleet</span>
            </div>
          </div>

          {/* Gallery Thumbnails Strip */}
          {galleryImages.length > 1 && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 block mb-2">
                Click photo to preview:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {galleryImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                      (activeImage || vehicle.image) === imgUrl
                        ? 'border-[#D9A441] ring-2 ring-[#D9A441]/50 scale-105'
                        : 'border-slate-200 dark:border-zinc-700 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Description & Layout */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#102B5C] dark:text-[#D9A441] mb-1">
              Vehicle Overview & Comfort Specifications
            </h4>
            <p className="text-slate-600 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
              {vehicle.description}
            </p>
            <div className="mt-2.5 text-xs font-semibold text-slate-600 dark:text-zinc-300 bg-[#F5F7FB] dark:bg-[#18181F] p-3 rounded-xl border border-slate-200 dark:border-zinc-800">
              <span className="text-[#071B3A] dark:text-white font-bold">Configuration:</span> {vehicle.layout}
            </div>
          </div>

          {/* Verified Amenities */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#102B5C] dark:text-[#D9A441] mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#D9A441]" />
              Verified Onboard Amenities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {vehicle.amenities.map((amenity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs text-slate-700 dark:text-zinc-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="font-medium">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-[#16161D] border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 dark:text-zinc-400 text-center sm:text-left">
            Inquire about this coach for regular travel or private charter.
          </span>
          <div className="flex gap-2 w-full sm:w-auto">
            <a
              href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
              className="flex-1 sm:flex-none px-4 py-2 bg-[#102B5C] hover:bg-[#071B3A] text-white text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
              <span>Call {COMPANY_INFO.contacts.primaryPhone}</span>
            </a>
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 bg-slate-200 dark:bg-zinc-800 hover:bg-slate-300 dark:hover:bg-zinc-700 text-slate-800 dark:text-zinc-200 text-xs font-bold rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
