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
} from "lucide-react";


const features = [
  {
    icon: User,
    title: "Single point of contact",
    desc: "No juggling multiple vendors or teams",
  },
  {
    icon: Settings,
    title: "End-to-end turnkey execution",
    desc: "From design to delivery, handled in-house",
  },
  {
    icon: DollarSign,
    title: "Transparent costing & budgeting",
    desc: "Clear estimates with no hidden surprises",
  },
  {
    icon: ShieldCheck,
    title: "Quality control at every stage",
    desc: "Dedicated supervision and checks",
  },
  {
    icon: Clock,
    title: "On-time project delivery",
    desc: "Structured timelines and accountability",
  },
  {
    icon: Handshake,
    title: "Post-handover support & warranty",
    desc: "We don’t disappear after completion.",
  },
];
const steps = [
  {
    icon: CalendarCheck,
    title: "Allocation\nof Design",
    description:
      "Assigning a dedicated senior designer to understand your vision.",
  },
  {
    icon: Home,
    title: "Free Site\nInspection",
    description:
      "Professional site visit to take accurate measurements.",
  },
  {
    icon: Monitor,
    title: "Design &\nVisualization",
    description:
      "Creating fully rendered 3D models for your space.",
  },
  {
    icon: PencilRuler,
    title: "Material\nSelection",
    description:
      "Guided walkthrough to select premium, durable materials.",
  },
  {
    icon: Hammer,
    title: "Execution &\nCraftsmanship",
    description:
      "Precision building by our in-house team with strict checks.",
  },
  {
    icon: CheckSquare,
    title: "Handover",
    description:
      "Delivering a spotless, finished space on time.",
  },
];
const slides = [
  {
    id: 1,
    title: "Elegant Living Spaces",
    subtitle:
      "Transform your home with modern interior designs crafted for comfort and style.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
  },
  {
    id: 2,
    title: "Luxury Bedroom Designs",
    subtitle:
      "Experience peaceful and stylish bedroom interiors tailored to your taste.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&q=80"
  },
  {
    id: 3,
    title: "Modern Kitchen Concepts",
    subtitle:
      "Functional and aesthetic kitchen interiors that redefine your cooking experience.",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1600&q=80"
  },
];




export default function HomeInterior() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
    <section className="w-full h-[80vh] min-h-[600px] relative overflow-hidden flex items-center mt-[72px]">
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

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 transition-all duration-700 ease-in-out pt-16">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-md">
          {slides[current].title}
        </h1>

        <p className="text-white/90 text-lg md:text-xl mb-10 drop-shadow max-w-2xl mx-auto">
          {slides[current].subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => window.dispatchEvent(new CustomEvent("openConsultation"))} className="px-8 py-4 bg-[#d89a5b] text-white text-[11px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-[#002121] transition-all rounded-none drop-shadow-md">
            Book Consultation
          </button>
          <button onClick={() => window.location.href = '/portfolio'} className="px-8 py-4 border border-white text-white text-[11px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-[#002121] transition-all rounded-none drop-shadow-md">
            View Portfolio
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-4 py-2 rounded-full transition-all"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-4 py-2 rounded-full transition-all"
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

     <section className="bg-[#f6f3f2] py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Small Heading */}
        <p className="uppercase tracking-widest text-gray-500 text-sm mb-3">
          How We Work
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-16">
          How We Work
        </h2>

        {/* Steps */}
        <div className="relative">
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-gray-300"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center relative">
                  
                  {/* Icon Circle */}
                  <div className="w-20 h-20 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center z-10">
                    <Icon className="w-8 h-8 text-gray-600" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-lg font-medium text-gray-800 whitespace-pre-line">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm text-gray-500 max-w-[180px]">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>


     <section className="bg-[#f6f3f2] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE */}
        <div>
          <p className="uppercase tracking-widest text-gray-500 text-sm mb-3">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Why Choose Us
          </h2>

          <p className="text-gray-600 mb-10 max-w-xl leading-relaxed">
            We blend aesthetic elegance with functional precision to create homes that are uniquely yours. Our turnkey process removes all the stress, giving you a seamless journey from the initial concept to the final handover.
          </p>

          {/* FEATURES */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <Icon className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {feature.title}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA BUTTON */}
          <button onClick={() => window.location.href = '/portfolio'} className="mt-10 inline-flex items-center gap-3 bg-[#002121] text-white px-8 py-4 rounded-none text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[#d89a5b] transition-all">
            View Similar Projects
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="w-full h-[400px] md:h-[600px] rounded-none overflow-hidden relative shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" 
            alt="Beautiful Home Interior"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>



        <section className="bg-[#f6f3f2] py-28 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        
        {/* Small Label */}
        <p className="uppercase tracking-widest text-gray-500 text-sm mb-4">
          Get Quote
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
          Ready to transform your home?
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Schedule a free consultation with our design experts today and take the first step towards your dream space. We're here to help bring your vision to life.
        </p>

        {/* CTA Button */}
        <button onClick={() => window.dispatchEvent(new CustomEvent("openConsultation"))} className="inline-flex items-center gap-3 bg-[#d89a5b] text-white px-8 py-4 rounded-none text-[11px] font-black tracking-[0.2em] uppercase hover:bg-[#002121] transition-all duration-300 shadow-xl">
          Get an Estimate
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
</>
    
  );
}