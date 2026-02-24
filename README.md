# Job Search Ignition System 2026

> 8-week done-with-you job search accelerator landing page for senior professionals targeting $100K+ roles

![Status](https://img.shields.io/badge/status-active-brightgreen)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Live Demo

[https://izzydoesizzy.github.io/jobsearchignitionsystem2026](https://izzydoesizzy.github.io/jobsearchignitionsystem2026)

## Overview

A high-conversion landing page for the **Job Search Ignition System** -- an 8-week cohort-based job search accelerator program led by Izzy Piyale-Sheard. The page is designed to attract senior professionals (7+ years experience, $100K+ target salary) who are struggling with their job search and want a structured, done-with-you approach to rebuilding their career assets.

The site walks visitors through the program's value proposition, client success stories, detailed deliverables, pricing, and a clear call-to-action to book a free job search audit or enroll directly.

## Features

- **Hero section** with gradient text effects and dual CTAs (Book Audit / See What's Inside)
- **Stats bar** showcasing program outcomes (84% 5-star rating, $1.2M+ collective raises, 46% landed within 1 month)
- **Trust bar** with media mentions (CBC Radio, Global News, Newsweek, Inc. Magazine)
- **Detailed deliverables section** listing 14+ done-for-you assets (resume, LinkedIn rebuild, STAR story bank, outreach templates, etc.)
- **Services grid** showing program components (1:1 sessions, group calls, WhatsApp support, Skool community, AI prompt library)
- **Masonry testimonial grid** with colored avatar initials and result badges
- **Achievement cards** with detailed client success stories and salary increase outcomes
- **LinkedIn Before/After comparison slider carousel** with drag-to-reveal functionality (5 real client transformations)
- **Who It's For / Not For** side-by-side comparison section
- **Meet Your Coach** alternating image/text bio section
- **Pricing card** with founding member rate, promo code, and Stripe checkout integration
- **FAQ accordion** with expand/collapse functionality
- **Sticky bottom bar** with urgency messaging and dismiss via localStorage
- **Embedded YouTube testimonial video**
- **Fully responsive design** with breakpoints at 900px and 640px
- **Clean minimal aesthetic** using Inter font, ClearCareer blue (#0161EF), and navy (#030620)

## Tech Stack

- HTML5
- CSS3 (custom properties, CSS Grid, Flexbox, `clamp()`, `clip-path`)
- Vanilla JavaScript (no dependencies)
- Google Fonts (Inter)
- Hosted on GitHub Pages

## Getting Started

### Run Locally

No build step required:

1. **Clone the repository**
   ```bash
   git clone https://github.com/izzydoesizzy/jobsearchignitionsystem2026.git
   cd jobsearchignitionsystem2026
   ```

2. **Open in browser**
   ```bash
   open index.html
   # or use a local server (recommended for YouTube embeds):
   npx serve .
   # or:
   python3 -m http.server 8080
   ```

### Deploy to GitHub Pages

1. Push to `main` branch
2. Go to Settings > Pages > Source: Deploy from branch (`main`, `/root`)
3. Site live at `https://izzydoesizzy.github.io/jobsearchignitionsystem2026`

## Project Structure

```
jobsearchignitionsystem2026/
├── index.html                         # Main landing page
├── styles.css                         # All styles (2000+ lines, fully responsive)
├── main.js                            # FAQ accordion, comparison slider, carousel, sticky bar
├── ClearCareer_Outcomes_Report_White.html  # Linked outcomes report page
├── beforeafter/                       # LinkedIn transformation before/after images
│   ├── henrique-before.jpg / after.jpg
│   ├── rubina-before.jpg / after.png
│   ├── julia-before.png / after.png
│   ├── eblen-before.png / after.png
│   └── nathaniel-before.png / after.jpg
├── testimonialvideo.mp4               # Local testimonial video asset
├── izzyprofilepic.webp                # Coach profile photo
├── moreizzy.webp                      # Secondary coach photo
├── *.png                              # Client achievement photos
└── .gitignore
```

## Tags

`landing-page` · `job-search` · `career-coaching` · `accelerator-program`

## Created

February 2026

## Status

Active -- Functional, hosted on GitHub Pages

## Author

**Izzy Piyale-Sheard** -- [@izzydoesizzy](https://github.com/izzydoesizzy)
