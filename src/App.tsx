import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { NoticeBanner } from './components/NoticeBanner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickBookingBar } from './components/QuickBookingBar';
import { CommandPalette } from './components/CommandPalette';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { History } from './pages/History';
import { Routes as RoutesPage } from './pages/Routes';
import { BoardingPoints } from './pages/BoardingPoints';
import { Fleet } from './pages/Fleet';
import { BookingInfo } from './pages/BookingInfo';
import { OfficesContact } from './pages/OfficesContact';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';

// Helper component to scroll to top on page change
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global Ctrl + K / Cmd + K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#09090B] text-slate-900 dark:text-zinc-100 transition-colors duration-200">
        <ScrollToTop />
        
        {/* Top Company Notice Bar */}
        <NoticeBanner />

        {/* Main Sticky Navbar with Theme Toggle & Search Trigger */}
        <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/routes" element={<RoutesPage />} />
            <Route path="/boarding-points" element={<BoardingPoints />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/booking-info" element={<BookingInfo />} />
            <Route path="/offices-contact" element={<OfficesContact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Legal />} />
            <Route path="/terms" element={<Legal />} />
            {/* Catch-all route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Persistent Footer */}
        <Footer />

        {/* Floating Call & WhatsApp Desk Helper */}
        <QuickBookingBar />

        {/* Linear/Stripe-style Quick Command Palette */}
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
};

export default App;
