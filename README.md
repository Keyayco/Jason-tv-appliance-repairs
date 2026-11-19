# Jason TV & Appliance Repairs — Website

A premium, mobile-first static website for **Jason TV & Appliance Repairs**,
built by Devign Digital as a client demonstration.

Telephone / WhatsApp: 063 715 9234
Address: 3 Bromley Road, Dinwiddie, Germiston, 1401, South Africa

## Tech stack

- Vanilla HTML5, CSS3 and JavaScript — no frameworks, no build step.
- Fully static: works by opening `index.html` or hosting on any static host.
- Optimised images, semantic HTML, accessible navigation.

## Project structure

```
jason-tv-appliance-repairs/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── favicon.svg
│       ├── hero.jpg
│       ├── tv-repairs.jpg
│       ├── diagnosis.jpg
│       ├── why-us.jpg
│       └── general.jpg
└── README.md
```

## Local preview

Open `index.html` directly in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `jason-tv-appliance-repairs`).
2. Upload all files in this folder, keeping the folder structure exactly as above
   (`index.html` must sit at the repository root).
3. In the repository, go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and the `/ (root)` folder, then save.
6. Wait a minute, then visit `https://<your-username>.github.io/<repository-name>/`.

No build command, no environment variables and no backend are required.

## How the enquiry form works

The form does **not** send data to a server. On submit it opens WhatsApp
(`https://wa.me/27637159234`) with the visitor's name, device and problem
description pre-filled in the message.

## Placeholder content to confirm with the client

The following items are intentionally generic and should be confirmed or
replaced before this site goes live for real:

- [ ] Services offered in detail (brands handled, in-home vs workshop repairs)
- [ ] Service area (currently stated as "Dinwiddie, Germiston and surrounding areas")
- [ ] Trading hours (not published — deliberately omitted)
- [ ] Any guarantees or warranties (not claimed anywhere)
- [ ] Years of experience / business history (not claimed anywhere)
- [ ] Customer testimonials (not included)
- [ ] E-mail address (not provided)
- [ ] Replace stock imagery with real photos of Jason at work
- [ ] Confirm Devign Digital attribution link URL in the footer

## Image credits

Photography sourced from royalty-free/stock search results for demonstration
purposes. Replace with client-owned photos before production launch.
