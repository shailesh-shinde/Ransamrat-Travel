import React, { useState } from 'react';
import { 
  Phone, MessageSquare, MapPin, Mail, Clock, Send, CheckCircle2, 
  AlertCircle, ExternalLink, ShieldCheck 
} from 'lucide-react';
import { COMPANY_INFO, OFFICES_DATA } from '../data/companyData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    fromCity: '',
    toCity: '',
    journeyDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = `*New Travel Enquiry - RanSamrat Travels*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.mobile}%0A*Route:* ${formData.fromCity} to ${formData.toCity}%0A*Journey Date:* ${formData.journeyDate}%0A*Message:* ${formData.message || 'Please share ticket availability and timing.'}`;
    window.open(`https://wa.me/919168683006?text=${text}`, '_blank');
  };

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#071B3A] via-[#102B5C] to-[#071B3A] py-16 sm:py-20 text-white border-b-2 border-[#D9A441]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D9A441]/40 text-[#D9A441] text-xs font-semibold mb-4">
            <span className="font-marathi text-sm font-bold text-white">संपर्क व विचारणा</span>
            <span>•</span>
            <span>Reach Our Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact & Passenger Enquiries
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal">
            Get in touch with our reservation coordinators in Kalamb and Pune for route inquiries, departure times, and travel assistance.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        
        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Phone */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:border-[#D9A441] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#102B5C] text-[#D9A441] flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#071B3A]">Booking Phone Lines</h3>
            <div className="text-xs text-slate-600 space-y-1">
              <div>Desk 1: <a href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`} className="font-bold text-[#102B5C] hover:underline">{COMPANY_INFO.contacts.primaryPhone}</a></div>
              <div>Desk 2: <a href={`tel:${COMPANY_INFO.contacts.secondaryPhoneRaw}`} className="font-bold text-[#102B5C] hover:underline">{COMPANY_INFO.contacts.secondaryPhone}</a></div>
            </div>
            <span className="text-[11px] text-emerald-600 font-semibold block pt-1">
              ● Active 7 Days a Week
            </span>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:border-emerald-500 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#071B3A]">WhatsApp Support</h3>
            <div className="text-xs text-slate-600 space-y-1">
              <div>Direct: <span className="font-bold text-[#071B3A]">{COMPANY_INFO.contacts.whatsappNumber}</span></div>
              <p className="text-[11px] text-slate-500">Fast replies for seat availability & timings.</p>
            </div>
            <a
              href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-600 hover:text-emerald-700 inline-block pt-1"
            >
              Start WhatsApp Chat →
            </a>
          </div>

          {/* Card 3: Head Office */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:border-[#102B5C] transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#071B3A] text-[#D9A441] flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#071B3A]">Kalamb Head Office</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Near Sub-District Hospital, Main Bus Stand Road, Kalamb, Dist. Dharashiv – 413507.
            </p>
            <span className="text-[11px] text-slate-500 block pt-1">
              Hours: 08:00 AM – 10:30 PM
            </span>
          </div>

          {/* Card 4: External Portals */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:border-red-500 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-sky-600 text-white flex items-center justify-center">
              <ExternalLink className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#071B3A]">Online Booking</h3>
            <p className="text-xs text-slate-600">
              Reserve tickets via verified platforms:
            </p>
            <div className="flex flex-col gap-1 text-xs font-bold">
              <a href={COMPANY_INFO.externalPlatforms.redBus.url} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                RedBus Official Page ↗
              </a>
              <a href={COMPANY_INFO.externalPlatforms.paytm.url} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                Paytm Travel Official ↗
              </a>
            </div>
          </div>

        </div>

        {/* Enquiry Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-lg">
            
            {/* Disclaimer Banner */}
            <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-[#D9A441]/40 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
              <div className="text-xs text-amber-950">
                <strong className="font-bold">Important Notice:</strong> This is a <strong>passenger inquiry form only</strong>, NOT an online ticket booking or seat payment form. Our reservation coordinator will follow up with you directly.
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#071B3A]">Submit a Travel Enquiry</h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your details below and our team will get in touch with you shortly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-[#F5F7FB] rounded-2xl border border-emerald-500/30 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#071B3A]">Enquiry Sent Successfully!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name || 'Valued Passenger'}</strong>. Our RanSamrat Travels booking representative has received your request and will call or message your mobile number ({formData.mobile}) with route details and seat options.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Also Send to WhatsApp for Instant Reply</span>
                  </button>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', mobile: '', email: '', fromCity: '', toCity: '', journeyDate: '', message: '' });
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-200 text-slate-800 text-xs font-semibold"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Customer Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#102B5C] bg-[#F5F7FB]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#102B5C] bg-[#F5F7FB]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="yourname@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#102B5C] bg-[#F5F7FB]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      From City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pune, Kalamb"
                      value={formData.fromCity}
                      onChange={(e) => setFormData({ ...formData, fromCity: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#102B5C] bg-[#F5F7FB]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      To City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ambajogai, Latur"
                      value={formData.toCity}
                      onChange={(e) => setFormData({ ...formData, toCity: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#102B5C] bg-[#F5F7FB]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Journey Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.journeyDate}
                      onChange={(e) => setFormData({ ...formData, journeyDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#102B5C] bg-[#F5F7FB]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Message / Specific Question
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter any questions regarding sleeper berths, luggage, or pickup timing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#102B5C] bg-[#F5F7FB]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#102B5C] hover:bg-[#071B3A] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95"
                >
                  <Send className="w-4 h-4 text-[#D9A441]" />
                  <span>SUBMIT ENQUIRY</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Info Column: Office Directory */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#071B3A] text-white p-6 sm:p-8 rounded-3xl border border-[#D9A441]/30 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D9A441]">Direct Assistance</span>
              <h3 className="text-xl font-bold text-white">Need an immediate answer?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                If your journey is tonight or tomorrow morning, please do not wait for email responses. Call our booking desks directly.
              </p>

              <div className="pt-2 space-y-2.5">
                <a
                  href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
                  className="w-full py-3 px-4 rounded-xl bg-[#D9A441] text-[#071B3A] font-bold text-xs flex items-center justify-center gap-2 shadow hover:bg-[#F3C96E] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_INFO.contacts.primaryPhone}</span>
                </a>

                <a
                  href={`${COMPANY_INFO.contacts.whatsappUrl}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPreFilledText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow hover:bg-emerald-500 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick List of Boarding Counters */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-bold text-sm text-[#071B3A] border-b border-slate-100 pb-2">
                Authorized Boarding Locations
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#D9A441] shrink-0 mt-0.5" />
                  <span><strong>Kalamb Head Office:</strong> Near Sub-District Hospital, Main Bus Stand Road.</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Nigdi / Akurdi:</strong> Near Paval Chowk / LIC Corner.</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Bhosari:</strong> Near Landewadi Chowk / Natyagruha.</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Shivajinagar:</strong> Wakdewadi Private Travel Area.</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Swargate:</strong> Laxmi Narayan Theatre Area.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
