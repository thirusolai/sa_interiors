import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  const toggleMobileExpanded = (key: string) => {
    setMobileExpanded(prev => prev === key ? null : key);
  };

  const handleDropdownEnter = (dropdown: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };



  const navLinks = {
    commercial: [
      { name: "Restaurants & Food courts", path: "/portfolio?category=Restaurants%20%26%20Food%20courts" },
      { name: "Resorts & hotels", path: "/portfolio?category=Resorts%20%26%20hotels" },
      { name: "Schools & Play Space Interiors", path: "/portfolio?category=Schools%20%26%20Play%20Space%20Interiors" },
      { name: "Office interiors", path: "/portfolio?category=Office%20interiors" },
      { name: "Events & banquets", path: "/portfolio?category=Events%20%26%20banquets" },
    ],
    products: [
      { name: "Civil, Electrical & Plumbing", path: "/products#civil" },
      { name: "False ceiling", path: "/products#ceiling" },
      { name: "Painting", path: "/products#painting" },
      { name: "Flooring", path: "/products#flooring" },
      { name: "Custom Furnitures", path: "/products#furniture" },
    ],
    company: [
      { name: "About", path: "/about" },
      { name: "Manufacturing", path: "/about#manufacturing" },
      { name: "Testimonial", path: "/testimonials" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ]
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-[#002121] text-white z-50 border-b border-white/5 shadow-xl">
        <div className="w-full flex items-center justify-between px-8 lg:px-16 py-3">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 flex items-center justify-center">
              <svg viewBox="0 0 40 40" fill="none" stroke="#d89a5b" strokeWidth="2" className="w-full h-full">
                <rect x="5" y="5" width="30" height="30" />
                <path d="M10 35V15C10 10 15 5 20 5C25 5 30 10 30 15V35" />
                <line x1="15" y1="35" x2="15" y2="10" />
                <line x1="25" y1="35" x2="25" y2="10" />
                <line x1="20" y1="35" x2="20" y2="5" />
              </svg>
            </div>
            <span className="text-lg md:text-xl font-brand tracking-[0.2em] font-semibold transition-colors group-hover:text-[#d89a5b] uppercase">
              SA interiors
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden xl:flex items-center gap-8 text-[16px] font-medium tracking-wide">
            <Link to="/home_interior" className="hover:text-[#d89a5b] transition-all whitespace-nowrap py-4">Home Interiors</Link>
            <Link to="/kitchen-wardrobe" className="hover:text-[#d89a5b] transition-all whitespace-nowrap py-4">Kitchen & Wardrobe</Link>

            {/* COMMERCIAL */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleDropdownEnter('commercial')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link to="/portfolio?category=Commercial" className="flex items-center gap-1.5 hover:text-[#d89a5b] transition-all cursor-pointer">
                Commercial <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'commercial' ? 'rotate-180' : ''}`} />
              </Link>

              <div className={`fixed top-[72px] left-0 right-0 bg-[#002121] border-t border-white/5 shadow-2xl z-[60] transition-all duration-300 ${activeDropdown === 'commercial' ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
                onMouseEnter={() => handleDropdownEnter('commercial')}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="px-8 lg:px-16 py-12">
                  <div className="flex flex-col gap-6 max-w-xs">
                    {navLinks.commercial.map((item) => (
                      <Link key={item.name} to={item.path} className="text-[15px] font-medium tracking-wide hover:text-[#d89a5b] transition-all">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/portfolio" className="hover:text-[#d89a5b] transition-all whitespace-nowrap py-4">Portfolio</Link>

            {/* PRODUCTS */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleDropdownEnter('products')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="flex items-center gap-1.5 hover:text-[#d89a5b] transition-all cursor-pointer">
                Products <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </div>

              <div className={`fixed top-[72px] left-0 right-0 bg-[#002121] border-t border-white/5 shadow-2xl z-[60] transition-all duration-300 ${activeDropdown === 'products' ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
                onMouseEnter={() => handleDropdownEnter('products')}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="px-8 lg:px-16 py-12">
                  <div className="flex flex-col gap-6 max-w-xs">
                    {navLinks.products.map((item) => (
                      <Link key={item.name} to={item.path} className="text-[15px] font-medium tracking-wide hover:text-[#d89a5b] transition-all">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* OUR COMPANY */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleDropdownEnter('company')}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="flex items-center gap-1.5 hover:text-[#d89a5b] transition-all cursor-pointer">
                Our Company <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </div>

              <div className={`fixed top-[72px] left-0 right-0 bg-[#002121] border-t border-white/5 shadow-2xl z-[60] transition-all duration-300 ${activeDropdown === 'company' ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
                onMouseEnter={() => handleDropdownEnter('company')}
                onMouseLeave={handleDropdownLeave}
              >
                <div className="px-8 lg:px-16 py-12">
                  <div className="flex flex-col gap-6 max-w-xs">
                    {navLinks.company.map((item) => (
                      <Link key={item.name} to={item.path} className="text-[15px] font-medium tracking-wide hover:text-[#d89a5b] transition-all">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* RIGHT ICONS & CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("openConsultation"))}
              className="bg-[#965b32] text-white px-8 py-3 rounded-none text-[11px] font-black tracking-[0.25em] uppercase hover:bg-white hover:text-[#002121] transition-all transform hover:scale-105 whitespace-nowrap border-2 border-transparent hover:border-[#965b32]"
            >
              Talk to us
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button className="xl:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-[#002121] text-white z-[60] flex flex-col p-10 transition-transform duration-500 xl:hidden overflow-y-auto ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center gap-6 mb-12 border-b border-white/10 pb-6 w-full">
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 shrink-0 overflow-hidden">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 40 40" fill="none" stroke="#d89a5b" strokeWidth="2" className="w-full h-full">
                <rect x="5" y="5" width="30" height="30" />
                <path d="M10 35V15C10 10 15 5 20 5C25 5 30 10 30 15V35" />
                <line x1="15" y1="35" x2="15" y2="10" />
                <line x1="25" y1="35" x2="25" y2="10" />
                <line x1="20" y1="35" x2="20" y2="5" />
              </svg>
            </div>
            <span className="text-[17px] sm:text-lg font-brand tracking-[0.2em] uppercase font-bold text-white whitespace-nowrap">SA interiors</span>
          </Link>
          <button onClick={() => setMenuOpen(false)} className="w-10 h-10 flex items-center justify-center border border-white/10 hover:border-[#d89a5b] text-white hover:text-[#d89a5b] transition-all bg-[#001c1c] shrink-0">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>
        
        <div className="flex flex-col gap-6 font-serif mb-12">
          <Link to="/home_interior" className="text-3xl border-b border-white/10 pb-4 hover:text-[#d89a5b] transition-colors" onClick={() => setMenuOpen(false)}>Home Interiors</Link>
          <Link to="/kitchen-wardrobe" className="text-3xl border-b border-white/10 pb-4 hover:text-[#d89a5b] transition-colors" onClick={() => setMenuOpen(false)}>Kitchen & Wardrobe</Link>
          
          <div className="flex flex-col border-b border-white/10 pb-4">
            <button 
              className="flex justify-between items-center text-3xl font-serif text-white hover:text-[#d89a5b] transition-colors text-left"
              onClick={() => toggleMobileExpanded('commercial')}
            >
              Commercial
              <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${mobileExpanded === 'commercial' ? 'rotate-180 text-[#d89a5b]' : 'text-white/50'}`} />
            </button>
            <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${mobileExpanded === 'commercial' ? 'mt-6 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              {navLinks.commercial.map(item => (
                <Link key={item.name} to={item.path} className="text-[19px] pl-4 text-white/70 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>{item.name}</Link>
              ))}
            </div>
          </div>

          <Link to="/portfolio" className="text-3xl border-b border-white/10 pb-4 hover:text-[#d89a5b] transition-colors" onClick={() => setMenuOpen(false)}>Portfolio</Link>

          <div className="flex flex-col border-b border-white/10 pb-4">
            <button 
              className="flex justify-between items-center text-3xl font-serif text-white hover:text-[#d89a5b] transition-colors text-left"
              onClick={() => toggleMobileExpanded('products')}
            >
              Products
              <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${mobileExpanded === 'products' ? 'rotate-180 text-[#d89a5b]' : 'text-white/50'}`} />
            </button>
            <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${mobileExpanded === 'products' ? 'mt-6 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              {navLinks.products.map(item => (
                <Link key={item.name} to={item.path} className="text-[19px] pl-4 text-white/70 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>{item.name}</Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col border-b border-white/10 pb-4">
            <button 
              className="flex justify-between items-center text-3xl font-serif text-white hover:text-[#d89a5b] transition-colors text-left"
              onClick={() => toggleMobileExpanded('company')}
            >
              Our Company
              <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${mobileExpanded === 'company' ? 'rotate-180 text-[#d89a5b]' : 'text-white/50'}`} />
            </button>
            <div className={`flex flex-col gap-4 overflow-hidden transition-all duration-300 ${mobileExpanded === 'company' ? 'mt-6 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              {navLinks.company.map(item => (
                <Link key={item.name} to={item.path} className="text-[19px] pl-4 text-white/70 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>{item.name}</Link>
              ))}
            </div>
          </div>
        </div>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="mt-auto w-full bg-[#965b32] text-white py-6 rounded-none text-center text-xs font-black tracking-[0.4em] uppercase shrink-0 transition-transform hover:scale-[1.02]"
        >
          Talk to us
        </Link>
      </div>
    </>
  );
};

export default Navbar;

