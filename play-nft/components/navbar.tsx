'use client';

import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Explore', href: '#' },
    { label: 'Marketplace', href: '#' },
    { label: 'Artists', href: '#' },
    { label: 'News', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base">P</span>
            </div>
            <div>
              <div className="text-white font-bold text-lg sm:text-xl">PLAY</div>
              <div className="text-cyan-400 text-xs sm:text-sm font-semibold -mt-1">NFT</div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right Items */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-white placeholder-gray-500 text-sm outline-none w-32"
              />
            </div>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-sm">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm"
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm">
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
