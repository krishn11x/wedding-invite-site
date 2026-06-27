import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

/* ─── CONFIG – change these to customise ─── */
const CONFIG = {
  bride: 'Aanchal',
  groom: 'Harshit',
  brideFamily: 'Daughter of Mr. & Mrs. Gupta',
  groomFamily: 'Son of Mr. & Mrs. Aggarwal',
  weddingDate: new Date('2026-11-26T10:00:00+05:30'),
  weddingDateDisplay: '26 · 11 · 2026',
  hashtag: '#AanchalwedHarshit',
  initials: 'H&A',
  events: [
    {
      name: 'Sangeet Night',
      day: 'Tuesday · 30 · Jun 2026',
      time: '7:00 PM',
      quote: '"An evening of music, dance, and endless joy."',
      dressColors: ['#6b2737', '#b8860b', '#f5f0e8'],
      dressLabels: 'Maroon · Gold · Cream',
      dressType: 'Traditional Indian / Indo-Western',
      venue: 'Accord Wildlife Pench Resort · Grand Courtyard',
      mapsUrl: 'https://maps.google.com',
      gradient: 'linear-gradient(135deg, #7a3a4a 0%, #4a1a28 100%)',
      emoji: '🎶',
    },
    {
      name: 'The Wedding',
      day: 'Wednesday · 01 · Jul 2026',
      time: '10:00 AM',
      quote: '"A lifetime of togetherness begins with one sacred step."',
      dressColors: ['#6b2737', '#b8860b', '#f5f0e8'],
      dressLabels: 'Maroon · Gold · Cream',
      dressType: 'Traditional Indian',
      venue: 'Rajalakshmi Kalyana Mandapam · Grand Hall',
      mapsUrl: 'https://maps.google.com',
      gradient: 'linear-gradient(135deg, #c4a080 0%, #7a5040 100%)',
      emoji: '🪷',
    },
    {
      name: 'Reception',
      day: 'Wednesday · 01 · Jul 2026',
      time: '7:00 PM',
      quote: '"Join us as we celebrate our new beginning."',
      dressColors: ['#6b2737', '#b8860b', '#f5f0e8'],
      dressLabels: 'Maroon · Gold · Cream',
      dressType: 'Ethnic / Cocktail',
      venue: 'Rajalakshmi Kalyana Mandapam · Grand Courtyard',
      mapsUrl: 'https://maps.google.com',
      gradient: 'linear-gradient(135deg, #8b6070 0%, #4a2838 100%)',
      emoji: '✨',
    },
  ],
  venue: {
    name: 'Rajalakshmi Kalyana Mandapam',
    address: 'No. 205/1, Velachery Main Road, Dhandeeswaram\nVelachery, Chennai, Tamil Nadu — 600042',
    mapsUrl: 'https://maps.google.com/?q=Rajalakshmi+Kalyana+Mandapam+Chennai',
  },
  photos: [
    { caption: 'Joy and laughter', color: '#c4a0a0' },
    { caption: 'Forever starts here', color: '#a08090' },
    { caption: 'Two hearts, one story', color: '#b0907a' },
  ],
}

/* ─── PETALS ─── */
function Petals() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const container = canvasRef.current
    if (!container) return
    const colors = ['#e8a0a0','#d4758a','#e8c87a','#c4b080','#f0c0c0']
    const petals = []
    const N = 22
    for (let i = 0; i < N; i++) {
      const el = document.createElement('div')
      el.className = 'petal'
      const size = 6 + Math.random() * 14
      const color = colors[Math.floor(Math.random() * colors.length)]
      const left = Math.random() * 100
      const dur = 8 + Math.random() * 12
      const delay = Math.random() * 10
      el.style.cssText = `
        width:${size}px; height:${size * 1.6}px;
        background:${color}; left:${left}%;
        animation-duration:${dur}s; animation-delay:-${delay}s;
        opacity:${0.4 + Math.random() * 0.5};
        transform:rotate(${Math.random()*180}deg);
      `
      container.appendChild(el)
      petals.push(el)
    }
    return () => petals.forEach(p => p.remove())
  }, [])
  return <div className="petals-canvas" ref={canvasRef} />
}

