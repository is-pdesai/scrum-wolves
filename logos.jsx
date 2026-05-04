/* global React, ReactDOM, DesignCanvas, DCSection, DCArtboard */

const { DesignCanvas, DCSection, DCArtboard } = window;

// ──────────────────────────────────────────────────────────────────
// Shared bits
// ──────────────────────────────────────────────────────────────────

const Card = ({ bg = "#f6f3ee", ink = "#111", children, pad = 36, style }) => (
  <div style={{
    width: 520, height: 520, background: bg, color: ink,
    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
    padding: pad, boxSizing: "border-box", position: "relative", overflow: "hidden",
    ...style,
  }}>{children}</div>
);

const Caption = ({ name, sub, ink = "rgba(0,0,0,0.45)" }) => (
  <div style={{
    position: "absolute", left: 24, bottom: 20, right: 24,
    display: "flex", justifyContent: "space-between", alignItems: "baseline",
    fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.12em",
    textTransform: "uppercase", color: ink,
  }}>
    <span>{name}</span><span>{sub}</span>
  </div>
);

// ──────────────────────────────────────────────────────────────────
// 1. Minimal line wolf — single-stroke geometric
// ──────────────────────────────────────────────────────────────────
const Logo01 = () => (
  <Card bg="#f4f1ec" ink="#161616">
    <svg viewBox="0 0 200 200" width="240" height="240" fill="none" stroke="#161616" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Wolf head — single continuous geometric line */}
      <path d="M40 70 L60 50 L72 72 L100 60 L128 72 L140 50 L160 70 L160 110 L150 130 L130 145 L130 160 L115 160 L110 150 L90 150 L85 160 L70 160 L70 145 L50 130 L40 110 Z" />
      {/* Eyes */}
      <path d="M82 95 L92 95" />
      <path d="M108 95 L118 95" />
      {/* Snout */}
      <path d="M95 118 L100 125 L105 118" />
      <path d="M100 125 L100 135" />
    </svg>
    <div style={{
      marginTop: 24, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
      fontSize: 30, letterSpacing: "0.32em",
    }}>SCRUM</div>
    <div style={{
      marginTop: 2, fontFamily: "'Archivo Black', sans-serif",
      fontSize: 44, letterSpacing: "0.18em", lineHeight: 1,
    }}>WOLVES</div>
    <Caption name="01 · Linework" sub="Minimal" />
  </Card>
);

// ──────────────────────────────────────────────────────────────────
// 2. Faceted / geometric wolf — low-poly portrait
// ──────────────────────────────────────────────────────────────────
const Logo02 = () => (
  <Card bg="#0f1115" ink="#ecead8">
    <svg viewBox="0 0 220 220" width="260" height="260">
      <defs>
        <linearGradient id="g2a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ecead8" />
          <stop offset="1" stopColor="#8a8b80" />
        </linearGradient>
      </defs>
      {/* faceted wolf head */}
      <g stroke="#0f1115" strokeWidth="1" strokeLinejoin="round">
        <polygon points="50,60 80,40 90,75" fill="#d6d3bf" />
        <polygon points="80,40 110,55 90,75" fill="#bbb8a5" />
        <polygon points="110,55 140,40 130,75" fill="#d6d3bf" />
        <polygon points="140,40 170,60 130,75" fill="#9c9a89" />
        <polygon points="50,60 90,75 75,110" fill="#a8a594" />
        <polygon points="90,75 110,80 75,110" fill="#7d7b6e" />
        <polygon points="110,80 130,75 75,110" fill="#bbb8a5" />
        <polygon points="130,75 170,60 145,110" fill="#d6d3bf" />
        <polygon points="130,75 145,110 110,80" fill="#9c9a89" />
        <polygon points="75,110 110,80 100,140" fill="#5e5d54" />
        <polygon points="110,80 145,110 120,140" fill="#7d7b6e" />
        <polygon points="100,140 120,140 110,170" fill="#3d3d38" />
        <polygon points="75,110 100,140 110,170" fill="#2a2a26" />
        <polygon points="120,140 145,110 110,170" fill="#1f1f1c" />
        {/* Eyes */}
        <polygon points="86,82 96,80 92,90" fill="#f7c548" />
        <polygon points="124,80 134,82 128,90" fill="#f7c548" />
      </g>
    </svg>
    <div style={{
      marginTop: 18, display: "flex", alignItems: "center", gap: 12,
    }}>
      <div style={{ width: 6, height: 6, background: "#f7c548" }} />
      <div style={{
        fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
        fontSize: 22, letterSpacing: "0.3em",
      }}>SCRUM</div>
      <div style={{ width: 6, height: 6, background: "#f7c548" }} />
    </div>
    <div style={{
      marginTop: 4, fontFamily: "'Archivo Black', sans-serif",
      fontSize: 38, letterSpacing: "0.18em", color: "#f7c548",
    }}>WOLVES</div>
    <Caption name="02 · Faceted" sub="Geometric" ink="rgba(236,234,216,0.45)" />
  </Card>
);

