import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Phone, MessageCircle, Menu, X, ChevronDown, Bus, 
  Search, Sun, Moon, Command 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setPhoneDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Company History', path: '/history' },
    { name: 'Our Routes', path: '/routes' },
    { name: 'Boarding Points', path: '/boarding-points' },
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'Booking Information', path: '/booking-info' },
    { name: 'Offices & Contact', path: '/offices-contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#071B3A]/95 dark:bg-[#09090B]/95 backdrop-blur-md shadow-xl border-b border-[#D9A441]/25 py-2.5' 
            : 'bg-[#102B5C] dark:bg-[#071B3A] border-b border-white/10 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white p-1 shadow-md shadow-black/20 group-hover:scale-105 transition-transform flex items-center justify-center border border-white/30 shrink-0">
                <img 
                  src="/logo.jpg" 
                  alt="RanSamrat Travels RT Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-lg sm:text-2xl text-white tracking-wide leading-none group-hover:text-[#D9A441] transition-colors">
                    RANSAMRAT
                  </span>
                  <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-[#F28C28] text-white tracking-widest hidden sm:inline-block">
                    Travels
                  </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-xs font-semibold text-[#D9A441] font-marathi">
                    {COMPANY_INFO.marathiName}
                  </span>
                  <span className="text-[10px] text-slate-300 hidden lg:inline">
                    • {COMPANY_INFO.tagline}
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden xl:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#D9A441] text-[#071B3A] font-bold shadow-md'
                        : 'text-slate-200 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Right Action Controls: Cmd+K, Theme Toggle, Call & WhatsApp */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              
              {/* Cmd+K Quick Search Pill */}
              <button
                onClick={onOpenCommandPalette}
                className="hidden md:flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white border border-white/15 text-xs font-medium transition-all"
                title="Search routes, stops & offices (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-[#D9A441]" />
                <span className="text-[11px]">Quick Search</span>
                <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1 py-0.5 bg-black/30 rounded text-[10px] font-mono text-slate-300 border border-white/10">
                  Ctrl K
                </kbd>
              </button>

              {/* Theme Toggle Button (Light / Dark) */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-[#D9A441] transition-colors"
                title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#D9A441]" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-200" />
                )}
              </button>

              {/* Call Now with Dropdown */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                  className="flex items-center gap-1.5 bg-[#D9A441] hover:bg-[#F3C96E] text-[#071B3A] px-3.5 py-1.5 rounded-lg font-bold text-xs transition-all shadow active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-[#071B3A]" />
                  <span>Call Now</span>
                  <ChevronDown className="w-3 h-3 opacity-70" />
                </button>

                {phoneDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-[#071B3A] border border-[#D9A441]/40 rounded-xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#D9A441] mb-2 px-1">
                      Direct Booking Lines
                    </p>
                    <a
                      href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors text-xs font-medium"
                    >
                      <Phone className="w-3.5 h-3.5 text-emerald-400" />
                      <div>
                        <div className="text-[11px] text-slate-300">Head Office Desk 1</div>
                        <div className="font-bold tabular-nums">{COMPANY_INFO.contacts.primaryPhone}</div>
                      </div>
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.contacts.secondaryPhoneRaw}`}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-colors text-xs font-medium mt-1"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
                      <div>
                        <div className="text-[11px] text-slate-300">Desk Booking 2</div>
                        <div className="font-bold tabular-nums">{COMPANY_INFO.contacts.secondaryPhone}</div>
                      </div>
                    </a>
                  </div>
                )}
              </div>

              {/* WhatsApp Button */}
              <a
                href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-lg font-bold text-xs transition-all shadow active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Mobile Search & Menu Toggle */}
              <div className="flex xl:hidden items-center gap-1">
                <button
                  onClick={onOpenCommandPalette}
                  className="p-2 rounded-lg bg-white/10 text-slate-200 md:hidden"
                  title="Search"
                >
                  <Search className="w-4 h-4 text-[#D9A441]" />
                </button>

                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Toggle navigation menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#071B3A] dark:bg-[#09090B] border-t border-white/10 px-4 pt-3 pb-6 mt-2 space-y-1">
            <div className="py-2 px-3 mb-2 bg-[#102B5C] dark:bg-[#121215] rounded-lg text-xs text-slate-300 flex items-center justify-between">
              <div>
                <span className="font-semibold text-[#D9A441] block">RanSamrat Travels Portal</span>
                Connecting Marathwada with Pune & PCMC.
              </div>
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded bg-white/10 text-xs text-white"
              >
                {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
              </button>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#D9A441] text-[#071B3A] font-bold'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-white/10 space-y-2">
              <p className="text-xs uppercase font-semibold text-[#D9A441] px-1">Book via Phone or WhatsApp</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
                  className="flex items-center justify-center gap-2 bg-[#D9A441] text-[#071B3A] py-2.5 px-3 rounded-lg font-bold text-xs shadow"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_INFO.contacts.primaryPhone}</span>
                </a>

                <a
                  href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 px-3 rounded-lg font-bold text-xs shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={COMPANY_INFO.externalPlatforms.redBus.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2 px-3 rounded-lg bg-red-600/20 text-red-300 border border-red-500/30 text-xs font-semibold hover:bg-red-600/30 transition-colors"
                >
                  RedBus Page ↗
                </a>
                <a
                  href={COMPANY_INFO.externalPlatforms.paytm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center py-2 px-3 rounded-lg bg-sky-600/20 text-sky-300 border border-sky-500/30 text-xs font-semibold hover:bg-sky-600/30 transition-colors"
                >
                  Paytm Travel ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
