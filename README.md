# Cybersecurity Portfolio

A static, single-page portfolio styled like a UNIX terminal / SOC analyst
dashboard. Pure HTML, CSS and vanilla JS — no build step, no backend.

## Structure

```
index.html      Page markup (all sections)
style.css       Design system (colors, type, layout, animation)
script.js       Typing animation, status ticker, nav highlighting,
                scroll reveals, skill bars, contact form
assets/         Your PDFs (resume, experience letter, certificates)
images/         Screenshots / project images
```

## Customize

1. **Identity** — edit the `WHOAMI` object at the top of `script.js`
   (name, role, bio lines) and the hero tags / links in `index.html`.
2. **Projects** — duplicate a `.card` block inside `#projects` in
   `index.html`; update title, description, stack chips and links.
3. **Skills** — edit the panels inside `#skills`; each bar's fill
   percentage is set by the `data-w` attribute.
4. **Documents** — drop PDFs into `/assets/...` (see `assets/README.md`)
   and update the `href`s in the `#resume` / `#certifications` sections
   if you rename anything.
5. **Contact** — update the email/GitHub/LinkedIn links in `#contact`.
   The form is a static placeholder (no backend); wire it up to a
   service like Formspree if you want real submissions.
6. **Colors/type** — everything is driven by CSS custom properties at
   the top of `style.css` (`:root { ... }`).

## Deploy to GitHub Pages

1. Push this folder to a repository (e.g. `yourhandle.github.io`, or
   any repo name).
2. In the repo: **Settings → Pages → Source** → select the branch
   (usually `main`) and root folder `/`.
3. Save. Your site will be live at:
   - `https://yourhandle.github.io/` (if the repo is named
     `yourhandle.github.io`), or
   - `https://yourhandle.github.io/repo-name/` for any other repo name.

No build step is required — GitHub Pages serves these files as-is.