// ──────────────────────────────────────────────────────────────────
// 3. Monogram — S forming a wolf head
// ──────────────────────────────────────────────────────────────────
const Logo03 = () => (
  <Card bg="#fff8ee" ink="#1b1b1b">
    <svg viewBox="0 0 220 220" width="260" height="260">
      <circle cx="110" cy="110" r="92" fill="none" stroke="#1b1b1b" strokeWidth="3" />
      {/* Stylized S that reads as wolf — ears as serifs */}
      <g fill="#1b1b1b">
        {/* Ears */}
        <polygon points="58,58 78,40 78,72" />
        <polygon points="162,58 142,40 142,72" />
        {/* S body */}
        <path d="M150 78 Q150 60 110 60 Q70 60 70 90 Q70 112 110 116 Q150 120 150 142 Q150 168 110 168 Q70 168 70 150
                  L86 150 Q86 154 110 154 Q134 154 134 142 Q134 130 110 128 Q70 124 70 92 Q70 46 110 46 Q150 46 150 78 Z" />
        {/* Eyes */}
        <circle cx="92" cy="98" r="4" fill="#fff8ee" />
        <circle cx="128" cy="98" r="4" fill="#fff8ee" />
        {/* Nose dot */}
        <circle cx="110" cy="118" r="3.5" fill="#fff8ee" />
      </g>
    </svg>
    <div style={{
      marginTop: 16, fontFamily: "'DM Serif Display', serif", fontSize: 40,
      letterSpacing: "0.08em", lineHeight: 1,
    }}>SCRUM Wolves</div>
    <div style={{
      marginTop: 6, fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
      letterSpacing: "0.4em", color: "rgba(0,0,0,0.45)",
    }}>THE PACK</div>
    <Caption name="03 · Monogram" sub="S = Wolf" />
  </Card>
);

// ──────────────────────────────────────────────────────────────────
// 4. Negative space wolf inside shield
// ──────────────────────────────────────────────────────────────────
const Logo04 = () => (
  <Card bg="#1a3a3a" ink="#f0ead6">
    <svg viewBox="0 0 220 240" width="240" height="260">
      {/* shield */}
      <path d="M30 30 L190 30 L190 130 Q190 200 110 230 Q30 200 30 130 Z" fill="#f0ead6" />
      {/* negative space wolf head cut out */}
      <g fill="#1a3a3a">
        {/* ears */}
        <polygon points="60,55 82,50 78,82" />
        <polygon points="160,55 138,50 142,82" />
        {/* head outline */}
        <path d="M70 80 Q60 110 75 140 Q90 165 110 168 Q130 165 145 140 Q160 110 150 80 Q140 90 110 90 Q80 90 70 80 Z" />
        {/* eyes (cream pinpricks) */}
        <circle cx="92" cy="118" r="3.5" fill="#f0ead6" />
        <circle cx="128" cy="118" r="3.5" fill="#f0ead6" />
      </g>
      {/* banner */}
      <rect x="40" y="178" width="140" height="28" fill="#1a3a3a" />
      <text x="110" y="196" textAnchor="middle" fill="#f0ead6"
            fontFamily="'Cinzel', serif" fontWeight="800" fontSize="14" letterSpacing="5">SCRUM WOLVES</text>
    </svg>
    <Caption name="04 · Shield" sub="Negative space" ink="rgba(240,234,214,0.5)" />
  </Card>
);

