'use client';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import PopularNFTs from '@/components/popular-nfts';
import TopSellers from '@/components/top-sellers';
import ExploreArtworks from '@/components/explore-artworks';
import CTA from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <PopularNFTs />
      <TopSellers />
      <ExploreArtworks />
      <CTA />
      <Footer />
    </main>
  );
}
