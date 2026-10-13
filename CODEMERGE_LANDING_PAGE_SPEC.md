# CodeMerge — Premium Landing Page Website

> **MASTER BUILD SPECIFICATION FOR AN AI CODING AGENT**
>
> Read this entire file before editing or generating code. Treat it as the source of truth for the website's appearance, content, user experience, architecture, and acceptance criteria. Build a working, polished website—not a wireframe, not a collection of unrelated templates, and not just a written plan.

**Project:** CodeMerge — IT & Digital Services  
**Website type:** One-page business/agency landing page  
**Brand location:** City of Manila, Metro Manila, Philippines  
**Required frontend:** React.js + Vite + JavaScript or TypeScript (prefer TypeScript)  
**Required backend:** Node.js + Express.js  
**Styling:** Tailwind CSS (preferred) + custom CSS for carefully designed effects  
**Do not use:** Next.js, WordPress, PHP, Bootstrap-looking templates, unnecessary CMS, or a multi-page marketing site.

---

## 0. Agent execution contract — READ FIRST

You are acting as a **senior frontend engineer, creative web designer, UX designer, and Node.js developer**. Your job is to **design and code** a complete CodeMerge business landing page that feels like a professionally art-directed digital agency website.

### Non-negotiable results

1. **Actually write the code** for the working website, with clean project structure and runnable scripts. Do not respond only with suggestions, pseudocode, or a mockup.
2. Build **ONE landing page** at `/`. The navigation scrolls to page sections using anchor IDs. Do not create separate About, Services, Portfolio, or Contact pages.
3. Achieve **premium visual quality**: thoughtful typography, high-quality spacing, strong hierarchy, unique visual details, subtle animations, polished buttons/cards, and excellent mobile layout.
4. Use **React (Vite)** for UI and **Node.js/Express** for API. Do not use Next.js.
5. Use meaningful **real CodeMerge copy** provided here. No generic Lorem Ipsum, fake testimonials, fake awards, fake client logos, invented business metrics, or vague AI filler.
6. Make every interaction functional: navigation, mobile menu, buttons, anchor scrolling, FAQs, contact form validation, feedback states, and footer links.
7. The website is a **proposed business concept**. Do not falsely state CodeMerge has obtained a DTI certificate, business permit, or other legal approval; do not show fabricated certificates.
8. Optimize accessibility, responsive behavior, loading performance, and code readability.
9. If assets (logo, contact email, actual project screenshots) are not supplied, create tasteful CSS/SVG graphics, use clear editable configuration values, and avoid pretending missing details are real.
10. Before finishing, **run the project, fix errors, and validate production build** where the environment permits. Do not leave visual placeholders like giant empty blocks or broken images.

### Core instruction

**Prioritize design and finish.** Make it look like a distinctive, launch-quality 2026 tech agency landing page—not a school project, an admin dashboard, a generic AI-generated template, or a government registration tutorial.

---

## 1. Business identity and factual context

| Field | Value |
| --- | --- |
| Brand | **CodeMerge** |
| Business description | IT and Digital Services |
| Business model | Proposed single proprietorship |
| Location | City of Manila, Philippines |
| Audience | Students, individuals, freelancers, startups, and small businesses |
| Main goal | Attract qualified project inquiries and communicate offered services |
| Primary conversion | Visitor clicks **Start a Project** and submits an inquiry |
| Secondary conversion | Visitor explores services, process, and sample work |
| Default public-facing website language | English, written in clear and friendly professional tone |

### Actual business offerings

- Website development and responsive landing pages
- Basic software solutions and tailored digital tools
- Digital design and visual/web interface design
- Computer-related services and technical support

### Business positioning

**CodeMerge turns ideas into practical digital experiences.** The site should feel credible, approachable, creative, technically competent, and useful to individuals or small businesses looking for digital help.

### Important source-document notes

- **CodeMerge** is the correct brand. Ignore conflicting naming such as “LuntianLoop” in old paperwork.
- “CodeMerge Digital Solutions” can be a **descriptive marketing phrase**, but do not represent it as a verified registered DTI business name.
- The documented names **Manganti, Ardy T.; Menor, John Kerby V.; Tomol, Patrick B.** are the school documentation contributors. **Do not automatically label all three as owners, co-founders, or employees.** Single proprietorship has one legal owner; ownership details are not verified.
- The course **BSIT 4-1** and the documentation date **September 22, 2026** belong to academic documentation and should **not appear prominently on the public business landing page** unless explicitly requested.
- DTI/Manila registration processes are **not** landing page content. This is a marketing website for CodeMerge's services.

---

## 2. Creative direction — exact art direction

### The feeling