// ──────────────────────────────────────────────────────────────────
// 5. Howling silhouette + moon
// ──────────────────────────────────────────────────────────────────
const Logo05 = () => (
  <Card bg="#0b1424" ink="#f4ead5">
    <svg viewBox="0 0 240 240" width="280" height="280">
      {/* moon */}
      <circle cx="120" cy="105" r="78" fill="#f4ead5" />
      <circle cx="148" cy="92" r="68" fill="#0b1424" />
      {/* wolf silhouette howling */}
      <g fill="#0b1424">
        <path d="M70 200
                 C 72 175, 82 160, 90 152
                 C 88 140, 92 128, 100 122
                 L 102 100
                 C 104 88, 110 80, 118 76
                 L 122 60
                 C 124 48, 132 42, 140 44
                 L 148 36
                 C 152 32, 158 34, 158 40
                 L 156 56
                 C 162 62, 164 70, 162 80
                 L 168 92
                 C 174 100, 172 110, 168 116
                 L 172 130
                 C 176 144, 172 158, 164 168
                 C 168 180, 168 192, 162 200
                 Z" />
      </g>
      {/* stars */}
      <circle cx="40" cy="50" r="1.6" fill="#f4ead5" />
      <circle cx="60" cy="30" r="1.2" fill="#f4ead5" />
      <circle cx="200" cy="40" r="1.4" fill="#f4ead5" />
      <circle cx="210" cy="80" r="1.2" fill="#f4ead5" />
      <circle cx="30" cy="120" r="1.2" fill="#f4ead5" />
    </svg>
    <div style={{
      marginTop: 12, fontFamily: "'Bebas Neue', sans-serif", fontSize: 30,
      letterSpacing: "0.4em", opacity: 0.8,
    }}>SCRUM</div>
    <div style={{
      marginTop: -2, fontFamily: "'Bebas Neue', sans-serif", fontSize: 64,
      letterSpacing: "0.18em", lineHeight: 1,
    }}>WOLVES</div>
    <Caption name="05 · Howl" sub="Silhouette" ink="rgba(244,234,213,0.5)" />
  </Card>
);

// ──────────────────────────────────────────────────────────────────
// 6. Fierce profile mark — angular/sharp
// ──────────────────────────────────────────────────────────────────
const Logo06 = () => (
  <Card bg="#ece7dd" ink="#111">
    <svg viewBox="0 0 240 200" width="300" height="240">
      {/* Sharp angular wolf head profile facing right */}
      <g fill="#111">
        <path d="M30 90
                 L 60 60
                 L 70 80
                 L 90 50
                 L 100 78
                 L 130 40
                 L 140 80
                 L 175 60
                 L 178 95
                 L 200 100
                 L 175 115
                 L 200 120
                 L 175 130
                 L 198 145
                 L 165 145
                 L 155 165
                 L 130 150
                 L 110 170
                 L 95 145
                 L 70 155
                 L 60 130
                 L 35 130
                 L 50 110
                 L 30 90 Z" />
        {/* Eye - cutout */}
      </g>
      <polygon points="115,90 132,82 128,98" fill="#ece7dd" />
      <polygon points="120,88 128,86 124,93" fill="#d04a2a" />
      {/* Teeth */}
      <polygon points="170,130 174,140 178,130" fill="#ece7dd" />
      <polygon points="178,130 182,142 186,130" fill="#ece7dd" />
    </svg>
    <div style={{
      marginTop: 8, display: "flex", alignItems: "center", gap: 14,
    }}>
      <div style={{ height: 2, width: 28, background: "#111" }} />
      <div style={{
        fontFamily: "'Archivo Black', sans-serif", fontSize: 22,
        letterSpacing: "0.32em",
      }}>SCRUM</div>
      <div style={{ height: 2, width: 28, background: "#111" }} />
    </div>
    <div style={{
      marginTop: 2, fontFamily: "'Archivo Black', sans-serif", fontSize: 56,
      letterSpacing: "0.14em", lineHeight: 1,
    }}>WOLVES</div>
    <Caption name="06 · Apex" sub="Fierce profile" />
  </Card>
);

