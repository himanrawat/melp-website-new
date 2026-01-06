"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { jobs, departments } from "@/data/careerData";
import { JobCard } from "./JobCard";

export function OpenPositionsSection() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");

  const filteredJobs = selectedDepartment === "All"
    ? jobs
    : jobs.filter((job) => job.department === selectedDepartment);

  return (
    <section id="open-positions" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
            Open Positions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Find Your Role
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our open positions and find where you can make an impact.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {departments.map((department) => (
            <button
              key={department}
              onClick={() => setSelectedDepartment(department)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                selectedDepartment === department
                  ? "bg-foreground text-background"
                  : "bg-background text-muted-foreground border border-border hover:border-foreground/30"
              }`}
            >
              {department}
            </button>
          ))}
        </motion.div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredJobs.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-muted-foreground py-12"
          >
            No positions available in this department at the moment.
          </motion.p>
        )}
      </div>
    </section>
  );
}
