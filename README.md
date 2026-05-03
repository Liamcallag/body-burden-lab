# Body Burden

A science-backed microplastic exposure calculator at [bodyburdenlab.com](https://www.bodyburdenlab.com).

Body Burden estimates how many microplastic particles a person consumes and inhales each week based on their lifestyle habits. Every figure is derived from peer-reviewed research published in scientific journals.

## Features

- 15-question calculator covering drinking water, cookware, food, clothing, and air quality
- Personalised weekly and annual particle estimates
- Exposure breakdown by source category
- Lifetime accumulation estimate based on age
- Top 3 reduction tips based on individual answers
- Shareable results card
- Science blog with citations for all claims
- Methodology page with full source list
- No account required — all calculations run in the browser

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `app/` — pages and routes (App Router)
- `components/` — React components including the calculator and results page
- `lib/` — scoring logic and question data
- `public/` — images and static assets

## Methodology

All exposure estimates are based on peer-reviewed studies. Key sources include Cox et al. (2019), Hernandez et al. (2019), Hussain et al. (2023), and Marfella et al. (2024). Full methodology and citations are available at [bodyburdenlab.com/methodology](https://www.bodyburdenlab.com/methodology).
