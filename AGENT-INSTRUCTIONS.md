# 🤖 دستورالعمل‌ها برای Agent

این فایل برای AI Agent است که قرار است پروژه را اجرا کند.

---

## خلاصه پروژه

**نام:** The Word Alchemists Platform
**نوع:** Headless CMS + Next.js Website
**تعداد فایل‌ها:** 79
**وضعیت:** آماده برای نصب و اجرا

---

## معماری
Frontend: Next.js 14 + TypeScript + Tailwind CSS
CMS: Sanity.io (Headless)
Deployment: Vercel
Monorepo: pnpm workspaces


---

## دستورات اصلی

### نصب

```bash
pnpm install

اجرا (Development)

# Terminal 1
cd apps/web
pnpm dev

# Terminal 2 (بعداً)
cd packages/sanity-studio
pnpm dev

Build
cd apps/web
pnpm build

Type Check

cd apps/web
pnpm type-check

Environment Variables مورد نیاز
apps/web/.env.local

NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000

packages/sanity-studio/.env.local

SANITY_STUDIO_PROJECT_ID=
SANITY_STUDIO_DATASET=production

صفحات اصلی

بعد از اجرا، این URL ها باید کار کنند:

    http://localhost:3000/ - صفحه اصلی
    http://localhost:3000/diagrams - لیست دیاگرام‌ها
    http://localhost:3000/workshops - لیست کارگاه‌ها
    http://localhost:3000/secret/chapter-16 - فصل مخفی

چک‌لیست اجرا

    pnpm install اجرا شد
    node_modules ساخته شد
    .env.local فایل‌ها ساخته شدند
    pnpm dev اجرا شد
    http://localhost:3000 باز شد
    صفحات بدون خطا لود شدند

اگر خطا رخ داد
خطای نصب

# پاک کردن و نصب مجدد
rm -rf node_modules pnpm-lock.yaml
pnpm install

خطای Build

# پاک کردن cache
rm -rf .next apps/web/.next
cd apps/web
pnpm build

خطای TypeScript
cd apps/web
pnpm type-check
# خطاها را بررسی و رفع کنید

فایل‌های مهم
فایل	توضیح
package.json (root)	اسکریپت‌های اصلی
pnpm-workspace.yaml	تنظیمات workspace
apps/web/package.json	Dependencies Next.js
apps/web/.env.local	متغیرهای محیطی
DEPLOYMENT.md	راهنمای deploy
CHECKLIST.md	چک‌لیست کامل
مراحل بعدی

    ✅ نصب و اجرای موفق
    ⏳ Setup Sanity
    ⏳ اضافه کردن محتوا
    ⏳ Deploy

لینک‌های مفید

    Next.js Docs: https://nextjs.org/docs
    Sanity Docs: https://www.sanity.io/docs
    Vercel Docs: https://vercel.com/docs
    pnpm Docs: https://pnpm.io

تماس

اگر مشکلی پیش آمد که حل نشد، به این فایل‌ها مراجعه کنید:

    README.md - مستندات کلی
    INSTALLATION-GUIDE.md - راهنمای نصب دقیق
    DEPLOYMENT.md - راهنمای deploy
    PRE-DEPLOY-CHECKLIST.md - چک‌لیست deploy

موفق باشید! 🚀