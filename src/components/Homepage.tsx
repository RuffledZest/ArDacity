'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Homepage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* BannerPattern with unfolding effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          <motion.div
            initial={{ width: '0%' }}
            animate={isVisible ? { width: '100%' } : { width: '0%' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
            className="absolute inset-0 overflow-hidden"
          >
            <Image
              src="/BannerPattern.png"
              alt="Banner Pattern"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          
          {/* Overlay to create unrolling effect */}
          <motion.div
            initial={{ x: 0 }}
            animate={isVisible ? { x: '100%' } : { x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
            className="absolute inset-0 bg-black z-10"
          />
        </div>
      </div>

      {/* Text elements */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
            className="text-4xl md:text-6xl font-bold"
          >
            CRAFT YOUR OWN
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
            className="text-4xl md:text-6xl font-bold ml-0 md:ml-4"
          >
            DESIGN
          </motion.div>
        </div>

        {/* Dancing Girl */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ 
            type: "spring", 
            damping: 12, 
            stiffness: 100, 
            delay: 0.5 
          }}
          className="mt-8 relative"
        >
          <Image
            src="/DancingGirl.png"
            alt="Dancing Girl"
            width={400}
            height={400}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-8 flex space-x-4"
        >
          <button className="px-6 py-2 bg-purple-900 rounded-full flex items-center space-x-2 border border-purple-700">
            <span className="w-5 h-5 rounded-full bg-purple-500"></span>
            <span>CONNECT WALLET</span>
          </button>
          
          <button className="px-6 py-2 bg-gray-800 rounded-full border border-gray-700">
            GET STARTED
          </button>
        </motion.div>
      </div>
    </div>
  );
} 