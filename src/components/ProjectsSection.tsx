"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Lock } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "@/constants/projects";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = PROJECTS;
  const displayedProjects = showAll ? projects : projects.slice(0, 6);
  const remainingCount = projects.length - 6;

  const handlePrivateRepo = () => {
    toast.info("Private Repository", {
      description:
        "This repository is private due to enterprise or client confidentiality.",
    });
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg mb-2">Browse My Recent</p>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 overflow-hidden flex flex-col h-full">
                  {/* Project Image */}
                  <div className="aspect-square w-full h-64 overflow-hidden bg-muted flex items-center justify-center relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={256}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSITFBUWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhMf/aAAwDAQACEQMRAD8AzPR9v39xrVrFd6Y9vbNKoluDNGxRCcFgFYk4HfVX+UpStYAGANOzP//Z"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    {/* Project Title */}
                    <h3 className="font-semibold text-lg mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Project Duration */}
                    <p className="text-sm text-muted-foreground mb-2">
                      {project.duration}
                    </p>

                    {/* Project Description */}
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
                      {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className={`flex-1 ${
                          !project.github ? "opacity-70" : ""
                        }`}
                        onClick={() =>
                          project.github
                            ? window.open(project.github, "_blank")
                            : handlePrivateRepo()
                        }
                      >
                        {project.github ? (
                          <>
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </>
                        ) : (
                          <>
                            <Lock className="w-4 h-4 mr-2" />
                            Private Repo
                          </>
                        )}
                      </Button>

                      {project.demo && (
                        <Button
                          variant="default"
                          size="sm"
                          className="flex-1"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {project.demoLabel}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        {projects.length > 6 && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false }}
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-2 text-base font-semibold"
              variant="outline"
            >
              {showAll ? (
                <>
                  Show Less
                  <ExternalLink className="w-4 h-4 ml-2 -rotate-90" />
                </>
              ) : (
                <>
                  Show More{" "}
                  {remainingCount > 0 && `(${remainingCount} more projects)`}
                  <ExternalLink className="w-4 h-4 ml-2 rotate-90" />
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
