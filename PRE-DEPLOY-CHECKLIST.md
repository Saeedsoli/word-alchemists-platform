# ✅ چک‌لیست‌های کامل پروژه The Word Alchemists

---

## 📋 چک‌لیست 1: فایل‌های پروژه (78 فایل)

### Root Level (11 فایل)
- [ ] pnpm-workspace.yaml
- [ ] package.json
- [ ] tsconfig.base.json
- [ ] .gitignore
- [ ] .prettierrc.js
- [ ] README.md
- [ ] PROGRESS.md
- [ ] CHECKLIST.md
- [ ] PRE-DEPLOY-CHECKLIST.md
- [ ] DEPLOYMENT.md
- [ ] vercel.json

### apps/web/Config (7 فایل)
- [ ] apps/web/package.json
- [ ] apps/web/tsconfig.json
- [ ] apps/web/next.config.js
- [ ] apps/web/tailwind.config.ts
- [ ] apps/web/postcss.config.js
- [ ] apps/web/.env.example
- [ ] apps/web/.env.local

### apps/web/app/ (15 فایل)
- [ ] apps/web/app/layout.tsx
- [ ] apps/web/app/page.tsx
- [ ] apps/web/app/globals.css
- [ ] apps/web/app/loading.tsx
- [ ] apps/web/app/error.tsx
- [ ] apps/web/app/not-found.tsx
- [ ] apps/web/app/diagrams/page.tsx
- [ ] apps/web/app/diagrams/loading.tsx
- [ ] apps/web/app/diagrams/[slug]/page.tsx
- [ ] apps/web/app/diagrams/[slug]/loading.tsx
- [ ] apps/web/app/workshops/page.tsx
- [ ] apps/web/app/workshops/loading.tsx
- [ ] apps/web/app/workshops/[id]/page.tsx
- [ ] apps/web/app/secret/chapter-16/layout.tsx
- [ ] apps/web/app/secret/chapter-16/page.tsx

### apps/web/components/layout/ (4 فایل)
- [ ] apps/web/components/layout/Header.tsx
- [ ] apps/web/components/layout/Footer.tsx
- [ ] apps/web/components/layout/Navigation.tsx
- [ ] apps/web/components/layout/index.ts

### apps/web/components/ui/ (5 فایل)
- [ ] apps/web/components/ui/Button.tsx
- [ ] apps/web/components/ui/Card.tsx
- [ ] apps/web/components/ui/Badge.tsx
- [ ] apps/web/components/ui/Spinner.tsx
- [ ] apps/web/components/ui/index.ts

### apps/web/components/diagrams/ (5 فایل)
- [ ] apps/web/components/diagrams/DiagramCard.tsx
- [ ] apps/web/components/diagrams/DiagramGrid.tsx
- [ ] apps/web/components/diagrams/DiagramViewer.tsx
- [ ] apps/web/components/diagrams/DownloadButton.tsx
- [ ] apps/web/components/diagrams/index.ts

### apps/web/components/workshops/ (3 فایل)
- [ ] apps/web/components/workshops/WorkshopCard.tsx
- [ ] apps/web/components/workshops/PDFDownload.tsx
- [ ] apps/web/components/workshops/index.ts

### apps/web/components/shared/ (4 فایل)
- [ ] apps/web/components/shared/SEOHead.tsx
- [ ] apps/web/components/shared/CTA.tsx
- [ ] apps/web/components/shared/JsonLd.tsx
- [ ] apps/web/components/shared/index.ts

### apps/web/lib/ (5 فایل)
- [ ] apps/web/lib/sanity.ts
- [ ] apps/web/lib/sanity.queries.ts
- [ ] apps/web/lib/utils.ts
- [ ] apps/web/lib/constants.ts
- [ ] apps/web/lib/metadata.ts

### apps/web/types/ (4 فایل)
- [ ] apps/web/types/diagram.ts
- [ ] apps/web/types/workshop.ts
- [ ] apps/web/types/chapter.ts
- [ ] apps/web/types/index.ts

### apps/web/hooks/ (2 فایل)
- [ ] apps/web/hooks/useDownload.ts
- [ ] apps/web/hooks/useSanityImage.ts

