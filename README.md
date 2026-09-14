# Old Africa Adventures — Website

A 10-page safari tour-operator website (HTML/CSS/vanilla JS) plus a small
Node.js backend for the Contact and Get-a-Quote forms.

## Opening this in VS Code

1. Unzip the project anywhere on your computer.
2. Open VS Code → **File → Open Folder…** → select the unzipped `oaa`
   folder (or double-click `old-africa-adventures.code-workspace` to open
   it as a workspace).
3. VS Code will prompt you to install the recommended extensions
   (`.vscode/extensions.json`) — accept it. The one you actually need is
   **Live Server**, which lets you preview the HTML pages with working
   relative links, instead of double-clicking files in Finder/Explorer.
4. **Preview the frontend:** right-click `index.html` in the file explorer
   → **Open with Live Server**. It opens in your browser at
   `http://127.0.0.1:5500` and auto-refreshes as you edit files.
5. **Run the backend:** open the built-in terminal (`` Ctrl+` `` /
   `` Cmd+` ``) and either:
   - run the task **Terminal → Run Task… → Backend: npm install**, then
     **Backend: Start Server**, or
   - press **F5** to launch "Run Backend Server" with the debugger attached
     (breakpoints work), or
   - just type the commands manually — see the Backend section below.

No build step, bundler, or framework is involved anywhere — every file is
plain HTML/CSS/JS you can open and edit directly.

## Pages


| Page | File |
|---|---|
| Home | `index.html` |
| Destinations | `destinations.html` |
| Tours | `tours.html` |
| Tour detail (example) | `tour-detail.html` |
| About | `about.html` |
| Blog | `blog.html` |
| Blog article (example) | `blog-article.html` |
| Services | `services.html` |
| Contact | `contact.html` |
| Get a Quote | `quote.html` |

## Running the frontend

No build step needed. Two options:

- **Simplest:** double-click `index.html` to open it in your browser and
  click around.
- **Recommended** (so relative links/images behave exactly like a real
  server): from this folder run `npx serve .` (or any static file server)
  and open the address it prints.

Shared markup (navigation bar, footer, floating WhatsApp button) lives in
`js/components.js` so it only has to be written once — every page includes
an empty `<header id="site-header">` / `<footer id="site-footer">` that gets
filled in automatically. All colors, type and spacing live in
`css/style.css`.

## Running the backend (contact form → email + WhatsApp)

See **`backend/README.md`** — a step-by-step guide written for someone who
has never set up a backend before. Short version:

```bash
cd backend
npm install
cp .env.example .env   # then fill in your email credentials
npm start
```

The contact and quote forms (`js/main.js`) already know how to talk to it.

## Customizing

- Replace the placeholder photography (currently `picsum.photos` stand-ins)
  with real photos of your destinations, tours and team.
- Update the phone/WhatsApp number and email address in
  `js/components.js`, `js/main.js`, and the `contact.html` / `quote.html`
  pages — search for `254722888337` and `oldafricaadventures.com`.
- Tour and blog listing pages currently link every card to the same example
  detail page (`tour-detail.html` / `blog-article.html`). Duplicate those
  files per tour/article as you add real content, or wire them up to a CMS
  later.
