"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const Marquee = () => {
    return (
        <div className="relative flex overflow-x-hidden bg-black text-white py-4 md:py-6">
            <motion.div
                className="flex whitespace-nowrap text-4xl md:text-6xl font-bold tracking-tight"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
               <span className="mx-8">Management. Financial.</span>
               <span className="mx-8">Management. Financial.</span>
               <span className="mx-8">Management. Financial.</span>
               <span className="mx-8">Management. Financial.</span>
               <span className="mx-8">Management. Financial.</span>
               <span className="mx-8">Management. Financial.</span>
               <span className="mx-8">Management. Financial.</span>
               <span className="mx-8">Management. Financial.</span>
            </motion.div>
        </div>
    );
};
