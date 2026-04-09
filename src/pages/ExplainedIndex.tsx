import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { explainedArticles } from "@/data/explainedArticles";

export default function ExplainedIndex() {
  const featured = explainedArticles[0];
  const rest = explainedArticles.slice(1);

  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Helmet>
        <title>Explained — In-Depth Analysis | The Kongu Times</title>
        <meta name="description" content="Long-form, data-driven analysis of Tamil Nadu politics, Kongu belt elections, economy, and society. Deep dives into the issues that matter most." />
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-primary/20">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Explained</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-black leading-tight mb-3">
            In-Depth Analysis
          </h1>
          <p className="text-sm md:text-base opacity-70 max-w-xl">
            Data-driven, long-form journalism that goes beyond headlines. Understanding the forces that shape the Kongu region and Tamil Nadu.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to={`/explained/${featured.slug}`} className="block group mb-10">
            <div className="bg-card rounded-2xl shadow-lg overflow-hidden border border-border/50 hover:shadow-xl transition-shadow">
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="category-badge">{featured.category}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock size={12} /> {featured.readTime}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-black text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4 max-w-3xl">
                  {featured.summary}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{featured.author}</span>
                  <span>{new Date(featured.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                </div>
                <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                  Read Full Analysis <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link to={`/explained/${article.slug}`} className="block group h-full">
                <div className="bg-card rounded-xl shadow-sm border border-border/50 p-5 h-full hover:shadow-md transition-shadow flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="category-badge text-[10px]">{article.category}</span>
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <Clock size={10} /> {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                    {article.summary}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {new Date(article.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
      <MobileBottomNav />
    </div>
  );
}
