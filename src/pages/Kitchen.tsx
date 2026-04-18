import { useEffect, useState } from "react";
import {
  CalendarCheck,
  Home,
  Monitor,
  PencilRuler,
  Hammer,
  CheckSquare,
  User,
  Settings,
  DollarSign,
  ShieldCheck,
  Clock,
  Handshake,
  ArrowRight,
  Sparkles,
  Shield,
  Clock4,
  Layout,
  Maximize,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: User,
    title: "Dedicated Designer",
    desc: "Personalized attention from concept to completion.",
  },
  {
    icon: Settings,
    title: "Turnkey Execution",
    desc: "Hassle-free management of all site activities.",
  },
  {
    icon: DollarSign,
    title: "Fixed Price Policy",
    desc: "No hidden costs or price escalations.",
  },
  {
    icon: ShieldCheck,
    title: "Strict Quality Control",
    desc: "Multi-stage checks for flawless finish.",
  },
  {
    icon: Clock,
    title: "45-Day Delivery",
    desc: "We respect your time and move-in dates.",
  },
  {
    icon: Handshake,
    title: "Lifetime Support",
    desc: "Continued care even after project handover.",
  },
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Initial\nConsultation",
    description: "Personalized exploration of your vision and requirements.",
  },
  {
    icon: Home,
    title: "Detailed\nSite Visit",
    description: "Precision measurements and site feasibility study.",
  },
  {
    icon: Monitor,
    title: "Design &\nVisualization",
    description: "Photorealistic 3D renders of your dream kitchen.",
  },
  {
    icon: PencilRuler,
    title: "Material\nSelection",
    description: "Curated selection of finishes, hardware and textures.",
  },
  {
    icon: Hammer,
    title: "Precision\nInstallation",
    description: "Expert installation by our trained technicians.",
  },
  {
    icon: CheckSquare,
    title: "Final\nHandover",
    description: "A seamless transition to your new space.",
  },
];

const slides = [
  {
    id: 1,
    title: "Culinary Masterpieces",
    subtitle: "Bespoke modular kitchens designed for the modern lifestyle.",
    img: "https://images.unsplash.com/photo-1556911223-e250e338d019?w=1600&q=80"
  },
  {
    id: 2,
    title: "Sophisticated Storage",
    subtitle: "Luxury wardrobe solutions that define elegance and organization.",
    img: "https://images.unsplash.com/photo-1595428774223-ef52624120ec?w=1600&q=80"
  },
  {
    id: 3,
    title: "Precision Craftsmanship",
    subtitle: "Where every detail is meticulously engineered for perfection.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80"
  },
];

