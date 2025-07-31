# Product Requirements Document (PRD) - Automation Services Website (v2)

## 1. Overview

This document provides a detailed and comprehensive plan for the creation of a new website for automation services in Pakistan. The primary directive is to create a pixel-perfect, interactive, and experiential replica of the Palantir Technologies website (palantir.com). This is not just a single-page design; it is a full-site replication, encompassing all major sections, pages, components, and interactive elements. The final product will be a self-contained, independent website built within the existing Next.js project, but with its own dedicated components, styling, and assets.

The website will position our brand as the #1 AI lab in Pakistan, highlighting our expertise in AI, machine learning, NLP, and automation. We will also create a dedicated section on the use of AI in military combat, showcasing our capabilities in this area.

## 2. Target Audience

*   Government agencies in Pakistan
*   Large enterprises in Pakistan
*   Businesses in the defense and security sectors
*   Technology enthusiasts and researchers

## 3. Site Architecture (Sitemap)

The website will be structured as follows, mirroring the Palantir site:

*   **/ (Home):** The main landing page, featuring a hero section, an overview of our platforms, and links to our offerings and impact studies.
*   **/platforms:** A section detailing our core automation platforms.
    *   **/platforms/[platform-slug]:** Individual pages for each platform, with detailed descriptions, features, and technical specifications.
*   **/offerings:** A catalog of our automation service offerings.
    *   **/offerings/[offering-slug]:** Detailed pages for each service offering.
*   **/impact-studies:** Case studies and success stories from our clients in Pakistan.
    *   **/impact-studies/[study-slug]:** Individual case study pages.
*   **/blog:** A blog featuring articles, news, and insights on automation.
    *   **/blog/[post-slug]:** Individual blog post pages.
*   **/about:** A page detailing our company's mission, vision, and values.
*   **/contact:** A comprehensive contact page with a form, office locations, and other contact information.
*   **/careers:** A page for job openings and recruitment.
*   **/newsroom:** A section for press releases and media coverage.
*   **/explained:** A page that explains our approach to automation in a clear and accessible way.
*   **/military:** A dedicated section on the use of AI in military combat.

## 4. Design System

This section details the specific UI components and design elements that will be created to replicate the Palantir website.

### 4.1. Color Palette

*   **Primary Background:** `#000000` (Black)
*   **Secondary Background:** `#111111` (Dark Gray)
*   **Primary Text:** `#FFFFFF` (White)
*   **Secondary Text:** `#AAAAAA` (Light Gray)
*   **Accent:** `#00BFFF` (Deep Sky Blue)
*   **Borders and Dividers:** `#333333` (Dark Gray)

### 4.2. Typography

*   **Font Family:** Poppins
*   **Headings:**
    *   **H1:** 48px, Bold, All-Caps
    *   **H2:** 36px, Bold, All-Caps
    *   **H3:** 24px, Bold
*   **Body Text:** 16px, Regular
*   **Links:** 16px, Regular, `#00BFFF`

### 4.3. UI Components

This is a non-exhaustive list of the components that will be built. Each component will be a faithful reproduction of its Palantir counterpart.

*   **Navigation Bar:**
    *   Sticky, with a transparent background that becomes opaque on scroll.
    *   Logo on the left.
    *   Navigation links in the center.
    *   "Get Started" CTA button on the right.
*   **Buttons:**
    *   **Primary:** Solid fill, `#00BFFF` background, white text.
    *   **Secondary:** Outline, `#00BFFF` border, `#00BFFF` text.
    *   **Tertiary:** Text only, with an arrow icon.
*   **Cards:**
    *   Used for blog posts, case studies, and offerings.
    *   Dark background, with a subtle hover effect (glow or lift).
    *   Image, title, and a brief description.
*   **Forms:**
    *   Minimalist design, with clear labels and placeholders.
    *   Input fields with a bottom border that becomes active on focus.
*   **Modals:**
    *   Used for video players and other pop-up content.
    *   Dark, semi-transparent overlay.
*   **Carousels:**
    *   Horizontal carousels for showcasing logos, testimonials, and other content.
*   **Footer:**
    *   Comprehensive, with multiple columns for navigation, social media links, and legal information.

### 4.4. Animations and Interactions

*   **Scroll-Triggered Animations:** Fade-in, slide-in, and parallax effects.
*   **Hover Effects:** Glows, lifts, and color changes on interactive elements.
*   **Micro-interactions:** Subtle animations on buttons and other UI elements to provide feedback to the user.

## 5. Content Requirements

*   **High-Quality Visuals:** Professional photos and videos that align with the high-tech, sophisticated aesthetic of the Palantir brand.
*   **Compelling Copy:** Well-written, persuasive copy that communicates the value of our automation services.
*   **Detailed Content:** In-depth information for each platform, offering, and case study.
*   **AI in Military Content:** A dedicated section showcasing our expertise in AI for military combat, including case studies and white papers.

## 6. Technical Plan

1.  **Phase 1: Project Scaffolding**
    *   Create the directory structure for the new website.
    *   Set up a dedicated Tailwind CSS configuration.
    *   Integrate the Poppins font.
2.  **Phase 2: Core Component Library**
    *   Develop a comprehensive library of all the UI components defined in the design system.
3.  **Phase 3: Page Construction**
    *   Build out each page of the website, using the component library.
4.  **Phase 4: Content Integration**
    *   Populate the website with the final content (text, images, videos).
5.  **Phase 5: Testing and QA**
    *   Conduct thorough testing to ensure the website is free of bugs and inconsistencies.
6.  **Phase 6: Deployment**
    *   Deploy the new website to a staging environment for final review, and then to production.

## 7. Approval

This PRD requires stakeholder approval before development can commence.