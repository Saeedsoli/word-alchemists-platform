# Changelog

All notable changes to this project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - YYYY-MM-DD

### Added
-   **Initial Release:** First stable version of The Word Alchemists platform.
-   **Core Architecture:** Monorepo setup with pnpm workspaces, Next.js 14, and Sanity.io.
-   **Frontend Application:**
    -   Home page introducing the book and its philosophy.
    -   Diagrams library page (`/diagrams`) with a grid view and detail pages (`/diagrams/[slug]`).
    -   Workshops page (`/workshops`) listing exercises with downloadable PDF templates and detail pages (`/workshops/[id]`).
    -   Secret Chapter 16 page (`/secret/chapter-16`) optimized for reading.
-   **Headless CMS:**
    -   Sanity Studio setup in `/packages/sanity-studio`.
    -   Schemas for `diagram`, `workshop`, and `chapter` content types.
-   **Styling:** Implemented with Tailwind CSS for a utility-first approach.
-   **TypeScript:** Full type safety across the entire codebase.
-   **Components:**
    -   Layout: `Header`, `Footer`, `Navigation`.
    -   UI: `Button`, `Card`, `Badge`, `Spinner`.
    -   Feature-specific: `DiagramCard`, `DiagramGrid`, `WorkshopCard`.
-   **SEO & PWA:**
    -   `robots.txt`, `sitemap.xml`, and `manifest.json`.
    -   Centralized metadata management and structured data (JSON-LD).
-   **Documentation:**
    -   Comprehensive `README.md`.
    -   Guides for installation, deployment, and contribution.
    -   Checklists for project management and pre-deployment verification.

---

## [Unreleased]

### Planned Features
-   **Search Functionality:** Add a search bar to the diagrams and workshops pages.
-   **User Comments:** Implement a commenting system for enhancement ideas.
-   **Blog Section:** Add a blog for related articles and author updates.
-   **Socratic Coach:** Integrate the Python-based AI microservice (Phase 2 objective).
-   **Performance Monitoring:** Integrate tools for monitoring Core Web Vitals.
-   **Testing:** Add a testing suite with Jest and React Testing Library.

---

This changelog will be updated with each new release.