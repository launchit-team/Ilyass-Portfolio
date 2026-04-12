'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'YOUTUBE', href: '#' },
    { name: 'TIKTOK', href: '#' },
    { name: 'PATREON', href: '#' },
    { name: 'FACEBOOK', href: '#' },
    { name: 'INSTAGRAM', href: '#' },
    { name: 'TWITTER', href: '#' },
  ];

  const quickLinks = [
    { name: 'HOME', href: '/' },
    { name: 'SHOP', href: '#' },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'ABOUT', href: '/about' },
    { name: 'FAQS', href: '/faqs' },
    { name: 'SUBMIT IDEAS', href: '#' },
    { name: 'CONTACT', href: '/contact' },
    { name: 'GEAR GUIDE', href: '#' },
    { name: 'JOIN THE TEAM', href: '#' },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Top stripe with image overlap */}
      <div className="relative">
        <div className="container mx-auto px-6 lg:px-12 pt-12 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Section - Follow + Image */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-1">
                    Follow Johnny
                  </h3>
                  <div className="h-[2px] bg-[#D94F30] w-48 mb-8"></div>
                </div>

                {/* Image collage */}
                <div className="relative h-40 mb-8">
                  <div className="absolute left-0 top-0 w-40 h-32 overflow-hidden rounded shadow-lg transform -rotate-3 z-10">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=250&fit=crop"
                      alt="Johnny Harris"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute left-20 top-4 w-36 h-28 overflow-hidden rounded shadow-lg transform rotate-3 z-20">
                    <Image
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=250&fit=crop"
                      alt="Behind the scenes"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium tracking-[0.15em] hover:text-neutral-300 transition-colors duration-200"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Center Section - Quick Links */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="grid grid-cols-3 gap-x-6 gap-y-3 lg:pt-4">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-xs font-medium tracking-[0.15em] hover:text-neutral-300 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Section - Logo & About */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:text-right"
              >
                {/* Logo Box */}
                <div className="inline-block px-5 py-3 border-2 border-[#D94F30] mb-6">
                  <span className="text-3xl font-bold tracking-wider">JH</span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-sm lg:ml-auto">
                  Johnny Harris is a journalist based in Washington, DC. You can find his work on Vox, 
                  The New York Times, and his YouTube channel.
                </p>
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
          © Johnny Harris {currentYear}
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
