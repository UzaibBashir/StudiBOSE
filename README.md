# JKBOSE Hub (Mobile-First)

A minimalist, mobile-first React + Tailwind site for JKBOSE resources: notes, previous year papers, textbooks, and images. Built with Vite.

## Development

```bash
npm install
npm run dev
```

## Google Drive links

- Update `src/resources/data.js` with your real Google Drive file/folder links.
- You can link to full folders so students can browse on Drive.

## Ad placement

- Replace the placeholder in `src/shared/AdBlock.jsx` with your ad network code or a custom component. The container is sized for a 320x100 mobile banner by default.

## Structure

- Pages: `Home`, `Notes`, `Papers`, `Books`, `Images`, `About` via React Router.
- UI: `SearchBar`, `CategoryGrid`, `ResourceList`, `ResourceCard`, `AdBlock`.

## Styling

- Tailwind is enabled via `@import "tailwindcss";` in CSS files and `@tailwindcss/vite` plugin in `vite.config.js`.
