# JL SubNexus

A simple, private tracker for subscriptions **and** non-subscription bills. Runs entirely in your browser.

**Live site:** https://jlartwork.github.io/subscription-tracker/

## Features

- Track both **Subscriptions** and **Bills** in one unified list
- Support for different frequencies: Monthly, Quarterly, Semi-annually, Yearly, One-time
- Smart **Monthly Burn Rate** that prorates non-monthly payments (e.g. $1200 car insurance every 6 months = $200/mo)
- **Due in Next 30 Days** shows actual cash you'll need to pay soon
- **Paycheck Budget** — enter your last paycheck and see what's committed, left to spend, and daily budget
- Pay schedules: **1st & 15th (semi-monthly)**, weekly, biweekly, or monthly (1st) — with next-paycheck preview
- **Dark / light theme** toggle in Settings
- Filter by All / Subscriptions / Bills
- **Mark as Paid** automatically advances the due date based on the item's frequency
- Color-coded urgency + search
- **Export / Import** full JSON backups (payments + paycheck + settings)
- 100% private — data lives only in your browser (localStorage)

## Getting Started

1. Visit the live site
2. Add subscriptions or bills (with the correct frequency)
3. Enter your last paycheck amount and choose your pay schedule
4. Use **Mark as Paid** — it will automatically set the next due date based on frequency
5. Your data is saved automatically in your browser

## Tips

- For yearly or semi-annual bills (insurance, property tax, etc.), choose the matching frequency. The **Monthly Burn Rate** will correctly prorate them.
- Paid on the **1st and 15th**? Choose semi-monthly — the app calculates your real pay windows and projects the next check too.
- One-time items are removed after you "Mark as Paid".
- Use Export/Import to move everything (payments, paycheck, theme) to another browser or device.

## Backing Up Your Data

- Click **Export** to download a backup file (`jl-subnexus-backup-YYYY-MM-DD.json`)
- Backups include payments, paycheck amount, pay schedule, and theme preference
- Use **Import** to restore from a backup (older item-only backups still work)
- Theme is kept if you use **Clear all data** — only payments and paycheck settings are wiped

## Self-Hosting

You can easily host this yourself:

1. Fork this repository
2. Go to **Settings → Pages**
3. Set "Source" to **Deploy from a branch** → `main` → `/ (root)`
4. Your site will be live at `https://YOUR_USERNAME.github.io/subscription-tracker/`

## Tech

- Single-file vanilla HTML + Tailwind CSS (Play CDN)
- Zero build dependencies
- PWA with service worker — works offline after first load

## License

MIT — feel free to use and modify for your own needs.
