"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function CareerHeroSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-background overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block text-sm font-medium text-muted-foreground mb-6 tracking-wider uppercase"
        >
          Careers at Melp
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
        >
          Join Our Team
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          We're building the future of AI-powered collaboration. 
          Join us and help teams work smarter, not harder.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <Button
            variant="brand-dark"
            size="lg"
            className="px-8 h-12 text-base"
            onClick={() => {
              document.getElementById("open-positions")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Open Positions
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
