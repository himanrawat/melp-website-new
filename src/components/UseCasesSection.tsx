"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const industryUseCases = [
  { title: "Technology", description: "Placeholder description for technology industry use case." },
  { title: "Healthcare", description: "Placeholder description for healthcare industry use case." },
  { title: "Finance", description: "Placeholder description for finance industry use case." },
  { title: "Education", description: "Placeholder description for education industry use case." },
  { title: "Retail", description: "Placeholder description for retail industry use case." },
  { title: "Manufacturing", description: "Placeholder description for manufacturing industry use case." },
];

const roleUseCases = [
  { title: "Product Teams", description: "Placeholder description for product teams use case." },
  { title: "Engineering", description: "Placeholder description for engineering teams use case." },
  { title: "Marketing", description: "Placeholder description for marketing teams use case." },
  { title: "Sales", description: "Placeholder description for sales teams use case." },
  { title: "HR & People", description: "Placeholder description for HR teams use case." },
  { title: "Operations", description: "Placeholder description for operations teams use case." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

function UseCaseCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div variants={itemVariants}>
      <Card className="group h-full overflow-hidden border bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
        {/* Image Placeholder */}
        <div className="aspect-[16/10] w-full bg-muted/50 flex items-center justify-center border-b">
          <span className="text-sm text-muted-foreground font-medium text-center px-4">
            USE CASE ILLUSTRATION + UI PLACEHOLDER
          </span>
        </div>
        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Use Cases Section Title Placeholder
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            This is a placeholder subtitle explaining how different teams and industries use Melp.
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="industry" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="industry">By Industry</TabsTrigger>
              <TabsTrigger value="role">By Role</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="industry">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {industryUseCases.map((useCase, index) => (
                <UseCaseCard
                  key={index}
                  title={useCase.title}
                  description={useCase.description}
                />
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="role">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {roleUseCases.map((useCase, index) => (
                <UseCaseCard
                  key={index}
                  title={useCase.title}
                  description={useCase.description}
                />
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
