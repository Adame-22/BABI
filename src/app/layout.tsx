import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BABI — Le bracelet connecté qui veille sur votre nourrisson",
  description: "BABI surveille le rythme cardiaque, la saturation en oxygène, la température et le sommeil de votre bébé 0–18 mois, 24h/24. Bluetooth BLE 5.0, app iOS & Android.",
  keywords: "bracelet bébé connecté, prévention mort subite nourrisson, moniteur bébé, suivi santé nourrisson, capteur bébé",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col pt-20`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
