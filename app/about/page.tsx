'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const skills = [
    'Portrait Photography',
    'Wedding Photography',
    'Event Coverage',
    'Commercial Photography',
    'Photo Editing',
    'Lighting Design',
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Bride',
      text: 'The photos from our wedding day are absolutely stunning. Every moment was captured beautifully, and we couldn\'t be happier with the results.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Business Owner',
      text: 'Professional, creative, and incredibly talented. The commercial shots for our brand campaign exceeded all expectations.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Model',
      text: 'Working with such a skilled photographer made the entire shoot effortless. The portfolio shots are exactly what I needed.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900 dark:text-white">
                About Me
              </h1>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                Hello! I&apos;m a professional photographer with a passion for capturing life&apos;s most
                meaningful moments. For over 10 years, I&apos;ve been helping individuals, couples, and
                businesses tell their stories through compelling visual imagery.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                My journey into photography began with a simple camera and an eye for beauty in
                everyday moments. Today, I combine technical expertise with artistic vision to
                create photographs that not only look beautiful but also evoke emotion and preserve
                memories for generations to come.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Based in the heart of the city, I work with clients locally and internationally,
                bringing the same level of dedication and creativity to every project.
              </p>
            </motion.div>

            <motion.div
              className="relative h-[500px] rounded-2xl overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&h=1000&fit=crop"
                alt="Photographer at work"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-white dark:bg-neutral-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-neutral-900 dark:text-white">
              Experience & Skills
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Years of dedication to the craft
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { number: '10+', label: 'Years Experience' },
              { number: '500+', label: 'Happy Clients' },
              { number: '2000+', label: 'Projects Completed' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-8 bg-neutral-50 dark:bg-neutral-800 rounded-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-neutral-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-neutral-900 dark:text-white font-medium">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-neutral-900 dark:text-white">
              Client Testimonials
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              What people say about working with me
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="p-8 bg-white dark:bg-neutral-900 rounded-xl shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 italic leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-neutral-900 dark:bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-neutral-300 mb-8">
              Let&apos;s discuss your photography needs and create something memorable.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-neutral-900 font-semibold rounded-lg hover:bg-neutral-100 transition-colors duration-200"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
