"use client"

import { motion } from "framer-motion"

// Company logos - White versions
const logos = [
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/ffffff" },
  { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/ffffff" },
  { name: "Airbnb", logo: "https://cdn.simpleicons.org/airbnb/ffffff" },
  { name: "Uber", logo: "https://cdn.simpleicons.org/uber/ffffff" },
  { name: "Netflix", logo: "https://cdn.simpleicons.org/netflix/ffffff" },
  { name: "Slack", logo: "https://cdn.simpleicons.org/slack/ffffff" },
  { name: "Dropbox", logo: "https://cdn.simpleicons.org/dropbox/ffffff" },
];

export default function TrustedCompaniesSection() {
  return (
    <motion.div
      className="mt-12 md:mt-20 pt-8 md:pt-12 border-t border-neutral-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <p className="text-center text-neutral-500 text-xs md:text-sm mb-6 md:mb-10 px-4">
        TRUSTED BY INNOVATIVE COMPANIES
      </p>

      <div className="relative w-full overflow-hidden">
        {/* First marquee row */}
        <div className="relative w-full overflow-hidden py-4 md:py-6 pointer-events-none">
          <motion.div
            className="flex space-x-4 md:space-x-8 lg:space-x-16 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              }
            }}
          >
            {/* Duplicated logos for seamless looping */}
            {[...logos, ...logos].map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="h-12 w-24 md:h-16 md:w-32 lg:h-20 lg:w-48 xl:w-64 bg-neutral-800/30 rounded-md flex items-center justify-center border border-neutral-800/50 overflow-hidden flex-shrink-0"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 w-auto md:h-12 md:w-auto lg:h-16 object-contain max-w-full max-h-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second marquee row (opposite direction) */}
        <div className="relative w-full overflow-hidden py-4 md:py-6 pointer-events-none">
          <motion.div
            className="flex space-x-4 md:space-x-8 lg:space-x-16 whitespace-nowrap"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              }
            }}
          >
            {/* Duplicated logos for seamless looping */}
            {[...logos.reverse(), ...logos.reverse()].map((company, i) => (
              <div
                key={`${company.name}-rev-${i}`}
                className="h-12 w-24 md:h-16 md:w-32 lg:h-20 lg:w-48 xl:w-64 bg-neutral-800/30 rounded-md flex items-center justify-center border border-neutral-800/50 overflow-hidden flex-shrink-0"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 w-auto md:h-12 md:w-auto lg:h-16 object-contain max-w-full max-h-full"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for fade effect */}
        <div className="absolute pointer-events-none inset-y-0 left-0 w-8 md:w-12 lg:w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute pointer-events-none inset-y-0 right-0 w-8 md:w-12 lg:w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
      </div>
    </motion.div>
  )
}
