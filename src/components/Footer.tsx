import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/kongu-times-logo.png" alt="The Kongu Times" className="w-10 h-10 rounded-lg object-cover" />
              <div>
                <h3 className="text-lg font-display font-black">The Kongu Times</h3>
                <p className="text-[10px] uppercase tracking-[0.2em] opacity-60">Voice of Kongu Region</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Your trusted source for news and stories from the Kongu region — covering Coimbatore, Erode, Tiruppur, Salem, Namakkal, Karur, and Nilgiris.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Sections</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <Link to="/elections-2026" className="hover:opacity-100 hover:text-primary transition-colors">Elections 2026</Link>
              <Link to="/explained" className="hover:opacity-100 hover:text-primary transition-colors">Explained</Link>
              <a href="/pages/politics.html" className="hover:opacity-100 hover:text-primary transition-colors">Politics</a>
              <Link to="/" className="hover:opacity-100 hover:text-primary transition-colors">Business</Link>
              <Link to="/" className="hover:opacity-100 hover:text-primary transition-colors">Agriculture</Link>
              <Link to="/" className="hover:opacity-100 hover:text-primary transition-colors">Jobs</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Company</h4>
            <div className="flex flex-col gap-2 text-sm opacity-70">
              <Link to="/about" className="hover:opacity-100 hover:text-primary transition-colors">About Us</Link>
              <Link to="/contact" className="hover:opacity-100 hover:text-primary transition-colors">Contact Us</Link>
              <Link to="/privacy-policy" className="hover:opacity-100 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:opacity-100 hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link to="/disclaimer" className="hover:opacity-100 hover:text-primary transition-colors">Disclaimer</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Stay Connected</h4>
            <div className="space-y-3 text-sm opacity-70 mb-5">
              <p className="flex items-center gap-2"><MapPin size={14} /> Coimbatore, Tamil Nadu</p>
              <p className="flex items-center gap-2"><Phone size={14} /> +91 422 XXX XXXX</p>
              <p className="flex items-center gap-2"><Mail size={14} /> editor@kongutimes.in</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Newsletter</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 rounded-lg bg-background/10 border border-background/20 text-sm placeholder:opacity-50 focus:outline-none focus:border-primary" />
                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 text-center text-xs opacity-50">
          <p>© {new Date().getFullYear()} The Kongu Times. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
