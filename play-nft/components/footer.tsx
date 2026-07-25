'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SocialIcon = ({ type }: { type: 'twitter' | 'instagram' | 'mail' | 'discord' }) => {
  if (type === 'twitter') {
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
      </svg>
    );
  }
  if (type === 'instagram') {
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37Z" fill="black" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="black" />
      </svg>
    );
  }
  if (type === 'mail') {
    return (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const footerSections = [
    {
      title: 'Explore',
      links: ['Art', 'Photography', 'Music', 'NFT Gallery'],
    },
    {
      title: 'My Account',
      links: ['My Profile', 'My Collections', 'My Favorites', 'My Account Settings'],
    },
    {
      title: 'Resources',
      links: ['Help Center', 'Partners', 'Suggestions', 'Newsletter'],
    },
    {
      title: 'Company',
      links: ['About', 'Terms', 'Careers', 'Activity'],
    },
  ];

  const socialLinks = [
    { type: 'twitter' as const, href: '#' },
    { type: 'instagram' as const, href: '#' },
    { type: 'mail' as const, href: '#' },
    { type: 'discord' as const, href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-b from-transparent to-black/30 border-t border-white/10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-16 sm:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Logo Section */}
          <motion.div variants={itemVariants} className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">PLAY</div>
                <div className="text-cyan-400 text-xs font-semibold -mt-1">NFT</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              The world&apos;s largest digital marketplace for crypto collections and NFTs
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <SocialIcon type={social.type} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="text-white font-semibold mb-4 text-sm lg:text-base">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © 2024 PlayNFT. All rights reserved for crypto collections and NFT marketplace.
          </p>
          <div className="flex gap-4 text-xs sm:text-sm">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