export default function Kitchen() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {slides.map((slide, idx) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: current === idx ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img src={slide.img} className="w-full h-full object-cover brightness-[0.6]" alt={slide.title} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          </motion.div>
        ))}

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#d89a5b] text-xs md:text-sm tracking-[0.5em] uppercase font-bold mb-6"
          >
            Luxury Modular Solutions
          </motion.p>
          <motion.h1 
            key={slides[current].title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white font-brand text-5xl md:text-7xl lg:text-8xl lowercase italic mb-8"
          >
            {slides[current].title}
          </motion.h1>
          <motion.p 
            key={slides[current].subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
          >
            {slides[current].subtitle}
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#d89a5b] text-white px-10 py-4 text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:bg-white hover:text-[#002121]">
              Book Consultation
            </button>
            <button className="border border-white/30 text-white px-10 py-4 text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:bg-white/10">
              View Collection
            </button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 flex gap-4">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1 transition-all duration-500 ${current === idx ? "w-12 bg-[#d89a5b]" : "w-6 bg-white/30"}`}
            />
          ))}
        </div>
      </section>

      {/* Before/After Slider Section */}
      <section className="py-24 bg-[#f8f6f2] px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <BeforeAfterSlider 
                beforeImage="/before.webp"
                afterImage="/after.webp"
                brandName="SA"
                className="shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[#d89a5b] text-[10px] tracking-[0.4em] uppercase font-bold mb-4"
              >
                A Seamless Experience
              </motion.p>
              <h2 className="text-4xl md:text-5xl font-brand text-[#002121] leading-tight mb-8">
                Transforming Spaces with Precision <span className="italic opacity-50">& Grace.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                With SA Interiors, transforming your kitchen and wardrobe is as smooth an experience as sliding this bar. We handle the heavy lifting, while you prepare to walk into a masterpiece.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-l-2 border-[#d89a5b]/20 pl-6 py-2">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#d89a5b] shadow-sm">
                    <Maximize size={18} />
                  </div>
                  <span className="text-[#002121] font-bold tracking-widest text-[11px] uppercase">Space Optimization Experts</span>
                </div>
                <div className="flex items-center gap-4 border-l-2 border-[#d89a5b]/20 pl-6 py-2">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#d89a5b] shadow-sm">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-[#002121] font-bold tracking-widest text-[11px] uppercase">Premium Hardware Warranty</span>
                </div>
              </div>

              <button
                onClick={() => navigate("/portfolio")}
                className="mt-12 flex items-center gap-3 bg-[#002121] text-white px-10 py-5 text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[#d89a5b] transition-all group shadow-xl"
              >
                Explore Transformations <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Luxury Version */}
      <section className="bg-white py-24 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#d89a5b] text-[10px] tracking-[0.5em] uppercase font-bold mb-4">Quality & Trust</p>
            <h2 className="text-4xl md:text-6xl font-brand text-[#002121] lowercase italic opacity-90">
              Why Homeowners Choose SA Interiors
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-8 relative">
                  <div className="absolute inset-0 bg-[#d89a5b]/5 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative z-10 w-full h-full rounded-full border border-gray-100 flex items-center justify-center text-gray-700 bg-white group-hover:text-[#d89a5b] group-hover:border-[#d89a5b] transition-all duration-500">
                    <feature.icon size={28} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-[#002121] text-[13px] font-bold tracking-[0.2em] uppercase mb-4">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mx-auto">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - Process Strip */}
      <section className="bg-[#002121] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-white/5" />
        <div className="max-w-[1600px] mx-auto text-center">
          <p className="text-[#d89a5b] text-[10px] tracking-[0.5em] uppercase font-bold mb-4">Our Methodology</p>
          <h2 className="text-4xl md:text-6xl font-brand text-white lowercase italic mb-20">The Journey to Perfection</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-px bg-white/5 border border-white/5">
            {steps.map((step, index) => (
              <div key={index} className="bg-[#002121] p-10 group hover:bg-[#002a2a] transition-all duration-500 border border-white/5">
                <div className="text-[#d89a5b] font-brand text-2xl mb-10 flex items-center justify-center gap-4">
                  <span className="w-8 h-px bg-white/10 group-hover:w-12 group-hover:bg-[#d89a5b] transition-all" />
                  0{index + 1}
                </div>
                <div className="mb-8 text-white/40 group-hover:text-[#d89a5b] transition-colors duration-500">
                  <step.icon size={40} strokeWidth={1} />
                </div>
                <h3 className="text-white text-[12px] font-bold tracking-[0.2em] uppercase mb-6 leading-relaxed whitespace-pre-line group-hover:text-[#d89a5b] transition-colors font-sans">
                  {step.title}
                </h3>
                <p className="text-white/40 text-[11px] leading-relaxed group-hover:text-white/70 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Quote Section */}
      <section className="bg-white py-32 px-6 text-center border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#d89a5b] text-[10px] tracking-[0.5em] uppercase font-bold mb-6">Request Pricing</p>
          <h2 className="text-5xl md:text-7xl font-brand text-[#002121] lowercase italic mb-10 leading-tight">
            Ready to Design Your <span className="opacity-40 italic">Dream Kitchen?</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            Every home is unique. Receive a personalized estimate for your kitchen and wardrobe project within 48 hours.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-[#002121] text-white px-12 py-5 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-[#d89a5b] transition-all shadow-2xl">
              Get Free Estimate
            </button>
            <button className="border border-gray-200 text-[#002121] px-12 py-5 text-[11px] font-black tracking-[0.3em] uppercase hover:border-[#002121] transition-all">
              Chat with Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}