import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const productsData = [
  {
    id: "civil",
    title: "Civil, Electrical & Plumbing",
    shortTitle: "Civil, Electrical & Plumbing",
    deckImage: "https://i.pinimg.com/1200x/c2/4f/1c/c24f1cd2d0916b6333e828740ebe1bc7.jpg",
    overviewImage: "https://i.pinimg.com/736x/f4/c5/f0/f4c5f07839545b9210d4e50b0d3193b4.jpg",
    eyebrow: "SERVICE 01",
    description: "The backbone of every well-built home. We handle all civil modifications, licensed electrical work and precision plumbing so every system in your space is safe, compliant and built to last.",
    points: [
      "Wall breaking, building and plastering for layout changes",
      "Licensed electrical wiring with ISI certified materials",
      "Concealed conduit work for clean hidden cable runs",
      "Modular switchboard installation with branded fittings",
      "Plumbing for kitchens, bathrooms and utility areas",
      "CP fitting installation: Jaquar, Kohler or equivalent",
      "Waterproofing for bathrooms and all wet areas",
      "All work carried out by licensed verified professionals"
    ],
    pricing: [
      { tier: "STANDARD", name: "Essential Works", price: "₹45 per sqft", includes: "Basic wiring, plumbing points, standard fittings and civil patching" },
      { tier: "PREMIUM", name: "Complete Package", price: "₹75 per sqft", includes: "Concealed wiring, branded CP fittings, waterproofing and full civil modifications" },
      { tier: "CUSTOM", name: "Full Execution", price: "On Quote", includes: "Smart wiring, premium brands, full layout changes and heavy civil work" }
    ],
    deckPrice: "From ₹45/sqft",
    number: "01"
  },
  {
    id: "ceiling",
    title: "False Ceiling",
    shortTitle: "False Ceiling",
    deckImage: "https://5.imimg.com/data5/SELLER/Default/2025/3/494809326/YB/FV/PD/235143052/pop-false-ceiling.png",
    overviewImage: "https://i.pinimg.com/736x/fb/f9/04/fbf904ecb032fd133ee15a623a5644e3.jpg",
    eyebrow: "SERVICE 02",
    description: "A well-designed  false ceiling transforms the entire feel of a room. We execute POP, gypsum and PVC ceilings with precision lighting integration, clean edges and finishes that look as good in year five as they do on day one.",
    points: [
      "POP false ceiling for decorative cornices and curves",
      "Gypsum board ceiling for a modern flat and durable finish",
      "PVC ceiling panels for kitchens, bathrooms and utility areas",
      "Integrated cove lighting and recessed downlight provision",
      "Metal framing with anti-rust galvanised channels",
      "Shadow gap and reveal detailing for a premium finish",
      "Seamless joint finishing with no visible seams or cracks",
      "Acoustic and thermal insulation options available on request"
    ],
    pricing: [
      { tier: "STANDARD", name: "POP Ceiling", price: "₹65 per sqft", includes: "Basic POP flat ceiling with cornice border and one lighting provision" },
      { tier: "PREMIUM", name: "Gypsum Board", price: "₹95 per sqft", includes: "Gypsum board with cove lighting, shadow gap detailing and smooth finish" },
      { tier: "CUSTOM", name: "Designer Ceiling", price: "₹130+ per sqft", includes: "Multi-level ceiling, integrated smart lighting and premium reveal detailing" }
    ],
    deckPrice: "From ₹65/sqft",
    number: "02"
  },
  {
    id: "painting",
    title: "Painting",
    shortTitle: "Painting",
    deckImage: "https://i.pinimg.com/736x/2f/89/ba/2f89ba6de7afbb51d329c30c475f9e55.jpg",
    overviewImage: "https://i.pinimg.com/1200x/82/79/22/82792293cc127951f17e828ce2090db3.jpg",
    eyebrow: "SERVICE 03",
    description: "Paint is the finish that ties every element of an interior together. We use only premium emulsion brands with proper surface preparation, multiple coats and a finish that holds its colour and texture for years without fading or peeling.",
    points: [
      "2 coats of wall putty for a smooth even surface",
      "1 coat of premium primer before emulsion application",
      "2 coats of interior emulsion for depth and durability",
      "Asian Paints Royale, Berger Silk or equivalent brands",
      "Texture paint and feature wall options available",
      "Exterior paint with weatherproof and anti-fungal properties",
      "Protected site with furniture and floor covering throughout",
      "Post-painting cleanup and touch-up included as standard"
    ],
    pricing: [
      { tier: "STANDARD", name: "Economy Finish", price: "₹18 per sqft", includes: "Putty, primer and 2 coats of standard emulsion. Tractor Emulsion or equivalent." },
      { tier: "PREMIUM", name: "Royale Finish", price: "₹28 per sqft", includes: "Putty, primer and 2 coats of Asian Paints Royale or Berger Silk premium emulsion." },
      { tier: "CUSTOM", name: "Textured & Feature", price: "₹45+ per sqft", includes: "Texture paint, Venetian plaster, lime wash or stencil finishes for accent walls." }
    ],
    deckPrice: "From ₹18/sqft",
    number: "03"
  },
  {
    id: "flooring",
    title: "Flooring",
    shortTitle: "Flooring",
    deckImage: "https://i.pinimg.com/1200x/04/4e/8b/044e8be42166d984a4885e24e0a5f53b.jpg",
    overviewImage: "https://i.pinimg.com/1200x/08/e1/b2/08e1b242b792689c0b43cef9d90f607d.jpg",
    eyebrow: "SERVICE 04",
    description: "Flooring is the foundation of how a space feels underfoot and underscores the entire design direction. We supply and lay tiles, vitrified flooring, marble, granite and engineered wood with tight joints and perfectly level finishes throughout.",
    points: [
      "Vitrified and double charged tiles for living and bedroom areas",
      "Anti-skid tiles for kitchens, bathrooms and outdoor spaces",
      "Marble and granite cutting, laying and polishing",
      "Engineered wood flooring for bedrooms and study rooms",
      "Vinyl and SPC flooring for rental and commercial spaces",
      "Tile grouting with epoxy or cement-based joint filler",
      "Levelling compound for a perfectly flat base preparation",
      "Staircase nosing and threshold strip installation included"
    ],
    pricing: [
      { tier: "STANDARD", name: "Vitrified Tiles", price: "₹55 per sqft", includes: "Supply and laying of standard vitrified tiles up to ₹45 per sqft material value." },
      { tier: "PREMIUM", name: "Marble and Granite", price: "₹120 per sqft", includes: "Supply, cutting, laying and polishing of natural stone flooring." },
      { tier: "CUSTOM", name: "Engineered Wood", price: "₹180+ per sqft", includes: "Premium engineered wood or SPC flooring with underlay and all accessories." }
    ],
    deckPrice: "From ₹55/sqft",
    number: "04"
  },
  {
    id: "furniture",
    title: "Custom Furniture",
    shortTitle: "Custom Furniture",
    deckImage: "https://i.pinimg.com/1200x/90/4d/18/904d18922ec642e6b033abed30c29353.jpg",
    overviewImage: "https://i.pinimg.com/736x/2f/ba/f6/2fbaf6df3839058f6e03cad7af74e12a.jpg",
    eyebrow: "SERVICE 05",
    description: "Every piece we make is built for the room it lives in, not adapted from a standard size. From wardrobes and modular kitchens to TV units and study tables, everything is manufactured in our own unit with graded materials and zero MDF.",
    points: [
      "Manufactured in our own in-house unit, not outsourced",
      "Zero MDF policy, graded plywood and materials only",
      "Hettich hardware with 15-year warranty on all fittings",
      "Soft close hinges and full-extension drawer channels as standard",
      "Laminates, veneers and lacquer finish options available",
      "Modular kitchens with Faber or Elica hood and hob integration",
      "Custom wardrobes with internal organisation built to your brief",
      "10-year warranty on all manufactured furniture"
    ],
    pricing: [
      { tier: "STANDARD", name: "Essential Woodwork", price: "₹850 per sqft", includes: "Graded plywood with laminate finish, Hettich fittings and soft close mechanism." },
      { tier: "PREMIUM", name: "Premium Finish", price: "₹1,200 per sqft", includes: "Veneer or lacquer finish, premium hardware, integrated lighting and soft close throughout." },
      { tier: "CUSTOM", name: "Bespoke", price: "On Quote", includes: "Full custom brief, parametric design, premium materials and signature TIQ finish." }
    ],
    deckPrice: "From ₹850/sqft",
    number: "05"
  }
];

