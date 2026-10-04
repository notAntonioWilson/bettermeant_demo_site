import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/oswald/600.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

export const metadata: Metadata = {
  title: {
    default: "Bettermeant | Mentorship reimagined for leaders, owners & organizations",
    template: "%s | Bettermeant",
  },
  description:
    "Bettermeant gives leaders, business owners, and organizations one dedicated Meantor™ who coaches, advises, and holds the standard with you. A coach is on your calendar. A Meantor™ is in your life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Intro />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
