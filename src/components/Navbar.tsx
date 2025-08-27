'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';

type NavbarProps = {
  className?: string;
};

// Define proper type for Lottie animation data
type LottieAnimationData = {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: unknown[];
  layers: unknown[];
  [key: string]: unknown;
};

// Client-only Lottie
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Navbar({ className }: NavbarProps) {
  const [wavesAnim, setWavesAnim] = useState<LottieAnimationData | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch('/animations/Abstract%20Waves.json')
      .then((r) => r.json())
      .then((data) => {
        if (mounted) setWavesAnim(data);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <header
      role="banner"
      className={[
        'sticky top-0 z-40 border-b-4 border-brand-yellow',
        'bg-white dark:bg-brand-navy backdrop-blur-sm',
        className || '',
      ].join(' ')}
    >
      <div className="relative mx-auto max-w-screen-xl h-36 md:h-44 px-4 md:px-6 flex items-center overflow-hidden">
        {/* full-bleed lottie overlay */}
        {wavesAnim && (
          <div className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-30" aria-hidden>
            <Lottie animationData={wavesAnim} loop autoplay style={{ width: '100%', height: '100%' }} />
          </div>
        )}

        {/* brand */}
        <div className="relative z-10 flex items-center gap-4 md:gap-6">
          <Image
            src="/images/quazaredu_logo.webp"
            alt="Quazar logo"
            width={64}
            height={64}
            priority
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          />
          <span
            className={[
              'font-serif font-extrabold tracking-wide leading-none select-none',
              'text-[50px] md:text-[75px] lg:text-[100px]',
              'text-black dark:text-white',
            ].join(' ')}
          >
            quazar
          </span>
        </div>

        <div className="flex-1" />

        {/* actions (exact spacing kept) */}
        <nav className="relative z-10 flex items-center" style={{ gap: '20px', marginRight: '100px' }}>
          <Link href="/" className="no-underline text-inherit">
            <span className="font-bold text-2xl md:text-3xl text-brand-navy visited:text-brand-navy dark:text-white dark:visited:text-white">
              Home
            </span>
          </Link>

          <Link href="/browse-topic" className="no-underline text-inherit">
            <span className="font-bold text-2xl md:text-3xl text-brand-navy visited:text-brand-navy dark:text-white dark:visited:text-white">
              Browse Topic
            </span>
          </Link>

          <Link href="/launch-atomic-structure" className="no-underline text-inherit">
            <span className="font-bold text-2xl md:text-3xl text-brand-navy visited:text-brand-navy dark:text-white dark:visited:text-white">
              Launch Atomic
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}