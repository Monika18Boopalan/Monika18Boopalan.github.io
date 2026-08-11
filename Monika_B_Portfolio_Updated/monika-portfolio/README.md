# Monika B — Portfolio

A modern, responsive, ATS-friendly single-page portfolio built with semantic HTML, CSS and vanilla JavaScript.

## Structure

```text
monika-portfolio/
├── index.html
├── styles.css
├── script.js
├── README.md
└── public/
    └── Monika_B_Resume.pdf
```

## Run locally

No build step is required.

1. Open the folder in VS Code.
2. Use the Live Server extension, or run any static server.
3. Visit the local URL.

Example with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

### Vercel
- Push the folder to GitHub.
- Import the repository into Vercel.
- Framework preset: Other.
- Build command: leave empty.
- Output directory: `.`

### Netlify
- Drag the project folder into Netlify Drop, or connect the GitHub repository.
- Build command: none.
- Publish directory: `.`

### GitHub Pages
- Push the files to a GitHub repository.
- Go to Settings → Pages.
- Select "Deploy from a branch".
- Choose the main branch and `/root`.
- Save.

## Before publishing

Replace the generic profile/project links with the exact URLs for:
- LinkedIn
- GitHub
- LeetCode
- Each project's GitHub repository
- Each project's live demo

The contact form uses a `mailto:` fallback, so it does not require a backend. For a production form, connect Formspree, Web3Forms, Netlify Forms, or your own API.

## Recruiter/ATS improvements included

- Semantic HTML sections and headings
- Search-friendly metadata
- Text-based project and skills content
- Responsive layout
- Keyboard-accessible navigation and skip link
- Reduced-motion support
- Resume download
- Clear recruiter CTA
- Fast static assets with no framework/build dependency
- Dark/light theme persisted with localStorage
- Mobile navigation
- Scroll reveal and scroll-to-top interactions
