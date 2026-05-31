# Subs • Payment Tracker

A simple, private tracker for subscriptions **and** non-subscription bills. Runs entirely in your browser.

**Live site:** https://jlartwork.github.io/subscription-tracker/

## Features

- Track both **Subscriptions** and **Bills** in one unified list
- Support for different frequencies: Monthly, Quarterly, Semi-annually, Yearly, One-time
- Smart "Monthly Burn Rate" that prorates non-monthly payments (e.g. $1200 car insurance every 6 months = $200/mo)
- "Due in Next 30 Days" shows actual cash you'll need to pay soon
- Filter by All / Subscriptions / Bills
- "Mark as Paid" automatically advances the due date based on the item's frequency
- Color-coded urgency + search
- Export / Import JSON for backups
- 100% private — data lives only in your browser (localStorage)

## Getting Started

1. Visit the live site
2. Add subscriptions or bills (with the correct frequency)
3. Use **Mark as Paid** — it will automatically set the next due date based on frequency
4. Your data is saved automatically in your browser

## Tips

- For yearly or semi-annual bills (insurance, property tax, etc.), choose the matching frequency. The **Monthly Burn Rate** will correctly prorate them.
- One-time items are removed after you "Mark as Paid".
- Use Export/Import if you want to move your data to another browser or device.

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