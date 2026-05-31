# Subscription Tracker

A simple, private subscription tracker that runs entirely in your browser. Track your services, renewal dates, and monthly costs.

**Live site:** https://jlartwork.github.io/subscription-tracker/

## Features

- Add, edit, and delete subscriptions
- "Mark as Paid" button that automatically advances the renewal date by one month
- See total monthly and yearly spend at a glance
- Color-coded urgency (overdue, due soon, upcoming)
- Search and sort by renewal date
- Export / Import your data as JSON (easy backup)
- Everything stored locally in your browser (no account, no server, fully private)

## Getting Started

1. Visit the live site
2. Start adding your subscriptions
3. Your data is automatically saved in your browser

## Backing Up Your Data

- Click **Export JSON** to download a backup file
- Use **Import JSON** to restore from a backup (or transfer to another browser/device)

## Self-Hosting

You can easily host this yourself:

1. Fork this repository
2. Go to **Settings → Pages**
3. Set "Source" to **Deploy from a branch** → `main` → `/ (root)`
4. Your site will be live at `https://YOUR_USERNAME.github.io/subscription-tracker/`

## Tech

- Single-file vanilla HTML + Tailwind CSS (Play CDN)
- Zero dependencies
- Works completely offline after first load

## License

MIT — feel free to use and modify for your own needs.