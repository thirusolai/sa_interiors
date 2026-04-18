import { Star, MessageSquare, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  review: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Kiran Nair & Family",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop&q=80",
    review: "Exceptional transparency and craftsmanship. The team transformed our high-ceiling apartment into a warm, functional masterpiece that truly reflects our vision.",
    role: "Apartment Owner, Anna Nagar"
  },
  {
    id: 2,
    name: "Ms. Honey Rose",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80",
    review: "Finding a team that balances aesthetic grandeur with practical precision was my priority. SA Interiors delivered beyond expectations with a seamless turnkey process.",
    role: "Villa Owner, ECR"
  },
  {
    id: 3,
    name: "Prannoy H",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    review: "The level of organization and attention to detail during the production phase was impressive. They turned our complex commercial project into a stunning workspace.",
    role: "Tech Lead, OMR Office"
  },
  {
    id: 4,
    name: "Mr. Suresh Chandran",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80",
    review: "From the initial site visit to the final handover, the process was impeccably handled. Their use of materials and color palettes is truly world-class.",
    role: "Home Owner, T. Nagar"
  },
  {
    id: 5,
    name: "Mr. Johnson Daniel",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
    review: "Deeply impressed by the 45-day delivery commitment. The quality of the joinery and the final finish surpassed everything we had seen before in Chennai.",
    role: "Property Investor"
  },
  {
    id: 6,
    name: "Mr. Surendran N M & Family",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&h=400&fit=crop&q=80",
    review: "The design team listened to every small detail we imagined. Today, our home is not just a building, but a sanctuary of style that our whole family loves.",
    role: "Retired Executive"
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-[#F9F7F5] overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#002121 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <p className="text-[#965b32] text-xs font-bold tracking-[0.5em] uppercase mb-4">Client Feedback</p>
            <h1 className="text-5xl md:text-7xl font-sans font-light text-[#002121] mb-8 tracking-tighter leading-tight">
              What Our <span className="font-bold">Clients Say</span>
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Stories of transformation, trust, and the pursuit of excellence. Real experiences from homeowners across Tamil Nadu.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {testimonials.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative bg-white p-10 rounded-[40px] border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] transition-all duration-700 flex flex-col h-full"
              >
                {/* Accent Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#d89a5b] group-hover:w-1/2 transition-all duration-700 rounded-full" />
                
                {/* Quote Icon */}
                <div className="mb-10 text-[#d89a5b]/20 group-hover:text-[#d89a5b]/40 transition-colors">
                  <Quote size={48} />
                </div>

                {/* Review Text */}
                <div className="flex-1 mb-10">
                  <p className="text-gray-600 text-[17px] leading-relaxed italic font-light">
                    "{item.review}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-6 pt-8 border-t border-gray-50">
                  <div className="relative w-16 h-16 shrink-0">
                    <div className="absolute inset-0 border border-[#d89a5b]/30 rounded-full -m-1 group-hover:rotate-180 transition-transform duration-[2s]" />
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover rounded-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div>
                    <h3 className="text-[#002121] font-bold text-[14px] tracking-tight uppercase mb-1">
                      {item.name}
                    </h3>
                    <p className="text-[#965b32] text-[10px] font-bold tracking-widest uppercase opacity-70">
                      {item.role || "Verified Owner"}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute top-10 right-10 flex gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[1,2,3,4,5].map(star => (
                    <Star key={star} size={12} fill="#d89a5b" className="text-[#d89a5b]" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#F9F7F5] text-center overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
             <h2 className="text-4xl md:text-5xl font-sans font-light text-[#002121] mb-8 tracking-tighter">
              Experience the <span className="font-bold whitespace-nowrap">SA Difference</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-10 text-lg font-light leading-relaxed">
              Join our community of satisfied homeowners. We're ready to help you craft your perfect space.
            </p>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent("openConsultation"))}
              className="group relative inline-flex items-center gap-6 bg-[#002121] text-white px-12 py-5 text-[11px] font-black tracking-[0.4em] uppercase hover:bg-[#d89a5b] transition-all duration-700 shadow-xl"
            >
              <span className="relative z-10">Start Your Story</span>
              <MessageSquare size={16} className="relative z-10 group-hover:scale-110 transition-transform" />
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
