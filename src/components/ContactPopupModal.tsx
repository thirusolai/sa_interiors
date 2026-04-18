import React, { useState, useEffect } from "react";
import { X, CheckCircle2, MessageSquare, Award, Clock, ShieldCheck, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopupModal: React.FC<ContactPopupModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState("Home Owner");
  const [purpose, setPurpose] = useState("New Home");
  const [propertyType, setPropertyType] = useState("3 BHK");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsappUpdates, setWhatsappUpdates] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi TIQ! I would like a free consultation.\nName: ${name}\nI am a: ${role}\nLooking to: ${purpose}\nProperty: ${propertyType}\nLocation: ${city || "Not specified"}\nPhone: +91 ${phone}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919000000000?text=${encodedMessage}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#002121]/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row my-8 z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 md:p-3 bg-[#002121] hover:bg-black text-white rounded-md shadow-md transition-all"
            >
              <X size={20} />
            </button>

            {/* Left Image / Branding Panel (Optional but adds luxury) */}
            <div className="hidden md:flex md:w-2/5 bg-[#002121] relative flex-col justify-between p-10 overflow-hidden">
               <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80')] bg-cover bg-center" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#002121] via-[#002121]/80 to-transparent" />
               
               <div className="relative z-10 mt-auto">
                 <h2 className="text-4xl font-serif text-white mb-4 leading-tight">Your Dream Space Awaits</h2>
                 <p className="text-white/70 font-light text-sm leading-relaxed mb-10">
                   Join hands with our expert designers to craft an interior that reflects your true style.
                 </p>

                 <div className="space-y-4 pt-6 border-t border-white/20">
                    <div className="flex items-center gap-3 text-white/80">
                      <Award className="text-[#d89a5b]" size={20} />
                      <span className="text-sm font-medium tracking-wide">Free Design Included</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <Clock className="text-[#d89a5b]" size={20} />
                      <span className="text-sm font-medium tracking-wide">40-Day Delivery</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <ShieldCheck className="text-[#d89a5b]" size={20} />
                      <span className="text-sm font-medium tracking-wide">10-Year Support</span>
                    </div>
                 </div>
               </div>
            </div>

            {/* Form Panel */}
            <div className="w-full md:w-3/5 p-6 sm:p-8 md:p-10 lg:p-12 max-h-[85vh] overflow-y-auto custom-scrollbar">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl text-[#002121] font-bold mb-3" style={{ fontFamily: 'Calibri, sans-serif' }}>Book a Free Consultation</h2>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  Tell us about your space. We will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* 1. You Are */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">You are</label>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {["Home Owner", "Builder", "Freelancer"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setRole(item)}
                        className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all rounded-lg border ${
                          role === item
                            ? "bg-[#002121] text-white border-[#002121] shadow-md"
                            : "bg-white text-gray-600 border-gray-200 hover:border-[#002121]/30 hover:bg-gray-50"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Looking To */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">I am looking to</label>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {["New Home", "Renovate", "Rental Space"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setPurpose(item)}
                        className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all rounded-lg border ${
                          purpose === item
                            ? "bg-[#002121] text-white border-[#002121] shadow-md"
                            : "bg-white text-gray-600 border-gray-200 hover:border-[#002121]/30 hover:bg-gray-50"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Property Type */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Property type</label>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {["1 BHK", "2 BHK", "3 BHK", "4+ BHK / Villa"].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setPropertyType(item)}
                        className={`px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium transition-all rounded-lg border border-[rgba(0,33,33,1)] ${
                          propertyType === item
                            ? "bg-[#d89a5b] text-white border-[#d89a5b] shadow-md"
                            : "bg-white text-gray-600 border-gray-200 hover:border-[#d89a5b]/50 hover:bg-orange-50/30"
                        }`}
                        // Let's fix the border to gray initially, overridden if active
                        style={{ borderColor: propertyType === item ? "#d89a5b" : "#e5e7eb" }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Contact Details */}
                <div className="space-y-5 pt-4 border-t border-gray-100">
                  {/* Location */}
                  <div className="relative group">
                    <select
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 text-[#002121] rounded-xl px-5 py-4 appearance-none focus:outline-none focus:ring-2 focus:ring-[#d89a5b]/50 focus:border-[#d89a5b] transition-all"
                    >
                      <option value="" disabled>Select Your City</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Coimbatore">Coimbatore</option>
                      <option value="Madurai">Madurai</option>
                      <option value="Trichy">Trichy</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Hyderabad">Hyderabad</option>
                    </select>
                    <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>

                  {/* Name */}
                  <div>
                    <input
                      required
                      type="text"
                      placeholder="Your Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-200 text-[#002121] rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#d89a5b]/50 focus:border-[#d89a5b] transition-all placeholder:text-gray-400"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 flex items-center justify-center text-gray-500 font-medium">
                      +91
                    </div>
                    <input
                      required
                      type="tel"
                      placeholder="Your Mobile Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="flex-1 bg-gray-50 border border-gray-200 text-[#002121] rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#d89a5b]/50 focus:border-[#d89a5b] transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* WhatsApp Checkbox */}
                <label className="flex items-center gap-3 cursor-pointer group select-none py-2">
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center transition-all ${
                      whatsappUpdates ? "bg-[#25D366] border-[#25D366]" : "bg-white border-2 border-gray-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={whatsappUpdates}
                      onChange={() => setWhatsappUpdates(!whatsappUpdates)}
                    />
                    {whatsappUpdates && <CheckCircle2 size={16} className="text-white" />}
                  </div>
                  <span className="text-sm text-gray-600 font-medium flex items-center gap-2">
                    Send me updates on WhatsApp <MessageSquare size={16} className="text-[#25D366]" />
                  </span>
                </label>

                {/* Submit Area */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#002121] hover:bg-[#d89a5b] text-white rounded-xl py-4 sm:py-5 text-sm sm:text-base font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-xl active:scale-[0.98]"
                  >
                    Get My Free Consultation <ArrowRight size={20} />
                  </button>
                  
                  <p className="text-center mt-4 text-xs text-gray-400 font-medium">
                    By submitting, you agree to our <span className="underline hover:text-[#002121] cursor-pointer">privacy policy</span> and <span className="underline hover:text-[#002121] cursor-pointer">terms of use</span>
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                    <Award size={14} className="text-[#d89a5b]" /> Free Design Included
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                    <Clock size={14} className="text-[#d89a5b]" /> 40-Day Delivery
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                    <ShieldCheck size={14} className="text-[#d89a5b]" /> 10-Year Support
                  </div>
                </div>

              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopupModal;
