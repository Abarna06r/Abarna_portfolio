# Abarna Student Portfolio — Variant 2

This is a new version of the portfolio with a more personal, student-made feel.

### Design idea
- Warm paper / off-white background
- Navy-blue + muted terracotta accents
- Serif headings + clean sans-serif body
- Small hand-made details like the tape, scribble and rounded cards
- Subtle scroll-reveal animation
- Simple light/dark mode
- Project pop-up details
- Responsive mobile navigation
- No heavy animation libraries or complicated UI framework

## Run it

Open the project folder in VS Code terminal:

```powershell
npm install
npm run dev
```

Then open the Local URL shown by Vite, normally:

```text
http://localhost:5173/
```

## Add your real photo

Replace:

```text
public/assets/profile-placeholder.svg
```

with your own image if you want. The current hero intentionally uses an initials placeholder so the site does not show a broken image.

To use a real photo, edit `src/main.jsx` and replace the `initial-photo` block with:

```jsx
<img src="/assets/profile.png" alt="Abarna Rajan" />
```

## Add your resume

Put your resume here:

```text
public/assets/Abarna_R_Resume_final.pdf
```

The Resume buttons already point to that path.

## GitHub links

Project links are centralized in:

```text
src/data.js
```

Change the `github` values to the exact repository URLs when you want.

## Contact form

The contact form intentionally does not contain private EmailJS credentials. It opens the visitor's email app using `mailto:`.

If you later want a hosted form, connect it to Formspree, EmailJS, a small backend, or another form service.
