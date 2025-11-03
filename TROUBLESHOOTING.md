# Troubleshooting Guide

This guide provides solutions to common issues encountered with The Word Alchemists Platform.

---

## Table of Contents

1.  Installation Issues
2.  Development Server Issues
3.  Sanity CMS Issues
4.  Build and Deployment Issues
5.  TypeScript and Code Issues

---

## 1. Installation Issues

**Issue: `pnpm: command not found`**

-   **Cause:** pnpm is not installed globally.
-   **Solution:** Run `npm install -g pnpm` and then verify with `pnpm --version`.

**Issue: `EACCES: permission denied` during installation**

-   **Cause:** Lack of administrative privileges.
-   **Solution (Windows):** Open PowerShell as an Administrator and run `pnpm install`.
-   **Solution (Mac/Linux):** Run `sudo pnpm install`.

**Issue: `ERR_PNPM_NO_MATCHING_VERSION`**

-   **Cause:** Your Node.js version is too old.
-   **Solution:** Check your version with `node --version`. You need v18.0.0 or higher. Please upgrade Node.js.

---

## 2. Development Server Issues

**Issue: `Port 3000 already in use`**

-   **Cause:** Another application is using port 3000.
-   **Solution 1:** Run the server on a different port: `pnpm dev -p 3001`.
-   **Solution 2 (Force Close):** Find and stop the process using port 3000. On Mac/Linux, use `lsof -ti:3000 | xargs kill -9`.

**Issue: Blank white page or a 500 server error**

-   **Step 1 (Check Console):** Open your browser's developer tools (F12) and check the Console tab for specific error messages.
-   **Step 2 (Clear Cache):** Stop the server, delete the `.next` folder in `apps/web`, and restart with `pnpm dev`.
-   **Step 3 (Check Environment):** Ensure your `apps/web/.env.local` file exists and `NEXT_PUBLIC_SANITY_PROJECT_ID` is set correctly.

**Issue: `Module not found: Can't resolve '@/...'`**

-   **Cause:** The path alias is not being resolved correctly.
-   **Solution:** Verify the `paths` configuration in `apps/web/tsconfig.json`. Then, stop the server, delete the `.next` folder, and restart.

---

## 3. Sanity CMS Issues

**Issue: CORS Error in the browser console**

-   **Error Message:** "Access to fetch at '...' has been blocked by CORS policy".
-   **Cause:** The frontend URL is not whitelisted in your Sanity project.
-   **Solution:**
    1.  Go to your Sanity project management page at `https://www.sanity.io/manage`.
    2.  Navigate to the "API" tab.
    3.  In the "CORS Origins" section, add a new origin.
    4.  Enter `http://localhost:3000` and allow credentials.
    5.  Save the changes.

**Issue: Content is not appearing on the website**

-   **Checklist:**
    -   Is the content **published** (not just drafted) in the Sanity Studio?
    -   Is the `projectId` in `apps/web/.env.local` correct?
    -   Is the `dataset` correct (it should be `production`)?
    -   Run the query in the "Vision" tool within your Sanity Studio to ensure it returns data.

**Issue: Images from Sanity are not loading**

-   **Cause:** The Sanity CDN hostname is not configured in the Next.js image configuration.
-   **Solution:** Check your `apps/web/next.config.js` file and ensure it contains:
    ```javascript
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
        },
      ],
    },
    ```

---

## 4. Build and Deployment Issues

**Issue: `Build failed - Type error`**

-   **Cause:** There are TypeScript errors in the code.
-   **Solution:** Run `pnpm type-check` from the root directory and fix all reported errors before attempting to build again.

**Issue: Vercel build fails but local build succeeds**

-   **Cause 1:** Incorrect build settings on Vercel.
    -   **Solution:** Ensure build settings are: `Build Command: cd apps/web && pnpm build`, `Output Directory: apps/web/.next`.
-   **Cause 2:** Missing environment variables on Vercel.
    -   **Solution:** Go to your Vercel project's "Settings" -> "Environment Variables" and add all the variables from your `.env.local` file.

**Issue: 404 errors on deployed pages**

-   **Cause:** Incorrect output directory or routing configuration on Vercel.
-   **Solution:** Verify the `Output Directory` is set to `apps/web/.next`. Redeploy the project with the correct settings.

---

## 5. TypeScript and Code Issues

**Issue: "Property 'X' does not exist on type 'Y'"**

-   **Cause:** The type definition for your data is incomplete or incorrect.
-   **Solution:** Open the corresponding type file in `apps/web/types/` (e.g., `diagram.ts`) and ensure all properties you are accessing are defined in the interface.

**Issue: ESLint or Prettier errors**

-   **Solution (Auto-fix):** Run `pnpm lint:fix` and `pnpm format` from the root directory to automatically fix many common issues.

---

## The "Nuclear" Option

If you are facing persistent, unresolvable issues, you can reset the entire workspace.

**Warning: This will delete all installed packages.**

```bash
# From the root of the project
rm -rf node_modules
rm -rf apps/web/node_modules
rm -rf packages/sanity-studio/node_modules
rm -rf apps/web/.next
rm -f pnpm-lock.yaml

# Reinstall everything from scratch
pnpm install

If problems persist, please open an issue in the repository.