/* ─── ENVELOPE ─── */
function EnvelopeScreen({ onOpen }) {
  const [hidden, setHidden] = useState(false)
  const handle = () => {
    setHidden(true)
    setTimeout(onOpen, 800)
  }
  return (
    <div className={`envelope-screen${hidden ? ' hidden' : ''}`} onClick={handle}>
      <div className="envelope-wrap">
        <div className="tap-text">Tap to Reveal</div>
        <div className="envelope-svg-wrap">
          <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%'}}>
            {/* envelope back */}
            <rect x="0" y="0" width="420" height="280" rx="16" fill="#4a1018"/>
            {/* flaps */}
            <path d="M0 0 L210 160 L420 0 Z" fill="#5c1a22"/>
            <path d="M0 0 L0 280 L180 160 Z" fill="#4a1520"/>
            <path d="M420 0 L420 280 L240 160 Z" fill="#4a1520"/>
            <path d="M0 280 L210 140 L420 280 Z" fill="#3d1018"/>
            {/* texture lines */}
            <path d="M30 20 L390 20" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            <path d="M30 40 L390 40" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            {/* flower emboss top-left */}
            <circle cx="40" cy="40" r="18" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" fill="none"/>
            <circle cx="40" cy="40" r="6" fill="rgba(255,255,255,0.06)"/>
            {/* flower emboss top-right */}
            <circle cx="380" cy="40" r="18" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" fill="none"/>
            <circle cx="380" cy="40" r="6" fill="rgba(255,255,255,0.06)"/>
          </svg>
          <div className="wax-seal">
            <div className="wax-seal-inner">
              <div className="wax-initials">{CONFIG.initials}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── SCRATCH CARD ─── */
function ScratchCard({ label, value, isMonth }) {
  const [revealed, setRevealed] = useState(false)
  return (
    <div className="date-card-wrap">
      <div className="date-card-label">{label}</div>
      <div className="date-card" onClick={() => setRevealed(true)}>
        <div className={`date-card-scratch${revealed ? ' revealed' : ''}`}>
          <div className="scratch-label">Scratch</div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4z" fill="rgba(255,255,255,0.5)"/>
          </svg>
          <div className="scratch-hint">↑ scratch</div>
        </div>
        <span className={`date-card-value${isMonth ? ' month-val' : ''}`}>{value}</span>
      </div>
    </div>
  )
}

/* ─── COUNTDOWN ─── */
function Countdown({ target }) {
  const [time, setTime] = useState({ d:'--', h:'--', m:'--', s:'--' })
  useEffect(() => {
    const tick = () => {
      const diff = target - Date.now()
      if (diff <= 0) { setTime({d:0,h:0,m:0,s:0}); return }
      setTime({
        d: Math.floor(diff/86400000),
        h: String(Math.floor((diff%86400000)/3600000)).padStart(2,'0'),
        m: String(Math.floor((diff%3600000)/60000)).padStart(2,'0'),
        s: String(Math.floor((diff%60000)/1000)).padStart(2,'0'),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  return (
    <div className="countdown-units">
      {[['Days','d'],['Hours','h'],['Mins','m'],['Secs','s']].map(([l,k]) => (
        <div className="cnt-unit" key={k}>
          <span className="cnt-num">{time[k]}</span>
          <div className="cnt-label">{l}</div>
        </div>
      ))}
    </div>
  )
}

/* ─── FADE-UP OBSERVER ─── */
function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.15 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

/* ─── MAIN PAGE ─── */
export default function Home() {
  const [opened, setOpened] = useState(false)
  useFadeUp()

  return (
    <>
      <Head>
        <title>{CONFIG.bride} weds {CONFIG.groom} | Wedding Invitation</title>
        <meta name="description" content={`You're invited to the wedding of ${CONFIG.bride} and ${CONFIG.groom}`}/>
        <meta property="og:title" content={`${CONFIG.bride} weds ${CONFIG.groom}`}/>
        <meta property="og:description" content="Join us to celebrate our special day"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪷</text></svg>"/>
      </Head>

      <Petals />
      <EnvelopeScreen onOpen={() => setOpened(true)} />

      <div className="main-content" style={{ opacity: opened ? 1 : 0, transition: 'opacity 0.8s ease' }}>

        {/* ── HERO ── */}
        <section className="hero-section">
          <div className="hero-card fade-up">
            {/* Ganesh SVG */}
            <div style={{ fontSize:'2.8rem', marginBottom:'12px' }}>🕉️</div>

            <p className="shloka">
              ॥ श्री गणेशाय नमः ॥<br/>
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ<br/>
              निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
            </p>

            <p className="blessing-text">
              With the blessings of Shri Ganesh and our beloved families,<br/>
              we joyfully invite you to celebrate the union of
            </p>

            <div className="couple-name bride">{CONFIG.bride}</div>
            <div className="ampersand">&amp;</div>
            <div className="couple-name groom">{CONFIG.groom}</div>

            <p className="family-line">{CONFIG.brideFamily} &nbsp;·&nbsp; {CONFIG.groomFamily}</p>

            <div className="scroll-cta">
              <span className="scroll-cta-text">Scroll to see magic</span>
              <span className="scroll-arrow">↓</span>
            </div>
          </div>
        </section>

        {/* ── SAVE THE DATE ── */}
        <section className="save-date-section fade-up">
          <div className="section-eyebrow">The Date</div>
          <h2 className="section-heading">Save the Date</h2>
          <p className="scratch-subtitle">Scratch below to reveal our wedding date</p>
          <div className="date-cards-row">
            <ScratchCard label="Month" value="JULY" isMonth />
            <ScratchCard label="Day"   value="01"   />
            <ScratchCard label="Year"  value="2026" />
          </div>
        </section>

        {/* ── COUNTDOWN ── */}
        <section className="countdown-section fade-up">
          <div className="countdown-card">
            <p className="countdown-italic">A lifetime of togetherness begins with one sacred step</p>
            <h2 className="countdown-title">The Wedding</h2>
            <div className="countdown-date-line">{CONFIG.weddingDateDisplay}</div>
            <Countdown target={CONFIG.weddingDate} />
          </div>
        </section>

        {/* ── FESTIVITIES ── */}
        <section className="festivities-section fade-up">
          <div className="section-eyebrow">The Celebrations Unfold</div>
          <h2 className="section-heading">Festivities</h2>
          <div className="festivities-inner">
            {CONFIG.events.map((ev, i) => (
              <div className="event-item fade-up" key={i}>
                <div className="event-img-wrap" style={{ background: ev.gradient }}>
                  <div className="event-img-placeholder">{ev.emoji}</div>
                  <div className="event-img-overlay">
                    <div className="event-name-overlay">{ev.name}</div>
                    <div className="event-date-overlay">{ev.day} &nbsp;·&nbsp; {ev.time}</div>
                  </div>
                </div>
                <div className="event-body">
                  <p className="event-quote">{ev.quote}</p>
                  <div className="dress-code-label">Dress Code</div>
                  <div className="dress-swatches">
                    {ev.dressColors.map((c,j) => (
                      <div key={j} className="swatch" style={{ background: c, border: c === '#f5f0e8' ? '0.5px solid #ccc' : 'none' }}/>
                    ))}
                  </div>
                  <div className="dress-colors-text">{ev.dressLabels}</div>
                  <div className="dress-type">{ev.dressType}</div>
                  <hr className="event-divider"/>
                  <div className="event-venue-line">{ev.venue}</div>
                  <a className="dir-btn" href={ev.mapsUrl} target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z"/>
                      <circle cx="12" cy="9" r="2.5"/>
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GALLERY ── */}
        <section className="gallery-section fade-up">
          <div className="section-eyebrow">Our Story</div>
          <h2 className="section-heading">Forever Us</h2>
          <div className="gallery-stack">
            {CONFIG.photos.map((ph, i) => (
              <div className="polaroid" key={i}>
                <div className="polaroid-img" style={{ background: `linear-gradient(135deg, ${ph.color}, #5a2a3a)` }}>
                  <span style={{ fontSize:'3rem', opacity:0.3 }}>📷</span>
                </div>
                <div className="polaroid-caption">{ph.caption}</div>
              </div>
            ))}
            <p style={{
              fontFamily:"'Cormorant Garamond', serif",
              fontStyle:'italic',
              fontSize:'0.85rem',
              color:'var(--text-light)',
              textAlign:'center',
              marginTop:'8px',
              letterSpacing:'1px'
            }}>
              Replace placeholder photos with your own images in /public/photos/
            </p>
          </div>
        </section>

        {/* ── VENUE ── */}
        <section className="venue-section fade-up">
          <div className="section-eyebrow">Where</div>
          <h2 className="section-heading">The Venue</h2>
          <div className="venue-card">
            <div className="venue-img">
              <span style={{ fontSize:'3rem', opacity:0.4 }}>🏛️</span>
            </div>
            <div className="venue-star">✦</div>
            <div className="venue-name">{CONFIG.venue.name}</div>
            <div className="venue-address">
              {CONFIG.venue.address.split('\n').map((line, i) => (
                <span key={i}>{line}{i < CONFIG.venue.address.split('\n').length - 1 && <br/>}</span>
              ))}
            </div>
            <div className="venue-btn-wrap">
              <a className="dir-btn" href={CONFIG.venue.mapsUrl} target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                View on Maps
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{
          textAlign:'center',
          padding:'48px 20px 80px',
          borderTop:'0.5px solid rgba(180,120,120,0.15)'
        }}>
          <div style={{
            fontFamily:"'Cormorant Garamond', serif",
            fontSize:'2rem',
            color:'var(--maroon)',
            marginBottom:'8px'
          }}>{CONFIG.bride} &amp; {CONFIG.groom}</div>
          <div style={{
            fontSize:'0.7rem',
            letterSpacing:'4px',
            color:'var(--gold)',
            textTransform:'uppercase',
            marginBottom:'16px'
          }}>{CONFIG.hashtag}</div>
          <div style={{
            fontFamily:"'Cormorant Garamond', serif",
            fontStyle:'italic',
            fontSize:'0.9rem',
            color:'var(--text-light)'
          }}>Made with love · Invifest</div>
        </footer>

      </div>

      {/* ── FLOATING BUTTONS ── */}
      <button className="buy-btn" onClick={() => alert('Contact us to create your own!')}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        Buy Now for Yourself
      </button>

      <SoundToggle />
    </>
  )
}

/* ─── SOUND TOGGLE ─── */
function SoundToggle() {
  const [on, setOn] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Create a gentle audio context beep as placeholder
    // Replace with: audioRef.current = new Audio('/music/wedding-bg.mp3')
  }, [])

  const toggle = () => {
    setOn(v => !v)
    // Uncomment when you add actual audio:
    // if (on) audioRef.current?.pause()
    // else { audioRef.current.loop = true; audioRef.current?.play() }
  }

  return (
    <button className="sound-btn" onClick={toggle} title={on ? 'Mute' : 'Play music'}>
      {on ? '🔊' : '🔇'}
    </button>
  )
}
