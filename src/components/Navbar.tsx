import React, { useState } from 'react';
import { Phone, MapPin, Star, Menu, X, ExternalLink } from 'lucide-react';
import { BISTRO_INFO } from '../data/bistroData.ts';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-900/95 backdrop-blur-md border-b border-amber-900/40 text-stone-100 shadow-lg">
      {/* Top micro-bar */}
      <div className="bg-amber-950/80 border-b border-amber-900/30 text-amber-200/90 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{BISTRO_INFO.address.fullAddress}</span>
            </span>
            <span className="hidden sm:inline-block text-amber-400/50">•</span>
            <span className="hidden sm:flex items-center gap-1 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Pon – Pt: 08:00–16:00 | Sob – Nd: Nieczynne
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href={BISTRO_INFO.socialLinks.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-white">4.8</span>
              <span className="text-amber-300/80">(119 w Google)</span>
            </a>
            <span className="text-amber-400/50">•</span>
            <a
              href={BISTRO_INFO.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-white text-blue-300 transition-colors font-medium"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook (5.0 ★)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Logo / Name */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-serif font-bold text-xl shadow-md border border-amber-500/30 group-hover:scale-105 transition-transform">
            WW
          </div>
          <div>
            <div className="font-serif font-bold text-lg sm:text-xl text-stone-100 tracking-tight group-hover:text-amber-400 transition-colors">
              Bistro Wielka Wyspa
            </div>
            <div className="text-xs text-amber-300/80 font-medium">
              Wrocław • Biskupin • ul. Olszewskiego 34
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-300">
          <a href="#o-nas" className="hover:text-amber-400 transition-colors">
            O Bistro
          </a>
          <a href="#wizytowka-google" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Wizytówka Google
          </a>
          <a href="#facebook-dania" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
            Dania na Facebooku
          </a>
          <a href="#galeria" className="hover:text-amber-400 transition-colors">
            Zdjęcia z sieci
          </a>
          <a href="#opinie" className="hover:text-amber-400 transition-colors">
            Opinie gości (4.8 ★)
          </a>
          <a href="#kontakt" className="hover:text-amber-400 transition-colors">
            Dojazd & Kontakt
          </a>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={BISTRO_INFO.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-200 text-sm font-semibold transition-all shadow-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Fanpage Facebook</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>

          <a
            href={BISTRO_INFO.phoneTel}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold text-sm shadow-md transition-all active:scale-95 border border-amber-500/40"
          >
            <Phone className="w-4 h-4 text-amber-200" />
            <span>{BISTRO_INFO.phone}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={BISTRO_INFO.phoneTel}
            className="p-2 rounded-lg bg-amber-600 text-white sm:hidden"
            aria-label="Zadzwoń do Bistro"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-stone-800 text-stone-200 hover:text-white"
            aria-label="Menu nawigacji"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-800 bg-stone-900 px-4 py-5 space-y-3">
          <a
            href="#o-nas"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-200 hover:text-amber-400 font-medium"
          >
            O Bistro Wielka Wyspa
          </a>
          <a
            href="#wizytowka-google"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-200 hover:text-amber-400 font-medium"
          >
            Wizytówka Google (4.8 ★)
          </a>
          <a
            href="#facebook-dania"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-200 hover:text-amber-400 font-medium"
          >
            Codzienne Dania na Facebooku
          </a>
          <a
            href="#galeria"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-200 hover:text-amber-400 font-medium"
          >
            Zdjęcia z wizytówki i sieci
          </a>
          <a
            href="#opinie"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-200 hover:text-amber-400 font-medium"
          >
            Opinie gości (119 recenzji)
          </a>
          <a
            href="#kontakt"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-stone-200 hover:text-amber-400 font-medium"
          >
            Dojazd, godziny i kontakt
          </a>

          <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
            <a
              href={BISTRO_INFO.phoneTel}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-amber-600 text-white font-semibold text-base"
            >
              <Phone className="w-5 h-5" />
              <span>Zadzwoń: {BISTRO_INFO.phone}</span>
            </a>
            <a
              href={BISTRO_INFO.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Zobacz Facebook lokalu</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
