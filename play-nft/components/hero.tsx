'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white text-balance"
            >
              Discover, Collect <span className="gradient-text">and Sell</span>{' '}
              Dope Art and <span className="gradient-text">NFTs</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 max-w-md leading-relaxed"
            >
              The world&apos;s largest digital marketplace for crypto
              collections and non-fungible tokens (NFTs)
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                Discover
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 text-sm sm:text-base">
                Create
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 text-gray-300 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
                <span>▶</span>
                <span>Watch a video</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10"
            >
              {[
                { number: '271k +', label: 'Art works' },
                { number: '20k +', label: 'Auctions' },
                { number: '7k +', label: 'Artists' },
              ].map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Active Users */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 border-2 border-background"
                  />
                ))}
              </div>
              <div className="text-sm sm:text-base text-gray-300">
                <span className="font-semibold text-white">40k +</span> Active
                Users
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative h-full min-h-96 sm:min-h-full flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-md"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden glass-effect p-4">
                <Image
                  src="/nft-hero.png"
                  alt="Digital Decade NFT"
                  fill
                  sizes="(max-width: 640px) 100vw, 400px"
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>

              {/* Info Card Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 mx-4 mb-4 glass-effect rounded-xl p-4 space-y-2"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-400">Ending in</p>
                    <p className="text-lg font-bold text-white">1h 20m 30s</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Highest Bid</p>
                    <p className="text-lg font-bold text-white">32.4 ETH</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm">
                    Place a Bid
                  </button>
                  <button className="flex-1 px-3 py-2 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors text-sm">
                    Purchase
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-white/10"
        >
          <p className="text-gray-400 text-xs sm:text-sm font-semibold mb-6 sm:mb-8">
            TRUSTED BY LEADING CRYPTO PLATFORMS
          </p>
          <div className="flex flex-wrap gap-6 sm:gap-8 items-center justify-start opacity-60 hover:opacity-100 transition-opacity">
            {[
              'PayPal',
              'Coinbase',
              'Binance',
              'Revolut',
              'Exodus',
              'Bitfinex',
            ].map((logo) => (
              <div
                key={logo}
                className="text-gray-400 font-semibold text-sm sm:text-base"
              >
                {logo}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}