### apps/web/public/ (3 فایل)
- [ ] apps/web/public/robots.txt
- [ ] apps/web/public/sitemap.xml
- [ ] apps/web/public/manifest.json

### packages/sanity-studio/Config (5 فایل)
- [ ] packages/sanity-studio/package.json
- [ ] packages/sanity-studio/tsconfig.json
- [ ] packages/sanity-studio/sanity.config.ts
- [ ] packages/sanity-studio/sanity.cli.ts
- [ ] packages/sanity-studio/.env.local

### packages/sanity-studio/schemas/ (5 فایل)
- [ ] packages/sanity-studio/schemas/index.ts
- [ ] packages/sanity-studio/schemas/documents/index.ts
- [ ] packages/sanity-studio/schemas/documents/diagram.ts
- [ ] packages/sanity-studio/schemas/documents/workshop.ts
- [ ] packages/sanity-studio/schemas/documents/chapter.ts

---

## 📋 چک‌لیست 2: مرحله 1 - بررسی فایل‌ها

### فایل‌های اصلی
- [ ] همه 78 فایل موجود است
- [ ] هیچ فایل خالی وجود ندارد
- [ ] ساختار پوشه‌ها صحیح است
- [ ] بک‌آپ از پروژه گرفته شده

### فایل‌های حساس
- [ ] .env.local در .gitignore است
- [ ] .env.example موجود است
- [ ] هیچ API key در کد commit نشده
- [ ] node_modules در .gitignore است

---

## 📋 چک‌لیست 3: مرحله 2 - نصب و Build Local

### نصب Dependencies
- [ ] pnpm install اجرا شد
- [ ] نصب بدون خطا انجام شد
- [ ] node_modules ساخته شد (~400-500MB)
- [ ] pnpm-lock.yaml بروز شد
- [ ] هیچ warning مهمی وجود ندارد

### Type Check
- [ ] cd apps/web && pnpm type-check اجرا شد
- [ ] بدون خطای TypeScript
- [ ] همه imports پیدا می‌شوند
- [ ] همه types صحیح هستند

### Build تست
- [ ] cd apps/web && pnpm build اجرا شد
- [ ] Build موفقیت‌آمیز بود
- [ ] .next folder ساخته شد
- [ ] هیچ خطایی در build نیست
- [ ] Bundle size معقول است

### Run Local
- [ ] pnpm dev اجرا شد
- [ ] سرور روی port 3000 اجرا شد
- [ ] هیچ خطایی در console نیست
- [ ] Hot reload کار می‌کند

---

## 📋 چک‌لیست 4: مرحله 3 - تنظیم Sanity

### ساخت اکانت و پروژه
- [ ] cd packages/sanity-studio اجرا شد
- [ ] pnpm create sanity@latest اجرا شد
- [ ] اکانت Sanity ساخته شد
- [ ] Project ساخته شد
- [ ] Dataset (production) ساخته شد
- [ ] Project ID دریافت شد

### تنظیم CORS
- [ ] Sanity Dashboard باز شد
- [ ] API → CORS Origins رفتم
- [ ] http://localhost:3000 اضافه شد
- [ ] https://yoursite.vercel.app اضافه می‌شود (بعداً)
- [ ] https://yoursite.com اضافه می‌شود (بعداً)

### Deploy Sanity Studio
- [ ] pnpm sanity deploy اجرا شد
- [ ] Studio name انتخاب شد (یکتا)
- [ ] Deploy موفق بود
- [ ] Studio URL دریافت شد
- [ ] می‌توان login کرد

### اضافه کردن محتوای نمونه
- [ ] حداقل 1 Diagram اضافه شد
- [ ] حداقل 1 Workshop اضافه شد
- [ ] Chapter 16 اضافه شد
- [ ] تمام فیلدها پر شده‌اند
- [ ] تصاویر آپلود شده‌اند

---

## 📋 چک‌لیست 5: مرحله 4 - تنظیم Environment Variables

### Local (.env.local)
- [ ] فایل apps/web/.env.local باز شد
- [ ] NEXT_PUBLIC_SANITY_PROJECT_ID وارد شد
- [ ] NEXT_PUBLIC_SANITY_DATASET=production تنظیم شد
- [ ] NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01 تنظیم شد
- [ ] NEXT_PUBLIC_SITE_URL=http://localhost:3000 تنظیم شد
- [ ] فایل ذخیره شد

