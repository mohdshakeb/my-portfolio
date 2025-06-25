"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { ImageTicker } from "@/components/ui/image-ticker";
import { CustomLink } from "@/components/ui/link";
import { ScrollButton } from "@/components/ui/scroll-button";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

// Custom Peerlist icon component
function PeerlistIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM14.59 8.59L16 10L12 14L8 10L9.41 8.59L12 11.17L14.59 8.59Z" fill="currentColor"/>
    </svg>
  );
}

// Case study item component
function CaseStudyItem({ 
  title, 
  description, 
  href 
}: { 
  title: string; 
  description: string; 
  href: string;
}) {
  return (
    <Link href={href}>
      <motion.div 
        className="py-8 group cursor-pointer"
        whileHover={{ }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <div className="flex justify-start items-start">

          <div>
            <p className="text-2xl font-medium text-zinc-800 max-w-lg mb-2 group-hover:text-primary-600 transition-colors">{title}</p>
            <p className="text-zinc-500 max-w-lg">{description}</p>
          </div>
          
        </div>
      </motion.div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen font-satoshi bg-white text-neutral-900">
      <Header />
      
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto mt-24 mb-16 p-8 sm:px-0">
        <div className="flex-col justify-start items-start mb-8">
          <p className="text-xl max-w-md font-medium text-zinc-800 mb-4">
            Crafting purpose driven experiences with simplicity and intent.
          </p>
          <p className="text-base max-w-md text-zinc-600 leading-relaxed font-light">
          I like to borrow Bruno Munari's words to describe myself, "A planner with an aesthetic sense" I translate complexity into experiences that feel simple, intuitive and most importantly joyful. I'm always chasing curiosity, whether it's a new project, tool or a bedtime story with my little one.
          </p>
        </div>
        
        {/* Links Section */}
        <div className="max-w-3xl mx-auto mb-16">
          {/*
          <p className="text-zinc-600 mb-6 leading-relaxed">
            Currently working on exciting projects and always open to new opportunities. 
            Let's connect and discuss how we can work together.
          </p>
          */}
          <div className="flex gap-6 items-center">
            <ScrollButton 
              sectionId="case-studies"
              variant="text"
            >
              Case Studies
            </ScrollButton>
            <ScrollButton 
              sectionId="side-projects"
              variant="text"
            >
              Side Projects
            </ScrollButton>
          </div>
        </div>
      </div>
      
      <div className="w-full my-8">
        <ImageTicker />
      </div>

      <div className="p-8 sm:px-14 sm:py-0">
        {/* Case Studies Section */}
        <section id="case-studies" className="max-w-3xl mx-auto my-24 scroll-mt-20">
          <p className="text-sm text-zinc-500 font-medium mb-2">CASE STUDIES</p>
          
          <div className="divide-y divide-neutral-200">
            <CaseStudyItem 
              title="Addressing Trust and Usability issues by rethinking onboarding and authentication." 
              description="A comprehensive redesign of a financial technology application focusing on improving user engagement and simplifying complex financial workflows."
              href="https://medium.com/@reachshakeb/enhancing-trust-and-usability-for-yuse-app-02c0e8db6a28"
            />
            
            <CaseStudyItem 
              title="E-commerce Platform UX Optimization" 
              description="Enhancing the shopping experience through intuitive navigation, streamlined checkout process, and personalized product recommendations."
              href="https://medium.com/@reachshakeb/ecommerce-ux-optimization-case-study"
            />
            
            <CaseStudyItem 
              title="Healthcare Patient Portal Design" 
              description="Creating an accessible and user-friendly interface for patients to manage appointments, view medical records, and communicate with healthcare providers."
              href="https://medium.com/@reachshakeb/healthcare-patient-portal-design"
            />
          </div>
        </section>

        {/* Side Projects Section */}
        <section id="side-projects" className="max-w-3xl mx-auto my-24 scroll-mt-20">
          <p className="text-sm text-zinc-500 font-medium mb-2">SIDE PROJECTS</p>
          
          <div className="divide-y divide-neutral-200">
            <CaseStudyItem 
              title="Design System Component Library" 
              description="A comprehensive design system built with React and TypeScript, featuring reusable components and design tokens."
              href="#"
            />
            
            <CaseStudyItem 
              title="Portfolio Website Template" 
              description="A modern, responsive portfolio template built with Next.js and Tailwind CSS for designers and developers."
              href="#"
            />
            
            <CaseStudyItem 
              title="Productivity App Concept" 
              description="A mobile app concept focused on helping users manage their daily tasks and improve productivity through intuitive design."
              href="#"
            />
          </div>
        </section>

        <footer className="mt-24 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <CustomLink 
              href="https://peerlist.io/yourusername" 
              variant="icon" 
              icon={<PeerlistIcon size={20} />}
            />
            <CustomLink 
              href="https://twitter.com/yourusername" 
              variant="icon" 
              icon={<Twitter size={20} />}
            />
            <CustomLink 
              href="https://linkedin.com/in/yourusername" 
              variant="icon" 
              icon={<Linkedin size={20} />}
            />
            <CustomLink 
              href="https://github.com/yourusername" 
              variant="icon" 
              icon={<Github size={20} />}
            />
          </div>
          <p className="text-neutral-500">© {new Date().getFullYear()} Mohammad Shakeb. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
