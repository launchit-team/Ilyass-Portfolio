'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const details = [
    { label: 'Based in', value: 'Morocco' },
    { label: 'Focus', value: 'Film & Photography' },
    { label: 'Currently', value: 'Surf, shoot, repeat' },
  ];

  return (
    <>
      {/* Intro */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900 dark:text-white">
                I see what others walk past.
              </h2>
              <p className="text-sm font-medium tracking-[0.15em] text-[#D94F30] uppercase mb-6">
                Ilyas Battah — visual storyteller based in Morocco
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I shoot what&apos;s already there. The ocean, the land, and the moments in between.
                No setup. No staging. Just perspective.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                {details.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="border-b border-neutral-200 dark:border-neutral-800 pb-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 mb-1">
                      {item.label}
                    </p>
                    <p className="text-xl font-serif text-neutral-900 dark:text-white">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
