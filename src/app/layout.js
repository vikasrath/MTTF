import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { AuthContextProvider } from "@/context/authContext";


export const metadata = {
  title: "MathTech Thinking Foundation",
  description: "MTTF provides cutting-edge services in AI, data analytics, business intelligence, and more to drive innovation and smart decision-making.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/public/assets/logo.png" />

        {/* Basic Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="AI, Data Analytics, Business Intelligence, MTTF, Machine Learning, Predictive Analytics, Automation" />
        <meta name="author" content="MathTech Thinking Foundation" />

        {/* Open Graph (OG) Meta Tags for Social Sharing */}
        <meta property="og:title" content="MTTF - AI, Data Analytics & Business Intelligence" />
        <meta property="og:description" content="Transform your business with MTTF's AI, data analytics, and business intelligence solutions." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://mttfhub.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MTTF - AI, Data Analytics & Business Intelligence" />
        <meta name="twitter:description" content="Providing innovative AI solutions, data analytics, and business intelligence services for smarter decisions." />
        <meta name="twitter:image" content="/og-image.png" />
      </head>
      <body>
        <AuthContextProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
