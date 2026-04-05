import { sampleArticles } from "@/data/sampleNews";
import { TrendingUp, Flame, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TrendingSidebar() {
  const trending = sampleArticles.filter(a => a.trending).slice(0, 5);

  return (
    <aside className="glass-card p-5">
      <div className="flex items-center gap-2 mb-5">
        <Flame size={18} className="text-primary" />
        <h3 className="font-display font-bold text-lg text-foreground">Trending Now</h3>
      </div>
      <div className="space-y-4">
        {trending.map((article, i) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={`/article/${article.id}`} className="flex gap-3 group">
              <span className="text-2xl font-display font-black text-primary/30 shrink-0 w-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h4>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <span className="flex items-center gap-0.5">
                    <TrendingUp size={10} />
                    {article.views.toLocaleString()}
                  </span>
                  <span>{article.district}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-border">
        <h4 className="font-display font-bold text-sm text-foreground mb-3 flex items-center gap-2">
          <Bookmark size={14} className="text-primary" /> Quick Topics
        </h4>
        <div className="flex flex-wrap gap-2">
          {["Smart City", "Textiles", "Agriculture", "IT Jobs", "Education", "Turmeric", "Elections"].map(tag => (
            <span key={tag} className="district-badge text-[10px] cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
