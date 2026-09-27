import React, { useRef, useState } from 'react';
import { Upload, CheckCircle2, RefreshCw, X, ShieldCheck } from 'lucide-react';
import { usePhotos, PHOTO_DEFINITIONS } from '../context/PhotoContext.tsx';

export const PhotoUploaderBanner: React.FC = () => {
  const { photos, uploadFiles, hasCustomPhotos, clearPhotos } = usePhotos();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const uploadedCount = Object.keys(photos).length;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      await uploadFiles(e.target.files);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 4000);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      await uploadFiles(e.dataTransfer.files);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 4000);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  if (isCollapsed) {
    return (
      <div className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setIsCollapsed(false)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs shadow-xl transition-all border border-amber-400/40"
        >
          <Upload className="w-4 h-4" />
          <span>Twoje zdjęcia ({uploadedCount}/7)</span>
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-amber-950/80 via-stone-900 to-amber-950/80 border-b border-amber-600/30 text-stone-200 py-3 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Left Side: Status & Message */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-400">
            {uploadedCount > 0 ? (
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            ) : (
              <Upload className="w-5 h-5 text-amber-400" />
            )}
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-2 justify-center md:justify-start">
              <span>Oryginalne zdjęcia lokalu (bez AI)</span>
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                uploadedCount > 0 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              }`}>
                {uploadedCount > 0 ? `Wgrano ${uploadedCount} z 7 zdjęć` : 'Wybierz pliki ze swojego urządzenia'}
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              Wybierz pliki (lub upuść zupa.webp, pierogi.webp, zdj1–zdj5) – pojawią się natychmiast na całej stronie.
            </p>
          </div>
        </div>

        {/* Right Side: Upload Button & Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`flex items-center gap-2 rounded-xl transition-all ${
              isDragging ? 'ring-2 ring-amber-400 bg-amber-500/20' : ''
            }`}
          >
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              <Upload className="w-4 h-4" />
              <span>{uploadedCount > 0 ? 'Zmień / Dodaj zdjęcia' : 'Wybierz zdjęcia z dysku'}</span>
            </button>
          </div>

          {hasCustomPhotos && (
            <button
              onClick={clearPhotos}
              title="Wyczyść wgrane zdjęcia"
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-rose-400 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => setIsCollapsed(true)}
            title="Zwiń pasek"
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>

      {isSuccess && (
        <div className="mt-2 text-center text-xs text-emerald-400 font-semibold flex items-center justify-center gap-1.5 animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>Zdjęcia zostały pomyślnie wgrane i zapisane na stronie!</span>
        </div>
      )}
    </div>
  );
};
