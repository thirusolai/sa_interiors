import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Award, 
  Users, 
  Target, 
  Heart, 
  CheckCircle, 
  ShieldCheck,
  Hammer,
  Settings,
  Shield,
  Factory
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const values = [
  { 
    icon: Award, 
    title: "Excellence", 
    description: "We pursue perfection in every detail, ensuring the highest quality in design and execution." 
  },
  { 
    icon: Users, 
    title: "Collaboration", 
    description: "We work closely with clients, treating every project as a partnership built on trust." 
  },
  { 
    icon: Target, 
    title: "Innovation", 
    description: "We stay ahead of trends, bringing fresh and creative solutions to every space." 
  },
  { 
    icon: Heart, 
    title: "Passion", 
    description: "Design is our calling. We pour heart and soul into every project we undertake." 
  },
  { 
    icon: CheckCircle, 
    title: "Accountability", 
    description: "We say what we will do and we do what we say. Every timeline, every cost, every promise is one we stand behind." 
  },
  { 
    icon: ShieldCheck, 
    title: "Integrity", 
    description: "No hidden costs, no cut corners, no shortcuts. Just honest work done the right way, every single time." 
  },
];

const teamMembers = [
  { 
    name: "Ar. Uthresh", 
    role: "Computational Designer", 
    initials: "AU",
    color: "#E8B4A2",
    description: "Every millimetre is planned before we touch the site." 
  },
  { 
    name: "Ar. Mohamed Ajmaludeen", 
    role: "Senior Architect", 
    initials: "MA",
    color: "#D1C4E9",
    description: "Fifteen years of turning blank walls into people's favourite rooms." 
  },
  { 
    name: "Ar. Preetha", 
    role: "Senior Architect", 
    initials: "AP",
    color: "#A2E4C1",
    description: "She believes a well-built home changes how a family lives." 
  },
];

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-[#F9F7F5]">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-[#965b32] text-xs font-semibold tracking-[0.4em] uppercase mb-4">About Us</p>
            <h1 className="text-5xl md:text-7xl font-sans font-light text-[#002121] mb-8 tracking-tighter leading-[1.1]">
              Turning Spaces <br />
              <span className="font-bold">Into Homes Since 2019</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed font-light">
              Started in Chennai by two friends who believed great execution should be the rule, not the exception, TIQ has grown into one of South India's most trusted interior execution companies.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" 
                  alt="Our Story" 
                  className="w-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="text-[#965b32] text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-sans font-light text-[#002121] mb-8 leading-tight">Seven Years of <br /><span className="font-medium">Getting It Right</span></h2>
              <div className="space-y-6 text-gray-500 leading-relaxed font-light">
                <p>
                  What started as a two-person team in Chennai with a clear mission has grown into a full-scale interior execution company serving homes and businesses across Tamil Nadu.
                </p>
                <p>
                  We started TIQ in 2019 because we saw a gap that nobody was addressing. Homeowners had access to beautiful designs but nowhere to find people who could actually deliver them, on time, within budget and without the usual chaos.
                </p>
                <p>
                  Over seven years, we have built the systems, the team and the manufacturing unit to do exactly that. Hundreds of homes later, the standard we set on day one has not changed. Every project still gets the same attention, the same accountability and the same commitment to quality that built our reputation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F9F7F5]">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-[#965b32] text-[10px] font-bold tracking-[0.5em] uppercase text-center mb-4">Our Values</p>
            <h2 className="text-4xl md:text-6xl font-sans font-light text-[#002121] text-center mb-20 tracking-tighter">What Drives Us</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-20 h-20 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                    <v.icon className="w-8 h-8 text-[#965b32]" />
                  </div>
                  <h3 className="font-sans font-medium text-xl text-[#002121] mb-4 tracking-tight">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light max-w-xs mx-auto">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <p className="text-[#965b32] text-[10px] font-bold tracking-[0.5em] uppercase text-center mb-4">Our Core Team</p>
            <h2 className="text-4xl md:text-6xl font-sans font-light text-[#002121] text-center mb-20 tracking-tighter">The People Behind Every Space</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="bg-white border border-gray-100 p-12 rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] transition-all duration-700 flex flex-col items-center text-center group">
                  <div 
                    className="w-32 h-44 rounded-[30px] mb-10 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-700 overflow-hidden relative"
                    style={{ backgroundColor: '#F9F7F5' }}
                  >
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-[#002121] shadow-lg"
                      style={{ backgroundColor: member.color }}
                    >
                      {member.initials}
                    </div>
                  </div>
                  
                  <h3 className="text-[#002121] font-bold text-xl mb-2 tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-[#965b32] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm italic font-light leading-relaxed">
                    "{member.description}"
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Unit */}
      <section id="manufacturing" className="py-24 bg-[#002121] text-white overflow-hidden relative">
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(216,154,91,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(216,154,91,0.3) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <p className="text-[#d89a5b] text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Our Manufacturing Unit</p>
              <h2 className="text-4xl md:text-6xl font-sans font-light mb-10 tracking-tighter leading-tight">
                We Make <span className="text-[#d89a5b] font-medium italic">What We Install.</span>
              </h2>
              <div className="space-y-8 text-white/70 text-lg font-light leading-relaxed max-w-xl">
                <p>
                  Most execution companies are coordinators. They call vendors, follow up on deliveries and hope for the best. When it goes wrong, your project pays the price.
                </p>
                <p>
                  Every cabinet, wardrobe and woodwork element in a TIQ home is built by our own craftsmen, in our own unit, under our own checks. We know exactly what went into it and whether it is good enough to carry our name.
                </p>
                <p className="text-white font-medium">
                   When you control the making, you control the quality.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl group hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#d89a5b]/20 flex items-center justify-center mb-6">
                    <Factory className="w-6 h-6 text-[#d89a5b]" />
                  </div>
                  <h4 className="text-sm font-bold tracking-widest uppercase mb-2">In-House Production</h4>
                  <p className="text-xs text-white/40 leading-relaxed">No middle-men, no quality compromise.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl group hover:bg-white/10 transition-colors md:mt-12">
                  <div className="w-12 h-12 rounded-full bg-[#d89a5b]/20 flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6 text-[#d89a5b]" />
                  </div>
                  <h4 className="text-sm font-bold tracking-widest uppercase mb-2">Quality Checks</h4>
                  <p className="text-xs text-white/40 leading-relaxed">Multi-stage inspection before dispatch.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl group hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#d89a5b]/20 flex items-center justify-center mb-6">
                    <Hammer className="w-6 h-6 text-[#d89a5b]" />
                  </div>
                  <h4 className="text-sm font-bold tracking-widest uppercase mb-2">Master Craftsmen</h4>
                  <p className="text-xs text-white/40 leading-relaxed">Built by experts with decades of experience.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl group hover:bg-white/10 transition-colors md:mt-12">
                  <div className="w-12 h-12 rounded-full bg-[#d89a5b]/20 flex items-center justify-center mb-6">
                    <Settings className="w-6 h-6 text-[#d89a5b]" />
                  </div>
                  <h4 className="text-sm font-bold tracking-widest uppercase mb-2">Precision Tech</h4>
                  <p className="text-xs text-white/40 leading-relaxed">Hardware and machinery of global standards.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="mt-20 pt-20 border-t border-white/10">
            <p className="text-center text-white/30 text-[10px] font-bold tracking-[0.5em] uppercase mb-12">Photos From Our Unit</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
               {[1,2,3,4,5].map(i => (
                 <div key={i} className="aspect-square border border-dashed border-white/20 rounded-2xl flex items-center justify-center group hover:border-[#d89a5b] transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-white/20 group-hover:text-[#d89a5b]">+</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-sans font-light text-[#002121] mb-8 tracking-tighter underline decoration-[#d89a5b]/20 underline-offset-8">
              Let's <span className="font-bold">Work Together</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-16 text-lg font-light leading-relaxed">
              Ready to transform your space? We'd love to hear about your project and see how we can bring your vision to life.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
               <Link 
                to="/contact?type=partner" 
                className="group relative inline-flex items-center gap-6 bg-white text-[#002121] border border-[#002121] px-12 py-5 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-[#002121] hover:text-white transition-all duration-500"
              >
                <span className="relative z-10">Partner With Us</span>
              </Link>
              
              <Link 
                to="/contact?type=work" 
                className="group relative inline-flex items-center gap-6 bg-[#002121] text-white px-12 py-5 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-[#d89a5b] transition-all duration-500 shadow-xl"
              >
                <span className="relative z-10">Work With Us</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
