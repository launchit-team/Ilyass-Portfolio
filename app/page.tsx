'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HomePage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-[#F0E8DA] grid-bg pt-20 relative overflow-hidden">
        {/* Decorative bracket marks */}
        <div className="absolute top-32 left-[15%] text-neutral-300 text-2xl font-light select-none hidden lg:block">&#x2E22;</div>
        <div className="absolute top-[40%] left-[8%] text-neutral-300 text-2xl font-light select-none hidden lg:block">&#x2E23;</div>
        <div className="absolute top-[60%] right-[10%] text-neutral-300 text-3xl font-light select-none hidden lg:block">⌐</div>
        <div className="absolute bottom-[20%] left-[45%] text-neutral-300 text-2xl font-light select-none hidden lg:block">┐</div>
        <div className="absolute top-[25%] right-[25%] text-neutral-300 text-2xl font-light select-none hidden lg:block">┘</div>

        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-10 leading-[1.15]">
                Journalist based in Washington DC.
              </h1>
              <Link
                href="/about"
                className="inline-block text-xs font-medium tracking-[0.2em] uppercase border-b-2 border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors duration-200"
              >
                MORE ABOUT JOHNNY
              </Link>
            </motion.div>

            {/* Right Content - Polaroid Style Image */}
            <motion.div
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative max-w-md mx-auto lg:mx-0 lg:ml-auto">
                {/* Dark background frame */}
                <div className="absolute top-3 left-3 w-full h-full bg-neutral-800 transform rotate-2 z-0"></div>
                {/* Main image with white border (polaroid) */}
                <div className="relative bg-white p-3 shadow-2xl transform -rotate-1 z-10">
                  <div className="relative aspect-[4/5] bg-neutral-200 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=1000&fit=crop"
                      alt="Journalist at work"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Decorative corner bracket */}
                <div className="absolute -top-4 -right-6 text-neutral-400 text-4xl font-light select-none hidden lg:block">┐</div>
                <div className="absolute -bottom-4 -right-4 text-neutral-400 text-4xl font-light select-none hidden lg:block">┘</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Presets & LUTs Section */}
      <section className="py-20 px-6 bg-[#8FA9A0] relative overflow-hidden">
        {/* Decorative white marks */}
        <div className="absolute top-12 right-[15%] text-white text-3xl select-none hidden lg:block opacity-80">✧</div>
        <div className="absolute bottom-16 right-[8%] text-white text-2xl select-none hidden lg:block opacity-60 rotate-12">〵</div>
        <div className="absolute top-[60%] right-[12%] text-white text-xl select-none hidden lg:block opacity-70">✦</div>

        <div className="container mx-auto max-w-7xl lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Text + Arrow */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-8"
            >
              <div>
                <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                  <span className="underline decoration-[#D94F30] decoration-[3px] underline-offset-4">I made custom</span>
                  <br />
                  <span className="underline decoration-[#D94F30] decoration-[3px] underline-offset-4">presets and LUTs.</span>
                </h2>
              </div>
              {/* Arrow */}
              <div className="hidden md:block flex-shrink-0">
                <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="text-white">
                  <path d="M0 20H50M50 20L38 8M50 20L38 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>

            {/* Right - Stacked product cards */}
            <motion.div
              className="relative h-[400px] md:h-[450px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Card 1 - LUT Installation Instructions (back) */}
              <div className="absolute top-0 right-0 md:right-8 w-48 md:w-56 bg-white rounded-lg shadow-xl p-4 transform rotate-6 z-10">
                <p className="text-sm font-bold text-center mb-2">LUT Installation Instructions</p>
                <div className="bg-neutral-100 h-32 rounded flex items-center justify-center">
                  <p className="text-xs text-neutral-400">ADOBE PREMIERE CC</p>
                </div>
              </div>

              {/* Card 2 - Preset & LUT Pack (middle) */}
              <div className="absolute top-16 left-4 md:left-12 w-52 md:w-64 shadow-xl transform -rotate-6 z-20 overflow-hidden rounded-lg">
                <div className="relative aspect-[3/4] bg-neutral-200">
                  <Image
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop"
                    alt="Preset Pack - Mountains"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-xs font-bold tracking-wider uppercase">JOHNNY & IZ</p>
                    <p className="text-white text-sm font-bold">PRESET & LUT PACK</p>
                  </div>
                </div>
              </div>

              {/* Card 3 - Rock climbing (front right) */}
              <div className="absolute bottom-4 right-0 md:right-4 w-48 md:w-56 shadow-xl transform rotate-12 z-30 overflow-hidden rounded-lg">
                <div className="relative aspect-[3/4] bg-neutral-200">
                  <Image
                    src="https://images.unsplash.com/photo-1522163182402-834f871fd851?w=600&h=800&fit=crop"
                    alt="Rock climbing adventure"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join The Team Section */}
      <section className="py-16 px-6 bg-[#E8735A]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-10">
              Join The Team
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-20">
              <a
                href="#"
                className="text-xs font-medium tracking-[0.2em] uppercase text-white border-b-2 border-white pb-1 hover:opacity-80 transition-opacity duration-200"
              >
                RESEARCHER / WRITER
              </a>
              <a
                href="#"
                className="text-xs font-medium tracking-[0.2em] uppercase text-white border-b-2 border-white pb-1 hover:opacity-80 transition-opacity duration-200"
              >
                EDITOR / ANIMATOR
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Have an Idea for a Story Section */}
      <section className="relative py-32 px-6 bg-neutral-900 text-white overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            {/* Large decorative question mark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[14rem] md:text-[20rem] font-serif font-bold text-[#BFA248] opacity-40 leading-none select-none">
                ?
              </span>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Have an idea for a story?
              </h2>
              <p className="text-base md:text-lg text-neutral-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                We&apos;re eager to hear about the stories you would like to see covered. Please include your story submissions using the form below and we will reach out if it seems like a good fit.
              </p>
              <Link
                href="/contact"
                className="inline-block text-xs font-medium tracking-[0.2em] uppercase border-b-2 border-[#D94F30] text-white pb-1 hover:opacity-80 transition-opacity duration-200"
              >
                SUBMIT IDEAS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-[#F0E8DA] grid-bg">
        <div className="container mx-auto max-w-7xl lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Stacked newsletter/magazine images */}
            <motion.div
              className="relative h-[350px] md:h-[400px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              {/* Card 1 - May Playlist (back) */}
              <div className="absolute top-0 left-4 w-60 md:w-72 bg-pink-200 rounded-lg shadow-xl p-5 transform -rotate-3 z-10">
                <p className="text-sm font-bold">🎵 May Playlist 📼</p>
                <div className="mt-3 w-16 h-16 bg-yellow-300 rounded-full"></div>
              </div>

              {/* Card 2 - Good for the soul (middle) */}
              <div className="absolute top-20 left-20 md:left-28 w-56 md:w-64 bg-[#E8735A] rounded-lg shadow-xl p-5 transform rotate-3 z-20">
                <h3 className="text-2xl font-script text-white font-bold italic">Good for the soul</h3>
                <p className="text-white/80 text-xs mt-2 leading-relaxed">
                  Each month we explore the realm of mental health and an amplification of minority voices.
                </p>
              </div>

              {/* Card 3 - Johnny & Iz (front) */}
              <div className="absolute bottom-0 left-8 w-56 md:w-64 bg-teal-700 rounded-lg shadow-xl p-5 transform -rotate-6 z-30">
                <h3 className="text-xl font-serif text-white font-bold">Johnny & Iz</h3>
                <p className="text-white/70 text-xs mt-2">Monthly recommendations and insights</p>
              </div>
            </motion.div>

            {/* Right - Handwriting text + arrow */}
            <motion.div
              className="flex items-center gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Arrow pointing left */}
              <div className="hidden md:block flex-shrink-0">
                <svg width="50" height="30" viewBox="0 0 50 30" fill="none" className="text-neutral-700">
                  <path d="M50 15H5M5 15L17 3M5 15L17 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-script text-neutral-800 italic leading-snug">
                We have a monthly, non-spammy newsletter with our recommendations and a playlist.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credits Bar */}
      <section className="py-6 px-6 bg-[#F0E8DA] border-t border-neutral-300">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-20">
            <a
              href="#"
              className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-700 border-b border-neutral-500 pb-1 hover:text-neutral-900 transition-colors duration-200"
            >
              VOX BORDERS SERIES
            </a>
            <a
              href="#"
              className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-700 border-b border-neutral-500 pb-1 hover:text-neutral-900 transition-colors duration-200"
            >
              THE NEW YORK TIMES
            </a>
            <a
              href="#"
              className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-700 border-b border-neutral-500 pb-1 hover:text-neutral-900 transition-colors duration-200"
            >
              JOHNNY&apos;S CHANNEL
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
