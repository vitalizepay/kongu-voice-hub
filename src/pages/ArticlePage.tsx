import { useParams, Link } from "react-router-dom";
import { sampleArticles } from "@/data/sampleNews";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import NewsCard from "@/components/NewsCard";
import { Clock, Eye, User, Share2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ArticlePage() {
  const { id } = useParams();
  const article = sampleArticles.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Article not found.</p>
      </div>
    );
  }

  const related = sampleArticles.filter(a => a.id !== id).slice(0, 4);

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(article.title + " - The Kongu Times")}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title + " - The Kongu Times")}`;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(article.title)}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="category-badge">{article.category}</span>
            <span className="district-badge">{article.district}</span>
          </div>

          <h1 className="text-2xl md:text-4xl font-display font-black text-foreground leading-tight mb-4 text-balance">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1"><User size={14} /> {article.author}</span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {new Date(article.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
            </span>
            <span className="flex items-center gap-1"><Eye size={14} /> {article.views.toLocaleString()} views</span>
          </div>

          {/* Summary */}
          <div className="glass-card p-4 mb-6">
            <p className="text-sm font-medium text-primary mb-1">AI Summary</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{article.summary}</p>
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
            {article.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-foreground/85 leading-relaxed mb-4">{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map(tag => (
              <span key={tag} className="district-badge text-xs cursor-pointer">#{tag}</span>
            ))}
          </div>

          {/* Share */}
          <div className="flex items-center gap-3 py-4 border-t border-border mb-8">
            <Share2 size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Share:</span>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 text-xs font-semibold hover:bg-emerald-500/20 transition-colors">
              WhatsApp
            </a>
            <a href={fbUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-600 text-xs font-semibold hover:bg-blue-500/20 transition-colors">
              Facebook
            </a>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-600 text-xs font-semibold hover:bg-sky-500/20 transition-colors">
              Twitter
            </a>
          </div>
        </motion.article>

        {/* Related */}
        <section>
          <h2 className="section-title mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((a, i) => (
              <NewsCard key={a.id} article={a} index={i} compact />
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
