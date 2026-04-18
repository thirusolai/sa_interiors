import { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import {
  ArrowRight, Home, Building2, Hotel, ChevronDown, Star, X, Phone,
  UserCheck, Ruler, Box, Sparkles, Settings, ShieldCheck, Key,
  ChevronLeft, ChevronRight, MessageSquare, MapPin, Compass, Layers, Hammer, Palette,
  Calendar, IndianRupee, Leaf, Calculator, Layout, Clock, CheckCircle2
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
const heroImage = "../hero.jpg";
const aboutImage = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import { CitiesIcon, ProjectsIcon, OngoingIcon, PartnersIcon, ExperienceIcon } from "@/components/StatIcons";
import { DeliveryIcon, CostsIcon, WarrantyIcon, EMIIcon, MDFIcon, EstimateIcon, DesignerIcon, DesignIcon, ConsultIcon } from "@/components/TrustIcons";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import QuizComponent from "@/components/QuizComponent";


const services = [
  { icon: Home, title: "Residential", description: "Transform your home into a sanctuary of style and comfort with our bespoke residential designs.", link: "/services#residential" },
  { icon: Building2, title: "Commercial", description: "Create inspiring workspaces that boost productivity and reflect your brand identity.", link: "/services#commercial" },
  { icon: Hotel, title: "Hospitality", description: "Design memorable experiences for your guests with luxurious hospitality interiors.", link: "/services#hospitality" },
];

interface Testimonial {
  id: number;
  name: string;
  image: string;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mr. Kiran Nair & Family",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop&q=80",
    review: "Exceptional transparency and craftsmanship. The team transformed our high-ceiling apartment into a warm, functional masterpiece that truly reflects our vision.",
  },
  {
    id: 2,
    name: "Ms. Honey Rose",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80",
    review: "Finding a team that balances aesthetic grandeur with practical precision was my priority. SA Interiors delivered beyond expectations with a seamless turnkey process.",
  },
  {
    id: 3,
    name: "Prannoy H",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    review: "The level of organization and attention to detail during the production phase was impressive. They turned our complex commercial project into a stunning workspace.",
  },
  {
    id: 4,
    name: "Mr. Suresh Chandran",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80",
    review: "From the initial site visit to the final handover, the process was impeccably handled. Their use of materials and color palettes is truly world-class.",
  },
  {
    id: 5,
    name: "Mr. Johnson Daniel",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80",
    review: "Deeply impressed by the 45-day delivery commitment. The quality of the joinery and the final finish surpassed everything we had seen before in Chennai.",
  },
  {
    id: 6,
    name: "Mr. Surendran N M & Family",
    image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&h=400&fit=crop&q=80",
    review: "The design team listened to every small detail we imagined. Today, our home is not just a building, but a sanctuary of style that our whole family loves.",
  },
];


const stats = [
  { value: "17", label: "Cities reached", icon: CitiesIcon },
  { value: "75", label: "Projects completed", suffix: "+", icon: ProjectsIcon },
  { value: "18", label: "Ongoing projects", suffix: "+", icon: OngoingIcon },
  { value: "15", label: "Trusted Partners", suffix: "+", icon: PartnersIcon },
  { value: "07", label: "Years of experience", suffix: "+", icon: ExperienceIcon },
];



const steps = [
  {
    number: "01",
    title: "UNDERSTANDING THE REQUIREMENT / BRIEF",
    desc: "We understand your exact needs and project expectations clearly.",
    icon: MessageSquare,
    color: "#FF5252"
  },
  {
    number: "02",
    title: "FREE SITE VISIT & CONSULTATION",
    desc: "Our experts visit your site and provide detailed consultation.",
    icon: MapPin,
    color: "#2196F3"
  },
  {
    number: "03",
    title: "TAILOR MADE CONCEPTS & DESIGN",
    desc: "Customised design concepts crafted specially for you.",
    icon: Compass,
    color: "#00E676"
  },
  {
    number: "04",
    title: "MATERIAL SELECTION",
    desc: "We help you select high quality and durable materials.",
    icon: Layers,
    color: "#FFD600"
  },
  {
    number: "05",
    title: "PRODUCTION & QC CHECK",
    desc: "Strict quality checks during production process.",
    icon: Hammer,
    color: "#9C27B0"
  },
  {
    number: "06",
    title: "HANDOVER IN 45 DAYS",
    desc: "Timely delivery and complete handover of the project.",
    icon: Sparkles,
    color: "#FF9100"
  }
];


const StatItem = ({ stat, index }: { stat: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100">
        <Icon />
      </div>

      <div className="relative mb-2">
        <span className="text-4xl md:text-5xl font-brand text-white leading-none">
          {isInView ? (
            <CountUp
              end={parseInt(stat.value)}
              duration={2.5}
              suffix={stat.suffix || ""}
            />
          ) : (
            "0"
          )}
        </span>
      </div>
      
      <p className="text-white/60 text-[11px] tracking-[0.2em] uppercase font-medium">
        {stat.label}
      </p>
    </motion.div>
  );
};

const packages = [
  {
    titleTop: "Everyday Excellence",
    titleMain: "Comfort Living",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    oldPrice: "₹7.50 Lac",
    newPrice: "₹5.35 Lac*",
    link: "",
    details: {
      FOYER: "A well-organised shoe storage unit fitted with cabinets and shutters to keep your entryway clean and clutter-free.",
      "LIVING ROOM": "A sleek TV display unit crafted with aluminium profile framing and a glass shutter finish, designed to anchor your living space beautifully.",
      "DINING ROOM": "6 seater dining table in a rich Medley black finish, Briano dining chairs (3 Nos), 3 seater dining bench (1 No).",
      "MASTER BEDROOM": "3 door soft close hinged wardrobe with grey wooden handles, Queen size bed with solid headboard, bedside tables (2 Nos).",
      "GUEST BEDROOM": "3 door soft close hinged wardrobe with grey wooden handles, Queen size bed with headboard, bedside tables (2 Nos).",
      "MODULAR KITCHEN": "Spacious bottom cabinets, Overhead cabinets, 6 Hettich fittings (15 yr warranty), Faber hood and hob."
    }
  },
  {
    titleTop: "Architectural Grace",
    titleMain: "Elevated Living",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    oldPrice: "₹12.80 Lac",
    newPrice: "₹9.50 Lac*",
    link: "",
    details: {
      FOYER: "A neatly designed shoe storage unit with cabinets and shutters for an organised entrance.",
      "LIVING ROOM": "Sleek TV display unit with glass shutter finish, dedicated prayer unit with open shelving.",
      "DINING ROOM": "6 seater dining table, 3 Briano chairs, 1 dining bench, custom-built partition for living/dining.",
      "MASTER BEDROOM": "3 door wardrobe with hardwood handles, Dressing unit, Custom study table, Queen size bed.",
      "KIDS ROOM": "Full height wardrobe, Custom study table, Queen size bed, Bedside table.",
      "GUEST BEDROOM": "Full height wardrobe, Queen size bed with headboard, Bedside table.",
      "MODULAR KITCHEN": "Overhead and bottom cabinets, 6 Hettich fittings, Faber hood and hob, Full accessory set included."
    }
  },
  {
    titleTop: "Bespoke Masterpiece",
    titleMain: "TIQ Signature Living",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    oldPrice: "₹18.50 Lac",
    newPrice: "₹12.00 Lac*",
    link: "",
    details: {
      FOYER: "Shoe rack with open ledges, Round mirror, Cement wall texture finish.",
      "LIVING ROOM": "Sleek TV unit, Prayer unit, Jasmine drape curtains, Super premium Costae wall panelling, Fiori sofa set.",
      "DINING ROOM": "6 seater dining table, Custom partition, Common wash area with projected frameless mirror.",
      "KIDS BEDROOM": "Queen size bed, Mattress Peps 6\", Wardrobe with hardwood handles, Custom study unit, Wallpaper.",
      "MASTER BEDROOM": "Wardrobe, Dressing unit, Study unit, King size bed with bottom drawer, Accent chair, Wallpaper.",
      "GUEST BEDROOM": "Queen size bed, Premium Roman blinds, Wallpaper, Asian premium emulsion paint finish.",
      KITCHEN: "Overhead and bottom cabinets, 6 Hettich fittings, Faber hood and hob, Premium accessories."
    }
  },
];
const projects = [
  { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80", title: "Modern Villa", category: "Residential" },
  { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", title: "Tech Office", category: "Commercial" },
  { image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", title: "Boutique Hotel", category: "Hospitality" },
];

const howWeWork = [
  { step: "Step 1", title: "Discovery Call", desc: "Private consultation, no forms, no counters. A focused conversation about your vision and lifestyle.", icon: Phone },
  { step: "Step 2", title: "Designer Assignment", desc: "Dedicated senior designer assigned exclusively to you. One point of contact from day one.", icon: UserCheck },
  { step: "Step 3", title: "Site Visit & Measurement", desc: "Your designer visits personally to document every detail. Everything is verified on ground.", icon: Ruler },
  { step: "Step 4", title: "Design & 3D Visualisation", desc: "Fully rendered 3D visualisation before a single nail goes in. You see exactly what we build.", icon: Box },
  { step: "Step 5", title: "Material Selection", desc: "Personal walkthrough of curated materials, finishes, and hardware guided by your designer.", icon: Sparkles },
  { step: "Step 6", title: "Execution & Live Updates", desc: "In-house team takes over. Receive live progress photos andReports. No chasing, no guessing.", icon: Settings },
  { step: "Step 7", title: "Quality Inspection", desc: "Detailed quality check before completion. If it's not perfect, we fix it.", icon: ShieldCheck },
  { step: "Step 8", title: "Handover", desc: "Snag-free space with a 10-year maintenance plan starting from the day you move in.", icon: Key },
];

const trustItems = [
  {
    icon: DeliveryIcon,
    title: "Delivery in 40 days*"
  },
  {
    icon: CostsIcon,
    title: "No Hidden Costs"
  },
  {
    icon: WarrantyIcon,
    title: "10 Years Maintenance Support"
  },
  {
    icon: MDFIcon,
    title: "Zero MDF Graded Materials"
  },
  {
    icon: EstimateIcon,
    title: "Pre-Estimate in 72 Hours"
  },
  {
    icon: DesignerIcon,
    title: "Dedicated Designer per Project"
  },
  {
    icon: ConsultIcon,
    title: "First Consultation Free in 24 Hours"
  },
  {
    icon: DesignIcon,
    title: "Free Design"
  }
];


const Index = () => {

  const [index, setIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  const handleKnowMore = (pkg: any) => {
    setSelectedPackage(pkg);
    document.body.style.overflow = 'hidden';
  };

  const closeOverlay = () => {
    setSelectedPackage(null);
    document.body.style.overflow = 'auto';
  };

  // Duplicate items for seamless infinite effect
  const infiniteProjects = [...projects, ...projects];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500); // speed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index >= projects.length) {
      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "none";
        }
        setIndex(0);
      }, 500);

      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition =
            "transform 0.5s ease-in-out";
        }
      }, 600);
    }
  }, [index]);


  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="h-full w-full"
        >
          {[
            {
              tag: "Bespoke Interiors",
              title: "Tell Us What You Imagine.\nWe Will Build It for You.",
              desc: "Every home has a story waiting to be told through the spaces inside it. Share your vision with us and our execution team will bring it to life with care, craftsmanship, and a commitment to quality.",
              btn: "Start Your Story",
              img: "https://www.greenply.com:5001/originalfile1769165698904-875.jpg"
            },
            {
              tag: "Exquisite Materials",
              title: "Surfaces that\nfeel like art",
              desc: "Your destination for premium wallpapers, wall panels, tiles, and more that turn the ordinary into the unforgettable.",
              btn: "Explore Materials",
              img: "https://d3gq2merok8n5r.cloudfront.net/abhinav/ond-1634120396-Obfdc/amj-1649698066-erEC6/living-1649753968-lxcA4/living-dining-scene-1-1653286803-letfX.png"
            }
          ].map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-full w-full">
                {/* Background Image */}
                <img
                  src={slide.img}
                  alt={slide.tag}
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
                />

                {/* Bottom-up Dark Gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-end px-8 md:px-20 pb-20 md:pb-16 z-10">
                  <div className="max-w-4xl text-left">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-white/80 text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 font-bold font-sans"
                    >
                      {slide.tag}
                    </motion.p>

                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-white font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.2] mb-6 whitespace-pre-line"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-white/90 text-sm md:text-base leading-relaxed max-w-xl mb-10 font-medium font-sans"
                    >
                      {slide.desc}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="flex flex-wrap items-center gap-4"
                    >
                      <Link
                        to="/contact"
                        className="bg-[#965b32] text-white px-10 py-4 rounded-none text-[11px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-[#002121] transition-all transform hover:scale-105"
                      >
                        Start your project
                      </Link>
                      <Link
                        to="/portfolio"
                        className="bg-[#1A1D20] text-white border border-white/5 px-10 py-4 rounded-none text-[11px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-[#002121] transition-all transform hover:scale-105"
                      >
                        View our work
                      </Link>
                    </motion.div>

                    {/* Statistics Bar */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-6 text-white/70"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-xl md:text-2xl font-serif text-white">500+</span>
                        <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-[#d89a5b]">Spaces Transformed</span>
                      </div>
                      <div className="w-px h-10 bg-white/10 hidden md:block" />
                      <div className="flex flex-col gap-1">
                        <span className="text-xl md:text-2xl font-serif text-white">60 Days</span>
                        <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-[#d89a5b]">Average Delivery</span>
                      </div>
                      <div className="w-px h-10 bg-white/10 hidden md:block" />
                      <div className="flex flex-col gap-1">
                        <span className="text-xl md:text-2xl font-serif text-white">10 Yr</span>
                        <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-[#d89a5b]">Carpentry Warranty</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Luxury Stats Section */}
      <section className="relative py-24 bg-[#002121] overflow-hidden">
        {/* Subtle Architectural Background Design */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#d89a5b 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white font-brand text-3xl md:text-5xl lowercase italic opacity-90"
            >
              Milestones of Excellence
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-8">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="relative py-16 bg-white overflow-hidden">
        {/* Architectural Background Design - Golden Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          {/* Top Right Design */}
          <svg className="absolute -top-20 -right-20 w-[600px] h-[600px]" viewBox="0 0 400 400" fill="none">
            <path d="M100 50 L350 300" stroke="#d89a5b" strokeWidth="1" />
            <line x1="200" y1="120" x2="400" y2="120" stroke="#d89a5b" strokeWidth="1" />
            <line x1="300" y1="50" x2="300" y2="350" stroke="#d89a5b" strokeWidth="1" />
            <path d="M300 120 A80 80 0 0 1 300 280" stroke="#d89a5b" strokeWidth="1" />
            <line x1="150" y1="250" x2="350" y2="250" stroke="#d89a5b" strokeWidth="1" />
          </svg>

          {/* Bottom Left Design */}
          <svg className="absolute -bottom-40 -left-20 w-[800px] h-[800px] opacity-40 rotate-12" viewBox="0 0 400 400" fill="none">
            <circle cx="100" cy="300" r="150" stroke="#d89a5b" strokeWidth="0.5" />
            <line x1="0" y1="300" x2="400" y2="300" stroke="#d89a5b" strokeWidth="0.5" />
            <line x1="100" y1="100" x2="100" y2="400" stroke="#d89a5b" strokeWidth="0.5" />
            <rect x="50" y="250" width="100" height="100" stroke="#d89a5b" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Title */}
          <div className="flex flex-col items-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#d89a5b] text-[10px] tracking-[0.5em] uppercase font-bold mb-4"
            >
              Curated Solutions
            </motion.p>
            <div className="flex items-center w-full max-w-2xl">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#d89a5b]/40" />
              <h2 className="px-8 text-3xl md:text-5xl font-brand text-[#002121] tracking-[0.2em] uppercase text-center whitespace-nowrap">
                Package Offers
              </h2>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#d89a5b]/40" />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {packages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white group relative overflow-hidden flex flex-col h-full border border-white/5 hover:border-[#d89a5b]/30 transition-all duration-500 shadow-2xl cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.titleMain}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                  {/* Floating Title Overlay - Premium Look */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {item.titleTop && (
                      <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#d89a5b] mb-1">
                        {item.titleTop}
                      </p>
                    )}
                    <h3 className="text-xl font-brand tracking-wider text-[#002121]">
                      {item.titleMain}
                    </h3>
                  </div>
                </div>

                {/* Price & Content Section */}
                <div className="p-8 flex-1 flex flex-col justify-between text-center bg-white border-t border-gray-100">
                  <div>
                    <div className="flex flex-col items-center mb-6">
                      <span className="text-[10px] tracking-widest text-gray-400 uppercase font-bold mb-1">Exclusive Offer</span>
                      <div className="flex items-center gap-3">
                        <span className="line-through text-gray-300 text-sm">{item.oldPrice}</span>
                        <span className="text-2xl font-brand text-[#965b32]">
                          {item.newPrice}
                        </span>
                      </div>
                    </div>


                  </div>

                  <button
                    onClick={() => handleKnowMore(item)}
                    className="w-full py-4 bg-[#002121] text-white text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-300 hover:bg-[#d89a5b] rounded-none group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10">Know More</span>
                    <div className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 bg-[#d89a5b] transition-transform duration-300" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Services
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase text-center mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Our Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.15}>
                <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full">
                  <service.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                  <Link to={service.link} className="text-primary text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section> */}



      {/* Unified Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <p className="text-[#965b32] text-xs font-semibold tracking-[0.4em] uppercase mb-4">Our Work</p>
                <h2 className="text-4xl md:text-6xl font-brand text-[#002121] uppercase leading-tight">Featured Projects</h2>
              </div>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 bg-[#002121] text-white px-10 py-4 rounded-none text-[11px] font-black tracking-[0.25em] uppercase hover:bg-[#d89a5b] transition-all transform hover:scale-105 shadow-xl hover:shadow-[#002121]/20 group"
              >
                View All Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Residential */}
            <ScrollReveal delay={0.1}>
              <Link to="/residential" className="group relative aspect-[4/5] overflow-hidden bg-[#002121] block">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
                  alt="Residential"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002121]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-2xl font-brand tracking-[0.2em] uppercase mb-2">Residential</h3>
                  <div className="w-12 h-px bg-[#d89a5b] group-hover:w-full transition-all duration-700" />
                </div>
              </Link>
            </ScrollReveal>

            {/* Commercial */}
            <ScrollReveal delay={0.2}>
              <Link to="/commercial" className="group relative aspect-[4/5] overflow-hidden bg-[#002121] block">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Commercial"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002121]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-2xl font-brand tracking-[0.2em] uppercase mb-2">Commercial</h3>
                  <div className="w-12 h-px bg-[#d89a5b] group-hover:w-full transition-all duration-700" />
                </div>
              </Link>
            </ScrollReveal>

            {/* Hospitality */}
            <ScrollReveal delay={0.3}>
              <Link to="/hospitality" className="group relative aspect-[4/5] overflow-hidden bg-[#002121] block">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80"
                  alt="Hospitality"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002121]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-2xl font-brand tracking-[0.2em] uppercase mb-2">Hospitality</h3>
                  <div className="w-12 h-px bg-[#d89a5b] group-hover:w-full transition-all duration-700" />
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-[#002121] py-20 px-6 relative overflow-hidden text-white">
        {/* Luxury Architectural Grid Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(216,154,91,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(216,154,91,0.3) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        </div>

        <div className="max-w-[1600px] mx-auto relative z-10">
          {/* Header Area */}
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8 pb-4">
            <div className="max-w-2xl">

              <h2 className="text-5xl md:text-7xl lg:text-8xl font-brand text-white uppercase leading-[0.9]">
                How We <span className="text-white/20">Work</span>
              </h2>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-[#d89a5b] text-[9px] tracking-[0.4em] uppercase font-bold mb-4">
                Precision ✦ Quality ✦ Excellence
              </p>
              <p className="text-white/40 text-[11px] tracking-[0.2em] uppercase max-w-[250px] leading-loose ml-auto">
                A systematic approach to transforming your vision into reality.
              </p>
            </div>
          </div>

          {/* Horizontal Process Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-px bg-white/5 border border-white/5 shadow-3xl">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#002121] p-10 group hover:bg-[#002a2a] transition-all duration-500 cursor-pointer relative overflow-visible z-10 hover:z-20 hover:scale-[1.05] hover:shadow-3xl border border-white/5"
              >
                {/* Step Number with Line */}
                <div className="text-[#d89a5b] font-brand text-2xl mb-10 flex items-center gap-4 group-hover:gap-6 transition-all duration-500">
                  <span className="w-8 h-px bg-[#d89a5b]/30 group-hover:w-12 group-hover:bg-[#d89a5b] transition-all" />
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-10 transform group-hover:scale-110 transition-transform duration-700">
                    <step.icon size={36} style={{ color: step.color }} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-white text-[13px] font-bold tracking-[0.2em] uppercase leading-relaxed mb-6 min-h-[48px] border-l-2 border-transparent group-hover:border-[#d89a5b] group-hover:pl-4 transition-all">
                    {step.title}
                  </h3>

                  <p className="text-white/50 text-[11px] leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>

                {/* Background Shadow Effect */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#d89a5b]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </div>

          {/* Footer Accent */}
          {/* <div className="mt-20 flex flex-col items-center gap-6">
            <div className="flex gap-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#d89a5b]/20" />
              ))}
            </div>
            <p className="text-[#d89a5b]/40 text-[10px] tracking-[1em] uppercase font-black text-center ml-[1em]">
              Precision ✦ Quality ✦ Excellence
            </p>
          </div> */}
        </div>
      </section>

      {/* Transformations Section - Luxury Minimalist UI */}
      <section className="py-28 bg-white px-4 md:px-8 overflow-hidden relative border-y border-gray-50">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            {/* Left Column: Visuals */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="order-2 lg:order-1 relative w-full"
            >
              <div className="absolute -inset-4 border border-[#d89a5b]/10 -z-10 translate-x-4 translate-y-4" />
              <BeforeAfterSlider 
                beforeImage="/before.webp"
                afterImage="/after.webp"
                brandName="SA"
                className="shadow-[0_40px_100px_rgba(0,0,0,0.08)]"
              />
              
              {/* Floating Statistic or Design Note */}
              <div className="absolute -bottom-10 -right-6 bg-[#002121] text-white p-8 hidden md:block shadow-2xl">
                <p className="text-[10px] tracking-[0.3em] uppercase opacity-60 mb-2">Project Success</p>
                <p className="text-3xl font-sans font-light tracking-tighter">100%<span className="text-[14px] ml-1 tracking-normal opacity-40">Precision</span></p>
              </div>
            </motion.div>
            
            {/* Right Column: Content */}
            <div className="order-1 lg:order-2">
              <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-10"
                >
                  
                  
                  <h2 className="text-5xl md:text-7xl font-sans font-light text-[#002121] leading-[1.1] mb-8 tracking-tighter">
                    Turning Visions <br />
                    <span className="font-medium text-[#d89a5b]">Into Livable Art.</span>
                  </h2>
                  
                  
                  
                  <p className="text-gray-500 text-lg leading-[1.8] mb-12 font-sans font-normal opacity-90 max-w-lg">
                    Witness the seamless evolution of a space. At SA Interiors, we specialize in high-end transformations that balance aesthetic grandeur with functional precision.
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col gap-4 group cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-[1px] bg-[#d89a5b]/40 group-hover:w-8 group-hover:bg-[#d89a5b] transition-all" />
                      <span className="text-[#002121] font-bold tracking-[0.2em] text-[11px] uppercase">Residential</span>
                    </div>
                    <p className="text-[13px] text-gray-400 leading-relaxed pl-9 group-hover:text-gray-600 transition-colors">Bespoke home interiors crafted for luxury living.</p>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col gap-4 group cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-[1px] bg-[#d89a5b]/40 group-hover:w-8 group-hover:bg-[#d89a5b] transition-all" />
                      <span className="text-[#002121] font-bold tracking-[0.2em] text-[11px] uppercase">Commercial</span>
                    </div>
                    <p className="text-[13px] text-gray-400 leading-relaxed pl-9 group-hover:text-gray-600 transition-colors">Dynamic workspace designs that boost productivity.</p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={() => navigate("/portfolio")}
                    className="relative px-12 py-5 bg-[#002121] text-white text-[11px] font-black tracking-[0.25em] uppercase hover:bg-white hover:text-[#002121] border border-transparent hover:border-[#002121] transition-all duration-500 group overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-4">
                      Explore Portfolio 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                    </span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Wide Minimalist UI */}
      <section className="pt-16 pb-20 bg-white relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-sans font-medium text-gray-800 tracking-tight"
            >
              Why Chennai Homeowners Trust SA Interiors
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-20 items-center">
            {trustItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="h-32 flex items-center justify-center mb-6 transform group-hover:scale-105 transition-transform duration-500">
                  <item.icon />
                </div>
                <h3 className="text-[16px] md:text-[18px] font-sans text-gray-700 font-medium max-w-[200px] leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      {/* About Preview 
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">About Luxe Interiors</p>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Where Vision<br />Meets Craftsmanship</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Based in the heart of Chennai, we bring together creativity, functionality, and affordability to transform spaces into extraordinary experiences. With over a decade of expertise, we've made premium design accessible to all.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From cozy apartments to grand hotels, our turnkey solutions ensure a seamless journey from concept to completion. We understand Tamil Nadu's unique aesthetic sensibilities and blend them with contemporary global trends.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all">
                Our Story <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden">
                <img src={aboutImage} alt="Interior Design Process" className="w-full h-full object-cover aspect-[4/3]" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>*/}

      {/* Testimonials - Luxury Modern Minimalist UI */}
      <section id="testimonials" className="pt-8 pb-2 bg-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#d89a5b 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl font-sans font-light text-[#002121] leading-tight mb-6">
              What Our Clients <span className="font-medium">Say About Us</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-20 text-[#d89a5b]">
              
            </div>
          </ScrollReveal>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-20"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="bg-white p-12 border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] group hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-700 h-full flex flex-col"
                >
                  {/* Image Frame - Luxury Architectural Style */}
                  <div className="relative w-28 h-28 mx-auto mb-10 group-hover:scale-110 transition-transform duration-700">
                    <div className="absolute inset-0 border border-[#d89a5b]/30 rounded-full -m-2 group-hover:rotate-180 transition-transform duration-[2s]" />
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-xl">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                    {/* Floating Quote Icon */}
                    <div className="absolute -bottom-2 -right-2 bg-[#002121] text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg border-4 border-white">
                      <MessageSquare size={16} className="text-[#d89a5b]" />
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="flex-1">
                    <p className="text-gray-500 text-[15px] leading-relaxed italic mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
                      "{item.review}"
                    </p>
                  </div>

                  {/* Client Name */}
                  <div className="pt-8 border-t border-gray-50">
                    <h3 className="text-[#002121] font-bold text-[13px] tracking-[0.2em] uppercase mb-1">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-[#d89a5b] font-medium tracking-[0.3em] uppercase opacity-60">Verified Owner</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Interactive Interior Style Quiz */}
      <section id="quiz" className="pt-2 pb-10 bg-white relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#002121 1px, transparent 1px), linear-gradient(90deg, #002121 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <QuizComponent />
        </div>
      </section>

      {/* Final CTA - Luxury Modern Minimalist */}
      <section className="pt-10 pb-20 bg-white relative overflow-hidden border-t border-gray-50">
        {/* Decorative architectural line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-[#d89a5b] to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-5xl md:text-[70px] font-sans font-light text-[#002121] mb-8 tracking-tighter leading-[1.1]">
              Ready to See Your <br />
              <span className="font-bold">Space Come Alive?</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-14 text-lg md:text-xl font-light leading-relaxed">
              Get a free consultation and a design plan crafted just for you, <br className="hidden md:block" />
              <span className="text-[#d89a5b] font-medium italic">within 24 hours.</span>
            </p>
            
            <Link 
              to="/contact" 
              className="group relative inline-flex items-center gap-6 bg-[#002121] text-white px-14 py-6 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-[#d89a5b] transition-all duration-700 shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(216,154,91,0.2)]"
            >
              <span className="relative z-10">Get Started for Free</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Premium Package Modal - Enhanced Legibility & Luxury */}
      <AnimatePresence>
        {selectedPackage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeOverlay}
              className="absolute inset-0 bg-[#002121]/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 30 }}
              className="relative w-full max-w-6xl max-h-[95vh] bg-white shadow-2xl overflow-hidden flex flex-col rounded-none"
            >
              {/* Close Button */}
              <button
                onClick={closeOverlay}
                className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-[#8B2323] text-black hover:text-white rounded-full transition-all"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto flex-1">

                {/* Header Image & Float Card */}
                <div className="relative h-[250px] md:h-[350px]">
                  <img
                    src={selectedPackage.image}
                    alt={selectedPackage.titleMain}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white p-8 md:p-10 shadow-2xl text-center">
                    <h2 className="text-[#8B2323] text-3xl font-brand tracking-widest uppercase mb-2">
                      {selectedPackage.titleMain}
                    </h2>
                    <p className="text-gray-500 text-[10px] tracking-widest uppercase font-bold mb-4">
                      {selectedPackage.description}
                    </p>
                    <div className="flex flex-col items-center">
                      <span className="text-gray-400 text-xs uppercase line-through mb-1">{selectedPackage.oldPrice}</span>
                      <span className="text-[#002121] text-3xl md:text-4xl font-brand">{selectedPackage.newPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Detail Specifications */}
                <div className="bg-white p-8 md:p-20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                    {Object.entries(selectedPackage.details).map(([room, desc]: any) => (
                      <div key={room} className="flex flex-col border-l-2 border-[#8B2323]/10 pl-8 py-2">
                        <h3 className="text-[#002121] text-[15px] font-black tracking-[0.2em] uppercase mb-4">
                          {room}
                        </h3>
                        <p className="text-[#444444] text-[14px] leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process Section */}
                <div className="bg-[#f8f9fa] p-8 md:p-20 border-t border-gray-100">
                  <h3 className="text-center text-[#8B2323] text-[14px] font-black tracking-[0.4em] uppercase mb-16">The White Glove Journey</h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {howWeWork.slice(0, 8).map((step, idx) => (
                      <div key={step.title} className="flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-6 bg-white shadow-sm">
                          <step.icon size={20} className="text-[#8B2323]" />
                        </div>
                        <h4 className="text-[11px] font-bold tracking-widest uppercase text-[#002121] mb-2">{step.title}</h4>
                        <p className="text-gray-500 text-[11px] leading-tight">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="bg-white border-t border-gray-100 p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <button className="flex items-center justify-center gap-4 py-5 border-2 border-gray-100 text-[#002121] hover:border-[#8B2323] hover:text-[#8B2323] transition-all text-[11px] font-black tracking-[0.2em] uppercase">
                    Questions?
                  </button>
                  <button className="flex items-center justify-center gap-4 py-5 border-2 border-gray-100 text-[#002121] hover:border-[#8B2323] hover:text-[#8B2323] transition-all text-[11px] font-black tracking-[0.2em] uppercase">
                    View Video
                  </button>
                  <button className="flex items-center justify-center gap-4 py-5 bg-[#002121] text-white hover:bg-[#8B2323] transition-all text-[11px] font-black tracking-[0.2em] uppercase px-8">
                    Talk to Designer
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
