import { breakingNews } from "@/data/sampleNews";
import { AlertTriangle } from "lucide-react";

export default function BreakingNewsTicker() {
  return (
    <div className="ticker-strip overflow-hidden">
      <div className="container mx-auto flex items-center">
        <div className="flex items-center gap-2 px-4 py-2 bg-foreground/10 font-bold text-xs uppercase tracking-wider whitespace-nowrap shrink-0">
          <AlertTriangle size={14} />
          Breaking
        </div>
        <div className="overflow-hidden flex-1">
          <div className="animate-ticker whitespace-nowrap py-2 text-sm font-medium">
            {breakingNews.map((item, i) => (
              <span key={i} className="mx-8">
                ● {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
