import { useEffect, useRef, useState } from 'react';

const CODE_LINES = [
  { text: "import React, { useState }", color: '#a5d6ff' },
  { text: "  from 'react';",            color: '#a5d6ff' },
  { text: '',                            color: '' },
  { text: 'const Hero = () => {',        color: '#d2a8ff' },
  { text: '  const [active,',            color: '#e6edf3' },
  { text: '    setActive] = useState(',  color: '#e6edf3' },
  { text: '    false);',                 color: '#79c0ff' },
  { text: '',                            color: '' },
  { text: '  return (',                  color: '#ff7b72' },
  { text: '    <section>',               color: '#7ee787' },
  { text: '      <h1>Perarivu</h1>',     color: '#7ee787' },
  { text: '    </section>',              color: '#7ee787' },
  { text: '  );',                        color: '#ff7b72' },
  { text: '};',                          color: '#d2a8ff' },
];

const CHAR_DELAY = 42;
const LINE_PAUSE = 200;

export default function DevIllustration() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Typewriter
  useEffect(() => {
    if (currentLineIdx >= CODE_LINES.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIdx(0);
        setCurrentCharIdx(0);
      }, 2800);
      return;
    }

    const line = CODE_LINES[currentLineIdx];

    if (currentCharIdx <= line.text.length) {
      const delay = line.text[currentCharIdx - 1] === ' ' ? CHAR_DELAY / 2 : CHAR_DELAY;
      timeoutRef.current = setTimeout(() => {
        setDisplayedLines(prev => {
          const next = [...prev];
          next[currentLineIdx] = line.text.slice(0, currentCharIdx);
          return next;
        });
        setCurrentCharIdx(c => c + 1);
      }, delay);
    } else {
      timeoutRef.current = setTimeout(() => {
        setCurrentLineIdx(i => i + 1);
        setCurrentCharIdx(0);
      }, LINE_PAUSE);
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [currentLineIdx, currentCharIdx]);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(id);
  }, []);

  const visibleStart = Math.max(0, currentLineIdx - 7);
  const visibleLines = CODE_LINES.slice(visibleStart, currentLineIdx + 1);

  return (
    <svg
      width="100%"
      viewBox="0 0 680 520"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <defs>
        <clipPath id="screenClip">
          <rect x="194" y="116" width="292" height="160" rx="4" />
        </clipPath>
        <style>{`
          @keyframes steamRise1 {
            0%   { transform: translateY(0px);  opacity: 0.5; }
            100% { transform: translateY(-22px); opacity: 0;   }
          }
          @keyframes steamRise2 {
            0%   { transform: translateY(0px);  opacity: 0.35; }
            100% { transform: translateY(-20px); opacity: 0;    }
          }
          @keyframes steamRise3 {
            0%   { transform: translateY(0px);  opacity: 0.25; }
            100% { transform: translateY(-18px); opacity: 0;    }
          }
          @keyframes screenPulse {
            0%, 100% { opacity: 0.16; }
            50%       { opacity: 0.26; }
          }
          @keyframes floatDot {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-5px); }
          }
          .steam1 { animation: steamRise1 1.9s ease-out infinite; }
          .steam2 { animation: steamRise2 1.9s ease-out 0.65s infinite; }
          .steam3 { animation: steamRise3 1.9s ease-out 1.3s infinite; }
          .screen-pulse { animation: screenPulse 3s ease-in-out infinite; }
          .dot-float1 { animation: floatDot 3.4s ease-in-out infinite; }
          .dot-float2 { animation: floatDot 3.4s ease-in-out 1.1s infinite; }
          .dot-float3 { animation: floatDot 3.4s ease-in-out 2.2s infinite; }
        `}</style>
      </defs>

      {/* ── MONITOR FRAME ── */}
      <rect x="178" y="78" width="324" height="214" rx="11" fill="#1e293b" />
      <rect x="178" y="78" width="324" height="214" rx="11" fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.3" />

      {/* Screen bg glow */}
      <rect x="192" y="92" width="296" height="186" rx="7" fill="#0ea5e9" className="screen-pulse" />
      {/* Screen dark overlay */}
      <rect x="192" y="92" width="296" height="186" rx="7" fill="#060f1e" opacity="0.88" />

      {/* Title bar */}
      <rect x="192" y="92" width="296" height="24" rx="7" fill="#0d1b2e" opacity="0.9" />
      <circle cx="208" cy="104" r="4" fill="#ff5f57" opacity="0.85" />
      <circle cx="222" cy="104" r="4" fill="#ffbd2e" opacity="0.85" />
      <circle cx="236" cy="104" r="4" fill="#28c840" opacity="0.85" />
      {/* Filename label */}
      <text x="340" y="108" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#38bdf8" opacity="0.45">Hero.tsx</text>

      {/* Separator line */}
      <line x1="192" y1="116" x2="488" y2="116" stroke="#38bdf8" strokeWidth="0.5" opacity="0.18" />

      {/* Line-number gutter */}
      <rect x="192" y="116" width="22" height="162" fill="#08121f" opacity="0.7" clipPath="url(#screenClip)" />

      {/* Typed code */}
      <g clipPath="url(#screenClip)">
        {visibleLines.map((_, i) => {
          const lineIdx = visibleStart + i;
          const lineObj = CODE_LINES[lineIdx];
          const isActive = lineIdx === currentLineIdx;
          const typed = displayedLines[lineIdx] ?? '';
          const y = 128 + i * 18;

          return (
            <g key={lineIdx}>
              {/* Line number */}
              <text
                x="209"
                y={y}
                textAnchor="end"
                fontSize="8.5"
                fontFamily="monospace"
                fill="#38bdf8"
                opacity="0.28"
              >
                {lineIdx + 1}
              </text>

              {/* Active line highlight */}
              {isActive && (
                <rect x="214" y={y - 13} width="270" height="16" rx="2" fill="#38bdf8" opacity="0.05" />
              )}

              {/* Code text */}
              <text
                x="218"
                y={y}
                fontSize="9.5"
                fontFamily="'Fira Code', 'Courier New', monospace"
                fill={lineObj.color || '#e6edf3'}
                opacity={lineObj.text === '' ? 0 : 1}
              >
                {typed}
                {isActive && showCursor && (
                  <tspan fill="#38bdf8" opacity="0.9">▋</tspan>
                )}
              </text>
            </g>
          );
        })}
      </g>

      {/* ── MONITOR STAND ── */}
      <rect x="323" y="292" width="14" height="26" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" opacity="0.25" />
      <rect x="290" y="318" width="80" height="10" rx="5" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" opacity="0.25" />

      {/* ── DESK ── */}
      <rect x="118" y="328" width="464" height="10" rx="5" fill="#1e293b" />
      <line x1="118" y1="333" x2="582" y2="333" stroke="#38bdf8" strokeWidth="1" opacity="0.22" />

      {/* ── KEYBOARD ── */}
      <rect x="163" y="320" width="118" height="20" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" opacity="0.55" />
      <line x1="171" y1="327" x2="273" y2="327" stroke="#38bdf8" strokeWidth="0.7" opacity="0.22" />
      <line x1="171" y1="333" x2="273" y2="333" stroke="#38bdf8" strokeWidth="0.7" opacity="0.22" />
      {[176,188,200,212,224,236,248,260].map(x => (
        <rect key={x} x={x} y="319" width="8" height="5" rx="1" fill="#38bdf8" opacity="0.06" />
      ))}

      {/* ── PERSON ── */}

      {/* Chair back */}
      <rect x="320" y="368" width="20" height="118" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" opacity="0.28" />

      {/* Torso */}
      <path
        d="M290 422 Q292 392 330 380 Q368 392 370 422 L374 484 L286 484 Z"
        fill="#1e293b"
        stroke="#38bdf8"
        strokeWidth="1.5"
        opacity="0.88"
      />
      {/* Collar */}
      <path
        d="M319 380 L330 396 L341 380"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity="0.5"
      />

      {/* Neck */}
      <rect x="323" y="356" width="14" height="26" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" opacity="0.7" />

      {/* Head */}
      <ellipse cx="330" cy="336" rx="30" ry="32" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.8" opacity="0.92" />

      {/* Hair */}
      <path d="M302 323 Q310 301 330 299 Q350 301 358 323" fill="#38bdf8" opacity="0.16" />
      <path d="M302 323 Q310 301 330 299 Q350 301 358 323" fill="none" stroke="#38bdf8" strokeWidth="1.5" opacity="0.42" />

      {/* Eyes */}
      <circle cx="321" cy="336" r="2.5" fill="#38bdf8" opacity="0.7" />
      <circle cx="339" cy="336" r="2.5" fill="#38bdf8" opacity="0.7" />

      {/* Smile */}
      <path d="M323 346 Q330 352 337 346" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />

      {/* Left arm → keyboard */}
      <path
        d="M293 412 Q251 393 221 387 Q211 382 213 372"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <ellipse cx="213" cy="370" rx="10" ry="7" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" opacity="0.7" />

      {/* Right arm → mug */}
      <path
        d="M367 412 Q399 402 419 390 Q429 384 431 376"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <ellipse cx="431" cy="374" rx="10" ry="7" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" opacity="0.7" />

      {/* ── COFFEE MUG ── */}
      <rect x="432" y="342" width="42" height="36" rx="5" fill="#0a1628" stroke="#38bdf8" strokeWidth="1.8" opacity="0.92" />
      <path
        d="M474 349 Q494 349 494 360 Q494 371 474 371"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.8"
      />
      {/* Coffee liquid */}
      <rect x="435" y="345" width="36" height="7" rx="3" fill="#38bdf8" opacity="0.11" />
      <line x1="434" y1="360" x2="472" y2="360" stroke="#38bdf8" strokeWidth="1" opacity="0.28" />

      {/* Animated steam */}
      <g className="steam1">
        <path d="M446 342 Q443 332 446 322 Q449 312 446 303" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <g className="steam2">
        <path d="M454 340 Q457 330 454 320 Q451 310 454 301" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
      </g>
      <g className="steam3">
        <path d="M463 342 Q466 332 463 322 Q460 312 463 303" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* ── AMBIENT ── */}
      <circle cx="155" cy="100" r="2"   fill="#38bdf8" opacity="0.22" className="dot-float1" />
      <circle cx="577" cy="136" r="1.5" fill="#38bdf8" opacity="0.18" className="dot-float2" />
      <circle cx="143" cy="296" r="1.5" fill="#38bdf8" opacity="0.14" className="dot-float3" />
      <circle cx="597" cy="428" r="2"   fill="#38bdf8" opacity="0.18" className="dot-float1" />
      <circle cx="557" cy="88"  r="1"   fill="#38bdf8" opacity="0.14" className="dot-float2" />

      {/* Corner brackets */}
      <path d="M138 74 L138 60 L152 60" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.28" />
      <path d="M562 74 L562 60 L548 60" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.28" />
      <path d="M138 450 L138 464 L152 464" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.18" />
      <path d="M562 450 L562 464 L548 464" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.18" />
    </svg>
  );
}