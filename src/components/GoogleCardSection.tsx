import React from 'react';
import { Star, MapPin, Phone, Clock, CreditCard, ShoppingBag, ExternalLink, Check, Award } from 'lucide-react';
import { BISTRO_INFO } from '../data/bistroData.ts';

export const GoogleCardSection: React.FC = () => {
  const { ratings, address, phone, hours } = BISTRO_INFO;
  const breakdown = ratings.googleBreakdown;
  const total = ratings.googleTotalReviews;

  return (
    <section id="wizytowka-google" className="py-16 bg-stone-900 border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium mb-3">
            <Award className="w-4 h-4 text-blue-400" />
            <span>Oficjalne dane z wizytówki Google</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Wizytówka Bistro w Google Maps
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base">
            Poznaj fakty o naszym lokalu bezpośrednio z bazy Google: ocena 4.8/5 na podstawie 119 opinii gości, godziny otwarcia oraz dostępne udogodnienia na wrocławskim Biskupinie.
          </p>
        </div>

        {/* The Google Business Profile Card */}
        <div className="max-w-4xl mx-auto bg-stone-800/90 rounded-2xl border border-stone-700 shadow-xl overflow-hidden">
          
          {/* Card Top Banner */}
          <div className="bg-stone-950 p-6 sm:p-8 border-b border-stone-700/80 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 font-bold text-2xl shadow-md shrink-0">
                G
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {BISTRO_INFO.name}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Zweryfikowane w Google
                  </span>
                </div>
                <p className="text-stone-400 text-sm mt-1">
                  Restauracja • Bar bistro z kuchnią domową • Wrocław Śródmieście
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-white text-base">{ratings.googleRating}</span>
                  <span className="text-stone-400 text-sm">({ratings.googleTotalReviews} opinii)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={BISTRO_INFO.socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow transition-colors"
              >
                <span>Zobacz w Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card Body Grid */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left: Rating Breakdown */}
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-lg text-white">
                Rozkład ocen klientów w Google
              </h4>
              
              <div className="space-y-2 text-xs sm:text-sm">
                {/* 5 stars */}
                <div className="flex items-center gap-3">
                  <span className="w-12 text-stone-300 font-medium">5 gwiazdek</span>
                  <div className="flex-1 h-3 rounded-full bg-stone-700 overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${(breakdown.fiveStar / total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-bold text-stone-200">
                    {breakdown.fiveStar}
                  </span>
                </div>

                {/* 4 stars */}
                <div className="flex items-center gap-3">
                  <span className="w-12 text-stone-300 font-medium">4 gwiazdki</span>
                  <div className="flex-1 h-3 rounded-full bg-stone-700 overflow-hidden">
                    <div
                      className="h-full bg-amber-400/80 rounded-full"
                      style={{ width: `${(breakdown.fourStar / total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-bold text-stone-200">
                    {breakdown.fourStar}
                  </span>
                </div>

                {/* 3 stars */}
                <div className="flex items-center gap-3">
                  <span className="w-12 text-stone-300 font-medium">3 gwiazdki</span>
                  <div className="flex-1 h-3 rounded-full bg-stone-700 overflow-hidden">
                    <div
                      className="h-full bg-amber-400/60 rounded-full"
                      style={{ width: `${(breakdown.threeStar / total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-bold text-stone-200">
                    {breakdown.threeStar}
                  </span>
                </div>

                {/* 2 stars */}
                <div className="flex items-center gap-3">
                  <span className="w-12 text-stone-300 font-medium">2 gwiazdki</span>
                  <div className="flex-1 h-3 rounded-full bg-stone-700 overflow-hidden">
                    <div
                      className="h-full bg-amber-400/40 rounded-full"
                      style={{ width: `${(breakdown.twoStar / total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-bold text-stone-200">
                    {breakdown.twoStar}
                  </span>
                </div>

                {/* 1 star */}
                <div className="flex items-center gap-3">
                  <span className="w-12 text-stone-300 font-medium">1 gwiazdka</span>
                  <div className="flex-1 h-3 rounded-full bg-stone-700 overflow-hidden">
                    <div
                      className="h-full bg-amber-400/20 rounded-full"
                      style={{ width: `${(breakdown.oneStar / total) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-right font-bold text-stone-200">
                    {breakdown.oneStar}
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-900/40 text-xs text-amber-200 mt-4">
                ⭐ <strong className="text-amber-100">Ponad 95% ocen to 5/5</strong> – goście najbardziej doceniają smak domowych pierogów, pyszne zupy oraz serdeczną obsługę.
              </div>
            </div>

            {/* Right: Key Business Details & Attributes */}
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-lg text-white">
                Informacje i udogodnienia lokalu
              </h4>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Adres:</div>
                    <div className="text-stone-300">{address.fullAddress}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Numer telefonu:</div>
                    <a href={BISTRO_INFO.phoneTel} className="text-amber-400 font-bold hover:underline">
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Godziny otwarcia:</div>
                    <div className="text-stone-300 font-medium text-emerald-400">Poniedziałek – Piątek: 08:00 – 16:00</div>
                    <div className="text-stone-400 text-xs mt-0.5">Sobota i Niedziela: Zamknięte</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Metody płatności:</div>
                    <div className="text-stone-300">Karta płatnicza, telefon / BLIK, gotówka</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShoppingBag className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Opcje posiłków:</div>
                    <div className="text-stone-300">Na miejscu, na wynos, jedzenie na wagę, pierogi i naleśniki na sztuki</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Card CTA */}
          <div className="p-4 sm:p-6 bg-stone-900 border-t border-stone-700/80 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-stone-400">
              Dane zsynchronizowane z profilem firmy Google oraz opiniami gości
            </div>
            <div className="flex items-center gap-3">
              <a
                href={BISTRO_INFO.socialLinks.googleDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-600 transition-colors"
              >
                Wyznacz trasę dojazdu
              </a>
              <a
                href={BISTRO_INFO.socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-colors"
              >
                Napisz opinię w Google
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
