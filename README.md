# Bettermeant demo site

Next.js 16 + Tailwind CSS 4 + Framer Motion. Concept build by OTAI Systems.

## Deploy
1. Unzip, then push the whole folder to a new GitHub repo.
2. In Vercel: Add New > Project > import the repo. Framework preset is detected as Next.js. No settings to change.
3. Deploy.

## Run locally (optional)
```
npm install
npm run dev
```

## Pages
- `/` Home (form on the right of the hero)
- `/meantorship`
- `/services/individuals`, `/services/owners`, `/services/teams`
- `/team`
- `/musings`
- `/contact`

## Form
The discovery-session form posts to `/api/inquiry`.
To receive the requests, add an environment variable in Vercel:
`INQUIRY_WEBHOOK_URL` = any webhook (an n8n webhook works). Every submission is forwarded as JSON.
Without it, submissions are only logged.

## Content and images
- All copy lives in `lib/content.ts`.
- Images are in `public/images/` (`team.jpg`, `individual.jpg`, `clients.jpg`). Replace with original
  full-resolution files using the same names for sharper results.
