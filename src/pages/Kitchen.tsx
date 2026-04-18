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
    image: "https://i.pinimg.com/1200x/22/7b/3a/227b3aa23a1c86a6edb1d46fc45e280c.jpg"
  },
  {
    id: 2,
    title: "Sophisticated Storage",
    subtitle: "Luxury wardrobe solutions that define elegance and organization.",
    image: "https://i.pinimg.com/736x/14/70/a2/1470a2e8431ca81db6308fc134a8a168.jpg"
  },
  {
    id: 3,
    title: "Precision Craftsmanship",
    subtitle: "Where every detail is meticulously engineered for perfection.",
    image: "https://i.pinimg.com/736x/dd/ea/b9/ddeab9133b3ea65545d7dd7e43827a2e.jpg"
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

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="w-full h-[80vh] min-h-[600px] mt-[72px] relative overflow-hidden flex items-center">
        {/* Background Images */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 transition-all duration-700 ease-in-out pt-16">
          <p className="text-[#d89a5b] text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.5em] uppercase font-bold mb-4 drop-shadow-md">
            Luxury Modular Solutions
          </p>
          <h1 className="text-[28px] sm:text-4xl md:text-6xl font-serif text-white uppercase tracking-wide leading-[1.1] md:leading-[1.2] mb-6 drop-shadow-md px-2">
            {slides[current].title}
          </h1>
          <p className="text-white/90 text-[13px] md:text-xl mb-10 drop-shadow max-w-xl mx-auto px-4">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full">
            <button onClick={() => window.dispatchEvent(new CustomEvent("openConsultation"))} className="w-full sm:w-auto px-8 py-4 bg-[#d89a5b] text-white text-[11px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-[#002121] transition-all rounded-none drop-shadow-md text-center">
              Book Consultation
            </button>
            <button onClick={() => window.location.href = '/portfolio'} className="w-full sm:w-auto px-8 py-4 border border-white text-white text-[11px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-[#002121] transition-all rounded-none drop-shadow-md text-center bg-transparent">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Navigation Arrows - Hidden on mobile to prevent text overlap */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 bg-[#d89a5b] hover:bg-[#002121] text-white w-12 h-12 rounded-none transition-colors border border-transparent hover:border-[#d89a5b] items-center justify-center font-black"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 bg-[#d89a5b] hover:bg-[#002121] text-white w-12 h-12 rounded-none transition-colors border border-transparent hover:border-[#d89a5b] items-center justify-center font-black"
        >
          →
        </button>

        {/* Dots */}
        <div className="absolute bottom-10 w-full flex justify-center gap-3">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                current === index ? "w-8 bg-[#d89a5b]" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
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
            
            <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left sm:px-6 lg:px-0">
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[#d89a5b] text-[10px] tracking-[0.4em] uppercase font-bold mb-4"
              >
                A Seamless Experience
              </motion.p>
              <h2 className="text-[32px] sm:text-4xl md:text-5xl font-serif text-[#002121] uppercase tracking-wide leading-[1.2] mb-6 md:mb-8">
                Transforming Spaces with Precision
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-lg lg:max-w-none">
                Our modular setups combine immaculate storage solutions with compelling designs. Experience precision engineering meant to elevate the aesthetic and practical heart of your home.
              </p>
              
              <div className="space-y-6 w-full max-w-sm lg:max-w-none">
                <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3 lg:gap-4 border-b-2 lg:border-b-0 lg:border-l-2 border-[#d89a5b]/20 pb-4 lg:pb-0 lg:pl-6 py-2 text-center lg:text-left">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#d89a5b] shadow-sm shrink-0">
                    <Maximize size={18} />
                  </div>
                  <span className="text-[#002121] font-bold tracking-widest text-[11px] uppercase">Space Optimization Experts</span>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:items-center gap-3 lg:gap-4 border-b-2 lg:border-b-0 lg:border-l-2 border-[#d89a5b]/20 pb-4 lg:pb-0 lg:pl-6 py-2 text-center lg:text-left">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#d89a5b] shadow-sm shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-[#002121] font-bold tracking-widest text-[11px] uppercase">Premium Hardware Warranty</span>
                </div>
              </div>

              <button
                onClick={() => navigate("/portfolio")}
                className="mt-12 flex items-center justify-center gap-3 bg-[#002121] text-white px-8 md:px-10 py-5 w-full sm:w-auto text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[#d89a5b] transition-all group shadow-xl"
              >
                Explore Transformations <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f6f3f2] py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE */}
          <div>
            <p className="text-[#d89a5b] text-[10px] tracking-[0.5em] uppercase font-bold mb-4">
              Quality & Trust
            </p>

            <h2 className="text-4xl md:text-5xl font-sans font-bold text-[#002121] uppercase tracking-wide leading-tight mb-6">
              Why Choose SA Interiors
            </h2>

            <p className="text-gray-600 mb-12 max-w-xl leading-relaxed">
              We blend aesthetic elegance with functional precision to create spaces that are uniquely yours. Our turnkey process removes all the stress, giving you a seamless journey from the initial concept to the final handover.
            </p>

            {/* FEATURES */}
            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 border border-gray-100">
                      <Icon className="w-5 h-5 text-[#d89a5b]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#002121] uppercase tracking-widest text-[11px] mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA BUTTON */}
            <button onClick={() => window.location.href = '/portfolio'} className="mt-12 inline-flex items-center gap-3 bg-[#002121] text-white px-8 py-5 text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[#d89a5b] transition-all shadow-xl">
              View Similar Projects
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="w-full h-full min-h-[500px] lg:min-h-[700px] rounded-none overflow-hidden relative shadow-xl">
            <img 
              src="https://i.pinimg.com/736x/71/61/8a/71618a99e90a7def78dd4e8416e51b83.jpg" 
              alt="Beautiful Kitchen Interior"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* How We Work - Process Strip */}
      <section className="bg-[#002121] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-white/5" />
        <div className="max-w-[1600px] mx-auto text-center">
          <p className="text-[#d89a5b] text-[10px] tracking-[0.5em] uppercase font-bold mb-4">Our Methodology</p>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white uppercase tracking-wide mb-20">The Journey to Perfection</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-px bg-white/5 border border-white/5">
            {steps.map((step, index) => (
              <div key={index} className="bg-[#002121] p-10 group hover:bg-[#002a2a] transition-all duration-500 border border-white/5">
                <div className="text-[#d89a5b] font-sans font-bold text-2xl mb-10 flex items-center justify-center gap-4">
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
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-[#002121] uppercase tracking-wide mb-10 leading-tight">
            READY TO DESIGN YOUR DREAM KITCHEN?
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
            Secure a fully transparent, personalized estimate for your new kitchen and wardrobe spaces. 
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button onClick={() => window.dispatchEvent(new CustomEvent("openConsultation"))} className="bg-[#002121] text-white px-12 py-5 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-[#d89a5b] transition-all shadow-xl">
              Get Free Estimate
            </button>
            <button onClick={() => window.location.href='/contact'} className="border border-gray-200 text-[#002121] px-12 py-5 text-[11px] font-black tracking-[0.3em] uppercase hover:border-[#002121] transition-all">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}