### Production (آماده برای Vercel)
- [ ] لیست متغیرها آماده است
- [ ] مقادیر production جداگانه نوشته شد
- [ ] SITE_URL به domain واقعی تغییر خواهد کرد

---

## 📋 چک‌لیست 6: مرحله 5 - تست کامل Local

### تست صفحات
- [ ] http://localhost:3000/ باز شد - Home page بدون خطا
- [ ] http://localhost:3000/diagrams باز شد - لیست دیاگرام‌ها نمایش داده شد
- [ ] http://localhost:3000/diagrams/[slug] باز شد - صفحه تک دیاگرام کار کرد
- [ ] http://localhost:3000/workshops باز شد - لیست ورکشاپ‌ها نمایش داده شد
- [ ] http://localhost:3000/workshops/[id] باز شد - صفحه تک ورکشاپ کار کرد
- [ ] http://localhost:3000/secret/chapter-16 باز شد - فصل مخفی نمایش داده شد

### تست داده‌ها از Sanity
- [ ] دیاگرام‌ها لود شدند
- [ ] تصاویر نمایش داده شدند
- [ ] ورکشاپ‌ها لود شدند
- [ ] فصل 16 لود شد
- [ ] Portable Text render شد

### تست کامپوننت‌ها
- [ ] Header نمایش داده شد
- [ ] Footer نمایش داده شد
- [ ] Navigation کار کرد
- [ ] Buttons کار کردند
- [ ] Download button کار کرد
- [ ] Loading states نمایش داده شدند

### تست Responsive
- [ ] Mobile (375px) تست شد - صحیح نمایش داده شد
- [ ] Tablet (768px) تست شد - صحیح نمایش داده شد
- [ ] Desktop (1440px) تست شد - صحیح نمایش داده شد
- [ ] منوی موبایل باز و بسته شد

### تست مرورگرها
- [ ] Chrome تست شد - کار کرد
- [ ] Firefox تست شد - کار کرد
- [ ] Safari تست شد - کار کرد (اگه دسترسی داری)
- [ ] Edge تست شد - کار کرد

---

## 📋 چک‌لیست 7: مرحله 6 - بررسی SEO و Performance

### SEO
- [ ] public/robots.txt وجود دارد
- [ ] public/sitemap.xml وجود دارد
- [ ] public/manifest.json وجود دارد
- [ ] Meta tags در همه صفحات هست
- [ ] Open Graph tags موجود است
- [ ] Twitter cards موجود است
- [ ] Alt text برای همه تصاویر وجود دارد

### Performance
- [ ] Images از next/image استفاده می‌کنند
- [ ] Lazy loading فعال است
- [ ] Console هیچ error ندارد
- [ ] Console هیچ warning مهم ندارد
- [ ] Bundle size < 500KB است (first load)

### Accessibility
- [ ] Tab navigation کار می‌کند
- [ ] Tab order منطقی است
- [ ] Aria labels مهم اضافه شده
- [ ] Contrast ratio مناسب است
- [ ] Focus states قابل مشاهده است

---

## 📋 چک‌لیست 8: مرحله 7 - آماده‌سازی Git

### Git Setup
- [ ] git init اجرا شد
- [ ] .gitignore چک شد
- [ ] git add . اجرا شد
- [ ] git commit -m "Initial commit: Word Alchemists Platform" اجرا شد
- [ ] Branch اصلی main است

### GitHub
- [ ] Repository در GitHub ساخته شد
- [ ] git remote add origin [URL] اجرا شد
- [ ] git push -u origin main اجرا شد
- [ ] README.md در GitHub نمایش داده می‌شود

---

## 📋 چک‌لیست 9: مرحله 8 - آماده‌سازی Vercel

### Vercel Account
- [ ] اکانت Vercel ساخته شد یا login شدم
- [ ] GitHub به Vercel متصل شد
- [ ] دسترسی به repository تایید شد

### Environment Variables آماده
- [ ] NEXT_PUBLIC_SANITY_PROJECT_ID کپی شد
- [ ] NEXT_PUBLIC_SANITY_DATASET یادداشت شد
- [ ] NEXT_PUBLIC_SANITY_API_VERSION یادداشت شد
- [ ] NEXT_PUBLIC_SITE_URL آماده است

