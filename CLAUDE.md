# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Crafted Gallery is a Next.js 16 application showcasing curated craft items. The app features a gallery view for browsing craft items and detailed pages for individual craft pieces. It uses the Next.js App Router with TypeScript and Tailwind CSS v4.

## Development Commands

```bash
# Start development server
pnpm run dev

# Build for production
pnpm run build

# Start production server
pnpm start

# Run linter
pnpm run lint
```

The development server runs at `http://localhost:3000`.

## Architecture

### Routing Structure

- **App Router**: Uses Next.js App Router (not Pages Router)
- `app/(explore)/page.tsx`: Main gallery/explore page (route group doesn't affect URL)
- `app/craft/[id]/page.tsx`: Dynamic route for individual craft item details
- `app/layout.tsx`: Root layout with global Navigation component

### Key Architectural Patterns

**Client Components**: All page components use `"use client"` directive as they require interactivity (state, hooks, event handlers).

**Data Management**: Centralized in `lib/data/` directory:

- `lib/data/craftItems.ts`: Gallery items displayed on explore page
- `lib/data/craftDetails.ts`: Full craft details keyed by ID
- `lib/data/categories.ts`: Filter categories

**Type System**: TypeScript interfaces in `lib/types/`:

- `CraftItem`: Basic item shown in gallery grid
- `CraftDetail`: Extended with tagline, description, craftedWith, specs, story
- `CraftedWithItem`, `CraftStory`, `RelatedCraft`: Nested data structures

**Styling Approach**:

- Tailwind CSS v4 (uses `@import "tailwindcss"` syntax in globals.css)
- Custom font variables defined in layout: `--font-geist-sans`, `--font-geist-mono`, `--font-cormorant`
- Centralized style constants in `lib/constants/styles.ts` (`BG_COLOR`, `CARD_SHADOW`)
- Custom glassmorphic floating toolbars with grain texture overlay (using inline SVG noise filter in `lib/constants/grainOverlay.ts`)
- Consistent design system: `#f8f8f8` background, white cards with subtle shadows, black CTAs

**Navigation Pattern**: Shared `<Navigation />` component in root layout provides consistent header across all pages. Individual pages have floating toolbars at bottom with contextual controls (filters on explore page, section navigation on detail pages).

### Component Organization

**Page-specific components**: Organized alongside their pages

- `app/(explore)/components/`: HeroSection, CraftGrid, ExploreToolbar, EmailSubscriptionForm
- `app/craft/[id]/components/`: HeroSection, AboutSection, CraftedWithSection, StorySection, RelatedCraftsSection, CraftDetailToolbar
- `app/craft/[id]/components/hooks/`: useSectionObserver (scroll-based section tracking)

**Shared UI components**: `app/components/`

- `Navigation.tsx`: Global header
- `app/components/ui/`: Reusable UI primitives (FloatingToolbar, CraftCard, AnimatedTabButton, SearchButton, ToolbarButton)
- `app/components/shared/`: Cross-cutting concerns (GrainOverlay)

**Component Patterns**:

- Page components are thin orchestrators that import section components
- Section components are self-contained and receive props from pages
- UI components are generic and reusable across different contexts
- Custom hooks encapsulate complex behavior (IntersectionObserver logic in useSectionObserver)

### Fonts

Three font families loaded via next/font/google:

- Geist (sans-serif) - primary UI font
- Geist Mono (monospace) - for code/technical text
- Cormorant Garamond (serif) - for headings and display text

## TypeScript Configuration

- Path alias `@/*` maps to project root
- Target: ES2017
- Strict mode enabled
- JSX set to `react-jsx` (not `preserve`)

## Styling Conventions

- Use `font-cormorant` class for serif headings
- Rounded corners: `rounded-2xl` for cards, `rounded-full` for buttons/pills
- Shadows: Import `CARD_SHADOW` from `lib/constants/styles.ts` for consistent inline box-shadow
- Background: Use `BG_COLOR` constant from `lib/constants/styles.ts`
- Spacing: Generous whitespace, `pb-32` at bottom of sections to accommodate floating toolbar
- Grain overlay: Import `GRAIN_OVERLAY_SVG` from `lib/constants/grainOverlay.ts` for glassmorphic effects

## Animations Guidelines

### Keep your animations fast

- Default to use `ease-out` for most animations.
- Animations should never be longer than 1s (unless it's illustrative), most of them should be around 0.2s to 0.3s.

### Easing rules

- Don't use built-in CSS easings unless it's `ease` or `linear`.
- Use the following easings for their described use case:

  - **`ease-in`**: (Starts slow, speeds up) Should generally be avoided as it makes the UI feel slow.

    - `ease-in-quad`: `cubic-bezier(.55, .085, .68, .53)`
    - `ease-in-cubic`: `cubic-bezier(.550, .055, .675, .19)`
    - `ease-in-quart`: `cubic-bezier(.895, .03, .685, .22)`
    - `ease-in-quint`: `cubic-bezier(.755, .05, .855, .06)`
    - `ease-in-expo`: `cubic-bezier(.95, .05, .795, .035)`
    - `ease-in-circ`: `cubic-bezier(.6, .04, .98, .335)`

  - **`ease-out`**: (Starts fast, slows down) Best for elements entering the screen or user-initiated interactions.

    - `ease-out-quad`: `cubic-bezier(.25, .46, .45, .94)`
    - `ease-out-cubic`: `cubic-bezier(.215, .61, .355, 1)`
    - `ease-out-quart`: `cubic-bezier(.165, .84, .44, 1)`
    - `ease-out-quint`: `cubic-bezier(.23, 1, .32, 1)`
    - `ease-out-expo`: `cubic-bezier(.19, 1, .22, 1)`
    - `ease-out-circ`: `cubic-bezier(.075, .82, .165, 1)`

  - **`ease-in-out`**: (Smooth acceleration and deceleration) Perfect for elements moving within the screen.
    - `ease-in-out-quad`: `cubic-bezier(.455, .03, .515, .955)`
    - `ease-in-out-cubic`: `cubic-bezier(.645, .045, .355, 1)`
    - `ease-in-out-quart`: `cubic-bezier(.77, 0, .175, 1)`
    - `ease-in-out-quint`: `cubic-bezier(.86, 0, .07, 1)`
    - `ease-in-out-expo`: `cubic-bezier(1, 0, 0, 1)`
    - `ease-in-out-circ`: `cubic-bezier(.785, .135, .15, .86)`

### Hover transitions

- Use the built-in CSS `ease` with a duration of `200ms` for simple hover transitions like `color`, `background-color`, `opacity`.
- Fall back to easing rules for more complex hover transitions.
- Disable hover transitions on touch devices with the `@media (hover: hover) and (pointer: fine)` media query.

### Accessibility

- If `transform` is used in the animation, disable it in the `prefers-reduced-motion` media query.

### Origin-aware animations

- Elements should animate from the trigger. If you open a dropdown or a popover it should animate from the button. Change `transform-origin` according to the trigger position.

### Performance

- Stick to opacity and transforms when possible. Example: Animate using `transform` instead of `top`, `left`, etc. when trying to move an element.
- Do not animate drag gestures using CSS variables.
- Do not animate blur values higher than 20px.
- Use `will-change` to optimize your animation, but use it only for: `transform`, `opacity`, `clipPath`, `filter`.
- When using Motion/Framer Motion use `transform` instead of `x` or `y` if you need animations to be hardware accelerated.

### Spring animations

- Default to spring animations when using Framer Motion.
- Avoid using bouncy spring animations unless you are working with drag gestures.
