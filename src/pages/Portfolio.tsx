import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const categories = [
  "All", 
  "Residential", 
  "Commercial", 
  "Hospitality",
  "Restaurants & Food courts",
  "Resorts & hotels",
  "Schools & Play Space Interiors",
  "Office interiors",
  "Events & banquets"
];

const projects = [
  { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80", title: "Modern Villa Redesign", category: "Residential", location: "Anna Nagar, Chennai" },
  { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80", title: "Tech Startup Office", category: "Commercial", location: "OMR, Chennai" },
  { image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80", title: "Boutique Hotel Lobby", category: "Hospitality", location: "Mahabalipuram" },
  { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80", title: "Penthouse Living Room", category: "Residential", location: "Boat Club, Chennai" },
  { image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80", title: "Co-Working Space", category: "Commercial", location: "T. Nagar, Chennai" },
  { image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80", title: "Resort Spa Design", category: "Hospitality", location: "Pondicherry" },
  { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80", title: "Contemporary Apartment", category: "Residential", location: "Adyar, Chennai" },
  { image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80", title: "Law Firm Office", category: "Commercial", location: "Nungambakkam, Chennai" },
  { image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80", title: "Heritage Hotel Rooms", category: "Hospitality", location: "Chettinad" },

  // Restaurants & Food courts
  { image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", title: "Fine Dining Restaurant", category: "Restaurants & Food courts", location: "Alwarpet, Chennai" },
  { image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80", title: "Modern Food Court", category: "Restaurants & Food courts", location: "Velachery, Chennai" },
  { image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80", title: "Urban Cafe Design", category: "Restaurants & Food courts", location: "Besan Nagar, Chennai" },

  // Resorts & hotels
  { image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", title: "Luxury Beach Resort", category: "Resorts & hotels", location: "ECR, Chennai" },
  { image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=600&q=80", title: "Eco-Friendly Hotel", category: "Resorts & hotels", location: "Auroville" },
  { image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80", title: "Mountain View Resort", category: "Resorts & hotels", location: "Ooty" },

  // Schools & Play Space Interiors
  { image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80", title: "International School Library", category: "Schools & Play Space Interiors", location: "Sholinganallur, Chennai" },
  { image: "https://images.unsplash.com/photo-1574607383476-f517f260d30b?w=600&q=80", title: "Interactive Play Space", category: "Schools & Play Space Interiors", location: "Royapettah, Chennai" },
  { image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80", title: "Modern Classrooms", category: "Schools & Play Space Interiors", location: "Guindy, Chennai" },

  // Office interiors
  { image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80", title: "Corporate Headquarters", category: "Office interiors", location: "Guindy, Chennai" },
  { image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80", title: "Creative Agency Hub", category: "Office interiors", location: "Alwarpet, Chennai" },
  { image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=600&q=80", title: "Executive Boardroom", category: "Office interiors", location: "Anna Salai, Chennai" },

  // Events & banquets
  { image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80", title: "Grand Banquet Hall", category: "Events & banquets", location: "MRC Nagar, Chennai" },
  { image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80", title: "Premium Event Space", category: "Events & banquets", location: "ECR, Chennai" },
  { image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80", title: "Boutique Wedding Venue", category: "Events & banquets", location: "Gopalapuram, Chennai" },
];

const Portfolio = () => {
  const location = useLocation();
  const [active, setActive] = useState("All");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryQuery = params.get("category");
    if (categoryQuery && categories.includes(categoryQuery)) {
      setActive(categoryQuery);
    } else if (!categoryQuery) {
      setActive("All");
    }
  }, [location.search]);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <section className="relative pt-24 pb-20 bg-[#f6f3f2] text-[#002121] mt-[72px]">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10 py-10 overflow-hidden">
          <ScrollReveal>
            <p className="text-[#d89a5b] text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-4 pl-[0.5em]">Our Work</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] mb-6 md:mb-8 pl-[0.1em] md:pl-[0.2em]">
              Portfolio
            </h1>
            <p className="text-gray-600 text-[15px] md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Explore our collection of carefully crafted interiors across residential, commercial, and hospitality sectors.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-8 py-3 text-[11px] font-black tracking-[0.2em] uppercase transition-all shadow-sm ${
                    active === cat 
                      ? "bg-[#002121] text-white" 
                      : "bg-white border border-gray-200 text-[#002121] hover:border-[#002121]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
                    <p className="text-[#d89a5b] text-[10px] font-bold tracking-[0.3em] uppercase mb-2">{project.category}</p>
                    <h3 className="text-white text-xl font-sans font-bold uppercase tracking-wide mb-1">{project.title}</h3>
                    <p className="text-gray-300 text-xs font-medium">{project.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="relative py-32 text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover brightness-[0.3]" 
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="text-[#d89a5b] text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase mb-4">Start Your Journey</p>
            <h2 className="text-4xl md:text-6xl font-sans font-bold uppercase text-white mb-6 tracking-wide drop-shadow-md">Like What You See?</h2>
            <p className="text-white/80 text-lg md:text-xl font-medium max-w-xl mx-auto mb-10 drop-shadow-sm">Let's create something equally stunning for your space.</p>
            <Link to="/contact" className="inline-flex items-center gap-3 bg-[#d89a5b] text-white px-10 py-5 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-white hover:text-[#002121] transition-all duration-300 shadow-xl">
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
