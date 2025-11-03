# Contributing to The Word Alchemists Platform

Thank you for your interest in contributing to this project. This document outlines the guidelines for making contributions.

---

## Getting Started

### Prerequisites

- Node.js v18.0.0 or higher
- pnpm v8.0.0 or higher
- Git

### Setup Development Environment

1.  **Fork and Clone the Repository**

    ```bash
    git clone https://github.com/YOUR-USERNAME/word-alchemists-platform.git
    cd word-alchemists-platform
    ```

2.  **Install Dependencies**

    From the root of the project, run:
    ```bash
    pnpm install
    ```

3.  **Setup Environment Variables**

    Create local environment files by copying the examples:
    ```bash
    cp apps/web/.env.example apps/web/.env.local
    cp packages/sanity-studio/.env.example packages/sanity-studio/.env.local
    ```
    Then, fill in the required values in the `.env.local` files, especially the Sanity Project ID.

4.  **Run Development Servers**

    You will need two separate terminal sessions.

    **Terminal 1: Start the Next.js Frontend**
    ```bash
    cd apps/web
    pnpm dev
    ```
    The site will be available at `http://localhost:3000`.

    **Terminal 2: Start the Sanity Studio**
    ```bash
    cd packages/sanity-studio
    pnpm dev
    ```
    The studio will be available at `http://localhost:3333`.

---

## Git Workflow

### Branch Strategy

We use a `develop` branch as the main integration branch. All feature and fix branches should be created from `develop`.

main (production releases)

    develop (integration)
        feature/feature-name
        fix/bug-name
        docs/documentation-update


### Branch Naming Convention

-   **Features:** `feature/add-search-functionality`
-   **Bug Fixes:** `fix/header-mobile-menu-bug`
-   **Documentation:** `docs/update-readme`
-   **Refactoring:** `refactor/optimize-image-component`

---

## Coding Standards

### TypeScript

-   Always use explicit types for props, state, and function returns.
-   Avoid using `any` unless absolutely necessary.
-   Follow the existing type definitions in the `types/` directory.

### Naming Conventions

-   **Components:** PascalCase (`DiagramCard.tsx`)
-   **Hooks:** camelCase with `use` prefix (`useDiagram.ts`)
-   **Utilities:** camelCase (`formatDate.ts`)
-   **Constants:** `UPPER_SNAKE_CASE` (`MAX_DIAGRAMS`)

---

## Code Submission Process

### Before Creating a Pull Request

1.  **Run Checks Locally**: Ensure your changes pass all local checks before pushing.
    ```bash
    # Run type-check from the root
    pnpm type-check

    # Run lint from the root
    pnpm lint

    # Run a local build for the web app
    cd apps/web
    pnpm build
    ```
    All commands must pass without errors.

2.  **Write Meaningful Commits**: Follow the commit message format.

### Commit Message Format

Use the [Conventional Commits](https://www.conventionalcommits.org/) specification.


type(scope): subject

body (optional)


**Types:**
-   `feat`: A new feature
-   `fix`: A bug fix
-   `docs`: Documentation only changes
-   `style`: Changes that do not affect the meaning of the code
-   `refactor`: A code change that neither fixes a bug nor adds a feature
-   `perf`: A code change that improves performance
-   `test`: Adding missing tests or correcting existing tests
-   `chore`: Changes to the build process or auxiliary tools

**Examples:**

feat(diagrams): add filter by chapter
fix(header): resolve mobile menu not closing on navigation
docs(readme): update installation instructions


### Creating a Pull Request

1.  Create your PR against the `develop` branch.
2.  Provide a clear and descriptive title.
3.  Fill out the PR template with details about your changes.

```markdown
## Description
A brief description of the changes.

## Related Issues
Closes #<issue_number>

## Changes
-   Added search bar component.
-   Implemented filtering logic for diagrams.
-   Debounced search input for performance.

## Screenshots (if applicable)
[Add screenshots of UI changes]

## Checklist
- [x] My code follows the project's style guidelines.
- [x] I have performed a self-review of my own code.
- [x] I have commented my code, particularly in hard-to-understand areas.
- [x] I have made corresponding changes to the documentation.
- [x] My changes generate no new warnings.
- [x] I have added tests that prove my fix is effective or that my feature works.

Style Guide
Tailwind CSS

    Use utility-first classes directly in your JSX.
    Use the cn helper function from lib/utils.ts for conditional classes.

Components

    Use Server Components by default for performance.
    Only use Client Components ('use client') when interactivity (e.g., useState, useEffect, event listeners) is required.

Reporting Bugs
Before Submitting a Bug Report

    Ensure you are on the latest version of the develop branch.
    Search existing issues to see if the bug has already been reported.

Bug Report Template

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**
 - OS: [e.g. Windows 11]
 - Browser: [e.g. Chrome, Safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.

**Describe the bug**
A clear and concise description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
A clear and concise description of what you expected to happen.

**Screenshots**
If applicable, add screenshots to help explain your problem.

**Desktop (please complete the following information):**
 - OS: [e.g. Windows 11]
 - Browser: [e.g. Chrome, Safari]
 - Version [e.g. 22]

**Additional context**
Add any other context about the problem here.

Suggesting Enhancements

Use the "Feature Request" issue template on GitHub and provide a clear description of the feature you would like to see.
Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

Thank you for your contribution!