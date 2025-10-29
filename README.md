# Movie Management App (MMS)

A responsive **Movie Management Web Application** built with React.js, Redux Toolkit, and Tailwind CSS that allows users to explore, manage, and personalize movie data fetched from **TMDb API**. Users can filter, sort, and save their favorite movies, with persistent customization using `localStorage`.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Setup & Installation](#setup--installation)
- [Project Structure](#project-structure)
- [Evaluation Criteria](#evaluation-criteria)

---

## Project Overview

This application allows users to:

- Browse movies fetched from **TMDb API**.
- View detailed movie information with multiple posters carousel.
- Filter movies by genre or rating
- Manage personal favorite movies and “Watch Next” list.
- Created a “Recently added ” list.
- Register, login, and access protected routes.
- Persist user preferences in `localStorage` even after logout.

The UI is responsive

---

## Tech Stack

- **Frontend:** React.js, React Router DOM
- **State Management:** Redux Toolkit
# Movie Management App (MMS)

A responsive Movie web application built with React + Vite that consumes The Movie Database (TMDb) API to browse, search and save movies. It includes Redux Toolkit for state, Tailwind CSS for styling, and Swiper for carousels.

## Quick overview

- Browse popular, top-rated and upcoming movies
- View movie details (images, overview, genres, rating)
- Save favorites and build a “Watch Next” list (persisted in localStorage)
- Authentication-like flows (simple signup/login persisted locally)
- Responsive UI built with Tailwind CSS

## Tech stack

- React (Vite)
- Redux Toolkit
- Tailwind CSS
- Axios
- Swiper.js
- Lucide React (icons)

## Prerequisites

- Node.js 16+ and npm or yarn
- A TMDb API key (free from https://www.themoviedb.org/settings/api)

## Environment variables

This project uses Vite. Create a `.env` or `.env.local` in the project root with:

VITE_TMDB_API_KEY=your_tmdb_api_key_here

The app expects the API key to be available via `import.meta.env.VITE_TMDB_API_KEY`.

## Install and run

1. Install dependencies

```bash
npm install
# or
# yarn
```

2. Start the dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview built site

```bash
npm run preview
```

5. Lint (if ESLint is configured)

```bash
npm run lint
```

These commands are taken from the project's `package.json` scripts.

## Folder structure (important files)

- `index.html` - Vite entry
- `src/main.jsx` - app bootstrap
- `src/App.jsx` - top-level routes and layout
- `src/components/` - UI components (MovieCard, NavBar, MovieDetail, etc.)
- `src/pages/` - route pages (Home, Movies, Profile, Login, SignUp, NotFound)
- `src/redux/` - Redux store and slices (`app/store.js`, `features/*`)

## Notes about TMDb

- Use your TMDb API key via `VITE_TMDB_API_KEY`.
- TMDb images use a base URL (the app uses the correct image sizes internally).

## Contributing

- Feel free to open issues or pull requests.
- Small suggestions:
  - Add unit tests for slices and components
  - Add CI (GitHub Actions) for lint/build checks

## Troubleshooting

- If you see empty results, ensure `VITE_TMDB_API_KEY` is valid and your rate limits are not exceeded.
- For CORS or network errors, check your network and the TMDb service status.

## License & author

This project is provided as-is. Add a license file if you intend to publish it.

---






