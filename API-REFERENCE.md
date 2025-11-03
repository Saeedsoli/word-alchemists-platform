# API Reference

This document provides a reference for the main APIs, queries, and helper functions used in The Word Alchemists Platform.

---

## 1. Sanity Client

The Sanity client is the primary interface for interacting with the Sanity.io API.

**Location:** `apps/web/lib/sanity.ts`

### `client`
The configured Sanity client instance.
```typescript
import { client } from '@/lib/sanity';
const data = await client.fetch(query);

urlFor(source)

A helper function to build image URLs from Sanity image assets. It allows for transformations like resizing and cropping.

import { urlFor } from '@/lib/sanity';
const imageUrl = urlFor(diagram.image).width(800).url();

2. GROQ Queries

All GROQ queries are centralized for easy management.

Location: apps/web/lib/sanity.queries.ts
DIAGRAMS_QUERY

Fetches all documents of type diagram, ordered by the order field.

    Returns: An array of Diagram objects.

DIAGRAM_BY_SLUG_QUERY

Fetches a single diagram document that matches the provided slug.

    Parameters: $slug (string)
    Returns: A single Diagram object or null.

WORKSHOPS_QUERY

Fetches all documents of type workshop, ordered by the order field.

    Returns: An array of Workshop objects.

WORKSHOP_BY_SLUG_QUERY

Fetches a single workshop document that matches the provided slug.

    Parameters: $slug (string)
    Returns: A single Workshop object or null.

SECRET_CHAPTER_QUERY

Fetches the document of type chapter where the chapter number is 16.

    Returns: A single Chapter object or null.

3. Helper Functions

Utility functions used across the application.

Location: apps/web/lib/utils.ts
cn(...inputs)

A utility to merge Tailwind CSS classes, resolving conflicts and handling conditional classes.

    Usage: className={cn('base-styles', isActive && 'active-styles')}

formatDate(date)

Formats a date string or Date object into a Persian locale string (e.g., "۱ فروردین ۱۴۰۳").

    Usage: formatDate(diagram.publishedAt)

downloadFile(url, filename)

Triggers a file download in the browser.

    Usage: Used within the useDownload hook.

truncate(text, length)

Truncates a string to a specified length and appends '...'.

    Usage: truncate(description, 100)

toPersianNumber(num)

Converts a number or string of digits to Persian numerals.

    Usage: toPersianNumber(diagram.chapterNumber)

4. Custom Hooks

Reusable logic encapsulated in custom React hooks.

Location: apps/web/hooks/
useDownload()

Provides state and a function for handling file downloads.

    Returns:
        download(url, filename): An async function to trigger the download.
        isDownloading: A boolean state indicating if a download is in progress.
    Usage: Implemented in the DownloadButton component.

useSanityImage(source)

A hook to simplify generating different sizes of a Sanity image URL.

    Parameters: source (the Sanity image object).
    Returns:
        getUrl(width, height): Generates a URL with custom dimensions.
        getThumbnail(): Generates a small thumbnail URL.
        getFull(): Generates a high-resolution URL.
    Usage: Can be used in components to easily manage image sources.

5. Type Definitions

Core data structures of the application.

Location: apps/web/types/
interface Diagram

Defines the shape of a diagram object fetched from Sanity.

    Fields: _id, title, slug, chapterNumber, description, image, order, publishedAt.

interface Workshop

Defines the shape of a workshop object.

    Fields: _id, title, slug, chapterNumber, description, pdfFile, instructions, order.

interface Chapter

Defines the shape of a chapter object.

    Fields: _id, title, chapterNumber, subtitle, content, isSecret.

6. Constants

Centralized application constants.

Location: apps/web/lib/constants.ts

    SITE_CONFIG: Basic site information (name, description, URL).
    ROUTES: A map of application routes for consistent linking.
    SOCIAL_LINKS: URLs for social media profiles.
    BOOK_INFO: Static information about the book.

This reference provides a high-level overview. For detailed implementation, please refer to the source code.