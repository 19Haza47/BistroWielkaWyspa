import React from 'react';
import { MapPin, Phone, Clock, Navigation, Bus, CreditCard, ExternalLink } from 'lucide-react';
import { BISTRO_INFO } from '../data/bistroData.ts';

export const LocationContactSection: React.FC = () => {
  // Current time status check (Mon-Fri 08:00 - 16:00, Sat-Sun Closed)
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday, 6 is Saturday, 1-5 is Mon-Fri
  const hours = now.getHours();
  const isWeekday = day >= 1 && day <= 5;
  const isOpen = isWeekday && hours >= 8 && hours < 16;

  const { lat, lng } = BISTRO_INFO.address.coordinates;

  return (
    <section id="kontakt" className="py-16 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium mb-3">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Dokładna Lokalizacja, Dojazd & Kontakt</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Gdzie nas znaleźć we Wrocławiu?
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base">
            Zapraszamy do naszego pawilonu przy <strong className="text-white">ul. Karola Olszewskiego 34</strong> na wrocławskim Biskupinie (tuż przy przystanku tramwajowym Piramowicza).
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status card */}
            <div className="p-5 rounded-2xl bg-stone-800 border border-stone-700 shadow-md flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-stone-400 font-semibold">
                  Status lokalu w tej chwili
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`w-3 h-3 rounded-full ${isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`}></span>
                  <span className={`text-lg font-bold ${isOpen ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isOpen ? 'Teraz Otwarte (08:00 – 16:00)' : 'Teraz Zamknięte (Otwarte Pn–Pt 08:00–16:00)'}
                  </span>
                </div>
              </div>
              <a
                href={BISTRO_INFO.phoneTel}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs transition-colors shrink-0"
              >
                Zadzwoń
              </a>
            </div>

            {/* Address & Hours Detail */}
            <div className="p-6 rounded-2xl bg-stone-800/90 border border-stone-700/80 space-y-5 shadow-lg">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center shrink-0 border border-amber-800">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-semibold uppercase">
                    Dokładny adres lokalu
                  </div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {BISTRO_INFO.address.street}
                  </div>
                  <div className="text-sm text-stone-300">
                    {BISTRO_INFO.address.postalCode} {BISTRO_INFO.address.city}
                  </div>
                  <div className="text-xs text-amber-300/80 mt-1">
                    Pawilon handlowo-gastronomiczny • Biskupin (Wielka Wyspa)
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 pt-3 border-t border-stone-700/60">
                <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center shrink-0 border border-amber-800">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-stone-400 font-semibold uppercase">
                    Telefon do zamówień i zapytań
                  </div>
                  <a
                    href={BISTRO_INFO.phoneTel}
                    className="text-lg font-bold text-amber-400 hover:underline mt-0.5 block"
                  >
                    {BISTRO_INFO.phone}
                  </a>
                  <div className="text-xs text-stone-400 mt-0.5">
                    Zadzwoń, aby spytać o dzisiejszą zupę dnia, pierogi lub zamówić posiłek do odbioru.
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 pt-3 border-t border-stone-700/60">
                <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center shrink-0 border border-amber-800">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-stone-400 font-semibold uppercase">
                    Godziny otwarcia
                  </div>
                  <div className="mt-2 space-y-1.5 text-xs sm:text-sm">
                    {BISTRO_INFO.hours.map((h, i) => (
                      <div key={i} className="flex justify-between items-center py-0.5 border-b border-stone-700/30 last:border-0">
                        <span className="text-stone-300">{h.day}</span>
                        <span className={`font-semibold ${h.hours === 'Zamknięte' ? 'text-stone-500' : 'text-emerald-400'}`}>
                          {h.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transit & Payment */}
              <div className="pt-3 border-t border-stone-700/60 space-y-3">
                <div className="flex items-center gap-3 text-xs text-stone-300">
                  <Bus className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    <strong>Dojazd MPK:</strong> Tramwaje linii <strong>1, 2, 4, 10</strong> (przystanek Piramowicza)
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-stone-300">
                  <CreditCard className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    <strong>Płatność:</strong> Karta zbliżeniowa, telefon / BLIK, gotówka
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BISTRO_INFO.socialLinks.googleDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Nawiguj do lokalu (Google Maps)</span>
              </a>
              <a
                href={BISTRO_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Fanpage Facebook</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Map with Precise Pin */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-stone-700 shadow-xl bg-stone-800">
              <div className="p-4 bg-stone-950 border-b border-stone-700 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-stone-200">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span className="font-semibold">ul. Karola Olszewskiego 34, Wrocław (Biskupin)</span>
                </div>
                <a
                  href={BISTRO_INFO.socialLinks.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                >
                  <span>Powiększ w Google</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* OpenStreetMap with exact pin at Olszewskiego 34: 51.103365, 17.095967 */}
              <div className="relative w-full h-[450px]">
                <iframe
                  title="Dokładna mapa dojazdu do Bistro Wielka Wyspa"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=17.0880%2C51.0990%2C17.1040%2C51.1075&layer=mapnik&marker=${lat}%2C${lng}`}
                ></iframe>
              </div>

              <div className="p-4 bg-stone-900 border-t border-stone-800 text-xs text-stone-400 flex flex-col sm:flex-row items-center justify-between gap-2">
                <span>📍 Dokładna pinezka: ul. Karola Olszewskiego 34, 51-646 Wrocław</span>
                <span className="text-amber-400 font-semibold">
                  Telefon: {BISTRO_INFO.phone} • Godziny: Pn–Pt 08:00 – 16:00
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
