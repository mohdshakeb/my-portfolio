## Project Requirements Document: Personal Portfolio Website

### 1. Overview

**Project Name:** Shakeb Portfolio

**Owner:** \[Mohammad Shakeb], Product Designer

**Purpose:** Build a clean, minimal, yet unconventional and innovative portfolio website showcasing design case studies, side projects, learnings, tech stack, and social links. This document provides requirements for the AI assistant (Cursor AI) to use as context during development.

### 2. Goals & Objectives

* **Showcase Expertise:** Highlight key case studies with problem statements, process, deliverables, and outcomes.
* **Engage Visitors:** Use selective imagery and short video snippets to pique interest without clutter.
* **Highlight Side Projects & Learnings:** Present additional work and insights.
* **Demonstrate Technical Stack:** Feature Figma, Chat GPT, Claude, Next.js, Framer Motion, and AI-assisted development workflow.
* **Facilitate Connections:** Provide clear links to social profiles and contact.

### 3. Target Audience

* Potential clients and employers
* Design community and collaborators
* Recruiters

### 4. Technology Stack

* **Framework:** Next.js (React-based)
* **Styling:** Tailwind CSS (or preferred CSS-in-JS solution)
* **Animations:** Framer Motion
* **Development Tools:** Cursor AI for code completion and suggestions
* **Hosting:** Vercel (or preferred Next.js host)

### 5. Information Architecture

1. **Header/Nav**

   * Logo written in text "mohammad." in "Outfit" fontface: https://fonts.google.com/specimen/Outfit
   * Menu: Home, Case Studies, Side Projects, Learnings, About, Contact

2. **Home (Landing) Section**

   * Full-viewport hero with minimal text, a strip of image/video
   * Brief tagline and prompt to explore

3. **Case Studies List**

   * Grid or list of 3–6 featured projects
   * Thumbnail, title, category
4. **Case Study Detail Template**

   * Overview: Role, timeline, tools
   * Problem Statement
   * Research & Insights
   * Sketches/Wireframes
   * High-fidelity Screens
   * Interactive Prototype (embed/video)
   * Results & Learnings
5. **Side Projects**

   * Cards linking to live demos or repos
   * Short descriptions
6. **Learnings**

   * Blog-like snippets or notes on tools, patterns, experiments
7. **About**

   * Brief bio, photo, personal philosophy
8. **Footer**

   * Tech stack icons
   * Social links (LinkedIn, Dribbble, GitHub, etc.)
   * Copyright

### 6. Design Guidelines

* **Visual Style:** Clean, minimal grid layout
* **Typography:** Sans-serif, well-spaced, clear hierarchy
* **Color Palette:** Neutral base (white, light gray, charcoal), accent color for CTAs
* **Spacing & Layout:** Generous whitespace, responsive breakpoints
* **Imagery:** Optimized JPG/MP4, lazy-loaded
* **Accessibility:** WCAG AA compliance (contrast, alt text, keyboard nav)

### 7. Animations & Interactions

* Page transitions (fade, slide)
* Hover/tap micro-interactions on cards/buttons
* Scroll-triggered reveals for sections
* Cursor AI to generate Framer Motion variants

### 8. Functional Requirements

* **Responsive Design:** Desktop, tablet, mobile
* **SEO-Friendly Routing:** Next.js pages with metadata
* **Performance:** Lighthouse score >90
* **Analytics:** Integration (e.g., Google Analytics)
* **Contact Form:** Simple form (Name, Email, Message) or mailto link

### 9. Non-Functional Requirements

* **Maintainability:** Clean, commented code; modular components
* **Scalability:** Easily add new case studies
* **Security:** No sensitive data in client bundle

### 10. Assets & Content

* High-res images and video snippets for hero and case studies
* Copy for each section (to be drafted)
* SVG icons for stack and social links

### 11. Development Workflow & Tasks

1. Scaffold Next.js project
2. Configure Tailwind CSS and Framer Motion
3. Create layout and global styles
4. Build components: Header, Footer, Cards, Modals
5. Implement pages: Home, Case Studies, etc.
6. Integrate animations with Framer Motion
7. Populate with content and assets
8. Test responsiveness and accessibility
9. Optimize performance
10. Deploy to Vercel

### 12. Timeline & Milestones

* Week 1: Setup, global styles, Home
* Week 2: Case study templates and content
* Week 3: Side projects & learnings sections
* Week 4: Testing, optimization, deployment

### 13. Acceptance Criteria

* All pages rendered correctly on major browsers
* Animations smooth and performant
* Case studies fully documented
* SEO tags present
* Contact link/form functional

---
