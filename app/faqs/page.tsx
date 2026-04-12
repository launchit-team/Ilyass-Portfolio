'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export default function FAQsPage() {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'What types of photography services do you offer?',
      answer:
        'I specialize in portrait photography, wedding coverage, event photography, commercial shoots, and landscape photography. Each service is tailored to meet your specific needs and vision. Whether you need professional headshots, memorable wedding photos, or stunning commercial imagery, I can help bring your vision to life.',
    },
    {
      id: 2,
      question: 'How much do your services cost?',
      answer:
        'Pricing varies depending on the type of shoot, duration, location, and specific requirements. Portrait sessions typically start at $300, while wedding packages begin at $2,500. I offer customized packages to fit different budgets and needs. Contact me for a detailed quote based on your specific requirements.',
    },
    {
      id: 3,
      question: 'How far in advance should I book?',
      answer:
        'For weddings and major events, I recommend booking at least 6-12 months in advance to secure your date. For portrait sessions and smaller shoots, 2-4 weeks notice is usually sufficient. However, I sometimes have last-minute availability, so don\'t hesitate to reach out even if your event is coming up soon.',
    },
    {
      id: 4,
      question: 'How long does it take to receive the final photos?',
      answer:
        'The turnaround time depends on the type of shoot. Portrait sessions are typically delivered within 1-2 weeks. Wedding photos are usually ready within 4-6 weeks. All photos are professionally edited and color-corrected before delivery. Rush delivery is available for an additional fee if you need your photos sooner.',
    },
    {
      id: 5,
      question: 'How many photos will I receive?',
      answer:
        'The number of photos varies by package. Portrait sessions typically include 30-50 edited images. Wedding packages can include 300-800+ photos depending on coverage time and package selected. I deliver all the best shots from your session, fully edited and high-resolution, via an online gallery for easy download and sharing.',
    },
    {
      id: 6,
      question: 'Do you travel for shoots?',
      answer:
        'Yes! I love traveling for photography projects. Local shoots within 50 miles are included in the base price. For destinations beyond that, travel fees apply based on distance and duration. I\'ve photographed events across the country and internationally. Let\'s discuss your location and I\'ll provide a custom quote.',
    },
    {
      id: 7,
      question: 'What should I wear for my photo session?',
      answer:
        'I provide a detailed style guide with each booking to help you prepare. Generally, wear something you feel confident and comfortable in. Solid colors and simple patterns photograph well. Avoid busy patterns or logos. For couples and families, coordinating (not matching) outfits create a cohesive look. I\'m always happy to provide specific recommendations based on your session type and location.',
    },
    {
      id: 8,
      question: 'Do you offer prints and albums?',
      answer:
        'Yes! I offer professional prints, canvas wraps, framed pieces, and custom-designed albums. All prints are produced using professional labs with archival-quality materials to ensure your photos last for generations. You can order these items directly through your online gallery, or I can help you create a custom photo album or wall gallery.',
    },
    {
      id: 9,
      question: 'What is your cancellation and rescheduling policy?',
      answer:
        'I understand that plans change. You can reschedule your session up to 48 hours before the scheduled time without penalty. Cancellations made less than 48 hours before the session will forfeit the deposit. For weddings and large events, please refer to your contract for specific terms. I always work with clients to find solutions when unexpected situations arise.',
    },
    {
      id: 10,
      question: 'Do you provide the raw unedited photos?',
      answer:
        'I typically deliver professionally edited photos as part of my service, as editing is an integral part of my artistic process. Raw files are generally not included, but they can be purchased separately for an additional fee. All delivered photos are carefully culled, edited, and color-corrected to meet professional standards.',
    },
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-serif font-bold mb-6 text-neutral-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-lg text-neutral-600 dark:text-neutral-400"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Everything you need to know about my photography services
          </motion.p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 px-4 bg-white dark:bg-neutral-900">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-200"
                  onClick={() => toggleAccordion(faq.id)}
                >
                  <span className="text-lg font-semibold text-neutral-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.svg
                    className="w-6 h-6 text-neutral-600 dark:text-neutral-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-neutral-900 dark:text-white">
              Still Have Questions?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              Don't hesitate to reach out. I'm here to help and would love to hear about your project!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors duration-200"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
