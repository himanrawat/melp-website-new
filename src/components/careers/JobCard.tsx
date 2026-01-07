"use client";

import { motion } from "motion/react";
import { MapPin, ArrowRight } from "lucide-react";
import type { Job } from "@/data/careerData";

interface JobCardProps {
  job: Job;
  index: number;
}

export function JobCard({ job, index }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      className="group"
    >
      <a
        href={`/careers/${job.id}`}
        className="block p-6 bg-background border border-border rounded-xl hover:border-foreground/20 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground/80 transition-colors">
              {job.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {job.department}
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{job.remote ? "Remote" : job.location}</span>
          </div>
          <span className="px-2.5 py-0.5 text-xs font-medium bg-muted text-muted-foreground rounded-full">
            {job.type}
          </span>
        </div>
      </a>
    </motion.div>
  );
}
