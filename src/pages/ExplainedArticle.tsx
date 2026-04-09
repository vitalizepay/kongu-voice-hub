import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Clock, ArrowLeft, Share2, BookOpen, CheckCircle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { explainedArticles } from "@/data/explainedArticles";

export default function ExplainedArticle() {
  const { slug } = useParams();
  const article = explainedArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-2">Article Not Found</h1>
          <Link to="/explained" className="text-primary text-sm hover:underline">← Back to Explained</Link>
        </div>
      </div>
    );
  }

  const related = explainedArticles.filter(a => article.relatedSlugs.includes(a.slug));

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(article.title + " — The Kongu Times")}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title + " — The Kongu Times")}`;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(article.title)}`;

  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Helmet>
        <title>{article.title} — The Kongu Times</title>
        <meta name="description" content={article.summary} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary} />
        <meta property="og:type" content="article" />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <Link to="/explained" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft size={14} /> Back to Explained
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="category-badge">{article.category}</span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock size={12} /> {article.readTime}
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl font-display font-black text-foreground leading-tight mb-4 text-balance">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span>{article.author}</span>
            <span>{new Date(article.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
          </div>

          {/* Summary box */}
          <div className="glass-card p-5 mb-8">
            <p className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
              <BookOpen size={14} /> Summary
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">{article.summary}</p>
          </div>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
            {article.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-foreground/85 leading-relaxed mb-4 text-[15px]">{paragraph}</p>
            ))}
          </div>

          {/* Key Points */}
          <div className="bg-secondary/50 rounded-2xl p-6 mb-8">
            <h3 className="font-display font-bold text-foreground text-lg mb-4 flex items-center gap-2">
              <CheckCircle size={18} className="text-primary" /> Key Takeaways
            </h3>
            <ul className="space-y-3">
              {article.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Why it matters */}
          <div className="border-l-4 border-primary bg-primary/5 rounded-r-xl p-5 mb-8">
            <h3 className="font-display font-bold text-foreground text-base mb-2 flex items-center gap-2">
              <AlertTriangle size={16} className="text-primary" /> Why It Matters to Kongu Region
            </h3>
            <p className="text-sm text-foreground/80 leading-relaxed">{article.whyItMatters}</p>
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
        {related.length > 0 && (
          <section>
            <h2 className="section-title mb-4">Related Analysis</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map(a => (
                <Link key={a.id} to={`/explained/${a.slug}`} className="block group">
                  <div className="bg-card rounded-xl shadow-sm border border-border/50 p-5 hover:shadow-md transition-shadow">
                    <span className="category-badge text-[10px] mb-2 inline-block">{a.category}</span>
                    <h3 className="font-display font-bold text-foreground text-sm leading-snug group-hover:text-primary transition-colors mb-1">
                      {a.title}
                    </h3>
                    <p className="text-muted-foreground text-xs line-clamp-2">{a.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
