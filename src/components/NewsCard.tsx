import { Article } from "@/data/sampleNews";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";

interface NewsCardProps {
  article: Article;
  index?: number;
  compact?: boolean;
}

export default function NewsCard({ article, index = 0, compact = false }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/article/${article.id}`} className="block news-card group h-full">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {article.image ? (
            <img
              src={article.image}
              alt={article.title}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-display font-black text-foreground/10">
                {article.district[0]}
              </span>
            </div>
          )}
          <div className="absolute top-3 left-3">
            <span className="category-badge text-[10px]">{article.category}</span>
          </div>
        </div>
        <div className={`p-4 ${compact ? "p-3" : ""}`}>
          <h3 className={`font-display font-bold text-card-foreground leading-snug mb-2 group-hover:text-primary transition-colors ${compact ? "text-sm line-clamp-2" : "text-base line-clamp-3"}`}>
            {article.title}
          </h3>
          {!compact && (
            <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
              {article.summary}
            </p>
          )}
          <div className="flex items-center justify-between text-muted-foreground text-xs">
            <span className="district-badge text-[10px] py-0.5">{article.district}</span>
            <span className="flex items-center gap-1">
              <Clock size={10} />
              {new Date(article.date).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
