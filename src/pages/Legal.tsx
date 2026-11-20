import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, FileText, ArrowLeft, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Legal: React.FC = () => {
  const location = useLocation();
  const isPrivacy = location.pathname.includes('privacy');

  return (
    <div className="bg-[#F8FAFC]">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#071B3A] via-[#102B5C] to-[#071B3A] py-14 text-white border-b-2 border-[#D9A441]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D9A441] text-xs font-semibold mb-3">
            {isPrivacy ? <ShieldCheck className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
            <span>Company Policies</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions of Carriage'}
          </h1>
          <p className="mt-2 text-sm text-slate-300">
            RanSamrat Travels (रणसम्राट ट्रॅव्हल्स) • Kalamb, District Dharashiv
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm text-sm text-slate-700 space-y-6 leading-relaxed">
          
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <span className="text-xs text-slate-500 font-medium">Last Updated: Current Operating Season</span>
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102B5C] hover:text-[#D9A441]">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {isPrivacy ? (
            <>
              <div>
                <h3 className="text-lg font-bold text-[#071B3A] mb-2">1. Information Collection & Usage</h3>
                <p>
                  RanSamrat Travels values your privacy. When you contact our booking desk via telephone, WhatsApp, or through enquiry forms, we collect basic contact details (such as your name, mobile phone number, origin, destination, and journey date) solely for coordinating your passenger ticket reservation and departure notifications.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#071B3A] mb-2">2. No Online Financial Storage</h3>
                <p>
                  This company website does not operate an internal payment gateway, credit card processor, or online wallet. We do not store or process your banking passwords, card numbers, or CVV codes. Direct phone and WhatsApp bookings are settled via verified UPI or at our designated booking counters.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#071B3A] mb-2">3. Third-Party Ticketing Platforms</h3>
                <p>
                  When you choose to book through external ticketing partners such as RedBus (redbus.in) or Paytm (paytm.com), your transaction and personal data are governed by the respective privacy policies and data protection terms of those platforms.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#071B3A] mb-2">4. Data Confidentiality</h3>
                <p>
                  RanSamrat Travels does not sell, rent, or trade customer contact numbers to third-party telemarketers. Your information is used strictly by our operations dispatchers and bus conductors to ensure your safe boarding.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="text-lg font-bold text-[#071B3A] mb-2">1. Passenger Carriage & Reporting Time</h3>
                <p>
                  Passengers are requested to arrive at their designated boarding point at least 15 minutes prior to the scheduled departure time. Due to highway regulations and city traffic restrictions, coaches cannot wait beyond designated departure windows.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#071B3A] mb-2">2. Luggage & Prohibited Items</h3>
                <p>
                  Passengers are entitled to personal travel luggage (up to 15-20 kg per passenger) placed in the lower luggage hold. Highly inflammable items, contraband, explosives, and illegal goods are strictly prohibited under Indian Motor Vehicles Act. The company reserves the right to inspect suspicious baggage.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#071B3A] mb-2">3. Delays & Force Majeure</h3>
                <p>
                  While RanSamrat Travels maintains strict departure discipline, arrival and transit times are subject to highway traffic, regional weather conditions, road repair diversions, and toll checkposts. The company is not liable for indirect losses resulting from unforeseen traffic delays.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#071B3A] mb-2">4. Ticket Cancellations & Rescheduling</h3>
                <p>
                  Tickets booked directly through our telephone desk can be rescheduled or cancelled by contacting the issuing counter prior to bus departure. For tickets booked via RedBus or Paytm, cancellation rules and refunds are handled directly through those respective portals.
                </p>
              </div>
            </>
          )}

          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Questions regarding our policies? Call Kalamb Head Office:
            </span>
            <a
              href={`tel:${COMPANY_INFO.contacts.primaryPhoneRaw}`}
              className="px-4 py-2 bg-[#102B5C] text-white rounded-xl text-xs font-bold hover:bg-[#071B3A] flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
              <span>{COMPANY_INFO.contacts.primaryPhone}</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
