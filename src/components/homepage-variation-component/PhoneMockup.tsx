"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const PhoneMockup = ({ imageSrc }: { imageSrc: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect: The phone moves up slightly faster than the scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="relative w-full flex justify-center items-center py-20 overflow-visible">
       {/* Floating Animation Wrapper */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ y: smoothY }}
        className="relative z-10 w-[300px] md:w-[400px] lg:w-[500px]"
      >
        <Image
            src={imageSrc}
            alt="Melp App Interface"
            width={800}
            height={1600}
            className="w-full h-auto drop-shadow-2xl"
            priority
        />
      </motion.div>
    </div>
  );
};
