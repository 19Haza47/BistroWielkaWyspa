import React from 'react';
import { Phone, Star, MapPin, ExternalLink, Camera } from 'lucide-react';
import { BISTRO_INFO } from '../data/bistroData.ts';
import { usePhotos, PHOTO_DEFINITIONS } from '../context/PhotoContext.tsx';

export const Hero: React.FC = () => {
  const { photos, uploadSinglePhoto } = usePhotos();

  const exteriorDef = PHOTO_DEFINITIONS.find(d => d.id === 'photo-exterior')!;
  const pierogiDef = PHOTO_DEFINITIONS.find(d => d.id === 'photo-pierogi')!;
  const zupaDef = PHOTO_DEFINITIONS.find(d => d.id === 'photo-zupa')!;

  const exteriorPhoto = photos['photo-exterior'];
  const pierogiPhoto = photos['photo-pierogi'];
  const zupaPhoto = photos['photo-zupa'];

  const handleQuickUpload = (id: string) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e: any) => {
      if (e.target.files && e.target.files[0]) {
        uploadSinglePhoto(id, e.target.files[0]);
      }
    };
    input.click();
  };

  return (
    <section id="top" className="relative bg-stone-900 text-stone-100 overflow-hidden pt-8 pb-16 lg:py-20 border-b border-amber-950">
      {/* Background ambient pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Bistro Identity */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                4.8 / 5.0
              </span>
              <span className="text-stone-400">•</span>
              <span>119 opinii w Google Maps</span>
              <span className="text-stone-400">•</span>
              <span className="text-blue-300 font-semibold">5.0 na Facebooku</span>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Bistro <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Wielka Wyspa</span>
              </h1>
              <p className="mt-2 text-lg sm:text-xl text-amber-200/90 font-medium flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Wrocław – Biskupin • ul. Karola Olszewskiego 34</span>
              </p>
            </div>

            {/* Subtitle / Description based on real reviews */}
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Kameralne, sąsiedzkie bistro z prawdziwą <strong className="text-amber-300 font-semibold">polską kuchnią domową</strong>. Słyniemy z ręcznie lepionych pierogów z cebulką, gorącej zupy pomidorowej i rosołu, chrupiących schabowych, gołąbków i dań obiadowych przygotowywanych codziennie od 8:00 rano ze świeżych składników.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/60">
                <div className="text-amber-400 font-serif font-bold text-lg">Na sztuki i wagę</div>
                <div className="text-xs text-stone-300 mt-0.5">Kupujesz dokładnie tyle, ile potrzebujesz</div>
              </div>
              <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/60">
                <div className="text-amber-400 font-serif font-bold text-lg">Ogródek i na wynos</div>
                <div className="text-xs text-stone-300 mt-0.5">Ciepłe posiłki przy stoliku lub na wynos</div>
              </div>
              <div className="p-3 rounded-xl bg-stone-800/80 border border-stone-700/60 col-span-2 sm:col-span-1">
                <div className="text-amber-400 font-serif font-bold text-lg">Płatność kartą</div>
                <div className="text-xs text-stone-300 mt-0.5">Karta, BLIK i gotówka</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={BISTRO_INFO.phoneTel}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-base shadow-lg shadow-amber-900/40 transition-all active:scale-95"
              >
                <Phone className="w-5 h-5 text-amber-200" />
                <span>Zadzwoń: {BISTRO_INFO.phone}</span>
              </a>

              <a
                href={BISTRO_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-md transition-all active:scale-95"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Dzisiejsze dania na Facebooku</span>
                <ExternalLink className="w-4 h-4 opacity-75" />
              </a>

              <a
                href="#wizytowka-google"
                className="px-5 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium text-base border border-stone-700 transition-colors"
              >
                Wizytówka lokalu
              </a>
            </div>

            {/* Live Facebook info notice */}
            <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/40 text-blue-200 text-xs sm:text-sm flex items-start gap-3">
              <span className="text-xl">📢</span>
              <div>
                <span className="font-semibold text-blue-100">Świeże dania od 8:00 do 16:00:</span>{' '}
                Nasze bistro codziennie od poniedziałku do piątku publikuje zupę dnia i świeże zestawy obiadowe bezpośrednio na profilu Facebook oraz na tablicy w pawilonie przy ul. Olszewskiego 34.
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Photos Showcase */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Main Featured Photo Card: Pawilon Bistro */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-600/40 shadow-2xl bg-stone-800 group h-72 sm:h-80 flex flex-col justify-end">
              {exteriorPhoto ? (
                <>
                  <img
                    src={exteriorPhoto}
                    alt={exteriorDef.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent pointer-events-none"></div>
                </>
              ) : (
                <div
                  onClick={() => handleQuickUpload('photo-exterior')}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-stone-800 via-stone-900 to-amber-950/40 cursor-pointer hover:border-amber-500 transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3">
                    <Camera className="w-7 h-7" />
                  </div>
                  <div className="font-serif font-bold text-white text-lg">
                    {exteriorDef.title}
                  </div>
                  <div className="text-xs text-amber-300 mt-1 font-semibold">
                    Kliknij, aby wgrać zdjęcie (zdj4.webp)
                  </div>
                  <div className="text-xs text-stone-400 mt-2 max-w-xs">
                    Pawilon Bistro Wielka Wyspa z szyldem: Domowe jedzenie robione na miejscu, tel. +48 577 299 889
                  </div>
                </div>
              )}
              
              {/* Photo tag badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-stone-900/90 text-amber-300 text-xs font-medium border border-amber-500/30 backdrop-blur-sm z-10 flex items-center gap-1.5">
                <span>📷</span>
                <span>{exteriorDef.sourceLabel}</span>
              </div>

              {/* Photo description overlay */}
              {exteriorPhoto && (
                <div className="relative p-4 text-left z-10">
                  <div className="font-serif font-bold text-white text-lg">
                    {exteriorDef.title}
                  </div>
                  <div className="text-xs text-stone-300 mt-1 line-clamp-2">
                    {exteriorDef.description}
                  </div>
                </div>
              )}
            </div>

            {/* Small secondary photos grid: Pierogi & Zupa */}
            <div className="grid grid-cols-2 gap-3">
              
              {/* Pierogi Card */}
              <div className="relative rounded-xl overflow-hidden border border-stone-700 bg-stone-800 group h-32 flex flex-col justify-end">
                {pierogiPhoto ? (
                  <>
                    <img
                      src={pierogiPhoto}
                      alt={pierogiDef.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent pointer-events-none"></div>
                  </>
                ) : (
                  <div
                    onClick={() => handleQuickUpload('photo-pierogi')}
                    className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center bg-stone-800/90 cursor-pointer hover:bg-stone-750 transition-colors"
                  >
                    <span className="text-2xl mb-1">🥟</span>
                    <div className="text-xs font-bold text-white truncate max-w-full">
                      Pierogi z cebulką
                    </div>
                    <span className="text-[10px] text-amber-400 mt-0.5">Wgraj pierogi.webp</span>
                  </div>
                )}
                {pierogiPhoto && (
                  <div className="relative p-2 text-xs font-semibold text-white truncate z-10">
                    {pierogiDef.title}
                  </div>
                )}
              </div>

              {/* Zupa Card */}
              <div className="relative rounded-xl overflow-hidden border border-stone-700 bg-stone-800 group h-32 flex flex-col justify-end">
                {zupaPhoto ? (
                  <>
                    <img
                      src={zupaPhoto}
                      alt={zupaDef.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent pointer-events-none"></div>
                  </>
                ) : (
                  <div
                    onClick={() => handleQuickUpload('photo-zupa')}
                    className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center bg-stone-800/90 cursor-pointer hover:bg-stone-750 transition-colors"
                  >
                    <span className="text-2xl mb-1">🥣</span>
                    <div className="text-xs font-bold text-white truncate max-w-full">
                      Zupa pomidorowa
                    </div>
                    <span className="text-[10px] text-amber-400 mt-0.5">Wgraj zupa.webp</span>
                  </div>
                )}
                {zupaPhoto && (
                  <div className="relative p-2 text-xs font-semibold text-white truncate z-10">
                    {zupaDef.title}
                  </div>
                )}
              </div>

            </div>

            {/* Google Profile Micro-summary Card */}
            <div className="p-4 rounded-xl bg-stone-800/90 border border-stone-700/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-blue-600 shadow text-lg">
                  G
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    Google Maps
                    <span className="text-amber-400 font-black">★ 4.8</span>
                  </div>
                  <div className="text-xs text-stone-400">119 opinii gości • Wrocław Biskupin</div>
                </div>
              </div>
              <a
                href={BISTRO_INFO.socialLinks.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-2 flex items-center gap-1"
              >
                <span>Otwórz w Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
