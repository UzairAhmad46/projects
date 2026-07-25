'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const nfts = [
  {
    id: 1,
    name: 'Cyber',
    artist: 'Crypto Art Studio',
    price: '45.5',
    image: '/nft-1.png',
  },
  {
    id: 2,
    name: 'Vintage',
    artist: 'Digital Dreams',
    price: '32.2',
    image: '/nft-2.png',
  },
  {
    id: 3,
    name: 'Digital Decade',
    artist: 'Anthony Gonzalez',
    price: '2.41 ETH',
    image: '/nft-3.png',
  },
  {
    id: 4,
    name: 'Winter Gems',
    artist: 'Frost Collective',
    price: '15.8',
    image: '/nft-4.png',
  },
  {
    id: 5,
    name: 'Neon Valley',
    artist: 'Electric Visions',
    price: '5.7',
    image: '/nft-5.png',
  },
];

export default function PopularNFTs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 gradient-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Popular this week
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Discover the most sought-after digital artworks trending this week on our platform
          </p>
        </motion.div>

        {/* NFT Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {nfts.map((nft, index) => (
            <motion.div
              key={nft.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group cursor-pointer transition-all duration-300 ${
                index === 2 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl glass-effect group-hover:border-purple-500/50 transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Heart Button */}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/20">
                    <Heart className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {nft.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{nft.artist}</p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Current Bid</p>
                      <p className="text-lg sm:text-xl font-bold text-white">
                        {nft.price}
                      </p>
                    </div>
                    <button className="px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-xs sm:text-sm">
                      Place Bid
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
