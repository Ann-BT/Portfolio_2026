# Portfolio 2026 Project Guidelines & Conventions

## 1. Project Architecture & Stack
- **Framework:** Next.js 16 (App Router, Turbopack, static export `output: 'export'`) + TypeScript.
- **Styling & Motion:** CSS Modules (Vanilla CSS Swiss-grid system) + Framer Motion.
- **Backend & Realtime Data:** Supabase (`src/lib/supabase.ts`) — PostgreSQL `messages` table with WebSocket `postgres_changes` subscription for cross-device sync.
- **Deployment:** GitHub Pages via `gh-pages` package (`npm run build` -> `npx gh-pages -d out ...`).

## 2. Navigation & Branding
- **Navbar Links:** Home (`/`), Projects (`/projects`), Research (`/research`), Interests (`/interests`), Contact (`/#contact`). Do NOT include "About".
- **Naming:** "The Vault" is renamed to "Interests".
- **Avatar:** Circular logo avatar (`media__1786171329994.png`) sits next to "MERLIN" text on navbar.

## 3. Hero Section & Personal Metadata
- **Location:** "Ha Noi, Viet Nam".
- **Education:** Bachelor Graduate in Cyber Security from University of Science and Technology of Hanoi (USTH) with Classification: Very Good.
- **Job Status:** Open for opportunities in Blue Team Cybersecurity, Web Development, or IT/Cyber roles.
- **Download CV Button:** Linked to `/CV_Bui_Truong_An_IT_Engineer.pdf` (and `/cv.pdf`).
- **Photo Stack Interaction:** Drag-to-cycle ONLY using Framer Motion (no tap/click events). Reconcile Framer Motion key prop using `pic` (image URL string), never array index `idx`.

## 4. Terminal Overlay (`merlin@magicpot`)
- **Prompt / Header Title:** `merlin@magicpot:~$` and `merlin@magicpot: ~`.
- **Supported Commands:** `login`, `logout`, `exit`, `clear` ONLY.
- **Help Menu:** Do NOT display `help` menu or banner text ("PEICHANGANN..."). Keep private.
- **Admin Password:** Hash validation for `Merlin` / `Vannhucu12`. Toggles `merlin_admin_logged_in` in `localStorage` and dispatches `admin-login-changed`.

## 5. Skills Section ("My Inventory")
- **Section Heading:** "My Inventory".
- **Categories:** OS & Tools, Programming & Web, Networking, Security.
- **Grid Layout:** 2 columns on desktop, 1 column on mobile.

## 6. Projects & Research
- **Featured Projects:** SIDERIS (`2026-06`), PhishShield Extension (`2026-01`), This Portfolio (`2026-08`). Dates MUST match actual GitHub creation dates.
- **Markdown Renderer (`/projects/[slug]/page.tsx`):** Supports `###`, `####`, Markdown tables (`|`), code blocks (`~~~`), inline code, bold, lists.
- **Empty States:** Research page & Interests page display clean dashed-border empty states when under construction.

## 7. Deploy & Build Workflow
- Always verify build with `npm run build`.
- Deploy using `npx gh-pages -d out` (configured to deployment remote repository).
- Push commits to `main` branch.

