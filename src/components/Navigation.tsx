"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Briefcase,
  Award,
  FolderGit2,
  Mail,
  FileCheck,
  LayoutList,
  Sidebar,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navMode, setNavMode] = useState<"navbar" | "sidebar">("navbar"); // Toggle between navbar and sidebar
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = [
        "profile",
        "about",
        "skills",
        "experience",
        "certifications",
        "projects",
        "hire-me",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#profile", label: "Home", id: "profile", icon: Home },
    { href: "#about", label: "About", id: "about", icon: User },
    { href: "#skills", label: "Skills", id: "skills", icon: Code },
    {
      href: "#experience",
      label: "Experience",
      id: "experience",
      icon: Briefcase,
    },
    {
      href: "#certifications",
      label: "Certifications",
      id: "certifications",
      icon: Award,
    },
    { href: "#projects", label: "Projects", id: "projects", icon: FolderGit2 },
    { href: "#hire-me", label: "Hire Me", id: "hire-me", icon: FileCheck },
    { href: "#contact", label: "Contact", id: "contact", icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <>
      {/* Top Bar with Logo and Theme Toggle */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-elegant"
            : "bg-background/80 backdrop-blur-md border-b border-border/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.button
              onClick={() => scrollToSection("#profile")}
              className="font-bold text-xl bg-gradient-hero bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Muhammad Abdullah
            </motion.button>

            {/* Desktop Navigation Menu - Centered (only shown if navMode is navbar) */}
            {navMode === "navbar" && (
              <div className="hidden md:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => scrollToSection(link.href)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? "bg-gradient-primary text-white shadow-md"
                          : "text-foreground/70 hover:text-foreground hover:bg-accent"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm font-medium">{link.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            )}

            {/* Theme Toggle - Right Side */}
            <div className="hidden md:flex items-center gap-2">
              {/* Navigation Mode Toggle */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() =>
                        setNavMode(navMode === "navbar" ? "sidebar" : "navbar")
                      }
                    >
                      {navMode === "navbar" ? (
                        <Sidebar className="w-5 h-5" />
                      ) : (
                        <LayoutList className="w-5 h-5" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Switch to {navMode === "navbar" ? "sidebar" : "navbar"}{" "}
                      navigation
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMenuOpen ? "close" : "menu"}
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMenuOpen ? <X /> : <Menu />}
                  </motion.div>
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border relative z-50"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-all duration-200 cursor-pointer touch-manipulation ${
                      activeSection === link.id
                        ? "text-primary bg-primary/10 font-semibold"
                        : "text-foreground hover:text-primary hover:bg-accent"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Modern Icon-Based Left Navigation - Desktop Only (only shown if navMode is sidebar) */}
      {navMode === "sidebar" && (
        <div className="hidden md:flex fixed left-0 top-16 bottom-0 z-40 items-center justify-center">
          <TooltipProvider>
            <motion.nav
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col items-start gap-2"
            >
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.id;
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative group"
                  >
                    {isActive ? (
                      // Active item - no tooltip
                      <motion.button
                        onClick={() => scrollToSection(link.href)}
                        className="relative flex items-center overflow-hidden transition-all duration-300"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          className="flex items-center gap-3 rounded-lg transition-all duration-300 bg-gradient-primary text-white shadow-lg pr-4"
                          animate={{
                            width: "auto",
                          }}
                          style={{
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                          }}
                        >
                          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 transition-all duration-300 scale-110" />
                          </div>
                          <motion.span
                            initial={false}
                            animate={{
                              width: "auto",
                              opacity: 1,
                            }}
                            className="font-medium whitespace-nowrap overflow-hidden transition-all duration-300 text-sm"
                          >
                            {link.label}
                          </motion.span>
                        </motion.div>
                      </motion.button>
                    ) : (
                      // Inactive item - with tooltip
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.button
                            onClick={() => scrollToSection(link.href)}
                            className="relative flex items-center overflow-hidden transition-all duration-300"
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <motion.div
                              className="flex items-center gap-3 rounded-lg transition-all duration-300 bg-background/80 backdrop-blur-md text-foreground/70 border-l-0 border-t border-r border-b border-border/50 group-hover:text-foreground group-hover:border-primary/50 group-hover:bg-background/95 pr-0 group-hover:pr-4"
                              animate={{
                                width: "auto",
                              }}
                              style={{
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                              }}
                            >
                              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                                <Icon className="w-5 h-5 transition-all duration-300" />
                              </div>
                              <motion.span
                                initial={false}
                                animate={{
                                  width: 0,
                                  opacity: 0,
                                }}
                                whileHover={{
                                  width: "auto",
                                  opacity: 1,
                                }}
                                className="font-medium whitespace-nowrap overflow-hidden transition-all duration-300 text-sm group-hover:opacity-100"
                              >
                                {link.label}
                              </motion.span>
                            </motion.div>
                          </motion.button>
                        </TooltipTrigger>
                        <TooltipContent side="right" className="ml-2">
                          <p>{link.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </motion.div>
                );
              })}
            </motion.nav>
          </TooltipProvider>
        </div>
      )}
    </>
  );
};

export default Navigation;
