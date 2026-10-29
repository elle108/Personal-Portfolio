# Elle Miller's Personal Portfolio

This is my personal portfolio website built as part of my application to GVSU Blue Nucleus to showcase my projects, experience, and interests as a computer science student. It also includes a contact form backed by Firebase, allowing visitors to reach out directly.

The site is designed to be clean, calm, and approachable, with a soft pastel theme inspired by Sanrio, while still keeping the focus on my technical work.

## Features

- One-page portfolio (Hero, About, Experience, Projects, Skills & Leadership, Contact) plus a **Personal** page
- Pastel design system built with Tailwind CSS v4 theme tokens (Fraunces + Quicksand fonts)
- Contact form that emails me through [Web3Forms](https://web3forms.com) and archives a copy in Firestore
- Optional **Ask Elle** AI chat widget that answers questions about my experience, projects, and skills using the Claude API
- Firebase Authentication for an admin-only inbox at `/admin` (linked quietly from the footer)
- Responsive layout with a mobile menu, scroll reveal animations, and reduced-motion support
- Deployed with Vercel (with Vercel Analytics)

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS, lucide-react icons
- **Backend:** Firebase (Firestore, Authentication), Web3Forms for email, a Vercel serverless function calling the Claude API
- **Routing:** React Router
- **Deployment:** Vercel

## Updating Content

Everything on the site (bio, experience, projects, skills, hobbies) lives in
`my-portfolio/src/data/site.js`. Edit that file and the pages update automatically.

**Photos for the Personal page:** drop images into
- `my-portfolio/src/assets/personal/pup/` for dog photos
- `my-portfolio/src/assets/personal/life/` for everything else

They show up automatically. Add captions by filename in the `personal.captions` object in `site.js`.

**Resume button:** put a PDF at `my-portfolio/public/resume.pdf` and set `profile.resumeUrl` to `"/resume.pdf"`.

## Contact Form Setup

1. Get a free access key at [web3forms.com](https://web3forms.com) using the email you want messages sent to.
2. Add it to `my-portfolio/.env` as `VITE_WEB3FORMS_KEY=...` (see `.env.example`).
3. Add the same variable in Vercel under Project Settings → Environment Variables and redeploy.

Messages are also saved to the Firestore `contacts` collection so they show up in the admin inbox.

## Ask Elle Chat Setup (optional)

The floating "Ask Elle" chat sends visitors' questions to `my-portfolio/api/ask.js`, a Vercel
serverless function that calls the Claude API. Its answers are grounded in `src/data/site.js`, so
updating that file updates what the chat knows. The API key lives only on the server and is never
bundled into the site.

1. Create an API key at [console.anthropic.com](https://console.anthropic.com).
2. In `my-portfolio/.env` add:
   ```
   ANTHROPIC_API_KEY=sk-ant-...
   VITE_ASK_ELLE=true
   ```
   Keep `ANTHROPIC_API_KEY` **without** a `VITE_` prefix; anything prefixed `VITE_` is shipped to the browser.
3. In Vercel, add both variables under Project Settings → Environment Variables and redeploy.
   Leave `VITE_ASK_ELLE` unset (or `false`) to hide the widget.

Optional: set `ANTHROPIC_MODEL` to use a different Claude model (defaults to `claude-opus-5-5`).

Built-in guards: questions are capped at 500 characters, only the last 8 messages are sent, each
IP gets about 10 questions per minute, and the system prompt keeps answers on topic and has the
assistant say so when something isn't on the site. It's worth setting a monthly spend limit in the
Anthropic Console too.

## Running Locally

```bash
npm install
npm run dev
```
The application will be available at
http://localhost:5174

`npm run dev` only runs the Vite frontend, so the Ask Elle chat will show an error there.
To run the site **and** the `/api` serverless function together, use the Vercel CLI from `my-portfolio/`:

```bash
npm install -g vercel
vercel link   # one time: connect the folder to the Vercel project
vercel dev
```

`vercel dev` reads `my-portfolio/.env` and serves everything at http://localhost:3000.

## Future Development
- Continue to update information as education progresses
- Add photos to the Personal page
- Keep experimenting with the "Ask Elle" chat (streaming replies, a persistent rate limit)

## References and Resources

### React
- [React Official Docs](https://react.dev)
- [React: State – A Component’s Memory](https://react.dev/learn/state-a-components-memory)
- [React: Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [React: Responding to Events](https://react.dev/learn/responding-to-events)
- [React JSX Guide](https://www.w3schools.com/react/react_jsx.asp)
- [Legacy React: DOM Elements - style](https://legacy.reactjs.org/docs/dom-elements.html#style)
- [React Router Official Docs](https://reactrouter.com/start/declarative/routing)
- [React Router Guide (W3Schools)](https://www.w3schools.com/react/react_router.asp#:~:text=Without%20a%20router%2C%20your%20React,and%20routes%20for%20each%20link:)

### Firebase
- [Firebase: Add Data to Firestore](https://firebase.google.com/docs/firestore/manage-data/add-data)
- [Firebase Auth in React + Vite (Medium)](https://medium.com/@sajadshafi/implementing-firebase-auth-in-react-js-typescript-vite-js-88465ac84170)

### Tailwind CSS
- [Tailwind CSS Official Docs](https://tailwindcss.com/docs/styling-with-utility-classes)
- [Tailwind CSS: Min Height](https://tailwindcss.com/docs/min-height)
- [Tailwind CSS: Justify Content](https://tailwindcss.com/docs/justify-content)
- [Tailwind CSS: Line Height](https://tailwindcss.com/docs/line-height)
- [Tailwind CSS: Font Size](https://tailwindcss.com/docs/font-size)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Material Tailwind React: Images](https://www.material-tailwind.com/docs/react/img)

### ShadCN UI
- [ShadCN UI Vite Installation](https://ui.shadcn.com/docs/installation/vite)
- [ShadCN UI React Router Installation](https://ui.shadcn.com/docs/installation/react-router)
- [ShadCN UI Navigation Menu](https://www.shadcn.io/ui/navigation-menu)
- [ShadCN Navigation Menu Component Docs](https://ui.shadcn.com/docs/components/navigation-menu)
- [ShadCN Card Component Docs](https://ui.shadcn.com/docs/components/card)
- [ShadCN Item Component Docs](https://ui.shadcn.com/docs/components/item)
- [ShadCN UI Issues & Examples](https://github.com/shadcn-ui/ui/issues/1506)
- [ShadCN Component Examples](https://ui.shadcn.com/docs/componentsea)

### Tutorials & Examples
- [Building a React App with Vite (Dev.to)](https://dev.to/manukumar07/building-your-first-react-app-with-vite-a-step-by-step-guide-2247?utm_source=chatgpt.com)
- [React Contact Form Example (GitHub)](https://github.com/shanjairaj7/React-contact-form/blob/master/src/components/Contact.js)
- [React Tailwind Portfolio Example](https://github.com/realstoman/react-tailwindcss-portfolio/tree/main)
- [Responsive React/Tailwind Example](https://github.com/kunal1173/Responsive-Website-with-ReactJS-and-TailwindCSS/tree/main)
- [My Personal Portfolio Repo](https://github.com/elle108/Personal-Portfolio/tree/main)

### Claude API
- [Claude API Docs](https://platform.claude.com/docs)
- [Anthropic TypeScript SDK](https://github.com/anthropics/anthropic-sdk-typescript)
- [Vercel Functions](https://vercel.com/docs/functions)

### Tools & Platforms
- [Vite Official Docs](https://vite.dev)
- [Vercel Hosting](https://vercel.com/)
- [Firebase Contact Form](https://www.youtube.com/watch?v=RKj3OjgftXc)
- [Gist: React Contact Form Example](https://gist.github.com/delibytes/5b4f480427b9e7a923f7a313e58aaca8)



