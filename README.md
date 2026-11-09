# Ritika Chaube — Portfolio

A responsive personal portfolio built with React, Vite, and CSS, ready for GitHub Pages.

## Edit your 
## Run locally

Install Node.js 22 or later. Then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To verify the production build:

```bash
npm run build
```

## Deploy to GitHub Pages

1. On GitHub, create a **public** repository named exactly `RitikaC1.github.io`.
2. Upload the project files (including the hidden `.github` folder) to the repository's `main` branch. Do not upload `node_modules` or `dist`.
3. Go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
4. Open the **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish. If you selected the Pages source after your first push, open the workflow and choose **Run workflow**, or push a new commit.
5. Visit **https://RitikaC1.github.io**. Publication can take a few minutes.


If you instead host under a repository other than `RitikaC1.github.io`, change `base` in `vite.config.js` to `'/REPOSITORY-NAME/'`.
