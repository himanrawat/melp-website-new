"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const stats = [
  {
    value: "35%",
    label: "Metric Label Placeholder",
    description: "Short explanation of what this metric means for users.",
  },
  {
    value: "2.5x",
    label: "Metric Label Placeholder",
    description: "Short explanation of what this metric means for users.",
  },
  {
    value: "10M+",
    label: "Metric Label Placeholder",
    description: "Short explanation of what this metric means for users.",
  },
  {
    value: "99.9%",
    label: "Metric Label Placeholder",
    description: "Short explanation of what this metric means for users.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function StatsSection() {
  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-b from-muted/30 to-muted/50 overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-6xl mx-4 aspect-[21/9] rounded-3xl bg-muted/30 border border-border/50 flex items-center justify-center">
          <span className="text-muted-foreground/50 font-medium text-center px-4">
            ABSTRACT METRIC BACKGROUND VIDEO PLACEHOLDER
          </span>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Impact Section Title Placeholder
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            This is a placeholder describing the measurable impact of using Melp.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full p-6 bg-background/80 backdrop-blur-sm border hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
