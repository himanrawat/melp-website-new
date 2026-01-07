"use client";

import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { benefits } from "@/data/careerData";

export function CareerBenefitsSection() {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
            Benefits
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Why Join Us?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We take care of our team so they can focus on building great things.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = Icons[benefit.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`p-6 lg:p-8 bg-background border border-border rounded-xl ${
                  index === 0 || index === 5 ? "lg:col-span-2" : ""
                }`}
              >
                {IconComponent && (
                  <IconComponent className="w-6 h-6 text-foreground mb-4" />
                )}
                <h3 className="text-lg font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
