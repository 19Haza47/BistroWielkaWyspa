/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PhotoProvider } from './context/PhotoContext.tsx';
import { PhotoUploaderBanner } from './components/PhotoUploaderBanner.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { GoogleCardSection } from './components/GoogleCardSection.tsx';
import { FacebookFeedSection } from './components/FacebookFeedSection.tsx';
import { PhotosGallerySection } from './components/PhotosGallerySection.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { LocationContactSection } from './components/LocationContactSection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <PhotoProvider>
      <div className="min-h-screen bg-stone-900 text-stone-100 flex flex-col selection:bg-amber-500 selection:text-stone-900">
        <PhotoUploaderBanner />
        <Navbar />
        <main className="flex-1">
          <Hero />
          <GoogleCardSection />
          <FacebookFeedSection />
          <PhotosGallerySection />
          <ReviewsSection />
          <AboutSection />
          <LocationContactSection />
        </main>
        <Footer />
      </div>
    </PhotoProvider>
  );
}
