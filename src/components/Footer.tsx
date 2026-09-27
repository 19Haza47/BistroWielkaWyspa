import React from 'react';
import { Phone, MapPin, Star, Heart, ArrowUp } from 'lucide-react';
import { BISTRO_INFO } from '../data/bistroData.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: About Bistro */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-serif font-bold text-xl shadow">
                WW
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-white">
                  Bistro Wielka Wyspa
                </span>
                <div className="text-xs text-amber-400">
                  Wrocław • Biskupin • ul. Olszewskiego 34
                </div>
              </div>
            </div>

            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              Sąsiedzkie bistro z tradycyjną <strong>polską kuchnią domową</strong>. Ręcznie lepione pierogi z podsmażaną cebulką, gorąca zupa pomidorowa, rosół, chrupiący schabowy i świeże obiady na sztuki oraz na wagę.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300/90 pt-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-white">Ocena 4.8 / 5.0</span>
              <span>w Mapach Google (119 opinii)</span>
              <span>•</span>
              <span className="text-blue-300 font-semibold">5.0 na Facebooku</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base">
              Nawigacja strony
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <a href="#o-nas" className="hover:text-amber-400 transition-colors">
                  O Bistro Wielka Wyspa
                </a>
              </li>
              <li>
                <a href="#wizytowka-google" className="hover:text-amber-400 transition-colors">
                  Wizytówka Google Maps (4.8 ★)
                </a>
              </li>
              <li>
                <a href="#facebook-dania" className="hover:text-amber-400 transition-colors">
                  Codzienne Dania na Facebooku
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-amber-400 transition-colors">
                  Galeria zdjęć z sieci
                </a>
              </li>
              <li>
                <a href="#opinie" className="hover:text-amber-400 transition-colors">
                  Opinie gości (119 recenzji)
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-amber-400 transition-colors">
                  Dojazd i kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-white text-base">
              Kontakt & Adres
            </h4>
            <div className="space-y-2 text-sm text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BISTRO_INFO.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={BISTRO_INFO.phoneTel} className="text-amber-400 font-bold hover:underline">
                  {BISTRO_INFO.phone}
                </a>
              </div>
              <div className="pt-2 text-xs text-stone-500 space-y-1">
                <div className="text-emerald-400 font-medium">Pon – Pt: 08:00 – 16:00</div>
                <div>Sobota i Niedziela: Zamknięte</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BISTRO_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 border border-blue-500/30 text-xs font-semibold transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Odwiedź fanpage na Facebooku</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright and to top */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Bistro Wielka Wyspa • Wrocław, ul. Karola Olszewskiego 34. Wszelkie prawa zastrzeżone.
          </div>

          <div className="flex items-center gap-4">
            <span>Strona informacyjna z danymi z wizytówki Google i Facebooka</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
              aria-label="Wróć na górę strony"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
