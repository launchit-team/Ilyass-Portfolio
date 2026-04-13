'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutSection from '@/components/sections/AboutSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* ── HERO ── */}
      <section id="home" className="min-h-screen bg-[#F0E8DA] grid-bg pt-20 relative overflow-hidden">
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
              <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#D94F30] mb-4">
                Filmmaker &amp; Visual Storyteller
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-neutral-900 mb-6 leading-[1.1]">
                Ilyas Battah
              </h1>
              <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                Visual storyteller based in Morocco.
              </p>
              <a
                href="#about"
                className="inline-block text-xs font-medium tracking-[0.2em] uppercase border-b-2 border-neutral-900 pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors duration-200"
              >
                MORE ABOUT ILYAS
              </a>
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
                      alt="Ilyas Battah"
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

      {/* ── ABOUT ── */}
      <section id="about" className="scroll-mt-20">
        <AboutSection />
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="scroll-mt-20">
        <PortfolioSection />
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="scroll-mt-20">
        <ContactSection />
      </section>
    </>
  );
}
