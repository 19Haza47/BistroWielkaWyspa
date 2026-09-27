import React, { useState } from 'react';
import { Camera, ExternalLink, X, Upload, Check } from 'lucide-react';
import { BISTRO_INFO } from '../data/bistroData.ts';
import { usePhotos, PHOTO_DEFINITIONS, PhotoItem } from '../context/PhotoContext.tsx';

export const PhotosGallerySection: React.FC = () => {
  const { photos, uploadSinglePhoto, uploadFiles } = usePhotos();
  const [activeCategory, setActiveCategory] = useState<string>('wszystkie');
  const [selectedPhoto, setSelectedPhoto] = useState<{ def: PhotoItem; url: string } | null>(null);

  const filteredItems = activeCategory === 'wszystkie'
    ? PHOTO_DEFINITIONS
    : PHOTO_DEFINITIONS.filter(p => p.category === activeCategory);

  const handleCardUpload = (photoId: string) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e: any) => {
      if (e.target.files && e.target.files[0]) {
        uploadSinglePhoto(photoId, e.target.files[0]);
      }
    };
    input.click();
  };

  const handleBulkUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'image/*';
    input.onchange = (e: any) => {
      if (e.target.files && e.target.files.length > 0) {
        uploadFiles(e.target.files);
      }
    };
    input.click();
  };

  return (
    <section id="galeria" className="py-16 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium mb-3">
            <Camera className="w-4 h-4 text-amber-400" />
            <span>Oryginalne zdjęcia lokalu (bez AI)</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Galeria dań i pawilonu Bistro
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base">
            Autentyczne zdjęcia pawilonu przy ul. Karola Olszewskiego 34, letniego ogródka oraz przygotowywanych codziennie domowych dań.
          </p>
        </div>

        {/* Top Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80">
          <div className="flex items-center gap-2 text-xs text-stone-300">
            <span className="font-semibold text-white">Status zdjęć:</span>
            <span>{Object.keys(photos).length} z {PHOTO_DEFINITIONS.length} wgranych</span>
          </div>
          <button
            onClick={handleBulkUpload}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs shadow transition-all active:scale-95"
          >
            <Upload className="w-4 h-4" />
            <span>Wgraj 7 swoich plików ze zdjęciami</span>
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'wszystkie', label: 'Wszystkie zdjęcia (7)' },
            { id: 'pierogi', label: 'Pierogi' },
            { id: 'zupy', label: 'Zupa dnia' },
            { id: 'dania', label: 'Dania obiadowe & desery' },
            { id: 'lokal', label: 'Pawilon z szyldem' },
            { id: 'ogrodek', label: 'Ogródek na zewnątrz' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const photoUrl = photos[item.id];

            return (
              <div
                key={item.id}
                className="group rounded-2xl overflow-hidden bg-stone-800 border border-stone-700/80 shadow-lg hover:border-amber-500/50 transition-all flex flex-col"
              >
                {/* Image Container */}
                <div
                  className="relative h-64 overflow-hidden bg-stone-950 flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    if (photoUrl) {
                      setSelectedPhoto({ def: item, url: photoUrl });
                    } else {
                      handleCardUpload(item.id);
                    }
                  }}
                >
                  {photoUrl ? (
                    <>
                      <img
                        src={photoUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
                    </>
                  ) : (
                    <div className="p-6 text-center flex flex-col items-center justify-center">
                      <span className="text-4xl mb-2">{item.icon}</span>
                      <div className="font-serif font-bold text-white text-base">
                        {item.title}
                      </div>
                      <span className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600/30 text-amber-300 border border-amber-500/40 text-xs font-semibold hover:bg-amber-600/50 transition-colors">
                        <Upload className="w-3.5 h-3.5" />
                        Wgraj plik: {item.defaultFilename}
                      </span>
                    </div>
                  )}
                  
                  {/* Source Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-stone-900/90 text-amber-300 text-xs font-medium border border-amber-500/30 backdrop-blur-sm z-10 flex items-center gap-1.5">
                    {photoUrl ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <span>📷</span>}
                    <span>{item.sourceLabel}</span>
                  </div>
                </div>

                {/* Content description */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-700/60 flex items-center justify-between text-xs text-stone-400">
                    {photoUrl ? (
                      <>
                        <button
                          onClick={() => setSelectedPhoto({ def: item, url: photoUrl })}
                          className="text-amber-400 font-semibold hover:underline"
                        >
                          Powiększ zdjęcie →
                        </button>
                        <button
                          onClick={() => handleCardUpload(item.id)}
                          className="text-stone-400 hover:text-white"
                        >
                          Zmień plik
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => handleCardUpload(item.id)}
                        className="text-amber-400 font-semibold hover:underline flex items-center gap-1"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <span>Dodaj zdjęcie ({item.defaultFilename})</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Link to Google Maps Photos */}
        <div className="mt-12 text-center">
          <a
            href={BISTRO_INFO.socialLinks.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 border border-stone-600 text-stone-200 text-sm font-semibold transition-colors"
          >
            <Camera className="w-4 h-4 text-amber-400" />
            <span>Zobacz profil i recenzje w Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-stone-900 border border-stone-700 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-800/80 text-white hover:bg-stone-700 transition-colors"
              aria-label="Zamknij podgląd"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.def.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-6 bg-stone-900">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-1">
                <span>{selectedPhoto.def.sourceLabel}</span>
              </div>
              <h3 className="font-serif font-bold text-xl text-white">
                {selectedPhoto.def.title}
              </h3>
              <p className="text-sm text-stone-300 mt-2 leading-relaxed">
                {selectedPhoto.def.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