Design a **premium modern creative-tech studio** landing page: clean editorial composition, refined dark surfaces, bright electric-blue highlights, highly legible typography, restrained glow effects, immaculate spacing, and custom code-inspired geometric imagery.

Think: **premium digital product design + polished software studio + boutique agency.** It should feel confident and carefully crafted, but not loud, cluttered, overly futuristic, or “hacker-style.”

### Must-have visual qualities

- A memorable hero with an oversized headline, intentional line breaks, a compact pill eyebrow, two beautiful CTAs, and a custom-built mock browser/product illustration.
- Dark-mode-first design with midnight graphite backgrounds, subtle indigo/cyan gradient accents, and selective lighter surface variation to break up long sections.
- Crisp modern typography with strong contrast between huge headlines, concise body copy, micro-labels, and numerical process labels.
- Decorative coding motifs **only where useful**: merging brackets, connected nodes, fine grid texture, light trails, controlled geometric lines.
- Custom service cards with distinct, relevant icons/visual motifs—do not repeat the same generic icon four times.
- Elegant interactions: lift, light sweep, gradient border, soft reveal, underline slide, icon movement. **Never** animate everything continuously.
- Section transitions that feel deliberate: rhythm of open spacing, subtle borders, micro-labels, and contrast.
- Visually excellent at **1440px desktop** and **390px mobile**, not just at one screen width.

### Avoid at all costs

- Stock corporate people shaking hands, anonymous office imagery, fake staff portraits.
- Rainbows of neon, enormous glow blobs, overdone glassmorphism, excessive blurs.
- Generic cookie-cutter hero that shows only a title centered in an empty screen.
- Giant emoji icons, default browser buttons, unstyled cards, mismatched corners/shadows.
- Endless paragraphs, crowded grids, tiny unreadable gray text, repetitive feature cards.
- Fake verified reviews, client logos, testimonials, statistics, success claims, or portfolio work.
- Scroll-jacking, heavy parallax, unnecessary carousels, low-contrast text, gimmicky cursor effects.

---

## 3. Design tokens — implement consistently

Use CSS variables or Tailwind theme extensions. Approximate values can be tuned for superior visual balance, but remain within this visual direction.

### Color palette

```css
:root {
  --bg: #080D18;            /* primary canvas: midnight ink */
  --bg-elevated: #0E1729;   /* section variation */
  --surface: #111E31;       /* cards */
  --surface-hover: #16253B;
  --line: rgba(173, 194, 226, 0.14);
  --text-primary: #F6F9FF;
  --text-secondary: #A9B7CC;
  --text-muted: #8192AB;
  --brand: #5475FF;         /* rich electric periwinkle-blue */
  --brand-light: #8D9DFF;
  --accent: #36D6DF;        /* minimal teal/cyan accent */
  --success: #5AD4A6;
  --error: #FF7E93;
}
```

- Primary hero gradient: `linear-gradient(115deg, #F6F9FF 10%, #AFC2FF 62%, #64DDE6 100%)` on a **few** headline words only.
- Button gradient: `linear-gradient(110deg, #5577FF, #6D66F7)` or polished solid blue, not both in every component.
- Use blue/cyan as **accents**, not as huge areas of text.
- Use thin strokes and low-opacity borders instead of strong outlined boxes everywhere.

### Typography

- Heading font: **Space Grotesk** (preferred) or **Manrope**.
- Body font: **Inter** (preferred).
- Load with performance-aware font strategy; always provide system fallbacks.
- Hero headline: desktop `clamp(3.7rem, 6vw, 6.6rem)`, mobile `clamp(2.65rem, 11vw, 4rem)`, weight 600–700, tight letter-spacing around `-0.055em`, line height 1.02–1.1.
- Section headline: desktop 44–64px; mobile 32–42px. Avoid making every section heading identical in composition.
- Body text: 16–18px with 1.6–1.75 line height.
- Micro-labels: 11–13px, uppercase or letter-spaced, used sparingly.
- Maximum paragraph width: ~54–66 characters for readability.

### Layout system

- Container max width: **1200–1280px** (e.g. 1240px) with intentional side gutters.
- Mobile horizontal gutter: **20–24px**; tablet: 32–40px; desktop: 48px+ when space allows.
- Main section vertical padding: desktop **100–136px**, tablet 80–100px, mobile 68–88px.
- Spacing based on 8px rhythm, with optical adjustments.
- Border radius: button 12–14px; cards 20–24px; hero visual 22–28px; pills full rounded.
- Card shadows: mostly depth through contrast; modest blue tinted ambient shadow on select hover/hero elements.
- Hairline dividers: rgba white/blue at ~10–15% opacity.

