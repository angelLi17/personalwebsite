# personalwebsite

My personal site — React + TypeScript + Vite, deployed to GitHub Pages.

## Run locally

```sh
npm install
npm run dev      # http://localhost:5173/personalwebsite/
```

## Write a blog post

1. Copy `src/content/posts/_template.md` to `src/content/posts/YYYY-MM-DD-short-title.md`.
2. Fill in the frontmatter (`title`, `date`, `summary`) and write the post in Markdown.
3. Put any images in `public/blog/` and reference them as `![alt](/blog/photo.jpg)`.
4. Commit and push to `main` — GitHub Actions rebuilds and deploys the site.

Set `draft: true` to keep a post off the live site (drafts still show in `npm run dev`).
Files starting with `_` are ignored.

## Edit portfolio projects

Projects (and the photostrips) come from `src/content/projects.ts`.
Add a photo by dropping it in `public/projects/` and setting `image: '/projects/<file>'`.

## Background

`public/images/beach-bg.jpg` — temporary art by seisyun bot (credited in the footer).
