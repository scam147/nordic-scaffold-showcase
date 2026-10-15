# Nordic Scaffold Showcase

Create slovak promo webpage for scaffolding company, we go to sweden and plan norway and denmark, image reference

use react language, static page deployable on github pages for example, make sure its deployable

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5ec2539f-addf-46cc-96dc-afe05c42b334).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploying to GitHub Pages

The ready-built website is kept in the `docs/` folder (including `CNAME` for www.stallningar.suty.sk and `.nojekyll`).

GitHub setup: **Settings → Pages → Source: Deploy from a branch → Branch: `main`, folder: `/docs` → Save.**

After changing the site, rebuild and refresh `docs/`:

```sh
npm run build
rm -rf docs && cp -r dist/client docs && touch docs/.nojekyll && echo "www.stallningar.suty.sk" > docs/CNAME
```

Alternatively, `.github/workflows/deploy.yml` can build automatically if Source is set to **GitHub Actions**.
