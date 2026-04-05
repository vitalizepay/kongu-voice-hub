import { useState } from "react";
import { Search, Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Latest News", path: "/latest" },
  { label: "District News", path: "/districts" },
  { label: "Politics", path: "/category/politics" },
  { label: "Business", path: "/category/business" },
  { label: "Agriculture", path: "/category/agriculture" },
  { label: "Education", path: "/category/education" },
  { label: "Jobs", path: "/category/jobs" },
  { label: "Videos", path: "/videos" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3 px-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-black text-xl">K</span>
            </div>
            <div>
              <h1 className="text-xl font-display font-black text-foreground leading-tight">
                Kongu Times
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                Voice of Kongu Region
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground"
            >
              <Search size={18} />
            </button>
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <span className="text-xs font-medium text-muted-foreground border border-border rounded-full px-3 py-1 cursor-pointer hover:bg-secondary transition-colors">
              தமிழ் / EN
            </span>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 pb-2 px-2 overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden px-2 pb-3"
            >
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search news, districts, topics..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-secondary text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card border-t border-border"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                <button
                  onClick={toggleDark}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground"
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <span className="text-xs font-medium text-muted-foreground border border-border rounded-full px-3 py-1">
                  தமிழ் / EN
                </span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
