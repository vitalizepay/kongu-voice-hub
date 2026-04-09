import Header from "@/components/Header";
import BreakingNewsTicker from "@/components/BreakingNewsTicker";
import HeroSection from "@/components/HeroSection";
import TopStoriesGrid from "@/components/TopStoriesGrid";
import DistrictNewsSection from "@/components/DistrictNewsSection";
import TrendingSidebar from "@/components/TrendingSidebar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { sampleArticles, categories } from "@/data/sampleNews";
import { explainedArticles } from "@/data/explainedArticles";
import NewsCard from "@/components/NewsCard";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Vote, Clock } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Helmet>
        <title>The Kongu Times — Voice of Kongu Region</title>
        <meta name="description" content="Your trusted digital news source for the Kongu region covering Coimbatore, Erode, Tiruppur, Salem, Namakkal, Karur, and Nilgiris." />
        <meta property="og:title" content="The Kongu Times — Voice of Kongu Region" />
        <meta property="og:description" content="Regional digital news platform for Tamil Nadu's Kongu belt." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <BreakingNewsTicker />
      <HeroSection />

      {/* Elections 2026 Banner */}
      <div className="container mx-auto px-2 mb-6">
        <Link to="/elections-2026" className="block group">
          <div className="bg-foreground text-background rounded-2xl p-6 md:p-8 flex items-center justify-between hover:bg-foreground/90 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/20">
                <Vote className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-display font-bold text-lg md:text-xl">Tamil Nadu Elections 2026</h2>
                <p className="text-sm opacity-70">234 constituencies · Full candidate list · Live tracking</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 opacity-60 group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>
      </div>

      {/* Top Stories + Trending sidebar */}
      <div className="container mx-auto px-2">
        <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-6">
          <div>
            <TopStoriesGrid />

            {/* Explained Section */}
            <section className="py-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-6 rounded-full bg-primary" />
                  <BookOpen size={18} className="text-primary" />
                  <h2 className="font-display font-bold text-xl text-foreground">Explained</h2>
                </div>
                <Link to="/explained" className="text-sm text-primary font-semibold hover:underline flex items-center gap-1">
                  View All <ArrowRight size={14} />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {explainedArticles.slice(0, 4).map(a => (
                  <Link key={a.id} to={`/explained/${a.slug}`} className="block group">
                    <div className="bg-card rounded-xl shadow-sm border border-border/50 p-4 h-full hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="category-badge text-[10px]">{a.category}</span>
                        <span className="text-[10px] text-muted-foreground flex items-center gap-1"><Clock size={10} /> {a.readTime}</span>
                      </div>
                      <h3 className="font-display font-bold text-foreground text-sm leading-snug mb-1 group-hover:text-primary transition-colors line-clamp-2">{a.title}</h3>
                      <p className="text-muted-foreground text-xs line-clamp-2">{a.summary}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Category sections */}
            {["Politics", "Business", "Agriculture", "Technology"].map(cat => {
              const articles = sampleArticles.filter(a => a.category === cat).slice(0, 4);
              if (articles.length === 0) return null;
              return (
                <section key={cat} className="py-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-1 h-6 rounded-full bg-primary" />
                    <h2 className="font-display font-bold text-xl text-foreground">{cat}</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {articles.map((a, i) => (
                      <NewsCard key={a.id} article={a} index={i} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          <div className="hidden lg:block sticky top-20 self-start mt-8">
            <TrendingSidebar />
          </div>
        </div>
      </div>

      <DistrictNewsSection />
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
