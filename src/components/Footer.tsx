import { Facebook, Instagram, Twitter, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#002121] text-white pt-24 pb-12 font-sans overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Social */}
          <div className="col-span-2 lg:col-span-1 space-y-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#d89a5b] rounded-sm flex items-center justify-center">
                <span className="text-white font-black text-xl">SA</span>
              </div>
              <h2 className="text-2xl font-bold tracking-[0.2em] uppercase">Interiors</h2>
            </div>
            
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-[#002121] transition-all duration-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            <p className="text-white/50 text-sm leading-[1.8] max-w-sm font-light">
              Crafting poetic living spaces where every element recites a story. Pursuing European standards in quality and design, making every home a personalized masterpiece.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[12px] tracking-[0.4em] uppercase font-black text-[#d89a5b] mb-10">Our Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About', path: '/about' },
                { name: 'Manufacturing', path: '/about#manufacturing' },
                { name: 'Testimonial', path: '/testimonials' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-white/60 hover:text-white transition-colors text-[15px] font-light tracking-wide">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="text-[12px] tracking-[0.4em] uppercase font-black text-[#d89a5b] mb-10">Products</h4>
            <ul className="space-y-4">
              {[
                { name: "Civil & Electrical", path: "/products#civil" },
                { name: "False ceiling", path: "/products#ceiling" },
                { name: "Painting", path: "/products#painting" },
                { name: "Flooring", path: "/products#flooring" },
                { name: "Custom Furnitures", path: "/products#furniture" }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-white/60 hover:text-white transition-colors text-[15px] font-light tracking-wide block leading-snug">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[12px] tracking-[0.4em] uppercase font-black text-[#d89a5b] mb-10">Contact Us</h4>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-white/40 text-[11px] uppercase tracking-widest font-medium">Call us at</p>
                <a href="tel:080-69662251" className="text-xl font-medium tracking-tight hover:text-[#d89a5b] transition-colors block">080-69662251</a>
              </div>
              
              <div className="space-y-2">
                <p className="text-white/40 text-[11px] uppercase tracking-widest font-medium">Write to us</p>
                <a href="mailto:hello@sainteriors.com" className="text-[16px] font-light tracking-wide hover:text-[#d89a5b] transition-colors block">hello@sainteriors.com</a>
              </div>

              <div className="space-y-2">
                <p className="text-white/40 text-[11px] uppercase tracking-widest font-medium">Our Studio</p>
                <p className="text-white/60 text-[14px] leading-relaxed font-light">
                  12th Main Road, Anna Nagar West,<br />
                  Chennai, Tamil Nadu 600040
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] text-white/30 tracking-widest uppercase font-medium">
            © 2026 SA Interiors. All Rights Reserved
          </p>
          <div className="flex gap-10">
            <Link to="#" className="text-[10px] text-white/30 tracking-[0.2em] uppercase font-bold hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="text-[10px] text-white/30 tracking-[0.2em] uppercase font-bold hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;