const Products = () => {
  const location = useLocation();
  const [activeProductId, setActiveProductId] = useState(productsData[0].id);
  const [activeTab, setActiveTab] = useState<"overview" | "pricing">("overview");

  useEffect(() => {
    // If a hash is present in the URL, try to set the active product
    if (location.hash) {
      const hashId = location.hash.replace('#', '');
      const productExists = productsData.some(p => p.id === hashId);
      if (productExists) {
        setActiveProductId(hashId);
      }
    }
  }, [location.hash]);

  const activeProduct = productsData.find(p => p.id === activeProductId) || productsData[0];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-[#965b32] text-xs font-bold tracking-[0.2em] uppercase mb-4">Our Services</p>
          <h1 className="text-4xl md:text-6xl font-brand font-bold text-[#002121] mb-6">
            Everything Your Space Needs
          </h1>
          <p className="text-slate-500 text-lg">
            Click any service to explore the full scope and pricing.
          </p>
        </ScrollReveal>

        {/* Deck of Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {productsData.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveProductId(product.id)}
              className={`flex flex-col text-left rounded-2xl overflow-hidden transition-all duration-500 ${
                activeProductId === product.id
                  ? "ring-2 ring-[#d89a5b] shadow-xl shadow-[#d89a5b]/10 transform -translate-y-1 bg-white"
                  : "bg-slate-50 hover:bg-white hover:shadow-lg opacity-80 hover:opacity-100"
              }`}
            >
              <div className="h-40 w-full overflow-hidden">
                <img 
                  src={product.deckImage} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <span className={`text-sm font-bold block mb-1 ${activeProductId === product.id ? "text-[#d89a5b]" : "text-slate-400"}`}>
                    {product.number}
                  </span>
                  <h3 className="font-semibold text-slate-900 leading-tight mb-2">
                    {product.shortTitle}
                  </h3>
                </div>
                <p className="text-sm font-medium text-[#965b32]">
                  {product.deckPrice}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Details Section */}
        <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-100 rounded-[2rem] overflow-hidden mt-6">
          
          {/* Tabs */}
          <div className="flex border-b border-slate-100 bg-white px-4 md:px-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-8 py-6 text-[13px] font-bold tracking-[0.15em] uppercase transition-all duration-300 relative ${
                activeTab === "overview" ? "text-[#002121]" : "text-slate-400 hover:text-slate-700"
              }`}
            >
              Overview
              {activeTab === "overview" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d89a5b]"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("pricing")}
              className={`px-8 py-6 text-[13px] font-bold tracking-[0.15em] uppercase transition-all duration-300 relative ${
                activeTab === "pricing" ? "text-[#002121]" : "text-slate-400 hover:text-slate-700"
              }`}
            >
              Pricing
              {activeTab === "pricing" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d89a5b]"></span>
              )}
            </button>
          </div>

          {/* Content Area */}
          <div className="p-8 lg:p-12">
            
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 animate-fade-in">
                {/* Text Content */}
                <div>
                  <p className="text-[#d89a5b] text-xs font-black tracking-[0.25em] uppercase mb-6 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#d89a5b]"></span>
                    {activeProduct.eyebrow}
                  </p>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#002121] mb-8 leading-tight">
                    {activeProduct.title}
                  </h2>
                  <p className="text-slate-500 text-lg font-light leading-[1.8] mb-10">
                    {activeProduct.description}
                  </p>
                  
                  <ul className="flex flex-col">
                    {activeProduct.points.map((point, index) => (
                      <li key={index} className="flex gap-4 items-start py-5 border-b border-slate-100 last:border-0">
                        <div className="mt-2 flex-shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#d89a5b]"></div>
                        </div>
                        <p className="text-slate-500 font-light leading-snug text-[15px] md:text-base">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Image */}
                <div className="relative w-full h-[400px] lg:h-auto overflow-hidden rounded-3xl shadow-xl">
                  <img 
                    src={activeProduct.overviewImage} 
                    alt={activeProduct.title} 
                    className="w-full h-full object-cover lg:absolute lg:inset-0"
                  />
                </div>
              </div>
            )}

            {activeTab === "pricing" && (
              <div className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                  {activeProduct.pricing.map((tier, index) => (
                    <div 
                      key={index} 
                      className={`p-8 border transition-all duration-300 ${
                        index === 1 
                          ? "border-[#d89a5b] bg-[#fffaf5] shadow-lg shadow-[#d89a5b]/5 transform md:-translate-y-2" 
                          : "border-transparent bg-slate-50 hover:border-[#d89a5b]/30 hover:bg-white"
                      }`}
                    >
                      <p className="text-[#965b32] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                        {tier.tier}
                      </p>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-3xl font-serif text-[#d89a5b] mb-8">
                        {tier.price}
                      </p>
                      
                      <div className="h-px w-full bg-slate-100 mb-8 max-w-[50px]"></div>
                      
                      <p className="text-slate-600 leading-relaxed font-medium">
                        {tier.includes}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar */}
          <div className="bg-[#002121] text-white p-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d89a5b] rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
            <p className="text-white/80 font-light text-lg md:text-xl text-center md:text-left relative z-10">
              <span className="font-semibold text-white">Not sure where to start?</span> We assess your space and advise for free.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openConsultation"))}
              className="bg-[#d89a5b] text-white px-10 py-5 rounded-none text-xs font-black tracking-[0.25em] uppercase hover:bg-white hover:text-[#002121] transition-all transform hover:scale-105 whitespace-nowrap flex items-center gap-3 shrink-0 relative z-10"
            >
              Get a Free Estimate <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;
