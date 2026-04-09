import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Helmet>
        <title>Privacy Policy — The Kongu Times</title>
        <meta name="description" content="Privacy Policy for The Kongu Times. Learn how we collect, use, and protect your personal information." />
      </Helmet>
      <Header />
      <main className="container mx-auto px-4 py-10 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-black text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: April 9, 2026</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-4 text-foreground/85 text-sm leading-relaxed">
          <h2 className="font-display font-bold text-lg mt-6 mb-2">1. Information We Collect</h2>
          <p>When you visit The Kongu Times website, we may collect the following types of information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Usage Data:</strong> Pages viewed, time spent on pages, referring URLs, browser type, device information, and IP address.</li>
            <li><strong>Personal Information:</strong> If you subscribe to our newsletter or contact us, we collect your name and email address.</li>
            <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to improve user experience and analyse website traffic.</li>
          </ul>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>To provide and maintain our news service</li>
            <li>To analyse website usage and improve content</li>
            <li>To send newsletters and editorial updates (only if you have subscribed)</li>
            <li>To respond to your inquiries and feedback</li>
            <li>To display relevant advertising through Google AdSense and other advertising partners</li>
          </ul>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">3. Third-Party Services</h2>
          <p>We use third-party services including Google AdSense for advertising and Google Analytics for website analytics. These services may collect information about your browsing behaviour. Please refer to Google's privacy policies for details on their data practices.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">4. Cookies</h2>
          <p>Our website uses cookies to enhance your browsing experience. You can configure your browser to refuse cookies or alert you when cookies are being sent. Some features of the website may not function properly without cookies.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">5. Data Security</h2>
          <p>We implement appropriate technical and organisational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You may also opt out of our newsletter at any time by clicking the unsubscribe link in any email. For data-related requests, please contact us at privacy@kongutimes.in.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">7. Children's Privacy</h2>
          <p>Our website is not directed at children under 13. We do not knowingly collect personal information from children.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">8. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>

          <h2 className="font-display font-bold text-lg mt-6 mb-2">9. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at: privacy@kongutimes.in</p>
        </div>
      </main>
      <Footer />
      <MobileBottomNav />
    </div>
  );
}
