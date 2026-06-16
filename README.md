# Mikasa — Game Over

Personal application to catalogue the games I finish each year. The project also
serves as a playground to keep my skills sharp with a modern frontend stack.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Apollo Client v4** + **GraphQL** (Hygraph / GraphCMS) with App Router
  Server Component support via `@apollo/client-integration-nextjs`
- **Zustand 5** for state management
- **Vitest** + **Testing Library** for tests
- **Docker** (standalone output) for deploy

## Project structure

```
src/
  app/                 # App Router routes, layout and global styles
    games/[id]/        # Dynamic game detail (Server Component)
  components/
    forms/             # SideForm
    games/             # GameCard, GameList, RegisterGame
    layout/            # Navbar, Footer
    ui/                # TextField, TextAreaField, FileField, StarRating
  lib/
    apollo/            # Apollo clients (browser + RSC), queries, mutations
    cn.ts              # className helper
  store/               # Zustand stores
  types/               # Shared types
```

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your Hygraph credentials
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the dev server                 |
| `npm run build`     | Production build (standalone output) |
| `npm start`         | Run the production server            |
| `npm run lint`      | Lint with ESLint                     |
| `npm run typecheck` | Type-check with `tsc`                |
| `npm test`          | Run the test suite                   |

## Environment variables

| Variable                | Description                                       |
| ----------------------- | ------------------------------------------------- |
| `NEXT_PUBLIC_API_URL`   | Hygraph GraphQL endpoint                          |
| `NEXT_PUBLIC_API_TOKEN` | Read-only content token (exposed to the browser)  |

> Writes (the `createGame` mutation) should be performed from a server action
> or route handler using a server-only token with mutation scope — never the
> public token above.

## Docker

Build the image (passing the public env vars used at build time) and run it:

```bash
docker build \
  --build-arg NEXT_PUBLIC_API_URL="https://..." \
  --build-arg NEXT_PUBLIC_API_TOKEN="..." \
  -t mikasa .

docker run -p 3000:3000 mikasa
```
