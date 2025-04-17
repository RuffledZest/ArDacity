"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    // Fix for mobile viewport height
    const appHeight = () => {
      const doc = document.documentElement
      doc.style.setProperty('--app-height', `${window.innerHeight}px`)
    }
    
    window.addEventListener('resize', appHeight)
    appHeight()
    
    return () => window.removeEventListener('resize', appHeight)
  }, [])

  return (
    <div className="relative h-screen mobile-height-fix w-full overflow-hidden bg-black md:px-24 md:py-12">
      {/* Text layers */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center ">
        {/* "CRAFT YOUR OWN" text - animates from left */}
        <div className="relative w-full  px-4 sm:px-6 md:px-8">
          <motion.h1
            className="text-left text-[8vw] sm:text-[11vw] font-bold leading-tight sm:leading-none tracking-tighter text-white"
            initial={{ x: "-100%" }}
            animate={isLoaded ? { x: 0 } : { x: "-100%" }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            CRAFT
          </motion.h1>
          <motion.h1
            className="text-left text-[8vw] sm:text-[11vw] font-bold leading-tight sm:leading-none tracking-tighter text-white"
            initial={{ x: "-100%" }}
            animate={isLoaded ? { x: 0 } : { x: "-100%" }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.3,
            }}
          >
            YOUR OWN
          </motion.h1>
        </div>

        {/* "DESIGN" text - animates from right */}
        
        <div className="relative mt-[15vh] sm:mt-[20vh] md:mt-[20vh] w-full  px-4 sm:px-6 md:px-8">
                   
          
          <motion.h1
            className="text-right text-[12vw] sm:text-[15vw] font-bold leading-tight sm:leading-none tracking-tighter text-white
            

            "
            style={{
              textShadow: "0 0px 10px rgba(0, 0, 0, 0.8)",
            }}
            initial={{ x: "100%" }}
            animate={isLoaded ? { x: 0 } : { x: "100%" }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
              delay: 0.5,
            }}
          >
            DESIGN
            
          </motion.h1>
        </div>
      </div>

      {/* Dancing Girl - animates from bottom with bounce */}
      <div className="absolute left-1/2 top-1/2 z-20 h-[60vh] w-[60vh] sm:h-[70vh] sm:w-[70vh] md:h-[100vh] md:w-[100vh] -translate-x-1/2 -translate-y-1/2">
      <motion.div
        className=" z-20 h-[60vh] w-[60vh] sm:h-[70vh] sm:w-[70vh] md:h-[100vh] md:w-[100vh] "
        initial={{ y: "100vh" }}
        animate={isLoaded ? { y: 0 } : { y: "100vh" }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.8,
        }}
      >
        <Image src="/DancingGirl.png" alt="Dancing Figure" fill style={{ objectFit: "contain" }} priority />
      </motion.div>
      </div>

      {/* Flower Banner - unrolls from right to left */}
      <div className="absolute bottom-[20%] sm:bottom-[35%] left-0 z-0 w-full px-[8.3%] overflow-hidden">
        <motion.div
          className="relative h-[10vh] sm:h-[20vh] w-full"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={isLoaded ? { clipPath: "inset(0 0% 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: 1.2,
          }}
        >
          <Image src="/BannerPattern.png" alt="Flower Banner" fill style={{ objectFit: "cover" }} />
        </motion.div>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-[5%] left-0 sm:left-[5%] z-30 flex w-full sm:w-auto justify-center sm:justify-start space-x-3 sm:space-x-4 px-4 sm:px-0">
        <motion.button
          className="flex items-center space-x-1 sm:space-x-2 rounded-full bg-transparent px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white ring-1 ring-white/50"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2 }}
        >
          <svg className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 12L12 16L16 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>CONNECT WALLET</span>
        </motion.button>

        <motion.button
          className="rounded-full bg-transparent px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white ring-1 ring-white/50"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.2 }}
        >
          GET STARTED
        </motion.button>
      </div>
    </div>
  )
} 