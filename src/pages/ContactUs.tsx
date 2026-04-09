import { Helmet } from "react-helmet-async";
import { Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Helmet>
        <title>Contact Us — The Kongu Times</title>
        <meta name="description" content="Get in touch with The Kongu Times editorial team. Send us news tips, feedback, or advertising inquiries." />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-black text-foreground mb-6">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="space-y-6">
            <div>
              <h2 className="font-display font-bold text-lg mb-3">Editorial Office</h2>
              <div className="space-y-3 text-sm text-foreground/80">
                <p className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Coimbatore, Tamil Nadu 641001, India</p>
                <p className="flex items-center gap-2"><Phone size={16} className="text-primary" /> +91 422 XXX XXXX</p>
                <p className="flex items-center gap-2"><Mail size={16} className="text-primary" /> editor@kongutimes.in</p>
              </div>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg mb-3">Advertising Inquiries</h2>
              <p className="text-sm text-foreground/80">For advertising and partnership opportunities, please contact us at <a href="mailto:ads@kongutimes.in" className="text-primary hover:underline">ads@kongutimes.in</a></p>
            </div>

            <div>
              <h2 className="font-display font-bold text-lg mb-3">News Tips</h2>
              <p className="text-sm text-foreground/80">Have a news tip or story suggestion? We welcome contributions from our community. Email us at <a href="mailto:tips@kongutimes.in" className="text-primary hover:underline">tips@kongutimes.in</a></p>
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-lg mb-3">Send Us a Message</h2>
            <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert("Thank you for your message. We will respond within 48 hours."); }}>
              <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <input type="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30" />
              <select className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                <option>General Inquiry</option>
                <option>News Tip</option>
                <option>Feedback</option>
                <option>Advertising</option>
                <option>Correction Request</option>
              </select>
              <textarea placeholder="Your Message" rows={5} required className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
              <button type="submit" className="w-full px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
