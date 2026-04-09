import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Helmet>
        <title>Disclaimer — The Kongu Times</title>
        <meta name="description" content="Disclaimer for The Kongu Times news platform." />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-black text-foreground mb-2">Disclaimer</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: April 9, 2026</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-4 text-foreground/85 text-sm leading-relaxed">
          <h2 className="font-display font-bold text-lg mt-6 mb-2">General Disclaimer</h2>
          <p>The information provided by The Kongu Times on our website is for general informational purposes only. All information is published in good faith and for general information purposes. We make no warranties about the completeness, reliability, or accuracy of this information.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">News Accuracy</h2>
          <p>While The Kongu Times strives for accuracy in all reporting, news events are dynamic and information may change rapidly. We update and correct articles as new information becomes available. Readers are encouraged to verify critical information through multiple sources before making decisions based on news reporting.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">Election Information</h2>
          <p>Election-related content, including candidate lists, constituency information, and polling data, is compiled from publicly available sources and is provided for informational purposes only. For official election information, readers should consult the Election Commission of India and the Tamil Nadu State Election Commission directly.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">Opinion and Analysis</h2>
          <p>Articles in our "Explained" section and opinion pieces represent the views of their respective authors and do not necessarily reflect the official editorial position of The Kongu Times. Analysis is based on available data and reasonable interpretation; readers should form their own conclusions.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">External Links</h2>
          <p>The Kongu Times may include links to external websites for additional reference. We do not endorse or take responsibility for the content, privacy policies, or practices of any third-party websites.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">Advertising Disclaimer</h2>
          <p>The Kongu Times displays advertisements through Google AdSense and other advertising partners. The appearance of advertisements on our website does not constitute endorsement of the advertised products, services, or companies. Advertising content is the sole responsibility of the advertiser.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">No Professional Advice</h2>
          <p>Nothing published on The Kongu Times should be construed as legal, financial, medical, or professional advice. For specific professional guidance, readers should consult qualified professionals in the relevant field.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">Contact</h2>
          <p>If you have concerns about any content published on our platform, please contact us at: editor@kongutimes.in</p>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
