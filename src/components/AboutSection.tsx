import React from 'react';
import { Heart, Utensils, Scale, Users, ShieldCheck, Phone } from 'lucide-react';
import { BISTRO_INFO } from '../data/bistroData.ts';

export const AboutSection: React.FC = () => {
  return (
    <section id="o-nas" className="py-16 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium">
              <Heart className="w-4 h-4 text-amber-400" />
              <span>O nas • Serce Wielkiej Wyspy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Prawdziwy domowy obiad na wrocławskim Biskupinie
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              <strong>Bistro Wielka Wyspa</strong> powstało z prostej, ale rzadkiej dziś idei: serwować prawdziwe, uczciwe, tradycyjne domowe posiłki <strong>polskiej kuchni</strong>, przygotowywane od godziny 8:00 rano dokładnie tak, jak gotowało się kiedyś w rodzinnym domu.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-800/60 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-base sm:text-lg">
                    Ręcznie lepione pierogi i tradycyjne wywary
                  </h3>
                  <p className="text-sm text-stone-300 mt-1 leading-relaxed">
                    Każdego dnia lepimy na świeżo pierogi z delikatnym, cienkim ciastem – ruskie z aromatycznym twarogiem i ziemniakami, mięsne oraz sezonowe. Gotujemy esencjonalne zupy: rosół, ogórkową, żurek czy chrzanową.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-800/60 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-base sm:text-lg">
                    Kupujesz na sztuki lub na wagę
                  </h3>
                  <p className="text-sm text-stone-300 mt-1 leading-relaxed">
                    Szanujemy Twoje potrzeby i apetyt. W Bistro Wielka Wyspa nie jesteś ograniczony sztywnym zestawem – pierogi, gołąbki czy naleśniki możesz zamówić na dokładną liczbę sztuk, a bigos i surówki na wagę.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-800/60 flex items-center justify-center text-amber-400 shrink-0 mt-1">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-base sm:text-lg">
                    Obsługa z sercem – jak u mamy
                  </h3>
                  <p className="text-sm text-stone-300 mt-1 leading-relaxed">
                    Nasi goście w opiniach Google najczęściej wspominają serdeczne Panie z obsługi, które witają od progu z uśmiechem, doradzą i zawsze upewnią się, czy obiad jest gorący i smakuje.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href={BISTRO_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Zadzwoń do Bistro: {BISTRO_INFO.phone}</span>
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-sm border border-stone-700 transition-colors"
              >
                <span>Sprawdź jak dojechać</span>
              </a>
            </div>

          </div>

          {/* Right Column: Info Cards & Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800 space-y-6 shadow-xl">
              <h3 className="font-serif font-bold text-xl text-white border-b border-stone-800 pb-3">
                Dlaczego goście wybierają Bistro Wielka Wyspa?
              </h3>

              <div className="space-y-4">
                {BISTRO_INFO.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {feat.title}
                      </div>
                      <div className="text-xs text-stone-400 mt-0.5 leading-relaxed">
                        {feat.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-900/40 text-xs text-amber-200">
                📍 <strong>Położenie:</strong> Ul. Karola Olszewskiego 34, w sercu Biskupina na Wielkiej Wyspie we Wrocławiu, blisko pętli i przystanku tramwajowego Piramowicza.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
