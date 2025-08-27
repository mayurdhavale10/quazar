'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/components/Navbar';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

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

export default function Home() {
  const [techAnim, setTechAnim] = useState<LottieAnimationData | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch('/animations/Technology.json')
      .then((r) => r.json())
      .then((data) => { if (mounted) setTechAnim(data); })
      .catch(() => {});
    return () => { mounted = false; };
  }, []);

  const BRAND_YELLOW = '#ffd700';
  const threeDShadow =
    '0 1px 0 #b38f00, 0 2px 0 #997c00, 0 3px 0 #806800, 0 4px 0 #665400, 0 5px 0 #4d4000, 0 6px 6px rgba(0,0,0,0.35)';

  return (
    <>
      <Navbar />

      {/* Normal space under sticky navbar */}
      <main className="pt-20 md:pt-24 px-6 md:px-10 mx-auto max-w-7xl">
        <section>
          {/* Massive increased column gap and vertical spacing */}
          <div
            className="grid items-start gap-20 md:gap-32 lg:gap-40"
            style={{
              gridTemplateColumns: '1fr clamp(520px, 42vw, 620px)',
              paddingTop: '8rem', // Additional padding specifically for this section
            }}
          >
            {/* LEFT: title + lottie + subheading */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-baseline gap-10 mb-12">
                  <h1
                    className="
                      font-serif tracking-tight leading-[1.05]
                      text-black dark:text-white
                      text-[52px] md:text-[80px] lg:text-[96px]
                      m-0
                    "
                  >
                    ATOMIC STRUCTURE
                  </h1>

                  {techAnim && (
                    <span
                      className="inline-flex items-center select-none"
                      style={{
                        fontSize: '4em',
                        lineHeight: 1,
                        transform: 'translateY(0.2em)',
                      }}
                      aria-hidden
                    >
                      <Lottie
                        animationData={techAnim}
                        loop
                        autoplay
                        style={{ width: '1em', height: '1em' }}
                      />
                    </span>
                  )}
                </div>
              </motion.div>

              <div className="max-w-2xl pl-8 md:pl-12 lg:pl-16">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.2 }}
                  className="text-2xl md:text-3xl font-extrabold mb-8 leading-relaxed"
                  style={{ 
                    background: `linear-gradient(135deg, ${BRAND_YELLOW}, #ffed4a, #f7e98e)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    fontWeight: '900',
                  }}
                >
                  At <span style={{ 
                    textShadow: threeDShadow,
                    background: 'none',
                    WebkitTextFillColor: BRAND_YELLOW,
                    fontWeight: '900',
                  }}>Quazar</span>, we empower your learning journey with:
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.35 }}
                  className="space-y-6"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: BRAND_YELLOW, boxShadow: `0 0 12px ${BRAND_YELLOW}` }}
                    />
                    <p className="text-lg md:text-xl font-bold leading-relaxed" style={{ 
                      background: `linear-gradient(135deg, ${BRAND_YELLOW}, #ffed4a)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: '800',
                    }}>
                      Best-in-Class <span style={{ 
                        textShadow: threeDShadow,
                        background: 'none',
                        WebkitTextFillColor: BRAND_YELLOW,
                        fontWeight: '900'
                      }}>Interactive Modules</span>
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: BRAND_YELLOW, boxShadow: `0 0 12px ${BRAND_YELLOW}` }}
                    />
                    <p className="text-lg md:text-xl font-bold leading-relaxed" style={{ 
                      background: `linear-gradient(135deg, ${BRAND_YELLOW}, #ffed4a)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: '800',
                    }}>
                      Comprehensive Study Guides
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: BRAND_YELLOW, boxShadow: `0 0 12px ${BRAND_YELLOW}` }}
                    />
                    <p className="text-lg md:text-xl font-bold leading-relaxed" style={{ 
                      background: `linear-gradient(135deg, ${BRAND_YELLOW}, #ffed4a)`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: '800',
                    }}>
                      In-Depth Explanations that focus on the underlying purpose and{' '}
                      <span style={{ 
                        textShadow: threeDShadow,
                        background: 'none',
                        WebkitTextFillColor: BRAND_YELLOW,
                        fontWeight: '900'
                      }}>&lsquo;the why&rsquo;</span> behind each concept.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* RIGHT: images without spacer */}
            <aside className="justify-self-start self-start">
              <div className="flex items-start gap-10 md:gap-12">
                {/* Main Universe */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="relative overflow-hidden rounded-2xl border-4 shadow-2xl flex-shrink-0"
                  style={{
                    width: '300px',
                    height: '320px',
                    borderColor: BRAND_YELLOW,
                    boxShadow: `0 20px 40px -10px rgba(0,0,0,0.35), 0 0 18px ${BRAND_YELLOW}40`,
                  }}
                >
                  <Image
                    src="/images/universe.webp"
                    alt="Universe"
                    fill
                    className="object-cover"
                    priority
                    sizes="(min-width:1024px) 300px, 45vw"
                  />
                </motion.div>

                {/* Right stack with increased spacing */}
                <div className="flex flex-col gap-10 md:gap-12">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="relative overflow-hidden rounded-xl border-4 shadow-xl"
                    style={{
                      width: '240px',
                      height: '150px',
                      borderColor: BRAND_YELLOW,
                      boxShadow: `0 14px 28px -12px rgba(0,0,0,0.3), 0 0 12px ${BRAND_YELLOW}30`,
                    }}
                  >
                    <Image
                      src="/images/universe2.webp"
                      alt="Universe 2"
                      fill
                      className="object-cover"
                      sizes="240px"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="relative overflow-hidden rounded-xl border-4 shadow-xl"
                    style={{
                      width: '240px',
                      height: '180px',
                      borderColor: BRAND_YELLOW,
                      boxShadow: `0 14px 28px -12px rgba(0,0,0,0.3), 0 0 12px ${BRAND_YELLOW}30`,
                    }}
                  >
                    <Image
                      src="/images/universe3.webp"
                      alt="Universe 3"
                      fill
                      className="object-cover"
                      sizes="240px"
                    />
                  </motion.div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Navigation Buttons Section */}
        <section className="mt-20 md:mt-32 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center items-center gap-8"
          >
            <Link href="/browse-topic" className="no-underline">
              <button
                className="
                  px-8 py-4 rounded-xl font-bold text-xl md:text-2xl
                  bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
                  text-black shadow-lg hover:shadow-xl
                  transform hover:scale-105 transition-all duration-300
                  border-4 border-transparent hover:border-yellow-300
                "
                style={{
                  boxShadow: `0 8px 25px rgba(255, 215, 0, 0.4), ${threeDShadow}`,
                }}
              >
                Browse Topic
              </button>
            </Link>

            <Link href="/launch-atomic-structure" className="no-underline">
              <button
                className="
                  px-8 py-4 rounded-xl font-bold text-xl md:text-2xl
                  bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600
                  text-black shadow-lg hover:shadow-xl
                  transform hover:scale-105 transition-all duration-300
                  border-4 border-transparent hover:border-yellow-300
                "
                style={{
                  boxShadow: `0 8px 25px rgba(255, 215, 0, 0.4), ${threeDShadow}`,
                }}
              >
                Launch Atomic
              </button>
            </Link>
          </motion.div>

          {/* Enhanced User Guide Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 max-w-5xl mx-auto px-6"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              style={{ 
                background: `linear-gradient(135deg, ${BRAND_YELLOW}, #ffed4a, #f7e98e)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '900',
                textShadow: '0 4px 8px rgba(0,0,0,0.3)',
              }}
            >
              User Guide
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-2xl p-10 border-4 backdrop-blur-sm" 
              style={{ 
                borderColor: BRAND_YELLOW, 
                boxShadow: `0 25px 50px -15px rgba(0,0,0,0.4), 0 0 30px ${BRAND_YELLOW}20`
              }}
            >
              <div className="grid md:grid-cols-2 gap-12">
                {/* Getting Started */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 rounded-2xl p-6 border-2 border-yellow-200/50 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                      <motion.div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold shadow-lg"
                        style={{ 
                          backgroundColor: BRAND_YELLOW,
                          boxShadow: `0 4px 15px ${BRAND_YELLOW}40, ${threeDShadow}`
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        1
                      </motion.div>
                      Getting Started
                    </h3>
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                        className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200" 
                          style={{ backgroundColor: BRAND_YELLOW, boxShadow: `0 0 8px ${BRAND_YELLOW}` }}
                        />
                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                          Click <strong className="text-yellow-600 dark:text-yellow-400">Browse Topic</strong> to explore all available science modules
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200" 
                          style={{ backgroundColor: BRAND_YELLOW, boxShadow: `0 0 8px ${BRAND_YELLOW}` }}
                        />
                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                          Choose <strong className="text-yellow-600 dark:text-yellow-400">Launch Atomic</strong> to dive into Atomic Structure
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200" 
                          style={{ backgroundColor: BRAND_YELLOW, boxShadow: `0 0 8px ${BRAND_YELLOW}` }}
                        />
                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                          Each module contains interactive simulations and animations
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Interactive Elements */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 rounded-2xl p-6 border-2 border-yellow-200/50 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                      <motion.div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold shadow-lg"
                        style={{ 
                          backgroundColor: BRAND_YELLOW,
                          boxShadow: `0 4px 15px ${BRAND_YELLOW}40, ${threeDShadow}`
                        }}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        2
                      </motion.div>
                      Interactive Elements
                    </h3>
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                        className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200" 
                          style={{ backgroundColor: BRAND_YELLOW, boxShadow: `0 0 8px ${BRAND_YELLOW}` }}
                        />
                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                          <strong className="text-yellow-600 dark:text-yellow-400">Click and drag</strong> to manipulate 3D models
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200" 
                          style={{ backgroundColor: BRAND_YELLOW, boxShadow: `0 0 8px ${BRAND_YELLOW}` }}
                        />
                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                          Use <strong className="text-yellow-600 dark:text-yellow-400">sliders</strong> to change properties and see real-time effects
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                        className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200" 
                          style={{ backgroundColor: BRAND_YELLOW, boxShadow: `0 0 8px ${BRAND_YELLOW}` }}
                        />
                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                          <strong className="text-yellow-600 dark:text-yellow-400">Hover</strong> over elements for detailed information
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Learning Tips */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 rounded-2xl p-6 border-2 border-yellow-200/50 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                      <motion.div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold shadow-lg"
                        style={{ 
                          backgroundColor: BRAND_YELLOW,
                          boxShadow: `0 4px 15px ${BRAND_YELLOW}40, ${threeDShadow}`
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        3
                      </motion.div>
                      Learning Tips
                    </h3>
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                        className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200" 
                          style={{ backgroundColor: BRAND_YELLOW, boxShadow: `0 0 8px ${BRAND_YELLOW}` }}
                        />
                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                          Start with the <strong className="text-yellow-600 dark:text-yellow-400">theory section</strong> before simulations
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                        className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200" 
                          style={{ backgroundColor: BRAND_YELLOW, boxShadow: `0 0 8px ${BRAND_YELLOW}` }}
                        />
                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                          Experiment with different settings to understand concepts
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200" 
                          style={{ backgroundColor: BRAND_YELLOW, boxShadow: `0 0 8px ${BRAND_YELLOW}` }}
                        />
                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                          Take your time with each interactive element
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Best Practices */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="group hover:scale-105 transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 rounded-2xl p-6 border-2 border-yellow-200/50 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                      <motion.div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-black font-bold shadow-lg"
                        style={{ 
                          backgroundColor: BRAND_YELLOW,
                          boxShadow: `0 4px 15px ${BRAND_YELLOW}40, ${threeDShadow}`
                        }}
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        4
                      </motion.div>
                      Best Practices
                    </h3>
                    <div className="space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                        className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200" 
                          style={{ backgroundColor: BRAND_YELLOW, boxShadow: `0 0 8px ${BRAND_YELLOW}` }}
                        />
                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                          Use <strong className="text-yellow-600 dark:text-yellow-400">full-screen mode</strong> for better visualization
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.7 }}
                        className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200" 
                          style={{ backgroundColor: BRAND_YELLOW, boxShadow: `0 0 8px ${BRAND_YELLOW}` }}
                        />
                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                          Try the quiz after each module to test understanding
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                        className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                      >
                        <div 
                          className="w-2 h-2 rounded-full mt-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200" 
                          style={{ backgroundColor: BRAND_YELLOW, boxShadow: `0 0 8px ${BRAND_YELLOW}` }}
                        />
                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                          Review concept explanations if you get stuck
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Pro Tip Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.9 }}
                className="mt-12 p-6 bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 dark:from-yellow-900/30 dark:via-yellow-800/20 dark:to-yellow-900/30 rounded-2xl border-3 hover:shadow-lg transition-all duration-300" 
                style={{ borderColor: BRAND_YELLOW, boxShadow: `0 8px 25px ${BRAND_YELLOW}20` }}
              >
                <motion.p 
                  className="text-center text-gray-800 dark:text-gray-200 font-bold text-lg leading-relaxed"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                >
                  <motion.span 
                    className="text-2xl mr-2"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    💡
                  </motion.span>
                  <strong style={{ color: BRAND_YELLOW }}>Pro Tip:</strong> Each simulation is designed to help you visualize complex Class 10 concepts. 
                  Don&apos;t just watch - <strong className="text-yellow-600 dark:text-yellow-400">interact, experiment, and discover!</strong>
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
}