# SportOn 🏆

A modern sportswear e-commerce storefront built with Next.js 16, TypeScript, and Tailwind CSS v4. SportOn connects to a dedicated REST backend to display product categories, product listings, and individual product detail pages — with a shopping cart powered by client-side state management.

🌐 **Live Demo:** [sport-on-web.vercel.app](https://sport-on-web.vercel.app)

---

## Features

- **Product Catalog** — browse sportswear products organised by category (Running, Tennis, Badminton, Basketball, and more)
- **Product Detail Pages** — view product images, descriptions, stock levels, and pricing per item
- **Shopping Cart** — add items to cart and proceed to checkout; cart state managed client-side with Zustand
- **Toast Notifications** — real-time feedback on cart actions via react-toastify
- **Next.js App Router** — file-based routing with React Server Components, optimised image loading, and fast page transitions
- **Fully Typed** — strict TypeScript throughout the entire codebase
- **Responsive Design** — mobile-first layout styled with Tailwind CSS v4

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| Language | TypeScript 5 (strict mode) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 |
| State Management | [Zustand](https://zustand-demo.pmnd.rs/) v5 |
| Notifications | [react-toastify](https://fkhadra.github.io/react-toastify/) v11 |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) v5 |
| Package Manager | [pnpm](https://pnpm.io/) |
| Backend API | `https://be-sporton.agunacourse.com` |
| Deployment | [Vercel](https://vercel.com/) |

---

## Getting Started

### Prerequisites

- **Node.js v18+**
- **pnpm v9+** — the project ships a `pnpm-lock.yaml` and `pnpm-workspace.yaml`; npm/yarn will work but pnpm is recommended

```bash
# Install pnpm globally if you don't have it
npm install -g pnpm
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Masykster/SportOnWeb.git
cd SportOnWeb

# 2. Install dependencies
pnpm install
```

### Environment Variables

The backend base URL is hard-coded in `next.config.ts` as a trusted image hostname. No `.env` file is required to run the app — it connects to the shared backend at `https://be-sporton.agunacourse.com` by default.

If you want to point to a different API, update `next.config.ts`:

```ts
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-api-host.com", // ← change this
        pathname: "/uploads/**",
      },
    ],
  },
};
```

### Development

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

### Build & Production

```bash
# Production build
pnpm build

# Start production server
pnpm start
```

### Linting

```bash
pnpm lint
```

---

## Project Structure

```
SportOnWeb/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (fonts, global providers)
│   ├── page.tsx            # Home page (hero, categories, featured products)
│   ├── product/
│   │   └── [id]/           # Dynamic product detail page
│   ├── about-us/           # About Us page
│   └── ...                 # Other routes
├── public/
│   └── images/             # Static assets (logo, hero images, icons)
├── next.config.ts          # Next.js config (image remote patterns)
├── tsconfig.json           # TypeScript config (strict, path alias @/*)
├── pnpm-workspace.yaml     # pnpm workspace config
└── package.json
```

Path alias `@/*` maps to the project root, so imports look like:

```ts
import { ProductCard } from "@/components/ProductCard";
```

---

## Key Pages

| Route | Description |
|---|---|
| `/` | Landing page — hero banner, category grid, featured products |
| `/product/[id]` | Product detail — image, price, stock, add-to-cart |
| `/about-us` | About page |

---

## Deployment

The project is deployed on Vercel. To deploy your own fork:

1. Push your fork to GitHub
2. Import the repository on [Vercel](https://vercel.com/new)
3. Leave all build settings at their defaults (Vercel auto-detects Next.js)
4. Click **Deploy**

No environment variables are required for the default backend configuration.