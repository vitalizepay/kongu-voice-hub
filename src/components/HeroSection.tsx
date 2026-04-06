import { Link } from "react-router-dom";
import { sampleArticles } from "@/data/sampleNews";
import { Clock, Eye } from "lucide-react";

export default function HeroSection() {
  const featured = sampleArticles[0];

  return (
    <section className="container mx-auto px-2 py-6 md:py-10">
      <Link to={`/article/${featured.id}`} className="block group">
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10">
            <span className="category-badge mb-3 inline-block bg-primary text-primary-foreground">
              {featured.category}
            </span>
            <h2 className="text-xl md:text-4xl lg:text-5xl font-display font-black text-primary-foreground leading-tight mb-3 text-balance">
              {featured.title}
            </h2>
            <p className="text-primary-foreground/80 text-sm md:text-base max-w-2xl line-clamp-2 mb-4">
              {featured.summary}
            </p>
            <div className="flex items-center gap-4 text-primary-foreground/60 text-xs">
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1">
                <Eye size={12} />
                {featured.views.toLocaleString()} views
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
