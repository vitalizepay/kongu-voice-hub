import Header from "@/components/Header";
import BreakingNewsTicker from "@/components/BreakingNewsTicker";
import HeroSection from "@/components/HeroSection";
import TopStoriesGrid from "@/components/TopStoriesGrid";
import DistrictNewsSection from "@/components/DistrictNewsSection";
import TrendingSidebar from "@/components/TrendingSidebar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { sampleArticles, categories } from "@/data/sampleNews";
import NewsCard from "@/components/NewsCard";
import { Helmet } from "react-helmet-async";

export default function Index() {
  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Helmet>
        <title>Kongu Times — Voice of Kongu Region</title>
        <meta name="description" content="Your trusted digital news source for the Kongu region covering Coimbatore, Erode, Tiruppur, Salem, Namakkal, Karur, and Nilgiris." />
        <meta property="og:title" content="Kongu Times — Voice of Kongu Region" />
        <meta property="og:description" content="Regional digital news platform for Tamil Nadu's Kongu belt." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <BreakingNewsTicker />
      <HeroSection />

      {/* Top Stories + Trending sidebar */}
      <div className="container mx-auto px-2">
        <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-6">
          <div>
            <TopStoriesGrid />

            {/* Category sections */}
            {["Politics", "Business", "Agriculture"].map(cat => {
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
