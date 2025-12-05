"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Name Placeholder",
    role: "Role Placeholder, Company",
    quote: "This is a placeholder testimonial quote. It demonstrates how customers describe their positive experience using Melp for their team collaboration needs.",
  },
  {
    name: "Name Placeholder",
    role: "Role Placeholder, Company",
    quote: "This is a placeholder testimonial quote. It demonstrates how customers describe their positive experience using Melp for their team collaboration needs.",
  },
  {
    name: "Name Placeholder",
    role: "Role Placeholder, Company",
    quote: "This is a placeholder testimonial quote. It demonstrates how customers describe their positive experience using Melp for their team collaboration needs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Testimonials Section Title Placeholder
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Placeholder subtitle about what customers say about using Melp.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="relative h-full p-6 bg-card border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                {/* Mini Product Shot Placeholder */}
                <div className="absolute top-4 right-4 w-16 h-10 rounded bg-muted/50 flex items-center justify-center">
                  <span className="text-[8px] text-muted-foreground text-center leading-tight">
                    MINI PRODUCT SHOT
                  </span>
                </div>

                {/* Avatar and Info */}
                <div className="flex items-center gap-4 mb-6">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-xs text-muted-foreground flex-shrink-0">
                    Avatar
                  </div>
                  <div className="pr-16">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
