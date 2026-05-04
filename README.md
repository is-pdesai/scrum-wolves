# SCRUM Wolves — Wolf Fan Site

Static, multi-page wolf fan site. Plain HTML + CSS + a single image (the logo). No build step, no JavaScript framework. Public-domain photos hot-linked from Wikimedia Commons.

## Pages

| File | What it is |
|---|---|
| `index.html` | Home — hero, intro, nav |
| `gallery.html` | Image Gallery (public-domain photos) + submission form |
| `diet.html` | Diet |
| `habitat.html` | Habitat (with range map) |
| `behavior.html` | Behavior |
| `mating.html` | Mating & Reproduction |
| `anatomy.html` | Anatomy & Biology (with size diagram) |
| `classification.html` | Scientific Name & Classification |
| `site/styles.css` | Shared styles |
| `site/logo.png` | The wolf crest |

---

## Deploy to GitHub Pages

1. **Create a repo.** On github.com → New repository. Public. Name it whatever (e.g. `scrum-wolves`).
2. **Push the files.** From this project folder:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-user>/scrum-wolves.git
   git push -u origin main
   ```
   Or, easier: open the repo on github.com → **Add file → Upload files** → drag the whole project folder in → Commit.
3. **Enable Pages.** Repo → **Settings → Pages**.
   - Source: **Deploy from a branch**
   - Branch: `main` / **/(root)**
   - Save.
4. Wait 30–60 seconds. GitHub will give you a URL like `https://<your-user>.github.io/scrum-wolves/`. That's the Home page.

### Putting it on Google Sites

In Google Sites: **Insert → Embed → By URL** and paste the GitHub Pages URL above. Repeat per page if you want each section on its own Google Sites page (use `https://<your-user>.github.io/scrum-wolves/diet.html`, etc.).

---

## Image credits

All gallery photos are public domain via Wikimedia Commons (originally from the U.S. National Park Service, U.S. Fish & Wildlife Service, or contributor-released public domain). They are hot-linked directly from `upload.wikimedia.org`, which is permitted by Wikimedia. If you'd rather host them yourself, download the images from each `<img src>` URL into `site/` and update the paths.

## Color palette

- Deep navy `#102942`
- Steel blue `#2a5a82`
- Icy cyan `#4ea8d8`
- Pale steel `#9bc7e0`
- Paper `#eef3f7`
- Ink `#0a1a2a`

## Type

Headings: **Fraunces** / **Cinzel**. Body: **Inter**. Numbers/labels: **JetBrains Mono**. All loaded from Google Fonts.
