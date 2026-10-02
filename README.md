# Sushil Chhetri | Android Developer Portfolio

A fast, responsive portfolio site. It is plain HTML, CSS and JS, so there is no build step and nothing to install.

## Project structure

```
Website/
├── index.html              Page layout (no need to edit)
├── css/style.css           Styles (no need to edit; colors come from config.js)
├── js/
│   ├── config.js           🎨 ALL colors + images (profile, CV, project look)
│   ├── data.js             ✏️ ALL text content (bio, jobs, projects, skills…)
│   └── main.js             Rendering + animations (no need to edit)
└── assets/
    ├── images/             Your photo, e.g. profile.jpg
    │   └── projects/       Project banners, e.g. giggo.png
    └── resume/             Your CV PDF
```

**To change a color or image, edit `js/config.js`. To change text, edit `js/data.js`.**

### Common edits
- **Brand colors:** `colors.primary` / `colors.secondary` in `config.js`. The buttons, gradients, glow and highlights all update together.
- **Your photo:** add `assets/images/profile.jpg` and set `images.profile: "assets/images/profile.jpg"`. It replaces the phone mockup in the hero.
- **Project banner:** add `assets/images/projects/giggo.png` and set `projects.giggo.image` in `config.js`. A Play Store feature graphic (1024×500) looks best.
- **Project color or icon:** `projects.<id>.color` and `projects.<id>.icon` in `config.js`.
- **Add a project:** add an entry with a new `id` to `projects` in `data.js`, then optionally give it a look in `config.js`.
- **Contact form:** by default it opens the visitor's email app. For inbox delivery, create a free form at [formspree.io](https://formspree.io) and set `formspreeId` in `data.js`.

Preview locally: double-click `index.html`, or run `python3 -m http.server 8000` and open http://localhost:8000.

## Deploy free on GitHub Pages (recommended)

1. Create a new **public** repo on GitHub named exactly **`sushilchhetri.github.io`**.
2. From this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/sushilchhetri/sushilchhetri.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**. Under **Source**, choose *Deploy from a branch*, then select `main` / `/ (root)`.
4. After 1–2 minutes the site is live at **https://sushilchhetri.github.io**.

To update the site later: `git add . && git commit -m "update" && git push`.

## Other free hosts
| Host | Why |
|------|-----|
| **Netlify** | Drag and drop the folder at app.netlify.com/drop. Free form handling. |
| **Vercel** | Import the GitHub repo and it auto-deploys on every push. |
| **Cloudflare Pages** | Very fast global CDN and unlimited bandwidth. |

All of them support a custom domain (for example `sushilchhetri.dev`) if you buy one later.
