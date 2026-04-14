'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="relative">
        <div className="container mx-auto px-6 lg:px-12 pt-12 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Section - Monogram */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block px-5 py-3 border-2 border-[#D94F30] mb-6">
                  <span className="text-3xl font-bold tracking-wider">IB</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
                  Ilyas Battah is a filmmaker based in Morocco.
                </p>
              </motion.div>
            </div>

            {/* Center Section - Nav Links */}
            <div className="lg:col-span-4 lg:flex lg:items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col gap-3"
              >
                <a href="#about" className="text-xs font-medium tracking-[0.15em] hover:text-neutral-300 transition-colors duration-200">ABOUT</a>
                <a href="#portfolio" className="text-xs font-medium tracking-[0.15em] hover:text-neutral-300 transition-colors duration-200">PORTFOLIO</a>
                <a href="#contact" className="text-xs font-medium tracking-[0.15em] hover:text-neutral-300 transition-colors duration-200">CONTACT</a>
              </motion.div>
            </div>

            {/* Right Section - Instagram */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:text-right"
              >
                <a
                  href="https://instagram.com/ilyas.povv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium tracking-[0.15em] hover:text-neutral-300 transition-colors duration-200"
                >
                  INSTAGRAM
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <motion.div
        className="border-t border-neutral-800 py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="text-neutral-500 text-xs text-center tracking-wider">
          © Ilyas Battah {currentYear}
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
