# Architecture Documentation

This document provides a complete architectural overview of The Word Alchemists Platform.

---

## 1. System Overview

The Word Alchemists Platform is a modern web application built on the JAMstack philosophy, designed for performance, scalability, and maintainability. It consists of a decoupled frontend and a headless content management system (CMS).

**Core Philosophy:**
-   **Headless/Decoupled:** The frontend is completely separate from the backend content and logic layers.
-   **API-Driven:** All communication between layers happens via APIs.
-   **Managed Services:** Prioritize SaaS and managed services to reduce maintenance overhead.

---

## 2. High-Level Architecture

The system can be visualized with the following flow:

User's Browser
|
v
Vercel CDN (Edge Network - Serves static assets)
|
v
Next.js Application (Frontend Layer)
| (fetches data at build time)
v
Sanity API (Content Layer)
|
v
Sanity Studio (Content Management Interface)


-   **Frontend Layer:** A Next.js application responsible for presentation and user interaction.
-   **Content Layer:** A headless CMS (Sanity.io) that stores and serves all text and image content.
-   **Intelligence Layer (Future):** A separate Python microservice for AI-powered features.

---

## 3. Technology Stack

| Layer          | Technology       | Role                                                  |
|----------------|------------------|-------------------------------------------------------|
| **Frontend**   | Next.js 14       | React framework for building the user interface.      |
|                | TypeScript       | For type safety and improved developer experience.    |
|                | Tailwind CSS     | For rapid, utility-first styling.                     |
| **Hosting**    | Vercel           | For seamless deployment and hosting of the Next.js app.|
| **Content**    | Sanity.io        | Headless CMS for managing all website content.        |
| **Intelligence**| FastAPI (Python) | Future AI microservice (not built in Phase 1).      |
| **Database**   | PostgreSQL       | For the future FastAPI service.                       |

---

## 4. Folder Structure Explained

The project is a monorepo managed by pnpm workspaces.

### Root Level

/word-alchemists-platform/
|-- apps/ - Contains standalone applications.
|-- packages/ - Contains shared libraries, components, and configs.
|-- (config files) - Root configurations (pnpm, tsconfig, prettier, etc.).
|-- (docs) - Project documentation.


### `apps/web/` - The Next.js Frontend

This is the main user-facing application.

/apps/web/
|-- app/ - The Next.js App Router for pages and layouts.
|-- components/ - Reusable React components.
|-- lib/ - Helper functions, Sanity client, and constants.
|-- types/ - TypeScript type definitions.
|-- hooks/ - Custom React hooks.
|-- public/ - Static assets like images, fonts, and SEO files.


### `packages/sanity-studio/` - The Headless CMS

This package contains the configuration and schemas for the Sanity.io content studio.

/packages/sanity-studio/
|-- sanity.config.ts - Main studio configuration.
|-- schemas/ - Directory for all content models.
| |-- documents/ - Defines document types (e.g., diagram, workshop).
| |-- objects/ - Defines reusable object types within schemas.


---

## 5. Data Flow and Rendering Strategy

### Content Flow
1.  **Creation:** Content (e.g., a diagram's description) is created and edited in the Sanity Studio.
2.  **Storage:** The content is stored as structured data in the Sanity Content Lake.
3.  **Delivery:** The content is exposed via a GraphQL or GROQ API.

### Rendering Strategy: Static Site Generation (SSG)

The primary rendering strategy is SSG for maximum performance and SEO benefits.

1.  **Build Time:**
    -   The Next.js application runs the `pnpm build` command on Vercel.
    -   It fetches all required data from the Sanity API.
    -   It pre-renders all pages (e.g., `/diagrams`, `/workshops/[id]`) into static HTML files.
    -   `generateStaticParams` is used for dynamic routes to know which pages to generate.

2.  **Runtime (User Request):**
    -   The user requests a page.
    -   Vercel's Edge Network serves the pre-built static HTML file instantly.
    -   No server-side computation or database queries are needed for the initial page load.

### Revalidation

To keep the static content fresh without requiring a full redeployment, we use **Incremental Static Regeneration (ISR)**.

-   The `revalidate` option is set on pages (e.g., `export const revalidate = 3600`).
-   After the specified time (e.g., 1 hour), the next user request will trigger a re-generation of the page in the background. Subsequent users will receive the newly generated page.

---

## 6. Key Design Decisions

-   **Why Monorepo?** It allows for a single source of truth for configurations (ESLint, Prettier, TypeScript) and makes it easier to share code (e.g., types) between different parts of the platform in the future.

-   **Why Headless CMS?** It decouples content from presentation, allowing the same content to be used for a website, a mobile app, or any other channel in the future. It gives frontend developers complete control over the UI.

-   **Why Next.js App Router?** It enables modern React features like Server Components, which improve performance by moving rendering logic to the server. The file-based routing with layouts is intuitive and powerful.

-   **Why pnpm?** It is faster and more disk-space-efficient than npm or Yarn due to its use of a content-addressable store and symlinks.

---

## 7. Future Scalability

-   **AI Microservice:** The decoupled architecture makes it straightforward to integrate the `FastAPI` microservice. The Next.js app will simply make API calls to this new service for AI-powered features.
-   **Authentication:** If user-specific features are added, `NextAuth.js` can be integrated into the Next.js app to handle authentication.
-   **Content Growth:** As the amount of content grows, features like pagination, search (e.g., with Algolia), and advanced filtering can be added to the frontend without changing the backend architecture.

---

This architecture provides a robust, scalable, and high-performance foundation for The Word Alchemists digital ecosystem.