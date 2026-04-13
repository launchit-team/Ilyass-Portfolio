'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { videos, videoCategories, type Video } from '@/lib/portfolio/videos';

type Tab = 'photos' | 'videos';

interface Photo {
  id: number;
  name: string;
  alt: string;
}

function thumbAvif(name: string) { return `/images/thumbs/${name}.avif`; }
function thumbWebp(name: string) { return `/images/thumbs/${name}.webp`; }
function fullAvif(name: string) { return `/images/full/${name}.avif`; }
function fullWebp(name: string) { return `/images/full/${name}.webp`; }

const photos: Photo[] = [
  { id: 1,  name: 'GPTempDownload',      alt: 'Photo 1' },
  { id: 2,  name: 'GPTempDownload(1)',    alt: 'Photo 2' },
  { id: 3,  name: 'GPTempDownload(2)',    alt: 'Photo 3' },
  { id: 4,  name: 'GPTempDownload(3)',    alt: 'Photo 4' },
  { id: 5,  name: 'GPTempDownload(4)',    alt: 'Photo 5' },
  { id: 6,  name: 'GPTempDownload(5)',    alt: 'Photo 6' },
  { id: 7,  name: 'GPTempDownload(6)',    alt: 'Photo 7' },
  { id: 8,  name: 'GPTempDownload(7)',    alt: 'Photo 8' },
  { id: 9,  name: 'GPTempDownload(8)',    alt: 'Photo 9' },
  { id: 10, name: 'GPTempDownload(9)',    alt: 'Photo 10' },
  { id: 11, name: 'GPTempDownload(10)',   alt: 'Photo 11' },
  { id: 12, name: 'GPTempDownload(11)',   alt: 'Photo 12' },
  { id: 13, name: 'GPTempDownload(12)',   alt: 'Photo 13' },
  { id: 14, name: 'GPTempDownload(13)',   alt: 'Photo 14' },
  { id: 15, name: 'GPTempDownload(14)',   alt: 'Photo 15' },
  { id: 16, name: 'GPTempDownload(15)',   alt: 'Photo 16' },
];

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState<Tab>('photos');
  const [selectedVideoCategory, setSelectedVideoCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);
  const thumbStripRef = useRef<HTMLDivElement>(null);

  const lightboxPhoto = lightboxIndex !== null ? photos[lightboxIndex] : null;

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + photos.length) % photos.length : null));
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % photos.length : null));
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, goPrev, goNext, closeLightbox]);

  useEffect(() => {
    if (lightboxIndex === null || !thumbStripRef.current) return;
    const strip = thumbStripRef.current;
    const activeThumb = strip.children[lightboxIndex] as HTMLElement;
    if (activeThumb) {
      activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [lightboxIndex]);

  const filteredVideos =
    selectedVideoCategory === 'All'
      ? videos
      : videos.filter((v) => v.category === selectedVideoCategory);

  return (
    <div className="bg-[#F0E8DA] min-h-screen">
      {/* Header */}
      <div className="py-20 px-6 grid-bg">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-5xl md:text-7xl font-serif font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Portfolio
          </motion.h2>
          <motion.p
            className="text-base text-neutral-600 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Photos / Videos (coming soon)
          </motion.p>
        </div>
      </div>

      {/* Tab Navigation — hidden; videos preserved in code but not shown */}
      <div className="hidden">
        {(['photos', 'videos'] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-8 py-5 text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-200 ${
              activeTab === tab
                ? 'text-neutral-900'
                : 'text-neutral-400 hover:text-neutral-700'
            }`}
          >
            {tab === 'photos' ? 'PHOTOS' : 'VIDEOS'}
            {activeTab === tab && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D94F30]"
              />
            )}
          </button>
        ))}
      </div>

      {/* ── PHOTOS TAB ── always shown; videos tab hidden but code preserved below */}
      <AnimatePresence mode="wait">
        {(activeTab === 'photos' || activeTab !== 'videos') && (
          <motion.section
            key="photos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="py-12 px-6"
          >
            <div className="container mx-auto max-w-7xl">
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
                {photos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    className="break-inside-avoid mb-4 group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative overflow-hidden bg-neutral-200">
                      <picture>
                        <source srcSet={thumbAvif(photo.name)} type="image/avif" />
                        <source srcSet={thumbWebp(photo.name)} type="image/webp" />
                        <img
                          src={thumbWebp(photo.name)}
                          alt={photo.alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </picture>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-neutral-400 tracking-widest text-center mt-8 uppercase">
                {photos.length} photos
              </p>
            </div>
          </motion.section>
        )}

        {/* ── VIDEOS TAB ── hidden from UI; re-enable by removing "false &&" */}
        {false && activeTab === 'videos' && (
          <motion.section
            key="videos"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="py-12 px-6"
          >
            <div className="container mx-auto max-w-7xl">
              <div className="flex flex-wrap gap-3 mb-10">
                {videoCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedVideoCategory(cat)}
                    className={`px-5 py-1.5 text-xs font-medium tracking-[0.15em] uppercase border transition-colors duration-200 ${
                      selectedVideoCategory === cat
                        ? 'bg-neutral-900 border-neutral-900 text-white'
                        : 'bg-transparent border-neutral-400 text-neutral-600 hover:border-neutral-700 hover:text-neutral-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence>
                  {filteredVideos.map((video, index) => (
                    <motion.div
                      key={video.id}
                      className="group cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => setActiveVideo(video)}
                    >
                      <div className="relative aspect-video overflow-hidden bg-neutral-800 mb-3">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-200">
                            <svg className="w-5 h-5 text-neutral-900 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-0.5 font-mono">
                          {video.duration}
                        </div>
                      </div>
                      <p className="text-xs tracking-[0.15em] uppercase text-[#D94F30] mb-1">{video.category}</p>
                      <h3 className="text-sm font-medium text-neutral-900 leading-snug group-hover:text-neutral-600 transition-colors duration-200">
                        {video.title}
                      </h3>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <p className="text-xs text-neutral-400 tracking-widest text-center mt-8 uppercase">
                {filteredVideos.length} videos
              </p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Photo Lightbox */}
      <AnimatePresence>
        {lightboxPhoto && lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              onClick={closeLightbox}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="absolute top-5 left-5 z-10 text-white/60 text-xs tracking-widest font-mono">
              {lightboxIndex + 1} / {photos.length}
            </div>

            <div className="flex-1 flex items-center justify-center relative px-16" onClick={closeLightbox}>
              <button
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <picture>
                    <source srcSet={fullAvif(lightboxPhoto.name)} type="image/avif" />
                    <source srcSet={fullWebp(lightboxPhoto.name)} type="image/webp" />
                    <img
                      src={fullWebp(lightboxPhoto.name)}
                      alt={lightboxPhoto.alt}
                      className="max-h-[75vh] max-w-[85vw] object-contain"
                    />
                  </picture>
                </motion.div>
              </AnimatePresence>

              <button
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center text-white transition-colors duration-200"
                onClick={(e) => { e.stopPropagation(); goNext(); }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="flex-shrink-0 py-3 px-4" onClick={(e) => e.stopPropagation()}>
              <div
                ref={thumbStripRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide justify-center"
              >
                {photos.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => setLightboxIndex(idx)}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden transition-all duration-200 ${
                      idx === lightboxIndex
                        ? 'ring-2 ring-white opacity-100'
                        : 'opacity-40 hover:opacity-70'
                    }`}
                  >
                    <picture>
                      <source srcSet={thumbAvif(photo.name)} type="image/avif" />
                      <source srcSet={thumbWebp(photo.name)} type="image/webp" />
                      <img
                        src={thumbWebp(photo.name)}
                        alt={photo.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </picture>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              onClick={() => setActiveVideo(null)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <motion.div
              className="w-full max-w-4xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs tracking-[0.2em] uppercase text-[#D94F30] mb-1">{activeVideo.category}</p>
                <h3 className="text-lg font-serif text-white">{activeVideo.title}</h3>
                {activeVideo.description && (
                  <p className="text-sm text-neutral-400 mt-2 max-w-xl mx-auto">{activeVideo.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioSection;
