"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 10 team members",
      "Basic integrations",
      "5GB storage",
      "Community support",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Growth",
    price: "$12",
    period: "/user/mo",
    description: "For growing teams that need more power",
    features: [
      "Unlimited team members",
      "Advanced integrations",
      "100GB storage",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with custom needs",
    features: [
      "Everything in Growth",
      "Custom integrations",
      "Unlimited storage",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    popular: false,
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

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-32 bg-background">
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
            Pricing Section Title Placeholder
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Placeholder subtitle about flexible pricing options for every team size.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`relative h-full p-6 lg:p-8 flex flex-col ${
                  plan.popular
                    ? "border-primary bg-primary/[0.02] shadow-lg shadow-primary/10"
                    : "border bg-card"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}

                {/* Icon Placeholder */}
                <div className="w-12 h-12 rounded-lg bg-muted/50 flex items-center justify-center mb-4">
                  <span className="text-xs text-muted-foreground">Icon</span>
                </div>

                {/* Plan Name */}
                <h3 className="text-xl font-semibold text-foreground">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="ml-1 text-muted-foreground">
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className="mt-8 w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
