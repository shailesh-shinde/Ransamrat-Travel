import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Bus, MapPin, Building2, Phone, MessageSquare, 
  ExternalLink, ArrowRight, CornerDownLeft, X, Sparkles, Clock 
} from 'lucide-react';
import { ROUTES_DATA, BOARDING_POINTS, OFFICES_DATA, COMPANY_INFO } from '../data/companyData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Aggregate searchable items
  interface PaletteItem {
    id: string;
    title: string;
    subtitle: string;
    category: 'Route' | 'Boarding Point' | 'Office' | 'Quick Action' | 'Navigation';
    icon: React.ReactNode;
    action: () => void;
    badge?: string;
  }

  const items: PaletteItem[] = [
    // Quick Actions
    {
      id: 'act-call-1',
      title: `Call Booking Desk (${COMPANY_INFO.contacts.primaryPhone})`,
      subtitle: 'Instant phone reservation for all routes',
      category: 'Quick Action',
      icon: <Phone className="w-4 h-4 text-[#D9A441]" />,
      action: () => { window.location.href = `tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`; onClose(); },
      badge: 'Call Now'
    },
    {
      id: 'act-whatsapp',
      title: 'WhatsApp Booking Enquiry (+91 9168683006)',
      subtitle: 'Direct WhatsApp message with pre-filled route inquiry',
      category: 'Quick Action',
      icon: <MessageSquare className="w-4 h-4 text-emerald-500" />,
      action: () => { 
        window.open(`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`, '_blank'); 
        onClose(); 
      },
      badge: 'WhatsApp'
    },
    {
      id: 'act-redbus',
      title: 'Book RanSamrat Travels on RedBus',
      subtitle: 'Official RedBus booking portal (opens in new tab)',
      category: 'Quick Action',
      icon: <ExternalLink className="w-4 h-4 text-red-500" />,
      action: () => { window.open(COMPANY_INFO.externalPlatforms.redBus.url, '_blank'); onClose(); },
      badge: 'RedBus'
    },
    {
      id: 'act-paytm',
      title: 'Book RanSamrat Travels on Paytm',
      subtitle: 'Official Paytm Travel ticketing page',
      category: 'Quick Action',
      icon: <ExternalLink className="w-4 h-4 text-sky-500" />,
      action: () => { window.open(COMPANY_INFO.externalPlatforms.paytm.url, '_blank'); onClose(); },
      badge: 'Paytm'
    },

    // Navigation Pages
    {
      id: 'nav-routes',
      title: 'All Confirmed Routes & Timings',
      subtitle: 'Explore 11 confirmed operational routes connecting Marathwada & Pune',
      category: 'Navigation',
      icon: <Bus className="w-4 h-4 text-blue-500" />,
      action: () => { navigate('/routes'); onClose(); }
    },
    {
      id: 'nav-seats',
      title: 'Seat Numbers & 36-Berth Cabin Chart',
      subtitle: 'View Upper (Up) & Lower (Dn) berth layout (1U-22U, 3L-24L, A-L, 25VIP)',
      category: 'Navigation',
      icon: <Bus className="w-4 h-4 text-emerald-500" />,
      action: () => { navigate('/fleet#seat-layout-guide'); onClose(); },
      badge: '36 Berths'
    },
    {
      id: 'nav-stops',
      title: 'Boarding & Dropping Points Directory',
      subtitle: '21 Pune/PCMC stops, 8 Kalamb stops, 7 Ambajogai stops',
      category: 'Navigation',
      icon: <MapPin className="w-4 h-4 text-emerald-500" />,
      action: () => { navigate('/boarding-points'); onClose(); }
    },
    {
      id: 'nav-fleet',
      title: 'Our Luxury Bus Fleet',
      subtitle: 'BharatBenz AC Sleepers, Recliners, and coach amenities',
      category: 'Navigation',
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
      action: () => { navigate('/fleet'); onClose(); }
    },
    {
      id: 'nav-offices',
      title: 'Offices & Booking Counters',
      subtitle: 'Kalamb Head Office, Nigdi, Bhosari, Shivajinagar, Swargate',
      category: 'Navigation',
      icon: <Building2 className="w-4 h-4 text-purple-500" />,
      action: () => { navigate('/offices-contact'); onClose(); }
    },

    // Routes
    ...ROUTES_DATA.map(r => ({
      id: `route-${r.id}`,
      title: `${r.from} ↔ ${r.to}`,
      subtitle: `Dep: ${r.departure} • Arr: ${r.arrival} • ${r.busType}`,
      category: 'Route' as const,
      icon: <Bus className="w-4 h-4 text-[#D9A441]" />,
      action: () => { navigate(`/routes#${r.id}`); onClose(); },
      badge: r.category
    })),

    // Boarding Points
    ...BOARDING_POINTS.kalamb.map(p => ({
      id: `stop-${p.id}`,
      title: `${p.name} (Kalamb)`,
      subtitle: `${p.area} • ${p.landmark || 'Boarding / Dropping Point'}`,
      category: 'Boarding Point' as const,
      icon: <MapPin className="w-4 h-4 text-amber-500" />,
      action: () => { navigate('/boarding-points#kalamb'); onClose(); },
      badge: 'Kalamb'
    })),
    ...BOARDING_POINTS.pune.slice(0, 10).map(p => ({
      id: `stop-${p.id}`,
      title: `${p.name} (Pune / PCMC)`,
      subtitle: `${p.area} • Landmark: ${p.landmark || 'Stop'}`,
      category: 'Boarding Point' as const,
      icon: <MapPin className="w-4 h-4 text-emerald-500" />,
      action: () => { navigate('/boarding-points#pune'); onClose(); },
      badge: 'Pune'
    })),

    // Offices
    ...OFFICES_DATA.map(o => ({
      id: `office-${o.id}`,
      title: o.title,
      subtitle: `${o.address} (${o.timing})`,
      category: 'Office' as const,
      icon: <Building2 className="w-4 h-4 text-indigo-500" />,
      action: () => { navigate('/offices-contact'); onClose(); },
      badge: o.type === 'Head Office' ? 'HQ' : 'Counter'
    }))
  ];

  const filteredItems = items.filter(item => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  }).slice(0, 10);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-white dark:bg-[#121215] rounded-2xl shadow-2xl border border-slate-200 dark:border-zinc-800 overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-zinc-800">
          <Search className="w-5 h-5 text-slate-400 dark:text-zinc-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a route, stop, office, or command (e.g., Kalamb, Pune, Call, WhatsApp)..."
            className="flex-1 bg-transparent text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500 dark:text-zinc-400">
              No matching routes or destinations found for "{query}".
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-colors text-xs ${
                    isSelected 
                      ? 'bg-slate-100 dark:bg-[#1E1E24] text-slate-900 dark:text-white' 
                      : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-900/60'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div className="truncate">
                      <div className="font-semibold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
                        <span>{item.title}</span>
                        {item.badge && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-zinc-500">
                      {item.category}
                    </span>
                    {isSelected && (
                      <CornerDownLeft className="w-3.5 h-3.5 text-[#D9A441]" />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Shortcut Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 dark:bg-[#0c0c0e] border-t border-slate-200 dark:border-zinc-800 text-[11px] text-slate-500 dark:text-zinc-500">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1.5 py-0.5 bg-white dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 rounded text-[10px]">↑</kbd> <kbd className="px-1.5 py-0.5 bg-white dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 rounded text-[10px]">↓</kbd> to navigate</span>
            <span><kbd className="px-1.5 py-0.5 bg-white dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 rounded text-[10px]">↵</kbd> to select</span>
          </div>
          <span><kbd className="px-1.5 py-0.5 bg-white dark:bg-zinc-800 border border-slate-300 dark:border-zinc-700 rounded text-[10px]">Esc</kbd> to close</span>
        </div>
      </div>
    </div>
  );
};