### Image and graphical direction

Do **not** depend on externally hotlinked hero photos. Instead create a **bespoke vector/CSS/HTML hero composition**: a beautifully art-directed browser window or IDE/product board with authentic-looking UI, connected merge lines, small floating labeled chips, and layered panels. This can be built with React, Tailwind, SVG, and CSS. It must scale and rearrange on mobile without clipping.

Icons: `lucide-react`, consistently sized (20–24px). No mixed icon packs. Build a simple custom **merge-brackets** logo glyph using inline SVG and render **CodeMerge** wordmark beside it.

---

## 4. One-page information architecture

**Public route:** `/` only. Optional `/api/*` routes belong to Express and are not marketing pages. Section navigation uses anchors, not React Router.

Required order:

1. **Navbar** (`#top`)
2. **Hero** (`#home`)
3. **Capabilities ribbon** (within/below hero)
4. **Services** (`#services`)
5. **Selected work / Concept gallery** (`#work`)
6. **How we work** (`#process`)
7. **About / Why CodeMerge** (`#about`)
8. **FAQ** (`#faq`)
9. **Contact / Conversion CTA** (`#contact`)
10. **Footer**

The page should be **one cohesive scrolling story**. Buttons route to the right section, not stub links, empty pages, or `href="#"`.

### Navigation labels

`CodeMerge` logo (goes to top) · `Services` · `Work` · `Process` · `About` · `Contact` · `Start a Project` (primary CTA)

- Desktop: logo left; links center/right; CTA far right.
- Mobile: logo + accessible menu trigger; mobile overlay or dropdown with working anchors and visible CTA.
- Sticky/semi-transparent header after scroll, with thin border and appropriate background blur. The page top may be more open/transparent.
- Scroll anchor destination accounts for sticky header (`scroll-margin-top`).
- Smooth anchor scrolling **unless** the user requests reduced motion.
- Active section indicators are optional if implemented correctly and without jitter.

---

## 5. Detailed visual and content specification per section

### 5.1 NAVBAR — polished and minimal

**Composition**

- Custom small bracket/merge mark + “CodeMerge” in a confident geometric wordmark.
- 72–80px height desktop, 64–72px mobile.
- On desktop, navigation links with a delicate hover underline or text-color transition.
- Primary CTA: filled brand-blue rounded button with `ArrowUpRight` icon, 44–48px touch height.
- Keep header free of unnecessary badges and social icons.
- Desktop navigation collapses around 900–1024px as needed, no clipping or awkward wrapping.

### 5.2 HERO — highest design priority

**Desktop composition:** wide two-column layout (~53% copy / 47% custom UI mockup). The left text block feels editorial. Right side is an original visual that demonstrates the studio's creative/technical ability. Background has a fine dot/grid texture near the mockup and 1–2 subtle radial color glows.

**Hero eyebrow:**

`DIGITAL IDEAS, THOUGHTFULLY BUILT` with a small blue/cyan accent dot and quiet capsule outline.

**Exact preferred headline:**

> **We build digital**  
> **experiences that**  
> **just click.**

Use the blue-to-cyan text gradient on **“just click.”** only. Keep line breaks visually intentional on desktop, adapt naturally on mobile.

**Supporting copy:**

> From standout websites to practical digital solutions, CodeMerge helps turn your ideas into polished experiences—designed with purpose and built to work.

**Buttons:**

- Primary: `Start a Project` with diagonal arrow → `#contact`.
- Secondary: `Explore Our Services` with subtle arrow → `#services`.

**Small support line:** `Web Development  /  Digital Design  /  Software Solutions` (do not invent a trust score or client count).

**Hero visual — build, don't just describe:**

A dark, high-fidelity floating browser/workspace card:

- Browser header with three small dots, a fake URL reading `codemerge.studio / preview` **as a design element, not a real website claim**.
- Inner UI with bold “Build better, together.” concept label; 2–3 small visual layout cards, a clean abstract diagram of two paths merging into one, sample component tiles, fine connecting lines, and a glowing accent.
- One small hovering card reading `Design + Development` with a merging arrow icon.
- Another small label `Made to fit your idea`.
- Use actual CSS/SVG/vector UI—no raster image required.
- Create layered elevation via controlled transforms and shadows, ensuring text remains crisp.
- Gentle entrance animation and tiny idle floating movement are optional, and must disable with reduced motion.

**Sizing:** Hero visual should not overwhelm the heading. On mobile, copy first; mockup below it with intentionally simplified decorative pieces and no horizontal overflow. On a typical 390px screen, headline and CTA must be visible without zooming or sideways scrolling.

### 5.3 CAPABILITIES RIBBON — elegant visual separator

