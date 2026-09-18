# D'Kingsfems Global Ltd — "Coming Soon" Holding Page

An ultra-premium, minimalist one-page holding site for **dkingsfemsglobal.com** built in pure semantic HTML5, modern CSS3, and vanilla JavaScript.

This placeholder site secures brand presence, allows search engines to index the domain from day one, and captures early interest while the full 15-page platform is being developed.

---

## 🚀 Features

- **Ultra-Premium & Minimalist Aesthetic**:
  - Deep celestial midnight palette (`#030712` cosmos navy) with subtle atmospheric lighting.
  - Architectural typography using Google Fonts `Cinzel` & `Plus Jakarta Sans`.
  - Refined frosted glass card with 1px gold hairline borders and champagne highlights.
- **Enlarged Ambient Gold Airplane**:
  - A 130px gold aerodynamic luxury jetliner cruising smoothly along a curved climb trajectory (22s loop duration).
  - Subtle gold engine glow and trailing flight arc.
  - Automatic `prefers-reduced-motion` detection.
- **Architectural Minimalist Countdown**:
  - Sleek, unboxed numbers with subtle champagne gold colons and spaced uppercase labels (`DAYS`, `HOURS`, `MINS`, `SECS`).
- **Private Access Email Capture**:
  - Seamless capsule signup bar with Formspree compatibility and local storage safety fallback.
- **Understated Contact Bar**: Direct click-to-email and phone channels with discreet social media icons.
- **Day-One SEO Ready**: Title, OpenGraph cards, Twitter preview, `robots.txt`, and `sitemap.xml`.

---

## 📁 Project Structure

```
.
├── index.html          # Main semantic HTML5 single-screen page
├── css/
│   └── style.css       # Responsive styling, luxury tokens & CSS airplane animations
├── js/
│   └── script.js       # Countdown timer, email validation & lead capture
├── assets/
│   ├── logo.png        # Official 3D D'Kingsfems Global Ltd logo
│   ├── hero-bg.png     # Airport terminal & takeoff background image
│   └── favicon.svg     # Gold airplane & globe vector favicon
├── robots.txt          # Search engine indexing directives
├── sitemap.xml         # XML sitemap for initial domain indexing
└── README.md           # Documentation & deployment guide
```

---

## ⚙️ Email Forwarding to `info@dkingsfemsglobal.com`

All form signups are routed directly to **`info@dkingsfemsglobal.com`** via FormSubmit AJAX endpoint:

- **Direct Delivery**: Each submission triggers an instant email notification to `info@dkingsfemsglobal.com` with the subscriber's email and timestamp.
- **First-Time Activation**: The very first time a submission is sent, FormSubmit delivers an activation email to `info@dkingsfemsglobal.com`. Simply click "Activate" once, and all future signups will be delivered seamlessly.
- **Zero Data Loss**: Every submission is simultaneously backed up in the browser's `localStorage` (`dkingsfems_signups`), so no lead is ever lost.

---

## 🌐 Deployment Instructions

### Option A: Vercel (Recommended)
1. Push this directory to a GitHub repository or drag-and-drop the folder onto [vercel.com](https://vercel.com).
2. Framework Preset: **Other** (no build command needed).
3. Output Directory: `./` (root).
4. Add custom domain `dkingsfemsglobal.com` in Vercel Project Settings > Domains.

### Option B: Netlify
1. Log in to [netlify.com](https://netlify.com).
2. Drag and drop the project folder directly into Netlify Drop.
3. In Domain Settings, add `dkingsfemsglobal.com`.

### Option C: GitHub Pages
1. Push code to a GitHub repository.
2. In Repository Settings > Pages, select `Deploy from a branch` and choose `main` / `root`.
