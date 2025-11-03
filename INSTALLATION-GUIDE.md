# 📦 راهنمای نصب و راه‌اندازی

این راهنما برای agent یا هر کسی که می‌خواهد پروژه را نصب کند.

---

## پیش‌نیازها

قبل از شروع، اطمینان حاصل کنید که این‌ها نصب هستند:

- **Node.js** نسخه 18 یا بالاتر
- **pnpm** نسخه 8 یا بالاتر
- **Git** (برای clone و version control)

---

## مرحله 1: دانلود پروژه

اگر از Git استفاده می‌کنید:

```bash
git clone [repository-url]
cd word-alchemists-platform

مرحله 2: نصب Dependencies

pnpm install

زمان تقریبی: 2-5 دقیقه
حجم: ~400-500MB
مرحله 3: تنظیم Environment Variables
برای Next.js

فایل apps/web/.env.local بسازید:


NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000

برای Sanity Studio

فایل packages/sanity-studio/.env.local بسازید:

SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production

نکته: فعلاً می‌توانید مقادیر placeholder بگذارید
مرحله 4: اجرای Development Server
Terminal 1: Next.js

cd apps/web
pnpm dev

سایت روی http://localhost:3000 اجرا می‌شود
Terminal 2: Sanity Studio (بعداً)

cd packages/sanity-studio
pnpm dev

Studio روی http://localhost:3333 اجرا می‌شود
مرحله 5: Build برای Production

cd apps/web
pnpm build

اگر بدون خطا تمام شد، پروژه آماده deploy است.
دستورات مفید

# نصب dependencies
pnpm install

# اجرای development
pnpm dev

# چک کردن TypeScript
cd apps/web
pnpm type-check

# Build برای production
cd apps/web
pnpm build

# اجرای production build
cd apps/web
pnpm start

# فرمت کردن کد
pnpm format

# Lint کردن
pnpm lint

مشکلات رایج
1. خطای "Module not found"

# پاک کردن node_modules و نصب مجدد
rm -rf node_modules
pnpm install

2. خطای "Port already in use"

# اجرا روی port دیگر
pnpm dev -p 3001

3. خطای TypeScript

# پاک کردن cache
rm -rf .next
rm -rf apps/web/.next
pnpm build

ساختار پروژه

word-alchemists-platform/
├── apps/
│   └── web/              # Next.js Application
├── packages/
│   └── sanity-studio/    # Sanity CMS
└── [config files]

مراحل بعدی

بعد از نصب موفق:

    ✅ Setup Sanity (ساخت اکانت و پروژه)
    ✅ اضافه کردن محتوای نمونه
    ✅ تست همه صفحات
    ✅ Deploy به Vercel

مراجعه کنید به:

    DEPLOYMENT.md برای راهنمای deploy
    PRE-DEPLOY-CHECKLIST.md برای چک‌لیست قبل از deploy

نصب موفقیت‌آمیز بود؟ 🎉

اکنون می‌توانید شروع به توسعه کنید!