A restrained horizontal strip with small icon/dot separators:

`Web Experiences` · `Digital Design` · `Custom Solutions` · `Tech Support`

Use softly bordered top/bottom hairlines, spaced typography, and a calm background. On smaller screens show a wrapped 2×2 layout or horizontally scrollable content with accessible controls—not a marquee that moves forever.

### 5.4 SERVICES — premium card system

**Eyebrow:** `WHAT WE DO`  
**Headline:** `Good ideas deserve great execution.`  
**Description:** `The right digital tools can make a big difference. We focus on useful solutions, strong design, and a smoother experience from start to finish.`

Create **four visually differentiated cards** in a balanced 2×2 desktop grid or a curated 12-column asymmetrical arrangement. On mobile, single column. Each card contains icon/illustration, number (`01`–`04`), title, 1–2 sentence description, 2–3 succinct tags, and a `Let's talk` text link to `#contact`.

| No. | Service | Description | Suggested tags |
| --- | --- | --- | --- |
| 01 | **Website Development** | Modern, responsive websites and landing pages built to present your brand beautifully on any screen. | Responsive websites · Landing pages · Frontend development |
| 02 | **Software Solutions** | Practical web-based tools and straightforward software solutions shaped around a specific need or workflow. | Web apps · Custom tools · Workflow support |
| 03 | **Digital Design** | Clear, cohesive visuals and friendly interfaces that make digital experiences easier to use. | UI design · Layouts · Digital assets |
| 04 | **Technical Support** | Helpful assistance for everyday computer, website, and technology-related concerns. | Troubleshooting · Setup help · Maintenance guidance |

**Design details:** Each card includes custom illustration/icon, deliberate whitespace, subtle gradient corner glow on hover, and strong typography. Ensure cards don't all look like generic rectangle duplicates. A large editorial card for the first service and three smaller cards is acceptable **if** the layout remains balanced and excellent on mobile.

### 5.5 WORK / CONCEPT GALLERY — show taste without fake clients

**Eyebrow:** `IDEAS IN ACTION`  
**Headline:** `A glimpse of what we can build.`  
**Description:** `Explore sample directions for the kinds of digital experiences CodeMerge can create.`

**Important:** Real paid client projects are not supplied. **Do not fabricate client work.** Until real portfolio assets are available, display **2–3 beautiful original conceptual previews**, each clearly labeled **“Concept Preview — Not a Client Project.”** Make these visually compelling with custom CSS mockups or locally generated abstract interface art. Alternatively hide this section in production if the project owner prefers no concept work.

Suggested concept cards:

1. **Local Business Landing Page** — clean service booking/business intro concept; labels: `Web Design`, `Responsive`.
2. **Student Portfolio Experience** — personal portfolio layout concept; labels: `Frontend`, `Personal Branding`.
3. **Simple Workflow Dashboard** — practical business tool concept; labels: `Web App`, `UI Design`.

These are **examples of possible work**, not claims that CodeMerge delivered finished client projects. Each card uses an original mini-screenshot styled in React/CSS. Cards may reveal a subtle layer on hover. Do **not** add `View Live Site` links unless a real working destination exists. Clicking a concept may open an accessible detail modal **only if implemented meaningfully**; otherwise non-clickable presentation is fine.

### 5.6 PROCESS — three clear steps

**Eyebrow:** `HOW WE WORK`  
**Headline:** `Simple process. Thoughtful results.`  
**Intro:** `We keep things collaborative and clear, so you're involved from the first idea to the finishing touches.`

Three cards / timeline:

- `01 / Discover` — `Tell us what you're building, who it's for, and what matters most. We'll define a clear direction together.`
- `02 / Design & Build` — `We shape the experience, create the visuals, and develop a solution around your needs.`
- `03 / Refine & Launch` — `We review the details, make improvements, and prepare your digital experience for use.`

Design as a sophisticated horizontal path on desktop (thin connecting line and numbered circles) and vertical steps on mobile. The line is decorative, not essential for comprehension. Do not promise hard deadlines or outcomes not yet established.

### 5.7 ABOUT / DIFFERENTIATION — human, honest and design-led

**Eyebrow:** `ABOUT CODEMERGE`  
**Headline:** `Where creative thinking meets practical technology.`

**Body copy:**

> CodeMerge is a Manila-based IT and digital services business concept built around one simple belief: technology should make ideas more useful, accessible, and engaging. We combine thoughtful design with hands-on development to help individuals and small businesses build a stronger digital presence.

**Three short values:**

- **Purpose first** — Every feature should solve a real problem.
- **Detail matters** — We care about how a product looks, feels, and works.
- **Built together** — Clear communication helps ideas turn into better outcomes.

