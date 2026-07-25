import { Analytics } from '@vercel/analytics/next';

import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PlayNFT - NFT Marketplace | Discover, Collect & Sell',
  description:
    "The world's largest digital marketplace for crypto collections and non-fungible tokens (NFTs). Discover, collect, and sell dope art and NFTs.",
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#0a0e27' }],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
