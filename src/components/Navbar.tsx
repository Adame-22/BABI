"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/produit", label: "Le Bracelet" },
  { href: "/app", label: "L'App" },
  { href: "/a-propos", label: "À propos" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-lin/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-babi flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
              B
            </div>
            <span className="font-bold text-2xl tracking-tight text-text">
              BABI
            </span>
          </Link>

          {/* Nav Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-babi relative ${
                  pathname === link.href ? "text-babi" : "text-muted"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-babi rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center">
            <Link
              href="/precommande"
              className="bg-babi text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-babi-dark hover:-translate-y-0.5 transition-all shadow-md shadow-babi/20"
            >
              Précommander
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
