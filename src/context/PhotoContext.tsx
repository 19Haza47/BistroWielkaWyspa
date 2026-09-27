import React, { createContext, useContext, useState, useEffect } from 'react';

export interface PhotoItem {
  id: string;
  defaultFilename: string;
  title: string;
  description: string;
  sourceLabel: string;
  category: 'wszystkie' | 'dania' | 'zupy' | 'pierogi' | 'lokal' | 'ogrodek';
  icon: string;
}

export const PHOTO_DEFINITIONS: PhotoItem[] = [
  {
    id: 'photo-exterior',
    defaultFilename: 'zdj4.webp',
    title: 'Pawilon Bistro Wielka Wyspa',
    description: 'Nasz lokal przy ul. Karola Olszewskiego 34 we Wrocławiu z oficjalnym banerem „Domowe jedzenie robione na miejscu” oraz tel. +48 577 299 889.',
    sourceLabel: 'Zdjęcie lokalu (Olszewskiego 34)',
    category: 'lokal',
    icon: '🏠',
  },
  {
    id: 'photo-pierogi',
    defaultFilename: 'pierogi.webp',
    title: 'Ręcznie lepione pierogi z podsmażoną cebulką',
    description: 'Świeże domowe pierogi ze złocistą, skarmelizowaną cebulką podawane w letnim ogródku bistro.',
    sourceLabel: 'Specjalność lokalu',
    category: 'pierogi',
    icon: '🥟',
  },
  {
    id: 'photo-zupa',
    defaultFilename: 'zupa.webp',
    title: 'Gorąca domowa zupa pomidorowa z koperkiem',
    description: 'Aromatyczna, esencjonalna zupa pomidorowa z makaronem i świeżo siekanym koperkiem.',
    sourceLabel: 'Zupa dnia z garnka',
    category: 'zupy',
    icon: '🥣',
  },
  {
    id: 'photo-schabowy',
    defaultFilename: 'zdj2.webp',
    title: 'Tradycyjny chrupiący kotlet schabowy',
    description: 'Klasyczny złocisty kotlet schabowy z młodymi gotowanymi ziemniakami z koperkiem i chrupiącymi ogórkami kiszonymi.',
    sourceLabel: 'Polskie danie obiadowe',
    category: 'dania',
    icon: '🥩',
  },
  {
    id: 'photo-buraczki',
    defaultFilename: 'zdj1.webp',
    title: 'Domowy obiad z zasmażanymi buraczkami',
    description: 'Chrupiący panierowany kotlet, młode ziemniaczki z koperkiem oraz tradycyjne tarte buraczki.',
    sourceLabel: 'Danie obiadowe bistro',
    category: 'dania',
    icon: '🥗',
  },
  {
    id: 'photo-ogrodek',
    defaultFilename: 'zdj5.webp',
    title: 'Letni ogródek ze stolikami pod parasolem',
    description: 'Przytulny ogródek ze stolikami pod parasolem na świeżym powietrzu przed pawilonem na wrocławskim Biskupinie.',
    sourceLabel: 'Ogródek na zewnątrz',
    category: 'ogrodek',
    icon: '⛱️',
  },
  {
    id: 'photo-nalesniki',
    defaultFilename: 'zdj3.webp',
    title: 'Domowe naleśniki ze słodkim serem',
    description: 'Ręcznie smażone cienkie naleśniki złożone w trójkąty, wypełnione delikatnym twarogiem i oprószone cukrem pudrem.',
    sourceLabel: 'Deser domowy',
    category: 'dania',
    icon: '🥞',
  },
];

interface PhotoContextType {
  photos: Record<string, string>; // id -> dataUrl or server URL
  uploadFiles: (files: FileList | File[]) => Promise<void>;
  uploadSinglePhoto: (photoId: string, file: File) => Promise<void>;
  hasCustomPhotos: boolean;
  clearPhotos: () => void;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

const STORAGE_KEY = 'bistro_wielka_wyspa_user_photos_v1';

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photos, setPhotos] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return {};
  });

  // Save to localStorage whenever photos change
  useEffect(() => {
    try {
      if (Object.keys(photos).length > 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
      }
    } catch (e) {
      console.warn('Could not save photos to localStorage:', e);
    }
  }, [photos]);

  const mapFileToPhotoId = (filename: string): string => {
    const lower = filename.toLowerCase();
    if (lower.includes('pierogi')) return 'photo-pierogi';
    if (lower.includes('zupa') || lower.includes('pomidor')) return 'photo-zupa';
    if (lower.includes('zdj4') || lower.includes('pawilon') || lower.includes('szyld') || lower.includes('wejscie')) return 'photo-exterior';
    if (lower.includes('zdj5') || lower.includes('ogrod') || lower.includes('parasol')) return 'photo-ogrodek';
    if (lower.includes('zdj2') || lower.includes('schab')) return 'photo-schabowy';
    if (lower.includes('zdj1') || lower.includes('buracz')) return 'photo-buraczki';
    if (lower.includes('zdj3') || lower.includes('nales')) return 'photo-nalesniki';
    
    // Fallback: look for empty slots
    const emptySlot = PHOTO_DEFINITIONS.find(def => !photos[def.id]);
    return emptySlot ? emptySlot.id : 'photo-pierogi';
  };

  const readFileAsDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const sendToServer = async (filename: string, base64Data: string) => {
    try {
      await fetch('/api/upload-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, base64Data }),
      });
    } catch {
      // Server upload is best-effort; localStorage handles rendering instantly
    }
  };

  const uploadFiles = async (files: FileList | File[]) => {
    const fileArray = Array.from(files);
    const updated = { ...photos };

    for (const file of fileArray) {
      const targetId = mapFileToPhotoId(file.name);
      const def = PHOTO_DEFINITIONS.find(d => d.id === targetId);
      const filename = def ? def.defaultFilename : file.name;

      const dataUrl = await readFileAsDataUrl(file);
      updated[targetId] = dataUrl;
      await sendToServer(filename, dataUrl);
    }

    setPhotos(updated);
  };

  const uploadSinglePhoto = async (photoId: string, file: File) => {
    const def = PHOTO_DEFINITIONS.find(d => d.id === photoId);
    const filename = def ? def.defaultFilename : file.name;
    const dataUrl = await readFileAsDataUrl(file);

    setPhotos(prev => ({
      ...prev,
      [photoId]: dataUrl,
    }));

    await sendToServer(filename, dataUrl);
  };

  const clearPhotos = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPhotos({});
  };

  const hasCustomPhotos = Object.keys(photos).length > 0;

  return (
    <PhotoContext.Provider
      value={{
        photos,
        uploadFiles,
        uploadSinglePhoto,
        hasCustomPhotos,
        clearPhotos,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => {
  const ctx = useContext(PhotoContext);
  if (!ctx) {
    throw new Error('usePhotos must be used within PhotoProvider');
  }
  return ctx;
};
