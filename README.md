# Astro Content Collections Docs Template!

This is a template that leverages the Content Collections API to automatically create a documentation website based on markdown files. It looks inside the `content` folder and uses it's internal folder structure to create a Table of Contents. It also checks through each markdown file for headings. Astro internally converts each heading into an h2 with a linkable `id`, so we simply run a script on each page which looks for these headings and makes a "On this Page" link-list. This allows for a classic recognizable layout with an overall table of contents on the left side, and a table of contents for just what's on each page on the right side.

## How to Use This Template

1.) Download or fork the repo into the folder of your choice.
2.) Run `npm install` / `yarn install` / `pnpm install` to install dependencies.
3.) Run `npm run dev` / `yarn dev` / `pnpm dev` to start the dev server.
4.) Start writing markdown files in the `content` folder. You can create new folders and subfolders to organize your content.
5.) When you're ready to deploy, run `npm run build` / `yarn build` / `pnpm build` to build the site. The output will be in the `dist` folder.

## How to Customize This Template

This template is built with TailwindCSS. All of the colors used in the template are clearly defined in the `tailwind.config.js` file. I only used 3 or 4 colors, but I set up the config file to allow for more if you want to customize it further. You can also change the fonts in the `tailwind.config.js` file. There are a few additional styles in the `src/styles/global.css` file. I added some comments so you can see which colors correspond to the TailwindCSS variables.

Other than that, the main thing you'll want to change is the logo. The SVG logo is in the `public` folder. This is used for the favicon and the background. The PNG logo is in the `src/assets` folder. This is used for the logo in the header and on the landing page. You can replace these with your own logo or a picture of my face. I don't care.

## How to Deploy This Template

[Here's a link to the Astro docs about deploying an Astro website.](https://docs.astro.build/en/guides/deploy/)

## Credits

I completely stole the initial layout from [The Create-T3-App Docs.](https://create.t3.gg/en/introduction). Shout out to all the great people working on that project. This template was created while making the docs for [QGP](https://qgp.app). Big props to [Parasocial Fix/JLarky](https://twitter.com/JLarky) for his awesome project.