### Build Settings آماده
- [ ] Framework: Next.js یادداشت شد
- [ ] Build Command: cd apps/web && pnpm build یادداشت شد
- [ ] Output Directory: apps/web/.next یادداشت شد
- [ ] Install Command: pnpm install یادداشت شد
- [ ] Node Version: 18.x یادداشت شد

---

## 📋 چک‌لیست 10: مرحله 9 - چک‌لیست نهایی قبل از Deploy

### کد
- [ ] git status چک شد - همه فایل‌ها commit شده
- [ ] TODO ها چک شدند - هیچ TODO مهمی نمانده
- [ ] console.log ها چک شدند - هیچ کدام اضافی نیست
- [ ] کدهای commented out حذف شدند
- [ ] imports غیرضروری حذف شدند

### محتوا
- [ ] حداقل 3 دیاگرام در Sanity وجود دارد
- [ ] حداقل 2 ورکشاپ در Sanity وجود دارد
- [ ] فصل 16 کامل است
- [ ] همه تصاویر با کیفیت خوب هستند
- [ ] همه متن‌ها بدون غلط املایی هستند

### تست نهایی
- [ ] pnpm build در local موفق بود
- [ ] همه صفحات تست شدند
- [ ] Mobile responsive تست شد
- [ ] Performance تست شد
- [ ] SEO تست شد
- [ ] Console بدون error است

### مستندات
- [ ] README.md کامل و به‌روز است
- [ ] DEPLOYMENT.md موجود است
- [ ] CHECKLIST.md موجود است
- [ ] PRE-DEPLOY-CHECKLIST.md موجود است

### بک‌آپ
- [ ] بک‌آپ کامل از پروژه گرفته شد
- [ ] بک‌آپ از Sanity data گرفته شد (export)
- [ ] لیست credentials در جای امن ذخیره شد
- [ ] اطلاعات دسترسی یادداشت شدند

---

## 📋 چک‌لیست 11: آماده Deploy!

### گام 1: Deploy Sanity Studio
- [ ] cd packages/sanity-studio
- [ ] pnpm sanity deploy اجرا شد
- [ ] Studio name وارد شد
- [ ] Deploy موفق بود
- [ ] URL Studio تست شد

### گام 2: Deploy Next.js به Vercel
- [ ] vercel.com باز شد
- [ ] "New Project" کلیک شد
- [ ] Repository انتخاب شد
- [ ] Environment Variables وارد شدند
- [ ] "Deploy" کلیک شد

### گام 3: تست Production
- [ ] Deploy تمام شد
- [ ] URL production باز شد
- [ ] همه صفحات کار می‌کنند
- [ ] تصاویر لود می‌شوند
- [ ] Sanity متصل است
- [ ] هیچ خطایی نیست

---

## 📋 چک‌لیست 12: چک‌لیست نهایی Deploy

- [ ] Sanity Studio deploy شده
- [ ] Environment variables تنظیم شده
- [ ] Vercel deploy موفق
- [ ] محتوای نمونه اضافه شده
- [ ] تمام صفحات کار می‌کنند
- [ ] Images لود می‌شوند
- [ ] SEO تست شده
- [ ] Mobile responsive
- [ ] Domain تنظیم شده (اختیاری)

---

## ✅ تاییدیه نهایی

### پیش از Deploy
- [ ] همه 78 فایل موجود است
- [ ] Build local موفق است
- [ ] Sanity آماده است
- [ ] Environment Variables آماده است
- [ ] Git push شده است
- [ ] تست‌ها موفق بوده‌اند
- [ ] مستندات کامل است
- [ ] بک‌آپ گرفته شده

### بعد از Deploy
- [ ] Production URL کار می‌کند
- [ ] همه صفحات در production کار می‌کنند
- [ ] تصاویر در production لود می‌شوند
- [ ] Sanity در production متصل است
- [ ] Console بدون error است
- [ ] Performance مناسب است
- [ ] SEO صحیح است
- [ ] Mobile responsive است

---

**تاریخ بررسی:** __________

**بررسی شده توسط:** __________

**امضا:** __________

🎉 **پروژه آماده و Deploy شده است!**