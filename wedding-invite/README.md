# 💍 Wedding Invitation — Invifest Style

A beautiful, fully animated digital wedding invitation inspired by Invifest.

## Features
- 🪷 Envelope opening animation with wax seal
- ✨ Animated falling petals throughout
- 🗓️ Scratch-to-reveal Save the Date cards
- ⏳ Live countdown timer
- 🎉 Festivities section with event cards + dress code
- 📷 Polaroid photo gallery (add your own photos!)
- 🏛️ Venue section with directions button
- 🔊 Sound toggle (add your own background music)
- 📱 Fully mobile responsive

---

## 🚀 Deploy on Vercel (3 steps)

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Customise your details
Open `pages/index.js` and edit the `CONFIG` object at the top:

```js
const CONFIG = {
  bride: 'Meenal',           // ← Change bride name
  groom: 'Avinash',         // ← Change groom name
  brideFamily: 'Daughter of Mr. & Mrs. Sharma',
  groomFamily: 'Son of Mr. & Mrs. Patel',
  weddingDate: new Date('2026-07-01T10:00:00+05:30'),  // ← Your wedding date
  weddingDateDisplay: '01 · 07 · 2026',
  hashtag: '#MeenalWedAvinash',
  initials: 'M&A',           // ← Appears on wax seal
  // ... events and venue below
}
```

### Step 3 — Deploy to Vercel
```bash
npm install -g vercel
vercel deploy
```
Or push to GitHub and connect to Vercel at vercel.com — it auto-deploys!

---

## 📸 Adding Real Photos

1. Add your couple photos to `/public/photos/` as `photo1.jpg`, `photo2.jpg`, `photo3.jpg`
2. In `pages/index.js`, find the gallery section and replace:
```jsx
<div className="polaroid-img" style={{ background: ... }}>
  <span>📷</span>
</div>
```
with:
```jsx
<div className="polaroid-img">
  <img src="/photos/photo1.jpg" alt="caption" />
</div>
```

## 🎵 Adding Background Music

1. Add your MP3 to `/public/music/wedding-bg.mp3`
2. In `pages/index.js` find the `SoundToggle` component and uncomment the audio lines:
```js
audioRef.current = new Audio('/music/wedding-bg.mp3')
```

## 🏛️ Adding a Real Venue Photo

1. Add your venue photo to `/public/venue.jpg`
2. In the venue section, replace the emoji placeholder with:
```jsx
<img src="/venue.jpg" alt="Venue" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
```

---

## 🛠 Local Development

```bash
npm run dev
# Open http://localhost:3000
```

## 📁 Project Structure

```
wedding-invite/
├── pages/
│   ├── _app.js       # App wrapper
│   └── index.js      # Main invitation page + CONFIG
├── styles/
│   └── globals.css   # All styles
├── public/
│   ├── photos/       # Add your couple photos here
│   ├── music/        # Add background music here
│   └── venue.jpg     # Add venue photo here
├── package.json
└── next.config.js
```

---

Made with ❤️ using Next.js · Inspired by Invifest
