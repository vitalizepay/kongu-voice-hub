import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Helmet>
        <title>Terms & Conditions — The Kongu Times</title>
        <meta name="description" content="Terms and Conditions for using The Kongu Times website and services." />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-black text-foreground mb-2">Terms & Conditions</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: April 9, 2026</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-4 text-foreground/85 text-sm leading-relaxed">
          <h2 className="font-display font-bold text-lg mt-6 mb-2">1. Acceptance of Terms</h2>
          <p>By accessing and using The Kongu Times website (kongutimes.in), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">2. Use of Content</h2>
          <p>All content published on The Kongu Times — including articles, images, graphics, and data — is the property of The Kongu Times unless otherwise stated. You may share our content through social media and messaging platforms with proper attribution. Reproduction, republication, or redistribution of our content for commercial purposes without written permission is prohibited.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">3. User Conduct</h2>
          <p>When using our website, you agree not to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use the website for any unlawful purpose</li>
            <li>Attempt to gain unauthorised access to our systems</li>
            <li>Interfere with the proper functioning of the website</li>
            <li>Upload or transmit harmful code or content</li>
            <li>Impersonate any person or entity</li>
          </ul>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">4. Accuracy of Information</h2>
          <p>We strive to ensure all information published on The Kongu Times is accurate and up to date. However, we do not guarantee the completeness or accuracy of any content. News reporting involves rapidly evolving situations, and information may be updated as new facts emerge. Corrections are published promptly when errors are identified.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">5. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of any third-party sites. Visiting such links is at your own risk.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">6. Advertising</h2>
          <p>The Kongu Times displays advertisements through Google AdSense and other advertising partners. Advertising content is clearly distinguished from editorial content. We are not responsible for the content of third-party advertisements.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">7. Limitation of Liability</h2>
          <p>The Kongu Times shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the website or reliance on any content published herein.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">8. Modifications</h2>
          <p>We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Continued use of the website constitutes acceptance of modified terms.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">9. Governing Law</h2>
          <p>These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">10. Contact</h2>
          <p>For questions about these Terms, please contact us at: legal@kongutimes.in</p>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
