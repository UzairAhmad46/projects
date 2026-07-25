'use client';

import { motion } from 'framer-motion';

const sellers = [
  { name: 'Leighton Kramer', sales: '278.7 ETH', avatar: '/avatar-1.png' },
  { name: 'Haylé Arcand', sales: '345.6 ETH', avatar: '/avatar-2.png' },
  { name: 'Rowen Higgins', sales: '322.7 ETH', avatar: '/avatar-3.png' },
  { name: 'Seige Fuentes', sales: '343.7 ETH', avatar: '/avatar-4.png' },
  { name: 'Sophia Malone', sales: '250.8 ETH', avatar: '/avatar-5.png' },
  { name: 'Jeremy Bunch', sales: '261.3 ETH', avatar: '/avatar-1.png' },
  { name: 'Amelio Griffith', sales: '334.1 ETH', avatar: '/avatar-2.png' },
  { name: 'Isabelle Hart', sales: '283.1 ETH', avatar: '/avatar-3.png' },
  { name: 'Diego Bentley', sales: '302.7 ETH', avatar: '/avatar-4.png' },
  { name: 'Daley Anderson', sales: '256.4 ETH', avatar: '/avatar-5.png' },
];

export default function TopSellers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Top Sellers
          </h2>
        </motion.div>

        {/* Sellers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {sellers.map((seller, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, translateY: -8 }}
              className="group cursor-pointer glass-effect p-4 sm:p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Rank */}
              <div className="text-5xl sm:text-6xl font-bold text-white/10 mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Avatar */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden mb-4 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300 border-2 border-purple-500/30">
                <img
                  src={seller.avatar}
                  alt={seller.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                {seller.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                <span className="font-semibold text-purple-400">{seller.sales}</span> Sold
              </p>

              {/* Follow Button */}
              <button className="mt-4 w-full px-4 py-2 border border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/20 transition-all duration-300 text-xs sm:text-sm group-hover:shadow-lg group-hover:shadow-purple-500/50">
                Follow
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
