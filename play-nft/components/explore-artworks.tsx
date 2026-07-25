'use client';

import { motion } from 'framer-motion';

const categories = [
  {
    id: 1,
    name: 'Abstract',
    count: '45 items',
    span: 'col-span-1 row-span-1',
    image: '/category-abstract.png',
  },
  {
    id: 2,
    name: '3D Art',
    count: '45 items',
    span: 'col-span-1 row-span-1',
    image: '/category-3d.png',
  },
  {
    id: 3,
    name: 'Modern Art',
    count: '45 items',
    span: 'sm:col-span-2 lg:col-span-2 row-span-2',
    image: '/category-modern.png',
  },
  {
    id: 4,
    name: 'Gaming',
    count: '45 items',
    span: 'col-span-1 row-span-1',
    image: '/category-gaming.png',
  },
  {
    id: 5,
    name: 'Graffiti',
    count: '45 items',
    span: 'col-span-1 row-span-1',
    image: '/category-graffiti.png',
  },
  {
    id: 6,
    name: 'Watercolor',
    count: '45 items',
    span: 'col-span-1 row-span-1',
    image: '/category-abstract.png',
  },
  {
    id: 7,
    name: 'Photography',
    count: '45 items',
    span: 'col-span-1 row-span-1',
    image: '/category-photography.png',
  },
  {
    id: 8,
    name: 'Music NFTs',
    count: '45 items',
    span: 'sm:col-span-2 lg:col-span-2 row-span-2',
    image: '/category-gaming.png',
  },
];

export default function ExploreArtworks() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Explore Artworks
          </h2>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[200px] sm:auto-rows-[250px]"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer glass-effect border border-white/10 hover:border-purple-500/50 transition-all duration-300 ${category.span}`}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">{category.count}</p>
              </div>

              {/* View Button - appears on hover */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-6 right-6 px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm"
              >
                View
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
