## Getting Started

First, install dependencies:
```bash
npm i
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Writing Content for Your Portfolio

Most of the content can be found under `/content`.
- `/content/skills.ts` is a list of tech/skills that you use with their corresponding icons from Iconfiy.
- `/content/experiences.ts` is a list of your work history in a resume/CV format.
- `/content/posts.ts` is a list of blog posts.
- `/content/projects.tsx` is a list of projects you've worked in, the tech you used, and some images to showcase your work.
- `/content/services.ts` is a list of services you offer to clients.

Make sure to also modify `/components/SiteLayout.tsx` for SEO.

For project and blog images, stick with a 4x3 ratio.

For tips on writing your content, [check out this guide](https://dev.to/trishathecookie/how-to-create-a-portfolio-website-that-converts-for-software-developers-2a5h).

## Deployment on Vercel
1. Create a GitHub repository for your project.
2. Push this project to that repository.
3. Sign up for an account on [Vercel](https://vercel.com/signup). Make sure to click "Continue with GitHub".
4. Give Vercel the permissions to read the repositories in your GitHub account.
5. You will see a list of all your GitHub repositories. Select the repository for this project.
6. Click Deploy button.
7. On the dashboard, you will see your app deployment progress and a link. Every time you make changes to your `master` branch, it will trigger a deployment and update your website.
8. Optional step: [add a custom domain](https://vercel.com/docs/concepts/projects/custom-domains).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftrishalim%2Fdeveloper-portfolio-template.git&project-name=portfolio)

## Resources

- [Iconify](https://iconify.design/) for icons and logos
- [Tailwind Documentation](https://tailwindcss.com/) for CSS
- [Next.js Documentation](https://nextjs.org/docs)
