# SoundCloud Coding Challenge
An Interface of Ice and Fire

As an avid fan of the epic series A Song of Ice and Fire, I have a hard time keeping up with all of the characters who lose their heads. As such, I would like to have an application that can help me track which characters from the series are alive or dead. 


Please provide an application that satisfies the following criteria:

- Uses https://anapioficeandfire.com/ as a data source

- Is built using your tech stack of choice

- The Houses resource from the API (https://anapioficeandfire.com/api/houses) is paginated by default to 10 results, for these 10 houses please display a list of all of their Sworn Members grouped by house

- For each Sworn Member display their full name and whether they are alive or dead

- If a character is dead, please display the information provided by the API about their death

- If a house has no Sworn Members, please display the message "This house has no sworn members"

- You are welcome to use tools like ChatGPT if that is a part of your daily workflow but please be prepared to defend your choice to use those tools and provide alternate methods if requested on review


Submissions will be accepted in the form of GitHub link, CodeSandbox link or zip file. Please provide instructions for how to run the application.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
