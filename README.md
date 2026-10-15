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

The repo includes a workflow (`.github/workflows/deploy.yml`) that builds the static site and deploys it to GitHub Pages on every push to `main`.

One-time setup in the GitHub repository:

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions** (not "Deploy from a branch").
3. Push to `main` (or run the workflow manually from the Actions tab).

The site will be live at `https://<your-username>.github.io/<repository-name>/`. Asset paths are relative, so it works from the project subpath without extra config.
