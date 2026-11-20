import React, { useState } from 'react';
import { 
  Bus, CheckCircle2, Phone, MessageSquare, Info, Shield, 
  Sparkles, Maximize2, Moon, Sun, ArrowRight, Star, Ruler, Layers 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface SeatCell {
  code: string;
  deck: 'Up' | 'Dn';
  type: 'berth' | 'rex' | 'eex' | 'empty';
  fare?: string;
  label?: string;
  bgClass: string;
  borderClass: string;
  textClass: string;
}

export const SeatLayoutGuide: React.FC = () => {
  const [selectedSeat, setSelectedSeat] = useState<{
    code: string;
    deck: string;
    fare: string;
    description: string;
  }>({
    code: '1U',
    deck: 'Upper Deck (Up)',
    fare: '₹ 1000',
    description: 'Right-Side Upper Window Berth'
  });

  const [activeDeckTab, setActiveDeckTab] = useState<'matrix' | 'original'>('matrix');

  // Exact 8-column header from the uploaded official chart
  const colHeaders: { deck: 'Up' | 'Dn'; label: string; desc: string }[] = [
    { deck: 'Up', label: 'Up', desc: 'Single Upper' },
    { deck: 'Dn', label: 'Dn', desc: 'Single Lower' },
    { deck: 'Dn', label: 'Dn', desc: 'Cabin Aisle' },
    { deck: 'Dn', label: 'Dn', desc: 'Center Pass' },
    { deck: 'Dn', label: 'Dn', desc: 'Double Lower Window' },
    { deck: 'Dn', label: 'Dn', desc: 'Double Lower Aisle' },
    { deck: 'Up', label: 'Up', desc: 'Double Upper Aisle' },
    { deck: 'Up', label: 'Up', desc: 'Double Upper Window' },
  ];

  // Exact 6 rows matching the user's uploaded chart
  const rowsData: SeatCell[][] = [
    // Row 1
    [
      { code: 'B', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Single', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: 'A', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Single', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '', deck: 'Dn', type: 'empty', bgClass: 'bg-transparent', borderClass: 'border-slate-200 dark:border-zinc-800', textClass: '' },
      { code: '', deck: 'Dn', type: 'empty', bgClass: 'bg-transparent', borderClass: 'border-slate-200 dark:border-zinc-800', textClass: '' },
      { code: '4L', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Double Window', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '3L', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Double Aisle', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '2U', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Double Aisle', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '1U', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Double Window', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' }
    ],
    // Row 2
    [
      { code: 'D', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Single', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: 'C', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Single', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: 'R Ex', deck: 'Dn', type: 'rex', fare: 'Desk', label: 'Reserved Executive', bgClass: 'bg-[#ff69b4] hover:bg-[#f472b6] text-white', borderClass: 'border-pink-600', textClass: 'text-white font-bold' },
      { code: '', deck: 'Dn', type: 'empty', bgClass: 'bg-transparent', borderClass: 'border-slate-200 dark:border-zinc-800', textClass: '' },
      { code: '8L', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Double Window', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '7L', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Double Aisle', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '6U', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Double Aisle', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '5U', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Double Window', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' }
    ],
    // Row 3
    [
      { code: 'F', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Single', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: 'E', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Single', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '', deck: 'Dn', type: 'empty', bgClass: 'bg-transparent', borderClass: 'border-slate-200 dark:border-zinc-800', textClass: '' },
      { code: '', deck: 'Dn', type: 'empty', bgClass: 'bg-transparent', borderClass: 'border-slate-200 dark:border-zinc-800', textClass: '' },
      { code: '12L', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Double Window', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '11L', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Double Aisle', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '10U', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Double Aisle', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '9U', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Double Window', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' }
    ],
    // Row 4
    [
      { code: 'H', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Single', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: 'G', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Single', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '', deck: 'Dn', type: 'empty', bgClass: 'bg-transparent', borderClass: 'border-slate-200 dark:border-zinc-800', textClass: '' },
      { code: '', deck: 'Dn', type: 'empty', bgClass: 'bg-transparent', borderClass: 'border-slate-200 dark:border-zinc-800', textClass: '' },
      { code: '16L', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Double Window', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '15L', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Double Aisle', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '14U', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Double Aisle', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '13U', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Double Window', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' }
    ],
    // Row 5
    [
      { code: 'J', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Single', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: 'I', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Single', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: 'R Ex', deck: 'Dn', type: 'rex', fare: 'Desk', label: 'Reserved Executive', bgClass: 'bg-[#ff69b4] hover:bg-[#f472b6] text-white', borderClass: 'border-pink-600', textClass: 'text-white font-bold' },
      { code: 'E Ex', deck: 'Dn', type: 'eex', fare: 'Desk', label: 'Emergency Executive', bgClass: 'bg-[#e2a874] hover:bg-[#dd9454] text-white', borderClass: 'border-amber-600', textClass: 'text-white font-bold' },
      { code: '20L', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Double Window', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '19L', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Double Aisle', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '18U', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Double Aisle', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '17U', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Double Window', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' }
    ],
    // Row 6 (Rear Row)
    [
      { code: 'L', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Rear Single', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: 'K', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Rear Single', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: 'E Ex', deck: 'Dn', type: 'eex', fare: 'Desk', label: 'Emergency Executive', bgClass: 'bg-[#e2a874] hover:bg-[#dd9454] text-white', borderClass: 'border-amber-600', textClass: 'text-white font-bold' },
      { code: '25VIP', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Rear VIP Berth', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '24L', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Rear Double Window', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '23L', deck: 'Dn', type: 'berth', fare: '1000', label: 'Lower Rear Double Aisle', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '22U', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Rear Double Aisle', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' },
      { code: '21U', deck: 'Up', type: 'berth', fare: '1000', label: 'Upper Rear Double Window', bgClass: 'bg-[#bbf7d0] hover:bg-[#86efac] dark:bg-emerald-950/60', borderClass: 'border-red-500', textClass: 'text-slate-900 dark:text-emerald-100' }
    ]
  ];

  const handleSeatClick = (cell: SeatCell) => {
    if (!cell.code) return;
    setSelectedSeat({
      code: cell.code,
      deck: cell.deck === 'Up' ? 'Upper Deck (Up)' : 'Lower Deck (Dn)',
      fare: cell.fare ? `₹ ${cell.fare}` : 'Enquiry',
      description: cell.label || (cell.deck === 'Up' ? 'Upper Sleeper Berth' : 'Lower Sleeper Berth')
    });
  };

  const whatsappMessage = `Hello RanSamrat Travels, I want to reserve Berth "${selectedSeat.code}" (${selectedSeat.description}). Please confirm availability and departure timing.`;

  return (
    <section id="seat-layout-guide" className="bg-white dark:bg-[#121215] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-zinc-800 shadow-sm space-y-8">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-zinc-800 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#102B5C]/10 dark:bg-blue-950/40 text-[#102B5C] dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Bus className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>Official Coach Seating Chart</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#071B3A] dark:text-white">
            Seat Numbers & Berth Size Specifications
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-1 max-w-2xl">
            Official 36-berth cabin layout diagram for RanSamrat Travels coaches (AR01 T 3006 & AR01 T 6003). Use these exact seat numbers when calling or messaging our reservation desk.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2 bg-[#F8FAFC] dark:bg-[#18181F] p-1.5 rounded-2xl border border-slate-200 dark:border-zinc-700">
          <button
            onClick={() => setActiveDeckTab('matrix')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeDeckTab === 'matrix'
                ? 'bg-[#102B5C] text-white shadow-md'
                : 'text-slate-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
            }`}
          >
            Digital 8-Column Chart
          </button>
          <button
            onClick={() => setActiveDeckTab('original')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeDeckTab === 'original'
                ? 'bg-[#102B5C] text-white shadow-md'
                : 'text-slate-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
            }`}
          >
            Original Dispatch Photo
          </button>
        </div>
      </div>

      {/* BERTH SIZE & DIMENSIONS SPECIFICATIONS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#102B5C]/5 via-[#D9A441]/10 to-[#F28C28]/5 dark:from-[#181822] dark:to-[#121824] border border-[#D9A441]/30">
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-zinc-400 flex items-center gap-1">
            <Ruler className="w-3 h-3 text-[#D9A441]" />
            Berth Length
          </span>
          <div className="text-base sm:text-lg font-black text-[#071B3A] dark:text-[#D9A441] tabular-nums">
            6.0 Feet (72 in)
          </div>
          <p className="text-[11px] text-slate-600 dark:text-zinc-400">Full-length adult stretch</p>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-zinc-400 flex items-center gap-1">
            <Ruler className="w-3 h-3 text-[#D9A441]" />
            Single Berth Width
          </span>
          <div className="text-base sm:text-lg font-black text-[#071B3A] dark:text-[#D9A441] tabular-nums">
            2.5 Feet (30 in)
          </div>
          <p className="text-[11px] text-slate-600 dark:text-zinc-400">Private cabin comfort</p>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-zinc-400 flex items-center gap-1">
            <Ruler className="w-3 h-3 text-[#D9A441]" />
            Sitting Headroom
          </span>
          <div className="text-base sm:text-lg font-black text-[#071B3A] dark:text-[#D9A441] tabular-nums">
            3.2 Feet (38 in)
          </div>
          <p className="text-[11px] text-slate-600 dark:text-zinc-400">Upright sitting clearance</p>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-zinc-400 flex items-center gap-1">
            <Layers className="w-3 h-3 text-emerald-500" />
            Total Capacity
          </span>
          <div className="text-base sm:text-lg font-black text-[#102B5C] dark:text-emerald-400 tabular-nums">
            36 Sleeper Berths
          </div>
          <p className="text-[11px] text-slate-600 dark:text-zinc-400">18 Upper + 18 Lower</p>
        </div>
      </div>

      {activeDeckTab === 'original' ? (
        /* ORIGINAL DISPATCH PHOTO VIEW */
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-950 dark:text-amber-200 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Info className="w-4 h-4 text-[#D9A441] shrink-0" />
              This is the official RanSamrat Travels 36-berth dispatch chart used by our ticketing desks and conductors.
            </span>
            <a
              href="/images/bus-seat-layout.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#102B5C] dark:text-[#D9A441] underline underline-offset-2 shrink-0 ml-2"
            >
              Open Full Image ↗
            </a>
          </div>

          <div className="max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-slate-300 dark:border-zinc-700 shadow-xl bg-white p-2">
            <img
              src="/images/bus-seat-layout.jpg"
              alt="RanSamrat Travels Official 36-Berth Seat Chart"
              className="w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      ) : (
        /* DIGITAL 8-COLUMN CHART REPRODUCTION */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Chart Column (8 Columns) */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Legend Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs bg-slate-50 dark:bg-zinc-900/70 p-3 rounded-2xl border border-slate-200 dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-zinc-300">
                  <span className="w-3.5 h-3.5 rounded bg-[#bbf7d0] border border-red-500 inline-block" />
                  Regular Berth (₹ 1000)
                </span>
                <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-zinc-300">
                  <span className="w-3.5 h-3.5 rounded bg-[#ff69b4] border border-pink-600 inline-block" />
                  R Ex (Reserved)
                </span>
                <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-zinc-300">
                  <span className="w-3.5 h-3.5 rounded bg-[#e2a874] border border-amber-600 inline-block" />
                  E Ex (Executive)
                </span>
              </div>
              <span className="text-[11px] text-slate-400">Click any berth to view details</span>
            </div>

            {/* The 8-Column Responsive Grid Container */}
            <div className="overflow-x-auto pb-2">
              <div className="min-w-[620px] bg-[#F8FAFC] dark:bg-[#18181F] p-4 rounded-3xl border-2 border-slate-200 dark:border-zinc-700 shadow-inner">
                
                {/* 8 Header Pills (Up, Dn, Dn, Dn, Dn, Dn, Up, Up) */}
                <div className="grid grid-cols-8 gap-1.5 mb-2.5">
                  {colHeaders.map((hdr, idx) => (
                    <div 
                      key={idx}
                      className="py-1.5 px-1 rounded-xl bg-slate-600 dark:bg-zinc-700 text-white text-center shadow-sm"
                    >
                      <div className="text-xs font-black tracking-wider uppercase">{hdr.label}</div>
                      <div className="text-[9px] text-slate-200 truncate hidden sm:block">{hdr.desc}</div>
                    </div>
                  ))}
                </div>

                {/* 6 Rows of Berths */}
                <div className="space-y-1.5">
                  {rowsData.map((row, rIdx) => (
                    <div key={rIdx} className="grid grid-cols-8 gap-1.5">
                      {row.map((cell, cIdx) => {
                        if (cell.type === 'empty') {
                          return (
                            <div 
                              key={cIdx} 
                              className="h-16 rounded-xl border border-slate-200/50 dark:border-zinc-800/60 bg-transparent flex items-center justify-center"
                            >
                              <span className="text-[9px] text-slate-300 dark:text-zinc-700 font-mono">·</span>
                            </div>
                          );
                        }

                        const isSelected = selectedSeat.code === cell.code;

                        return (
                          <button
                            key={cIdx}
                            onClick={() => handleSeatClick(cell)}
                            className={`h-16 rounded-xl border-2 p-1 text-center transition-all flex flex-col items-center justify-center ${cell.bgClass} ${cell.borderClass} ${cell.textClass} ${
                              isSelected
                                ? 'scale-105 ring-4 ring-[#D9A441] shadow-xl font-extrabold z-10'
                                : 'hover:scale-102 hover:shadow-md'
                            }`}
                          >
                            <span className="text-xs sm:text-sm font-black leading-tight">
                              {cell.code}
                            </span>
                            {cell.fare && (
                              <span className="text-[9px] opacity-80 tabular-nums">
                                {cell.fare}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Bus Front Direction Indicator */}
                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-zinc-300">
                    <Bus className="w-4 h-4 text-[#D9A441]" />
                    <span>Driver Cabin & Entry Door (Front)</span>
                  </span>
                  <span>Rear Passenger Area (Back)</span>
                </div>

              </div>
            </div>

          </div>

          {/* Right Side: Selected Berth Action Card */}
          <div className="lg:col-span-4 bg-[#071B3A] text-white p-6 rounded-3xl border-2 border-[#D9A441] shadow-2xl space-y-5 sticky top-24">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs uppercase font-extrabold text-[#D9A441] tracking-wider">
                Selected Berth Details
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">
                Available for Booking
              </span>
            </div>

            {/* Selected Berth Code Banner */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D9A441] to-[#F28C28] text-[#071B3A] flex items-center justify-center font-black text-2xl shadow-xl shrink-0">
                {selectedSeat.code}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{selectedSeat.description}</h3>
                <span className="text-xs text-slate-300 block mt-0.5">
                  Deck: <strong>{selectedSeat.deck}</strong> • Standard Fare: <strong className="text-[#D9A441] tabular-nums">{selectedSeat.fare}</strong>
                </span>
              </div>
            </div>

            {/* Individual Berth Comfort Amenities */}
            <div className="space-y-2 text-xs text-slate-300 bg-white/5 p-3.5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>6.0 ft Full-Length Memory Foam Mattress</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dedicated Mobile Charging Socket (220V/USB)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Personal LED Reading Light & Water Bottle Holder</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hygienic Clean White Bedsheet & Pillow Provided</span>
              </div>
            </div>

            {/* Quick 1-Tap Booking Actions */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] text-slate-300 block">
                Quote <strong>Berth {selectedSeat.code}</strong> when booking:
              </span>

              <a
                href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
                className="w-full py-3.5 px-4 rounded-xl bg-[#D9A441] hover:bg-[#F3C96E] text-[#071B3A] font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call to Reserve Berth {selectedSeat.code}</span>
              </a>

              <a
                href={`https://wa.me/919168683006?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp to Reserve Berth {selectedSeat.code}</span>
              </a>
            </div>

            <p className="text-[10px] text-slate-400 leading-relaxed border-t border-white/10 pt-3 italic">
              * Note: Ticket allotment is confirmed by our telephone reservation desk based on current availability. No payment gateway or cart checkout is hosted on this site.
            </p>

          </div>

        </div>
      )}

    </section>
  );
};
