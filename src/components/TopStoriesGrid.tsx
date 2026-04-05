import { sampleArticles } from "@/data/sampleNews";
import NewsCard from "./NewsCard";

export default function TopStoriesGrid() {
  const stories = sampleArticles.slice(0, 8);

  return (
    <section className="container mx-auto px-2 py-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 rounded-full bg-primary" />
        <h2 className="section-title">Top Stories</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stories.map((article, i) => (
          <NewsCard key={article.id} article={article} index={i} />
        ))}
      </div>
    </section>
  );
}
