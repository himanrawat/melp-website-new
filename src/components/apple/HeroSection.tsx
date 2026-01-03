"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "./Marquee";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax: Dashboard moves UP faster than scroll to create separation
  const yDashboard = useTransform(scrollY, [0, 500], [0, -150]);
  
  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 150 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; 
      const y = (e.clientY / innerHeight - 0.5) * 30;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col pt-32 overflow-hidden">
      
      {/* Top Section: Split Header */}
      <div className="container mx-auto px-6 md:px-12 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
         {/* Left: Heading */}
         <div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-6xl md:text-6xl font-normal tracking-tight text-neutral-900 leading-[0.95]"
            >
              Connected Workspaces Across Teams and Tools

              <span className="text-neutral-400 flex items-center"><div className="text-neutral-400 w-20 h-0.5">Powered by AI</div></span>
            </motion.h1>
         </div>

         {/* Right: Description & stats/CTA */}
         <div className="flex flex-col items-start justify-center h-full pt-4 md:pl-20">
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="mb-8"
            >
               {/* Plus Icon Decoration */}
               <div className="text-blue-400 mb-6">
                 <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M20 0V40M0 20H40" stroke="currentColor" strokeWidth="1"/>
                 </svg>
               </div>

               <p className="text-xl text-melp-gray-600 max-w-sm mb-8 leading-relaxed">
                 Simplify your financial life. Our intuitive app makes managing your money effortless.
               </p>

               <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 overflow-hidden relative">
                         {/* Placeholder Avatar */}
                         <div className={`absolute inset-0 bg-gradient-to-br ${i===1?'from-orange-300 to-yellow-300':i===2?'from-blue-300 to-cyan-300':'from-purple-300 to-pink-300'}`} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-2xl font-bold">2.3M+</div>
                    <div className="text-sm text-gray-500">Trusted Users</div>
                  </div>
               </div>
            </motion.div>

             <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-melp-gray-50 hover:bg-white text-melp-blue font-medium px-8 py-4 rounded-full text-lg transition-all shadow-sm hover:shadow-md flex items-center gap-2"
              >
                Get Started Free
                <div className="bg-melp-blue text-white rounded-full p-2">
                  <ArrowUpRight size={18} />
                </div>
              </motion.button>
         </div>
      </div>

      {/* Floating Dashboard (Overlapping) */}
      <div className="relative w-full flex justify-center z-20 -mb-40 md:-mb-60 pointer-events-none">
         <motion.div
           style={{
             y: yDashboard, 
             x: springX,
             rotateX: useTransform(springY, (val) => -val / 20),
             rotateY: useTransform(springX, (val) => val / 20),
           }}
           className="relative max-w-5xl w-full px-4"
         >
             <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative shadow-2xl rounded-3xl overflow-hidden border-4 border-gray-900/5 bg-white"
             >
                <Image 
                  src="/desktop.png" 
                  alt="Melp Dashboard" 
                  width={1400} 
                  height={900} 
                  className="w-full h-auto"
                  priority
                />
             </motion.div>
         </motion.div>
      </div>

      {/* Blue Section (Bottom) */}
      <div className="relative w-full bg-melp-blue/95 md:bg-melp-blue pt-40 pb-20 md:pt-60 rounded-t-[3rem] -z-10 -mt-32 md:-mt-60 overflow-hidden">
         {/* Marquee Inside Blue Section - Background Layer */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none flex items-center justify-center">
            <Marquee />
         </div>

         {/* Content inside blue section (Bottom) */}
         <div className="container mx-auto text-center relative z-10 pt-20">
            <h2 className="text-white text-2xl md:text-3xl font-medium mb-8 max-w-2xl mx-auto border-t border-white/10 pt-10">
               Partnering with top tier brands to revolutionize <br/> financial services.
            </h2>
             {/* Logo Strip Placeholder */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale invert mix-blend-screen">
               {['Logoipsum', 'Ipsum', 'Logo', 'Brand', 'Tech'].map((logo, i) => (
                  <span key={i} className="text-xl font-bold text-white tracking-widest uppercase">{logo}</span>
               ))}
            </div>
         </div>
      </div>

    </section>
  );
}
