# 🚀 راهنمای Deploy پروژه

## پیش‌نیازها

- [x] اکانت GitHub
- [x] اکانت Vercel
- [x] اکانت Sanity.io
- [x] Node.js 18+
- [x] pnpm 8+

---

## مرحله 1: آماده‌سازی Sanity

### 1.1. ساخت پروژه Sanity

```bash
cd packages/sanity-studio
pnpm create sanity@latest

پاسخ به سوالات:

    Project name: word-alchemists
    Dataset: production
    Template: Clean project

1.2. Deploy Sanity Studio

pnpm sanity deploy

1.3. کپی کردن Project ID

pnpm sanity manage

Project ID را کپی کن.

مرحله 2: تنظیم Environment Variables
2.1. Local Development

فایل apps/web/.env.local بساز:

NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000

2.2. Production (Vercel)

در Vercel Dashboard:

    Settings → Environment Variables
    اضافه کردن:
        NEXT_PUBLIC_SANITY_PROJECT_ID
        NEXT_PUBLIC_SANITY_DATASET
        NEXT_PUBLIC_SANITY_API_VERSION
        NEXT_PUBLIC_SITE_URL

مرحله 3: Deploy به Vercel
3.1. اتصال به GitHub

    1. کد را به GitHub push کن
    2. به Vercel.com برو
    3. "Import Project" کلیک کن
    4. Repository را انتخاب کن

3.2. تنظیمات Build

Framework Preset: Next.js
Build Command: cd apps/web && pnpm build
Output Directory: apps/web/.next
Install Command: pnpm install

3.3. Environment Variables

همه متغیرهای قسمت 2.2 را اضافه کن.
3.4. Deploy

"Deploy" کلیک کن!

مرحله 4: اضافه کردن محتوا

    1. به Sanity Studio برو: https://your-studio-name.sanity.studio
    2. Login کن
    3. محتوا اضافه کن:
       . Diagrams
       . Workshops
       . Chapter 16

مرحله 5: تنظیمات Domain

5.1. Domain سفارشی

در Vercel:

    1. Settings → Domains
    2. Add Domain
    3. DNS را تنظیم کن

5.2. SSL

Vercel به صورت خودکار SSL فعال می‌کند.

چک‌لیست نهایی

- [ ] Sanity Studio deploy شده
- [ ] Environment variables تنظیم شده
- [ ] Vercel deploy موفق
- [ ] محتوای نمونه اضافه شده
- [ ] تمام صفحات کار می‌کنند
- [ ] Images لود می‌شوند
- [ ] SEO تست شده
- [ ] Mobile responsive
- [ ] Domain تنظیم شده

مشکلات رایج

Build می‌افته

# Local تست کن
pnpm build

# Logs چک کن
vercel logs

Sanity وصل نمیشه

# .env.local چک کن
# CORS تنظیمات Sanity چک کن

Images نمایش داده نمیشن

# next.config.js چک کن
# Sanity CDN در remotePatterns

پشتیبانی

. Vercel Docs: https://vercel.com/docs
. Sanity Docs: https://www.sanity.io/docs
. Next.js Docs: https://nextjs.org/docs




