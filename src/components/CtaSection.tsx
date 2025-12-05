"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative py-20 sm:py-32 bg-primary/[0.03] overflow-hidden"
    >
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-5xl mx-4 aspect-[21/9] rounded-3xl bg-muted/30 border border-border/30 flex items-center justify-center">
          <span className="text-muted-foreground/40 font-medium text-center px-4">
            TEAM COLLABORATION HERO IMAGE/VIDEO PLACEHOLDER
          </span>
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            CTA Section Heading Placeholder
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            This is a placeholder description encouraging visitors to sign up or get started with Melp today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8">
              Primary CTA Placeholder
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Secondary CTA Placeholder
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