// ──────────────────────────────────────────────────────────────────
// 7. Esports snarl — saturated, angled
// ──────────────────────────────────────────────────────────────────
const Logo07 = () => (
  <Card bg="#0d0d12" ink="#fff" pad={28}>
    <div style={{
      position: "absolute", inset: 0,
      background: "radial-gradient(circle at 30% 30%, #2a1840 0%, #0d0d12 60%)",
    }} />
    <svg viewBox="0 0 260 240" width="300" height="276" style={{ position: "relative", zIndex: 1 }}>
      <defs>
        <linearGradient id="g7" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a86bff" />
          <stop offset="1" stopColor="#5b2bd6" />
        </linearGradient>
      </defs>
      {/* Aggressive snarling wolf — angular */}
      <g>
        <path d="M40 100
                 L 70 70
                 L 85 95
                 L 105 60
                 L 120 92
                 L 145 55
                 L 158 90
                 L 195 75
                 L 205 110
                 L 230 120
                 L 200 130
                 L 225 145
                 L 195 150
                 L 215 168
                 L 175 162
                 L 165 185
                 L 140 168
                 L 125 195
                 L 105 165
                 L 75 178
                 L 65 150
                 L 35 150
                 L 55 125
                 L 30 115
                 Z" fill="url(#g7)" />
        {/* eye glow */}
        <polygon points="118,108 138,98 132,118" fill="#0d0d12" />
        <polygon points="122,108 134,103 130,114" fill="#7cffd1" />
        {/* Teeth */}
        <polygon points="180,150 184,164 188,150" fill="#fff" />
        <polygon points="188,150 192,166 196,150" fill="#fff" />
        <polygon points="196,150 200,164 204,150" fill="#fff" />
        {/* scratches */}
        <path d="M40 200 L 220 200" stroke="#a86bff" strokeWidth="1.5" opacity="0.5" />
        <path d="M50 210 L 200 210" stroke="#a86bff" strokeWidth="1" opacity="0.3" />
      </g>
    </svg>
    <div style={{
      position: "relative", zIndex: 1, marginTop: 8,
      display: "flex", alignItems: "baseline", gap: 10,
    }}>
      <div style={{
        fontFamily: "'Archivo Black', sans-serif", fontSize: 44,
        letterSpacing: "0.04em",
        background: "linear-gradient(180deg, #fff 0%, #a86bff 100%)",
        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        fontStyle: "italic", transform: "skewX(-8deg)",
        display: "flex", flexDirection: "column", lineHeight: 0.95,
      }}>
        <span style={{ fontSize: 20, letterSpacing: "0.5em" }}>SCRUM</span>
        <span>WOLVES</span>
      </div>
    </div>
    <Caption name="07 · Apex.gg" sub="Esports" ink="rgba(255,255,255,0.45)" />
  </Card>
);

// ──────────────────────────────────────────────────────────────────
// 8. Retro varsity badge
// ──────────────────────────────────────────────────────────────────
const Logo08 = () => (
  <Card bg="#f3ddb1" ink="#1d1d1b" pad={28}>
    <svg viewBox="0 0 260 260" width="280" height="280">
      {/* Outer banner */}
      <path d="M30 90 L 230 90 L 215 110 L 230 130 L 215 150 L 230 170 L 30 170 L 45 150 L 30 130 L 45 110 Z"
            fill="#9b2c2c" />
      <text x="130" y="126" textAnchor="middle" fill="#f3ddb1"
            fontFamily="'Bebas Neue', sans-serif" fontSize="22" letterSpacing="10">SCRUM</text>
      <text x="130" y="156" textAnchor="middle" fill="#f3ddb1"
            fontFamily="'Bebas Neue', sans-serif" fontSize="40" letterSpacing="6">WOLVES</text>
      {/* Top circle with wolf */}
      <circle cx="130" cy="80" r="56" fill="#1d1d1b" />
      <circle cx="130" cy="80" r="48" fill="#f3ddb1" />
      {/* Wolf head — chunky retro */}
      <g fill="#1d1d1b">
        <polygon points="98,52 110,42 112,68" />
        <polygon points="162,52 150,42 148,68" />
        <path d="M100 70 Q 95 95 110 110 Q 130 118 150 110 Q 165 95 160 70 Q 155 76 130 76 Q 105 76 100 70 Z" />
      </g>
      <circle cx="118" cy="86" r="2.5" fill="#f3ddb1" />
      <circle cx="142" cy="86" r="2.5" fill="#f3ddb1" />
      <polygon points="125,98 130,108 135,98" fill="#f3ddb1" />
      {/* bottom established */}
      <text x="130" y="200" textAnchor="middle" fill="#1d1d1b"
            fontFamily="'Bebas Neue', sans-serif" fontSize="14" letterSpacing="4">EST · MMXXVI</text>
      <line x1="60" y1="210" x2="200" y2="210" stroke="#1d1d1b" strokeWidth="1.5" />
      <text x="130" y="228" textAnchor="middle" fill="#1d1d1b"
            fontFamily="'Bebas Neue', sans-serif" fontSize="13" letterSpacing="6">THE PACK · ATHLETIC CLUB</text>
    </svg>
    <Caption name="08 · Varsity" sub="Athletic badge" />
  </Card>
);

// ──────────────────────────────────────────────────────────────────
// 9. Heraldic crest with sprint banner
// ──────────────────────────────────────────────────────────────────
const Logo09 = () => (
  <Card bg="#efe9dc" ink="#0c1a14" pad={26}>
    <svg viewBox="0 0 260 280" width="260" height="280">
      {/* shield outline */}
      <path d="M50 40 L 210 40 L 210 150 Q 210 220 130 260 Q 50 220 50 150 Z"
            fill="#0c1a14" stroke="#0c1a14" strokeWidth="2" />
      {/* inner divisions */}
      <path d="M130 40 L 130 260" stroke="#efe9dc" strokeWidth="1.5" opacity="0.25" />
      {/* upper-left: wolf head */}
      <g transform="translate(90,90) scale(0.7)">
        <g fill="#efe9dc">
          <polygon points="-30,-30 -10,-40 -10,-10" />
          <polygon points="30,-30 10,-40 10,-10" />
          <path d="M-32 -8 Q -38 20 -22 38 Q 0 50 22 38 Q 38 20 32 -8 Q 22 0 0 0 Q -22 0 -32 -8 Z" />
        </g>
        <circle cx="-12" cy="14" r="2.5" fill="#0c1a14" />
        <circle cx="12" cy="14" r="2.5" fill="#0c1a14" />
      </g>
      {/* upper-right: arrow up (velocity) */}
      <g transform="translate(170,90)" stroke="#efe9dc" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M0 20 L 0 -20" />
        <path d="M-10 -10 L 0 -20 L 10 -10" />
        <path d="M-12 28 L 12 28" />
      </g>
      {/* divider */}
      <path d="M50 130 L 210 130" stroke="#efe9dc" strokeWidth="1.5" opacity="0.25" />
      {/* lower: three sprint chevrons */}
      <g transform="translate(130,180)" stroke="#efe9dc" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-40 -16 L 0 -28 L 40 -16" />
        <path d="M-40 0 L 0 -12 L 40 0" />
        <path d="M-40 16 L 0 4 L 40 16" />
      </g>
      {/* banner */}
      <path d="M30 230 L 230 230 L 215 250 L 230 270 L 30 270 L 45 250 Z" fill="#a83e2a" />
      <text x="130" y="258" textAnchor="middle" fill="#efe9dc"
            fontFamily="'Cinzel', serif" fontWeight="800" fontSize="15" letterSpacing="5">SCRUM WOLVES</text>
    </svg>
    <Caption name="09 · Crest" sub="Heraldic quarters" />
  </Card>
);

// ──────────────────────────────────────────────────────────────────
// 10. Alpha pack — circular emblem with three wolves
// ──────────────────────────────────────────────────────────────────
const Logo10 = () => (
  <Card bg="#0e1a1f" ink="#e8d8a8">
    <svg viewBox="0 0 260 260" width="280" height="280">
      <circle cx="130" cy="130" r="118" fill="none" stroke="#e8d8a8" strokeWidth="2" />
      <circle cx="130" cy="130" r="108" fill="none" stroke="#e8d8a8" strokeWidth="1" opacity="0.5" />
      {/* Three wolf heads in triangular arrangement */}
      {[0, 120, 240].map((rot, i) => (
        <g key={i} transform={`rotate(${rot} 130 130) translate(130 50)`}>
          <g transform="scale(0.45)">
            <g fill="#e8d8a8">
              <polygon points="-30,-30 -10,-40 -10,-10" />
              <polygon points="30,-30 10,-40 10,-10" />
              <path d="M-32 -8 Q -38 20 -22 38 Q 0 50 22 38 Q 38 20 32 -8 Q 22 0 0 0 Q -22 0 -32 -8 Z" />
            </g>
            <circle cx="-12" cy="14" r="3" fill="#0e1a1f" />
            <circle cx="12" cy="14" r="3" fill="#0e1a1f" />
            <polygon points="-4,28 0,38 4,28" fill="#0e1a1f" />
          </g>
        </g>
      ))}
      {/* Center triangle (pack symbol) */}
      <polygon points="130,108 148,140 112,140" fill="none" stroke="#e8d8a8" strokeWidth="2" />
      <circle cx="130" cy="130" r="5" fill="#e8d8a8" />
      {/* Circular text top */}
      <defs>
        <path id="topArc" d="M 30 130 A 100 100 0 0 1 230 130" fill="none" />
        <path id="botArc" d="M 35 140 A 95 95 0 0 0 225 140" fill="none" />
      </defs>
      <text fill="#e8d8a8" fontFamily="'JetBrains Mono', monospace" fontSize="13" letterSpacing="8">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">SCRUM · WOLVES · PACK</textPath>
      </text>
      <text fill="#e8d8a8" fontFamily="'JetBrains Mono', monospace" fontSize="11" letterSpacing="6" opacity="0.7">
        <textPath href="#botArc" startOffset="50%" textAnchor="middle">SPRINT · SHIP · REPEAT</textPath>
      </text>
    </svg>
    <Caption name="10 · Pack" sub="Circular emblem" ink="rgba(232,216,168,0.5)" />
  </Card>
);

// ──────────────────────────────────────────────────────────────────
// 11. Runic stamp — bold mark
// ──────────────────────────────────────────────────────────────────
const Logo11 = () => (
  <Card bg="#d24a2a" ink="#fff5e8">
    <svg viewBox="0 0 240 240" width="260" height="260">
      <rect x="20" y="20" width="200" height="200" fill="none" stroke="#fff5e8" strokeWidth="3" />
      <rect x="32" y="32" width="176" height="176" fill="none" stroke="#fff5e8" strokeWidth="1" />
      {/* Stamp-style wolf head — chunky */}
      <g fill="#fff5e8">
        <polygon points="70,70 95,55 92,92" />
        <polygon points="170,70 145,55 148,92" />
        <path d="M72 88 Q 62 130 88 160 Q 120 178 152 160 Q 178 130 168 88 Q 152 100 120 100 Q 88 100 72 88 Z" />
      </g>
      <polygon points="92,118 105,118 98,132" fill="#d24a2a" />
      <polygon points="148,118 135,118 142,132" fill="#d24a2a" />
      <path d="M115 144 L 120 154 L 125 144 Z" fill="#d24a2a" />
      <path d="M120 154 L 120 165" stroke="#d24a2a" strokeWidth="2.5" />
    </svg>
    <div style={{
      marginTop: 10, fontFamily: "'Archivo Black', sans-serif", fontSize: 22,
      letterSpacing: "0.5em",
    }}>SCRUM</div>
    <div style={{
      marginTop: 0, fontFamily: "'Archivo Black', sans-serif", fontSize: 44,
      letterSpacing: "0.18em", lineHeight: 1,
    }}>WOLVES</div>
    <Caption name="11 · Stamp" sub="Bold mark" ink="rgba(255,245,232,0.6)" />
  </Card>
);

// ──────────────────────────────────────────────────────────────────
// 12. Vintage seal — circular with tagline
// ──────────────────────────────────────────────────────────────────
const Logo12 = () => (
  <Card bg="#1c2630" ink="#d8b97a">
    <svg viewBox="0 0 260 260" width="280" height="280">
      <circle cx="130" cy="130" r="120" fill="none" stroke="#d8b97a" strokeWidth="2" />
      <circle cx="130" cy="130" r="112" fill="none" stroke="#d8b97a" strokeWidth="1" />
      <circle cx="130" cy="130" r="78" fill="none" stroke="#d8b97a" strokeWidth="1.5" />
      {/* dotted ring */}
      {Array.from({ length: 32 }).map((_, i) => {
        const a = (i / 32) * Math.PI * 2;
        return <circle key={i} cx={130 + Math.cos(a) * 96} cy={130 + Math.sin(a) * 96} r="1.2" fill="#d8b97a" />;
      })}
      {/* Wolf in center (stylized side profile) */}
      <g fill="#d8b97a" transform="translate(130 130)">
        <path d="M-50 0
                 L -38 -22
                 L -28 -10
                 L -18 -28
                 L -8 -12
                 L 8 -32
                 L 22 -10
                 L 42 -18
                 L 46 0
                 L 56 4
                 L 46 12
                 L 56 18
                 L 42 22
                 L 50 36
                 L 28 32
                 L 22 46
                 L 8 36
                 L -2 50
                 L -14 36
                 L -32 42
                 L -36 24
                 L -52 24
                 L -42 12
                 L -56 6
                 Z" />
      </g>
      <polygon points="138,118 152,112 148,128" fill="#1c2630" />
      <polygon points="142,118 148,116 146,124" fill="#d24a2a" />
      {/* Outer text */}
      <defs>
        <path id="topArc12" d="M 30 130 A 100 100 0 0 1 230 130" fill="none" />
        <path id="botArc12" d="M 38 138 A 92 92 0 0 0 222 138" fill="none" />
      </defs>
      <text fill="#d8b97a" fontFamily="'Cinzel', serif" fontWeight="800" fontSize="15" letterSpacing="8">
        <textPath href="#topArc12" startOffset="50%" textAnchor="middle">★ SCRUM · WOLVES ★</textPath>
      </text>
      <text fill="#d8b97a" fontFamily="'Cinzel', serif" fontWeight="600" fontSize="11" letterSpacing="6">
        <textPath href="#botArc12" startOffset="50%" textAnchor="middle">LONE WOLF · STRONG PACK</textPath>
      </text>
    </svg>
    <Caption name="12 · Seal" sub="Vintage emblem" ink="rgba(216,185,122,0.5)" />
  </Card>
);

// ──────────────────────────────────────────────────────────────────
// Assemble canvas
// ──────────────────────────────────────────────────────────────────
function App() {
  return (
    <DesignCanvas title="SCRUM — Wolf Logos" subtitle="12 directions across modern, athletic & heraldic">
      <DCSection id="modern" title="Modern & Geometric">
        <DCArtboard id="01" label="01 · Linework" width={520} height={520}><Logo01 /></DCArtboard>
        <DCArtboard id="02" label="02 · Faceted" width={520} height={520}><Logo02 /></DCArtboard>
        <DCArtboard id="03" label="03 · Monogram" width={520} height={520}><Logo03 /></DCArtboard>
        <DCArtboard id="04" label="04 · Shield" width={520} height={520}><Logo04 /></DCArtboard>
      </DCSection>
      <DCSection id="bold" title="Bold & Athletic">
        <DCArtboard id="05" label="05 · Howl" width={520} height={520}><Logo05 /></DCArtboard>
        <DCArtboard id="06" label="06 · Apex" width={520} height={520}><Logo06 /></DCArtboard>
        <DCArtboard id="07" label="07 · Apex.gg" width={520} height={520}><Logo07 /></DCArtboard>
        <DCArtboard id="08" label="08 · Varsity" width={520} height={520}><Logo08 /></DCArtboard>
      </DCSection>
      <DCSection id="heraldic" title="Heraldic & Crest">
        <DCArtboard id="09" label="09 · Crest" width={520} height={520}><Logo09 /></DCArtboard>
        <DCArtboard id="10" label="10 · Pack" width={520} height={520}><Logo10 /></DCArtboard>
        <DCArtboard id="11" label="11 · Stamp" width={520} height={520}><Logo11 /></DCArtboard>
        <DCArtboard id="12" label="12 · Seal" width={520} height={520}><Logo12 /></DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
