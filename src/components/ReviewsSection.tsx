import React, { useState } from 'react';
import { Star, MessageSquare, ExternalLink, ThumbsUp, CheckCircle, Quote } from 'lucide-react';
import { REAL_GOOGLE_REVIEWS, BISTRO_INFO } from '../data/bistroData.ts';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'top'>('all');

  const reviews = filter === 'all'
    ? REAL_GOOGLE_REVIEWS
    : REAL_GOOGLE_REVIEWS.filter(r => r.rating === 5);

  return (
    <section id="opinie" className="py-16 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium mb-3">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Prawdziwe recenzje z Google Maps</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Co mówią goście Bistro Wielka Wyspa?
          </h2>

          <p className="mt-3 text-stone-300 text-sm sm:text-base">
            Oto dosłowne cytaty gości odwiedzających nasz lokal przy ul. Olszewskiego 34 we Wrocławiu. Średnia ocena <strong className="text-amber-400 font-bold">4.8 na 5 gwiazdek</strong> na podstawie 119 opinii.
          </p>
        </div>

        {/* Rating Overview Box */}
        <div className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="font-serif text-5xl font-black text-amber-400">
                4.8
              </div>
              <div className="flex items-center justify-center gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs text-stone-400 mt-1">
                na 5 gwiazdek
              </div>
            </div>

            <div className="h-14 w-px bg-stone-700 hidden sm:block"></div>

            <div>
              <div className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                <span>119 opinii w Mapach Google</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium">
                  Zweryfikowane
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-md">
                Aż 102 osoby przyznały bistro maksymalną notę 5 gwiazdek, chwaląc domowe smaki, świeżość i serdeczność gospodyń.
              </p>
            </div>
          </div>

          <a
            href={BISTRO_INFO.socialLinks.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm shadow transition-colors shrink-0"
          >
            <span>Wszystkie opinie w Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Reviews Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-900 rounded-2xl border border-stone-800/90 p-6 flex flex-col justify-between hover:border-stone-700 transition-all shadow-md group"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-950 text-amber-300 border border-amber-800 flex items-center justify-center font-bold text-sm">
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">
                        {rev.author}
                      </div>
                      <div className="text-xs text-stone-400 flex items-center gap-1.5">
                        <span>{rev.badge}</span>
                        <span>•</span>
                        <span>{rev.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-xs shrink-0 shadow-sm" title="Zweryfikowana opinia Google">
                    G
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-stone-700/40 absolute -top-2 -left-1 pointer-events-none" />
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed relative z-10 pt-1">
                    "{rev.content}"
                  </p>
                </div>
              </div>

              {/* Bottom Helpful count */}
              <div className="pt-4 mt-4 border-t border-stone-800/80 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Opinia z Google Maps</span>
                </span>
                {rev.likes && (
                  <span className="flex items-center gap-1 text-stone-400">
                    <ThumbsUp className="w-3 h-3 text-amber-400/80" />
                    <span>Pomocna ({rev.likes})</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom invitation */}
        <div className="mt-12 text-center">
          <p className="text-stone-400 text-sm mb-3">
            Odwiedziłeś już nasze bistro przy ul. Karola Olszewskiego 34?
          </p>
          <a
            href={BISTRO_INFO.socialLinks.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold text-sm underline underline-offset-4"
          >
            <span>Zostaw swoją opinię w Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
