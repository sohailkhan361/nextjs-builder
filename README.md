This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
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

## START:
> npx create-next-app .
> npm init builder.io@latest
> npm run dev
> Go to: http://localhost:3000
> Develop UI using Builder.io
> Publish the components which can be reused.
> npm install mongoose
> Configurations:
const nextConfig = withBuilderDevTools({
    experimental: {
        serverActions: true
    }
});

'use server';
in the async function

- Read
> dbConnect();
    const todos = await Todo.find();

- Update
> [id]: This is the dynamic part of the route. It's enclosed in square brackets [], indicating that it's a dynamic parameter. The name "id" is used as a placeholder for the actual value that will be part of the URL. You can have multiple dynamic parameters in a single route, each enclosed in square brackets
For example, if you have a URL like /folder/123/page, the [id] parameter will be 123, and your page.tsx component can use this value to fetch and display content related to that specific ID.

> 'use server';
dbConnect();
let update = await Todo.findByIdAndUpdate({ _id: params.id}, { title, todo })

- Delete
> // Function: Delete the data
    async function deleteTodo(data: any) {
        'use server'
        let id = JSON.parse(data.get('id')?.valueOf());
        await Todo.deleteOne({ _id: id });
        redirect('/show');
    }