**Visual design:** asymmetrical editorial split, a custom code-bracket illustration/network graphic, oversized `</>` or merge-path SVG treatment, calm fine-grid background. Optional place label: `Based in Manila, Philippines`. Do not display invented team headshots, invented awards, registered-business icons, or claims of years of experience.

### 5.8 FAQ — useful and concise

**Eyebrow:** `COMMON QUESTIONS`  
**Headline:** `A few things you might be wondering.`

Accessible accordion with 4–5 questions. A single-open accordion is acceptable; use semantic buttons, `aria-expanded`, keyboard support, and no harsh motion.

**Content:**

**Q: What kind of websites can CodeMerge create?**  
A: `We focus on responsive business websites, landing pages, portfolios, and other straightforward web experiences. Tell us what you have in mind so we can discuss the right approach.`

**Q: Can you help with design as well as development?**  
A: `Yes. Our services cover both digital design and the development work needed to bring a concept to life.`

**Q: Do you work with students and small businesses?**  
A: `Those are among the audiences CodeMerge aims to serve. We can discuss the scope and requirements of a project through an inquiry.`

**Q: How much does a project cost?**  
A: `Project requirements vary. Share the goals and features you need so the scope and an appropriate quote can be discussed.`

**Q: How do I get started?**  
A: `Use the contact form below to tell us about your idea, the service you're looking for, and how we can reach you.`

### 5.9 CONTACT / PRIMARY CONVERSION — high polish + real behavior

Design this as the second-most visually memorable area after the hero.

**Eyebrow:** `LET'S CONNECT`  
**Headline:** `Have a project in mind?`  
**Accent second line:** `Let's make it happen.`  
**Supporting copy:** `Share a little about what you need, and we'll have a better starting point for the conversation.`

**Desktop layout:** 42% bold message / 58% elegant form card. On mobile stack. Use slightly warmer/lighter contrast gradient background within the dark theme. Include a small support element `Based in Manila, Philippines` rather than a fake office address or phone.

**Contact form fields**

1. `Full name` — required; 2–100 chars.
2. `Email address` — required; validate email syntax and normalize.
3. `Service needed` — required; choose `Website Development`, `Software Solutions`, `Digital Design`, `Technical Support`, or `Other`.
4. `Tell us about your project` — required; 10–3000 chars.
5. Optional `Budget range` — only if useful; values `Not sure yet`, `Below ₱10,000`, `₱10,000–₱25,000`, `₱25,000+`. **These are inquiry ranges, not advertised fixed prices.**
6. Anti-spam honeypot hidden from typical users, plus server rate limiting.
7. Submit button: `Send Project Inquiry` with arrow icon, loading spinner, and disabled state during submission.

**User experience:**

- Friendly inline errors near fields; preserve entered content on failure.
- Distinct loading, success, failure, and offline states; never claim message delivered if API did not confirm it.
- On success: `Thanks for reaching out! Your inquiry has been received.` **Only if the backend actually accepted and delivered or durably stored the inquiry.**
- On failure: `We couldn't send your inquiry right now. Please try again later.`
- Clear data/privacy microcopy below button: `Your details will only be used to respond to your inquiry.` Implement backend handling consistent with this statement.
- No fake `hello@codemerge...` address, phone number, or social account. Put business contact configuration in a simple config module and render public details only after verified values are provided.

### 5.10 FOOTER — finishing polish

- Custom CodeMerge glyph + wordmark.
- Tagline: `Thoughtful design. Practical technology.`
- Small nav: `Services`, `Work`, `Process`, `About`, `Contact` (anchor links).
- Location text: `Manila, Philippines`.
- Copyright: `© {current year} CodeMerge. All rights reserved.`
- Optional small `Back to top` action with a working arrow.
- Do not create fake Privacy Policy links. If a privacy notice is necessary, include a meaningful on-page modal/section or a working static policy; do not leave dead links.

---

## 6. Responsiveness — precise behavior

Build mobile-first, then enhance tablet/desktop. Test at **320, 375, 390, 430, 768, 1024, 1280, 1440, and 1920px** widths.

| Component | Desktop ≥ 1024px | Tablet 768–1023px | Mobile ≤ 767px |
| --- | --- | --- | --- |
| Navbar | Full links + CTA | Condense or collapse safely | Brand + hamburger, accessible dropdown |
| Hero | Split copy and illustrated UI | Adaptive 2-column or stacked | Single column, copy first, mockup second |
| Hero CTAs | Inline | Inline if room | Stack or wrap with large tap targets |
| Capabilities | Single row | Flexible wrap | 2×2 or accessible horizontal wrap |
| Services | Refined 2×2/bento | 2 columns | One column |
| Work | 2–3 columns | 2 columns | One column, beautiful art crops |
| Process | Horizontal 3-step layout | Responsive 3/2 columns | Vertical timeline |
| About | Editorial split | Adaptive | Stacked with smaller graphic |
| FAQ | Balanced narrow column | Narrow column | Full-width accordion |
| Contact | Two-column message and form | Split/stack as needed | Stacked, full-width fields/buttons |
| Footer | Multi-column | 2 columns | Natural vertical groupings |

