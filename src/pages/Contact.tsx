import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="relative pt-32 pb-24 bg-secondary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
            <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">Ready to transform your space? Reach out for a free consultation and let's bring your vision to life.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ScrollReveal direction="left">
              <h2 className="text-3xl font-serif mb-8">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-primary/10 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We've received your message and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Name</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Email</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Phone</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5">Service</label>
                      <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                        <option value="">Select a service</option>
                        <option value="residential">Residential Design</option>
                        <option value="commercial">Commercial Spaces</option>
                        <option value="hospitality">Hospitality Interiors</option>
                        <option value="consultation">Consultation Only</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message</label>
                    <textarea rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-xs font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </ScrollReveal>

            <ScrollReveal direction="right">
              <h2 className="text-3xl font-serif mb-8">Contact Information</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, title: "Phone Number", lines: ["+91 99999999", "+91 44 444444"] },
                  { icon: Mail, title: "Email", lines: ["info@sainterior.in"] },
                  { icon: MapPin, title: "Studio Address", lines: ["Shop no.5, Hameedia Complex, 203, Triplicane High Rd", "Ellis Puram, Police Quarters, Triplicane, Chennai, Tamil Nadu 600005"], link: "https://share.google/rzjwVGt6zWXxbI761" },
                  { icon: Clock, title: "Working Hours", lines: ["Mon- sat 9:00 AM -7:00 PM", "Sun: By Appointment"] },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          {item.lines.map((line) => (
                            <p key={line} className="text-muted-foreground text-sm hover:text-primary transition-colors">{line}</p>
                          ))}
                        </a>
                      ) : (
                        item.lines.map((line) => (
                          <p key={line} className="text-muted-foreground text-sm">{line}</p>
                        ))
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl overflow-hidden border border-border">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0082550818684!2d80.20960671482135!3d13.08544699079291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264d0a1fd41d7%3A0x6e17e13ec4a4c793!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
