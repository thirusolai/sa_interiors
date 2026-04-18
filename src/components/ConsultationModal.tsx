import React, { useState, useEffect } from "react";
import { X, CheckCircle2, MessageSquare, ShieldCheck, Clock, Award, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState("Home Owner");
  const [purpose, setPurpose] = useState("New Home");
  const [propertyType, setPropertyType] = useState("3 BHK");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsappUpdates, setWhatsappUpdates] = useState(true);

  // Lock body scroll efficiently
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi TIQ! I would like a free consultation.\n\nName: ${name}\nI am a: ${role}\nLooking to: ${purpose}\nProperty: ${propertyType}\nLocation: ${city || "Not specified"}\nPhone: +91 ${phone}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919000000000?text=${encodedMessage}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
      
          className="fixed inset-0 z-[2000] flex items-center justify-center p-0 md:p-6 lg:p-12 overflow-hidden pointer-events-none"
        >
          {/* Backdrop - purely visual, handles close clicks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#002121]/95 backdrop-blur-xl pointer-events-auto cursor-pointer"
          />

          {/* Modal Box - Clean Tailwind flex architecture for perfect internal scrolling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="w-full max-w-6xl h-auto max-h-[100vh] md:max-h-[92vh] bg-white shadow-4xl flex flex-col md:flex-row overflow-hidden rounded-none md:rounded-[3rem] relative z-[10] pointer-events-auto"
          >
            {/* Close Mobile */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-[1020] p-3 bg-gray-100 text-[#002121] rounded-full md:hidden"
            >
              <X size={20} />
            </button>

            {/* Left Column (Fixed/Static) */}
            <div className="hidden md:flex md:w-[32%] bg-[#f9f7f5] p-8 lg:p-12 relative flex-col justify-between overflow-hidden shrink-0 border-r border-gray-100">
               <div className="relative z-10">
                  <div className="w-16 h-px bg-[#d89a5b] mb-10" />
                  <h3 className="text-3xl lg:text-4xl font-sans font-bold text-[#002121] leading-[1.1] mb-4 tracking-tight italic select-none">Crafting Spaces,<br/>Building Trust.</h3>
                  <p className="text-gray-400 text-xs font-light leading-relaxed select-none">Join 500+ families who chose SA Interiors for their dream homes.</p>
               </div>

               <div className="relative z-10 bg-[#002121] p-6 lg:p-8 rounded-none shadow-2xl border-l-4 border-[#d89a5b] mt-auto">
                  <p className="text-[#d89a5b] text-[9px] font-black tracking-[0.4em] uppercase mb-3">Limited Offer</p>
                  <h4 className="text-3xl font-sans font-bold text-white mb-2 leading-none">Flat 20% Off</h4>
                  <p className="text-white/40 text-[8px] font-bold uppercase tracking-widest mb-6">On all interior packages</p>
                  
                  <div className="space-y-3 pt-5 border-t border-white/5">
                    <div className="flex items-center gap-4 text-[8px] font-bold text-white/50 uppercase tracking-widest">
                       <Award size={12} className="text-[#d89a5b]" /> Free Design
                    </div>
                    <div className="flex items-center gap-4 text-[8px] font-bold text-white/50 uppercase tracking-widest">
                       <Clock size={12} className="text-[#d89a5b]" /> 40-Day Delivery
                    </div>
                  </div>
               </div>
            </div>

            {/* Right Column - Flex structure container with min-h-0 to break flex expansion */}
            <div className="flex flex-col flex-1 min-h-0 bg-white relative">
               {/* Desktop Close Icon */}
               <button
                  onClick={onClose}
                  className="absolute top-8 right-8 hidden md:flex p-3 bg-white hover:bg-gray-50 text-gray-400 hover:text-[#002121] transition-colors rounded-full z-[1050]"
                >
                  <X size={20} />
                </button>

              {/* INTERNAL SCROLLABLE AREA */}
              <div className="flex-1 overflow-y-auto min-h-0 px-6 py-6 md:pl-10 md:pr-6 lg:pl-16 lg:pr-10 lg:py-10 scroll-smooth custom-scrollbar">
                <div className="mb-6 select-none">
                  <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#002121] mb-2 tracking-tighter uppercase leading-none">Free Consultation</h2>
                  <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-xl">Tell us about your space. We'll get back to you within 24 hours with a custom plan.</p>
                </div>

                <form id="consultationForm" onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-8">
                    {/* Section 01 */}
                    <div className="space-y-4">
                       <p className="text-[10px] font-black text-gray-300 tracking-[0.4em] uppercase">Section 01 / You Are</p>
                       <div className="flex flex-wrap gap-2">
                          {["Home Owner", "Builder", "Freelancer"].map((r) => (
                            <button
                              key={r}
                              type="button"
                              onClick={() => setRole(r)}
                              className={`px-6 py-3 text-[10px] font-bold tracking-widest uppercase transition-all border ${
                                role === r 
                                ? "bg-[#002121] text-white border-[#002121]" 
                                : "bg-white text-gray-400 border-gray-100 hover:border-[#002121]"
                              }`}
                            >
                              {r}
                            </button>
                          ))}
                       </div>
                    </div>

                    {/* Section 02 */}
                    <div className="space-y-4">
                       <p className="text-[10px] font-black text-gray-300 tracking-[0.4em] uppercase">Section 02 / Looking To</p>
                       <div className="flex flex-wrap gap-2">
                          {["New Home", "Renovate", "Rental Space"].map((p) => (
                            <button
                              key={p}
                              type="button"
                              onClick={() => setPurpose(p)}
                              className={`px-6 py-3 text-[10px] font-bold tracking-widest uppercase transition-all border ${
                                purpose === p 
                                ? "bg-[#002121] text-white border-[#002121]" 
                                : "bg-white text-gray-400 border-gray-100 hover:border-[#002121]"
                              }`}
                            >
                              {p}
                            </button>
                          ))}
                       </div>
                    </div>

                    {/* Section 03 */}
                    <div className="space-y-4">
                       <p className="text-[10px] font-black text-gray-300 tracking-[0.4em] uppercase">Section 03 / Type</p>
                       <div className="flex flex-wrap gap-2">
                          {["1 BHK", "2 BHK", "3 BHK", "4+ BHK / Villa"].map((pt) => (
                            <button
                              key={pt}
                              type="button"
                              onClick={() => setPropertyType(pt)}
                              className={`px-6 py-3 text-[10px] font-bold tracking-widest uppercase transition-all border ${
                                propertyType === pt 
                                ? "bg-[#d89a5b] text-white border-[#d89a5b]" 
                                : "bg-white text-gray-400 border-gray-100 hover:border-[#d89a5b]/40"
                              }`}
                            >
                              {pt}
                            </button>
                          ))}
                       </div>
                    </div>

                    {/* Section 04 */}
                    <div className="space-y-8">
                       <p className="text-[10px] font-black text-gray-300 tracking-[0.4em] uppercase">Section 04 / Information</p>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2 border-b border-gray-100 focus-within:border-[#d89a5b] transition-all">
                             <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Location</label>
                             <select required value={city} onChange={(e) => setCity(e.target.value)} className="w-full bg-transparent py-3 text-[#002121] focus:outline-none appearance-none font-medium">
                                <option value="" disabled>Select Your City</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Madurai">Madurai</option>
                                <option value="Trichy">Trichy</option>
                             </select>
                          </div>
                          <div className="space-y-2 border-b border-gray-100 focus-within:border-[#d89a5b] transition-all">
                             <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Full Name</label>
                             <input required type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-transparent py-3 text-[#002121] focus:outline-none placeholder:text-gray-200 font-medium" />
                          </div>
                       </div>
                       
                       <div className="space-y-2 border-b border-gray-100 focus-within:border-[#d89a5b] transition-all">
                          <label className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Mobile Number</label>
                          <div className="flex items-center gap-4">
                             <span className="text-gray-400 font-medium py-3">+91</span>
                             <input required type="tel" placeholder="Mobile Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="flex-1 bg-transparent py-3 text-[#002121] focus:outline-none placeholder:text-gray-200 font-medium" />
                          </div>
                       </div>
                    </div>

                    <label className="flex items-center gap-4 cursor-pointer group select-none pb-4">
                      <div className={`w-6 h-6 border flex items-center justify-center transition-all ${whatsappUpdates ? "border-[#25D366] bg-[#25D366]" : "border-gray-200"}`}>
                        <input type="checkbox" className="absolute inset-0 opacity-0 cursor-pointer" checked={whatsappUpdates} onChange={() => setWhatsappUpdates(!whatsappUpdates)} />
                        {whatsappUpdates && <CheckCircle2 size={16} className="text-white" />}
                      </div>
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">Send me updates on WhatsApp <MessageSquare size={14} className="text-[#25D366] opacity-60" /></span>
                    </label>
                  </div>
                </form>
              </div>

              {/* STICKY FOOTER CTA - Shrink-0 ensures it's always explicitly rendered */}
              <div className="shrink-0 px-8 md:px-12 py-6 bg-white border-t border-gray-100 z-[1100]">
                 <button 
                  form="consultationForm"
                  type="submit"
                  className="w-full bg-[#002121] text-white py-4 text-[12px] font-black tracking-[0.5em] uppercase hover:bg-[#d89a5b] transition-all duration-500 shadow-2xl flex items-center justify-center gap-4 active:scale-95"
                 >
                   Get My Free Consultation <ArrowRight size={18} />
                 </button>
                 <p className="text-center mt-4 text-[10px] text-gray-400 font-medium tracking-widest uppercase select-none">
                    By submitting, you agree to our <span className="text-[#d89a5b] underline">privacy policy</span>
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
