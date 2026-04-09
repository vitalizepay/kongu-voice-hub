import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Helmet>
        <title>About Us — The Kongu Times</title>
        <meta name="description" content="Learn about The Kongu Times — Tamil Nadu's trusted digital news source for the Kongu region covering Coimbatore, Erode, Tiruppur, Salem, Namakkal, Karur, and Nilgiris." />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-black text-foreground mb-6">About The Kongu Times</h1>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-4 text-foreground/85">
          <p className="text-lg leading-relaxed">
            The Kongu Times is a digital-first regional news platform dedicated to delivering accurate, timely, and comprehensive journalism for Tamil Nadu's Kongu belt — a region comprising the districts of Coimbatore, Erode, Tiruppur, Salem, Namakkal, Karur, and Nilgiris.
          </p>

          <h2 className="font-display font-bold text-xl mt-8 mb-3">Our Mission</h2>
          <p>
            We believe every region deserves quality journalism that understands its unique economic landscape, cultural heritage, and political dynamics. The Kongu Times was founded to fill a critical gap: providing the Kongu belt's 2 crore-plus residents with a dedicated news platform that treats their concerns as front-page priorities, not afterthoughts in state-level coverage.
          </p>

          <h2 className="font-display font-bold text-xl mt-8 mb-3">What We Cover</h2>
          <p>
            Our editorial focus spans local governance and politics, business and industry (with particular attention to the textile, engineering, and agricultural sectors that define the Kongu economy), education, employment, agriculture, environment, and cultural affairs. We provide both breaking news coverage and in-depth analytical journalism through our "Explained" section.
          </p>

          <h2 className="font-display font-bold text-xl mt-8 mb-3">Our Editorial Standards</h2>
          <p>
            Every article published by The Kongu Times adheres to principles of accuracy, fairness, and independence. We verify information through multiple sources before publication, clearly distinguish between news reporting and opinion, and correct errors promptly and transparently. We do not accept payment for editorial coverage, and our advertising is clearly separated from editorial content.
          </p>

          <h2 className="font-display font-bold text-xl mt-8 mb-3">Our Team</h2>
          <p>
            The Kongu Times is staffed by experienced journalists with deep knowledge of the region, supported by contributors across all seven Kongu districts. Our editorial team includes specialists in political reporting, business journalism, agricultural coverage, and data-driven analysis.
          </p>

          <h2 className="font-display font-bold text-xl mt-8 mb-3">Contact Information</h2>
          <p>
            <strong>Editorial Office:</strong> Coimbatore, Tamil Nadu, India<br />
            <strong>Email:</strong> editor@kongutimes.in<br />
            <strong>Phone:</strong> +91 422 XXX XXXX
          </p>
          <p>
            We welcome news tips, feedback, and story suggestions from our readers. Your participation makes our journalism stronger.
          </p>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