**Mandatory checks:**

- Absolutely **no horizontal scrolling** or clipped hero decorations.
- Headline wraps cleanly; no orphaned single characters, overflow, or unreadable tiny fonts.
- Buttons at least **44×44px** interactive area, 16px minimum form font on mobile to avoid iOS zoom.
- Forms are easy to fill one-handed; input labels remain visible.
- Cards use consistent vertical rhythm even when text lengths differ.
- Decorative elements can disappear/reposition on mobile if they would reduce clarity.
- Use correct `srcSet`/dimensions for any real images; no layout shifts.

---

## 7. Motion, interaction, and attention to detail

Use **Framer Motion / Motion for React** if installed and justified, or lightweight CSS/IntersectionObserver. Whichever is simpler and more reliable. Keep performance good.

| Element | Behavior |
| --- | --- |
| Hero heading/content | One-time subtle upward fade/stagger (~450–700ms) |
| Hero visual | Soft scale/fade on first render; little or no looping |
| Sticky header | Smooth background/border change after scroll |
| Service cards | 3–5px lift, refined shadow/border/color transition |
| CTA button | Gentle gradient or arrow movement, clear focus ring |
| Section entrances | Small reveal on entering viewport, not massive sliding |
| Work cards | Subtle image/preview scale ≤ 1.03 on hover |
| Process | Delicate line/node appearance, optional |
| Accordion | Smooth accessible expansion (~180–240ms), or instant in reduced motion |
| Form | Visible hover, focus, invalid, loading, success/failure states |

**Reduced motion:** Respect `prefers-reduced-motion: reduce`. Disable smooth scrolling and reveal/float animations; leave all content present and accessible. Do not use animations that delay or block core content.

**Extra polish:** elegant selection colors, custom focus-visible rings, balanced icon alignment, button press states, high-quality empty/validation states, soft page scroll behavior, and intentional section separators.

---

## 8. Technical architecture — React + Node.js only

### Recommended root structure

```text
codemerge/
├── README.md
├── .gitignore
├── .env.example
├── package.json                 # optional root scripts for running both apps
├── client/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js        # if Tailwind version uses this file
│   ├── public/
│   │   ├── favicon.svg
│   │   └── og-image.png          # only if actually created
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── index.css
│       ├── components/
│       │   ├── Header.tsx
│       │   ├── Footer.tsx
│       │   ├── Container.tsx
│       │   ├── SectionHeading.tsx
│       │   ├── PrimaryButton.tsx
│       │   ├── ServiceCard.tsx
│       │   ├── ProjectConceptCard.tsx
│       │   ├── FAQAccordion.tsx
│       │   └── ContactForm.tsx
│       ├── sections/
│       │   ├── Hero.tsx
│       │   ├── Capabilities.tsx
│       │   ├── Services.tsx
│       │   ├── Work.tsx
│       │   ├── Process.tsx
│       │   ├── About.tsx
│       │   ├── FAQ.tsx
│       │   └── Contact.tsx
│       ├── data/
│       │   ├── services.ts
│       │   ├── concepts.ts
│       │   └── faq.ts
│       ├── config/
│       │   └── site.ts           # editable site details, public links, IDs
│       └── lib/
│           └── api.ts
└── server/
    ├── package.json
    ├── .env.example
    └── src/
        ├── index.ts             # or index.js if JS chosen
        ├── routes/contact.ts
        ├── middleware/errorHandler.ts
        ├── validators/contact.ts
        └── services/inquiryService.ts
```

The structure can be simplified if needed, but keep reusable components, section-level files, and separate client/server packages. **No React Router needed for a single landing page.**

### Frontend dependencies

- React 18+ (use a stable compatible latest version in the environment)
- Vite
- TypeScript (preferred)
- Tailwind CSS following the chosen Tailwind version's setup
- `lucide-react` for icons
- Optional `motion` / `framer-motion` for animation
- Optional `react-hook-form` + `zod` for ergonomic validation, but avoid dependency bloat

### Backend dependencies

