# 3df (3degreefrenzy) — Team Website

An informational showcase site for the 3df video editing team. Features sections for About, Team Members (6 profiles), and multiple Contact channels.

## Structure

```
3DF website/
├─ index.html
├─ styles.css
├─ script.js
└─ assets/
   └─ images/
      └─ (team member photos)
```

## Customizing Team Members

In `index.html`, update the Team section (`#members`) cards with real names, roles, bios, and replace the `.avatar` placeholder with an `<img>` pointing to `assets/images/<member>.jpg`.

Example:

```html
<article class="card">
  <img class="avatar" src="assets/images/alex.jpg" alt="Alex — Lead Editor" />
  <h3>Alex</h3>
  <p class="role">Lead Editor</p>
  <p class="bio">Specializes in narrative storytelling and pacing</p>
</article>
```

## Updating Contact Information

Edit the Contact section (`#contact`) in `index.html` to add your real email addresses, social media links, and Discord server invite.

## Run

Open `index.html` directly in your browser, or serve locally:

```powershell
# Option 1: Open in default browser
Start-Process "c:\Users\baula\Desktop\3DF website\index.html"

# Option 2: Quick local server (Python)
python -m http.server 8000 -d "c:\Users\baula\Desktop\3DF website"; Start-Process http://localhost:8000/index.html
```

## Features

- Informational team showcase with 6 member profiles
- Expanded contact section with email, business, social, and Discord channels
- Mobile-responsive design with hamburger menu
- Scroll reveal animations on section titles and team cards
- Blue/cyan gradient theme matching the 3df logo
