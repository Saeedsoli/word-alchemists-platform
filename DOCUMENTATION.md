
# 📚 مستندات کامل The Word Alchemists

این فایل راهنمای دسترسی به تمام مستندات پروژه است.

---

## 🚀 شروع سریع

### برای شروع فوری:

1. [QUICK-START.md](./QUICK-START.md) - شروع در 3 قدم

### برای نصب کامل:

2. [INSTALLATION-GUIDE.md](./INSTALLATION-GUIDE.md) - راهنمای کامل نصب

---

## 📖 راهنماها

### برای توسعه‌دهندگان:

- [README.md](./README.md) - معرفی کلی پروژه
- [AGENT-INSTRUCTIONS.md](./AGENT-INSTRUCTIONS.md) - دستورات برای AI Agent

### برای Deploy:

- [DEPLOYMENT.md](./DEPLOYMENT.md) - راهنمای کامل Deploy
- [PRE-DEPLOY-CHECKLIST.md](./PRE-DEPLOY-CHECKLIST.md) - چک‌لیست قبل از Deploy

### برای مدیریت پروژه:

- [CHECKLIST.md](./CHECKLIST.md) - چک‌لیست کامل ۸۳ فایل
- [PROGRESS.md](./PROGRESS.md) - وضعیت پیشرفت
- [FINAL-SUMMARY.md](./FINAL-SUMMARY.md) - خلاصه نهایی

---

## 🏗️ ساختار فنی

### معماری:

Frontend (Next.js) ←→ API ←→ CMS (Sanity)

text


### فایل‌های کلیدی:

| فایل | مسیر | توضیح |
|------|------|-------|
| Layout اصلی | `apps/web/app/layout.tsx` | Root layout |
| صفحه اصلی | `apps/web/app/page.tsx` | Home page |
| Sanity Client | `apps/web/lib/sanity.ts` | اتصال به CMS |
| Schemas | `packages/sanity-studio/schemas/` | Content types |

---

## 🎯 مسیرهای اصلی

| URL | فایل | توضیح |
|-----|------|-------|
| `/` | `app/page.tsx` | صفحه اصلی |
| `/diagrams` | `app/diagrams/page.tsx` | لیست دیاگرام‌ها |
| `/diagrams/[slug]` | `app/diagrams/[slug]/page.tsx` | تک دیاگرام |
| `/workshops` | `app/workshops/page.tsx` | لیست کارگاه‌ها |
| `/workshops/[id]` | `app/workshops/[id]/page.tsx` | تک کارگاه |
| `/secret/chapter-16` | `app/secret/chapter-16/page.tsx` | فصل مخفی |

---

## 🔧 تنظیمات

### Environment Variables:

**Local:**
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=http://localhost:3000

Production:
همین متغیرها + تغییر SITE_URL
CORS (Sanity):

در Sanity Dashboard اضافه کنید:

    http://localhost:3000
    https://yoursite.vercel.app
    https://yoursite.com

📊 آمار پروژه

text

تعداد فایل‌ها:     83
خطوط کد:          ~8,000
صفحات:            8
کامپوننت‌ها:       18
Schemas:          3

🛠️ دستورات مهم

Bash

# نصب
pnpm install

# Development
pnpm dev                    # Next.js
pnpm dev:studio             # Sanity

# Build
cd apps/web
pnpm build

# Type Check
cd apps/web
pnpm type-check

# Deploy
cd packages/sanity-studio
pnpm sanity deploy

🐛 عیب‌یابی
مشکلات رایج:

1. Module not found

Bash

rm -rf node_modules
pnpm install

2. Port in use

Bash

pnpm dev -p 3001

3. Build fails

Bash

rm -rf .next
pnpm build

4. Sanity connection

    چک کنید .env.local
    چک کنید CORS settings
    چک کنید Project ID

📚 منابع خارجی

    Next.js Docs
    Sanity Docs
    Tailwind Docs
    TypeScript Docs
    Vercel Docs

✅ چک‌لیست‌ها
نصب:

    Node.js 18+ نصب شده
    pnpm 8+ نصب شده
    pnpm install اجرا شد
    .env.local تنظیم شد
    pnpm dev کار کرد

Deploy:

    Sanity اکانت ساخته شد
    Git repository ساخته شد
    Vercel متصل شد
    Environment variables تنظیم شدند
    Deploy موفق بود

آخرین بروزرسانی: 1404\08\12

نسخه: 1.0.0