- Node.js LTS, Express.js
- `cors` configured to an allowlist / expected frontend origin
- `helmet` for security headers (as appropriate to API)
- `express-rate-limit` for `/api/contact`
- `zod` or equivalent server-side validation
- `nodemailer` **only if** SMTP delivery is configured
- `dotenv` for non-secret local development configuration
- Consider `pino` or concise structured logging; do not log raw inquiry bodies in production

### Backend API contracts

**GET `/api/health`**

Response `200`:

```json
{ "status": "ok", "service": "codemerge-api" }
```

**POST `/api/contact`**

Expected request:

```json
{
  "name": "Juan Dela Cruz",
  "email": "juan@example.com",
  "service": "Website Development",
  "message": "I want a professional landing page for my small business.",
  "budget": "Not sure yet",
  "website": ""
}
```

`website` is an optional honeypot field, expected to remain empty. Validate all inputs on the server even if frontend validation passes. Trim fields, use length limits, sanitize output rendering, use safe email encoding, and never expose `.env` secrets to the browser.

**Successful delivery or durable acceptance (`200` or `201`):**

```json
{ "success": true, "message": "Your inquiry has been received." }
```

**Bad request (`400`):**

```json
{ "success": false, "message": "Please check the form fields." }
```

**Rate limited (`429`):** friendly general retry message.  
**Provider/storage unavailable (`503`):** return `{ "success": false, "message": "Contact service is temporarily unavailable." }` — do **not** fake success.

**Data delivery:** Configure either (a) SMTP through environment variables or (b) a real durable inquiry store. For the simplest implementation, SMTP is fine, but it must be properly configured before production use. In an unconfigured development environment, show a clear **non-success** state; do not pretend inquiry messages were received. No hardcoded credentials or unsafe PII logging.

**Suggested environment keys (`server/.env.example`):**

```env
PORT=5000
NODE_ENV=development
CLIENT_ORIGIN=http://localhost:5173
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASSWORD=
CONTACT_RECIPIENT_EMAIL=
CONTACT_SENDER_EMAIL=
```

Do not put real credentials in `.env.example`. Vite should proxy `/api` to `http://localhost:5000` in development, or the frontend can use a documented `VITE_API_BASE_URL` that excludes private secrets.

### Local development commands

Provide working scripts, including an option to run both packages from root:

```bash
npm install
npm run dev
```

Or clearly document:

```bash
cd client && npm install && npm run dev
cd server && npm install && npm run dev
```

Ensure both instructions actually match generated `package.json` scripts. Production build: `npm run build` from client (or root if wired). No broken imports, missing components, placeholder images, or build-time errors.

---

## 9. SEO, performance, accessibility, and security

### SEO

- HTML document title: `CodeMerge | Web Development & Digital Services in Manila`.
- Meta description: `CodeMerge creates modern websites, practical software solutions, digital design, and technology support for individuals and small businesses in Manila.`
- Use a single semantic `<h1>` in hero and sensible `<h2>` section headings.
- Add favicon matching custom brand glyph; use proper Open Graph/Twitter meta if actual assets exist.
- Do not invent business addresses, review ratings, social profiles, map coordinates, or Business Registration schema claims.
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.

### Performance

- Aim for Lighthouse **90+** in Performance, Accessibility, Best Practices and SEO on representative devices; treat this as a target, not a fabricated test result.
- Avoid large JS animation libraries if simple CSS is sufficient.
- Prefer SVG/CSS mockups; lazy-load noncritical real images.
- Use preload/preconnect only when materially helpful; avoid font-loading flash where possible.
- Avoid huge background filters and continuously animated shadows on mobile.
- No cumulative layout shift from hero illustration, imagery, or font-size transitions.

### Accessibility

- WCAG AA-ish contrast targets: normal text ≥ 4.5:1 whenever applicable; large text ≥ 3:1.
- All navigation, accordion, inputs, and submit interactions work by keyboard.
- Menu button has `aria-label`, `aria-controls`, and correct `aria-expanded`; close menu on link select, Escape, and outside press when appropriate.
- Respect reduced-motion preferences.
- Provide actual visible focus indicators; do not remove outlines without replacements.
- Form labels, required-field indications, error descriptions, and status messages are properly associated.
- Decorative SVGs use `aria-hidden="true"`; meaningful visuals have accessible descriptions.

### Security and privacy

- Backend validates all payloads; CORS restricts allowed origins; rate-limit contact route; never expose SMTP secrets.
- Do not include a public admin panel or inquiry inbox without authentication.
- If storing personal information, implement and document privacy-aware handling and retention rather than storing indefinitely by accident.
- No analytics, cookie banner, social tracking, or external chat widget unless deliberately configured. Do not show a fake compliance badge.

---

## 10. Content management without CMS

Keep editable content separated from design code:

