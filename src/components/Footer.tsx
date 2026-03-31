import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-text text-cream py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-babi flex items-center justify-center text-white font-bold">
              B
            </div>
            <span className="font-bold text-xl tracking-tight">BABI</span>
          </Link>
          <p className="text-muted text-sm max-w-sm">
            BABI (Baby Alert Biometric Intelligence) est un bracelet de cheville connecté qui collecte et analyse en continu les
            données de santé du bébé 24h/24 pour permettre aux jeunes parents
            d'avoir une vision complète de la santé de leur enfant.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-white">Navigation</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/" className="hover:text-lavande transition-colors">Accueil</Link></li>
            <li><Link href="/produit" className="hover:text-lavande transition-colors">Le Bracelet</Link></li>
            <li><Link href="/app" className="hover:text-lavande transition-colors">L'App</Link></li>
            <li><Link href="/a-propos" className="hover:text-lavande transition-colors">À propos</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-white">Légal</h4>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/mentions" className="hover:text-lavande transition-colors">Mentions Légales</Link></li>
            <li><Link href="/cgu" className="hover:text-lavande transition-colors">CGU / CGV</Link></li>
            <li><Link href="/confidentialite" className="hover:text-lavande transition-colors">Confidentialité</Link></li>
            <li><a href="mailto:contact@babi.fr" className="hover:text-lavande transition-colors">contact@babi.fr</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h4 className="font-semibold mb-4 text-white">Scanner / Partager</h4>
          <div className="bg-white p-2 rounded-xl shadow-lg w-32 h-32">
            <img src="/qrcode-babi.png" alt="BABI QR Code" className="w-full h-full object-contain" />
          </div>
          <p className="text-[10px] text-muted mt-2 text-center md:text-right uppercase tracking-widest font-bold">babi-chi.vercel.app</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-muted/20 text-center text-sm text-muted">
        <p className="mb-2">© {new Date().getFullYear()} BABI. Projet Étudiant - ISD Flaubert MDC 2026.</p>
        <p className="text-xs text-muted/60">Une équipe passionnée : Adame, Nadia, Wayan, Annaëlle, Sthely</p>
      </div>
    </footer>
  );
}
