import { sampleArticles, districts } from "@/data/sampleNews";
import NewsCard from "./NewsCard";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function DistrictNewsSection() {
  const displayDistricts = districts.slice(0, 5);

  return (
    <section className="container mx-auto px-2 py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 rounded-full bg-primary" />
        <h2 className="section-title">District News</h2>
      </div>
      <div className="space-y-8">
        {displayDistricts.map((district) => {
          const districtArticles = sampleArticles.filter(a => a.district === district);
          if (districtArticles.length === 0) return null;
          return (
            <DistrictRow key={district} district={district} articles={districtArticles} />
          );
        })}
      </div>
    </section>
  );
}

function DistrictRow({ district, articles }: { district: string; articles: typeof sampleArticles }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display font-bold text-lg text-foreground">{district}</h3>
        <button onClick={scroll} className="flex items-center gap-1 text-primary text-sm font-medium hover:underline">
          More <ChevronRight size={14} />
        </button>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-2 scrollbar-none snap-x">
        {articles.map((article, i) => (
          <div key={article.id} className="min-w-[260px] max-w-[280px] snap-start shrink-0">
            <NewsCard article={article} index={i} compact />
          </div>
        ))}
        {/* Fill if few articles */}
        {articles.length < 3 && sampleArticles.slice(0, 3 - articles.length).map((a, i) => (
          <div key={`fill-${i}`} className="min-w-[260px] max-w-[280px] snap-start shrink-0">
            <NewsCard article={{ ...a, district }} index={articles.length + i} compact />
          </div>
        ))}
      </div>
    </div>
  );
}