- `data/services.ts`: service cards.
- `data/concepts.ts`: sample concepts with explicit example labels.
- `data/faq.ts`: FAQ content.
- `config/site.ts`: brand name, location, contact email **only after real value supplied**, social links, meta text, and feature flags.

Suggested flags:

```ts
export const siteConfig = {
  name: 'CodeMerge',
  tagline: 'Thoughtful design. Practical technology.',
  location: 'Manila, Philippines',
  contactEmail: null, // fill with verified public business email before displaying
  showConceptGallery: true,
  showTeamMembers: false,
  showBusinessRegistrationClaims: false,
};
```

This example is not a request to implement unnecessary runtime feature flag infrastructure; a simple config object is sufficient.

---

## 11. Visual QA and acceptance checklist

The project is **not finished** until these checks pass:

### Design quality

- [ ] First screen creates a strong professional impression; headline hierarchy is excellent.
- [ ] Hero includes a custom rendered illustration/mock interface, not an empty placeholder.
- [ ] Layout looks coherent as **one unified brand** from top to footer.
- [ ] Space, radius, borders, shadows, color, and text styles are consistent.
- [ ] Service cards and concept previews are individually considered and visually engaging.
- [ ] Mobile version looks **designed**, not merely squashed desktop UI.
- [ ] No generic placeholder paragraphs, stock photos, bogus statistics, or fake logos.
- [ ] Hover, focus, open, loading, validation, and success/error states have been styled.

### Functional quality

- [ ] Clicking nav links scrolls to the correct page sections.
- [ ] Sticky header does not hide the target heading.
- [ ] Mobile menu opens/closes and is keyboard-accessible.
- [ ] CTA links go to `#contact`.
- [ ] FAQ expands and collapses accessibly.
- [ ] Frontend contact validation works and uses readable feedback.
- [ ] `POST /api/contact` server validation and rate limiting are implemented.
- [ ] Success UI only appears after successful delivery/storage confirmation.
- [ ] An unconfigured backend does **not** return a false success.
- [ ] API failures are clearly handled without clearing entered fields.
- [ ] Footer anchors and back-to-top actions work.

### Technical quality

- [ ] `npm run dev` works with documented scripts.
- [ ] `npm run build` succeeds for frontend.
- [ ] Separate React/Vite frontend and Node/Express backend exist.
- [ ] No Next.js files/dependencies/routing.
- [ ] No console errors, missing key warnings, or broken asset URLs.
- [ ] No overflow at 320, 375, 390, 430, 768, 1024, and 1440px.
- [ ] Semantic HTML, heading order, alt/ARIA handling, and reduced-motion are checked.
- [ ] All sensitive settings use environment variables; `.env` is gitignored.
- [ ] README explains startup, environment setup, important directories, and deployment notes.

### Practical definition of done

A user can open the homepage and see a striking CodeMerge brand experience; understand the services within seconds; smoothly explore the landing page; view explicitly marked concept examples; understand the process; open FAQs; submit a validated inquiry through a real backend configuration; and enjoy a polished experience on phone, tablet, or desktop.

---

## 12. Recommended workflow for the AI coding agent

Proceed with the work rather than asking unnecessary questions. Choose tasteful defaults from this specification where small design details remain open.

1. **Inspect** the repository. If empty, scaffold a Vite React frontend and Express backend.
2. **Build tokens/global styles** and custom SVG CodeMerge brand logo.
3. **Implement header and hero first** to establish the strongest visual style.
4. **Build sections** in this order: capabilities, services, work, process, about, FAQ, contact, footer.
5. **Implement real functionality** for sticky navigation, mobile menu, accordions, validation, and contact API.
6. **Review visual composition** from desktop to mobile. Improve spacing, typography, grids, interactions, and micro-details rather than settling for basic default components.
7. **Run and verify** dev server, API, production build, keyboard behavior, and core breakpoints.
8. **Leave clear setup docs** for any private SMTP credentials and real contact details that the business must configure before launch.

**Final implementation instruction:** Code the entire polished landing page in React + Vite, backed by Node.js + Express; follow all design/content requirements above. Do not convert the work into an explanation-only response, a Figma-only concept, a DTI documentation website, or multiple marketing pages.

---

## 13. Official context references (background only)

Original school documentation described a proposed CodeMerge single-proprietorship IT/digital-services company in Manila. Government sources are included for future business compliance research **not as landing page content**:

- DTI Business Name Registration System: https://bnrs.dti.gov.ph/
- City of Manila: https://www.manila.gov.ph/

**Do not claim legal registration without actual official documents and verification.**

---

**End of CodeMerge Landing Page Master Build Specification.**
