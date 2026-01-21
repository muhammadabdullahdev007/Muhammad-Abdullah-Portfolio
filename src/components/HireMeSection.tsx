"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Star,
  Clock,
  DollarSign,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Code2,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const HireMeSection = () => {
  const upworkUrl = "https://www.upwork.com/freelancers/~01c0f8755d4b590d1a";

  const features = [
    {
      icon: CheckCircle2,
      title: "100% Job Success",
      description: "Proven track record of delivering quality projects on time",
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Fast delivery without compromising on quality",
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Consistently high ratings from satisfied clients",
    },
    {
      icon: Code2,
      title: "Expert Developer",
      description: "Specialized in React, Next.js, and Full Stack development",
    },
  ];

  return (
    <section
      id="hire-me"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-primary-glow/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Hire Me on Upwork
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready for professional freelance work? Connect with me on Upwork for
            secure, platform-based collaboration.
          </p>
        </AnimatedSection>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Features Grid */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="group h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>

          {/* CTA Card */}
          <AnimatedSection delay={0.3}>
            <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden relative group">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="p-8 relative z-10 flex flex-col justify-between h-full">
                <div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                  >
                    <Rocket className="w-10 h-10 text-primary" />
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                    Let&apos;s Work Together!
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    I&apos;m currently available for freelance projects. Whether
                    you need a new website, web application, or help with your
                    existing project, I&apos;m here to help.
                  </p>
                </div>

                <div>
                  {/* Platform Button */}
                  <motion.a
                    href={upworkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block"
                  >
                    <Button
                      size="lg"
                      className="w-full h-14 text-base font-semibold bg-gradient-primary border-0 text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all group"
                    >
                      <Briefcase className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Hire me on Upwork
                      <ExternalLink className="w-4 h-4 ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HireMeSection;
