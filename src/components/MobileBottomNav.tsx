import { Home, Newspaper, MapPin, Bookmark, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const items = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Newspaper, label: "Latest", path: "/latest" },
  { icon: MapPin, label: "Districts", path: "/districts" },
  { icon: Bookmark, label: "Saved", path: "/saved" },
  { icon: User, label: "More", path: "/more" },
];

export default function MobileBottomNav() {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border">
      <div className="flex items-center justify-around py-2">
        {items.map(({ icon: Icon, label, path }) => {
          const active = location.pathname === path;
          return (
            <Link
              key={label}
              to={path}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon size={20} />
              <span className="text-[10px] font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
