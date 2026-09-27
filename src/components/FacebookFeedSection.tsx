import React from 'react';
import { ExternalLink, ThumbsUp, MessageCircle, Share2, Calendar } from 'lucide-react';
import { BISTRO_INFO, FACEBOOK_POSTS } from '../data/bistroData.ts';
import { usePhotos } from '../context/PhotoContext.tsx';

export const FacebookFeedSection: React.FC = () => {
  const { photos } = usePhotos();

  return (
    <section id="facebook-dania" className="py-16 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium mb-3">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Oficjalny Fanpage na Facebooku</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Codzienne Dania Dnia i Wiadomości z Facebooka
          </h2>

          <p className="mt-3 text-stone-300 text-sm sm:text-base">
            Nasze bistro nie publikuje sztucznych cenników – <strong className="text-amber-400">każdego ranka wrzucamy na żywo na nasz fanpage</strong> informację o tym, jaka zupa bulgocze w garze i jakie domowe danie dnia przygotowały dla Was gospodynie!
          </p>
        </div>

        {/* Facebook Banner Notice */}
        <div className="max-w-4xl mx-auto mb-10 p-5 rounded-2xl bg-gradient-to-r from-blue-950/60 to-stone-900 border border-blue-800/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-base sm:text-lg">
                Fanpage: Bistro Wielka wyspa
              </div>
              <div className="text-blue-300 text-xs sm:text-sm">
                Ocena 5.0 / 5.0 na Facebooku • Codzienne relacje i menu
              </div>
            </div>
          </div>

          <a
            href={BISTRO_INFO.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all active:scale-95 shrink-0"
          >
            <span>Otwórz Fanpage Bistro</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Facebook Posts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {FACEBOOK_POSTS.map((post, idx) => {
            // Optional image if user has uploaded the corresponding dish photo
            const mappedImg = idx === 0 ? photos['photo-pierogi'] : idx === 1 ? photos['photo-zupa'] : photos['photo-exterior'];

            return (
              <div
                key={post.id}
                className="rounded-2xl bg-stone-900 border border-stone-800 shadow-md p-5 flex flex-col justify-between hover:border-blue-700/50 transition-colors"
              >
                <div>
                  {/* Card Header: FB Logo & Page Info */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                        BW
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white leading-tight">
                          Bistro Wielka wyspa
                        </div>
                        <div className="text-[11px] text-stone-400 flex items-center gap-1 mt-0.5">
                          <Calendar className="w-3 h-3 text-stone-500" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>

                  {/* Post Text */}
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    {post.text}
                  </p>

                  {/* Real Post Image if available from user */}
                  {mappedImg && (
                    <div className="my-4 rounded-xl overflow-hidden border border-stone-800 h-44 bg-stone-950 relative">
                      <img
                        src={mappedImg}
                        alt="Zdjęcie z posta Facebook"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

                {/* Card Footer: Engagement stats & link */}
                <div className="mt-5 pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-blue-400">
                      <ThumbsUp className="w-3.5 h-3.5" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1 text-stone-400">
                      <MessageCircle className="w-3.5 h-3.5" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1 text-stone-400">
                      <Share2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                  >
                    <span>Zobacz na FB</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
