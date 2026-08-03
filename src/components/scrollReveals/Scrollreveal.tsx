import { useEffect, useRef } from 'react';
import styles from './ScrollReveal.module.css';

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

interface ScrollRevealProps {
  text: string;
  className?: string;
}

/**
 * Splits text into words and fades each from faint -> full ink color as it
 * crosses a trigger band while scrolling, with a companion line that fills
 * top-to-bottom alongside it. Mirrors the scroll-text + line pattern from
 * the reference site. Only runs its scroll loop while in view.
 */
export default function ScrollReveal({ text, className }: ScrollRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const words = text.split(' ');

  useEffect(() => {
    let raf = 0;
    let listening = false;

    function update() {
      const vh = window.innerHeight;
      const triggerStart = vh * 0.85;
      const triggerEnd = vh * 0.35;
      const span = triggerStart - triggerEnd;

      wordRefs.current.forEach((el) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const progress = clamp((triggerStart - rect.top) / span, 0, 1);
        el.style.setProperty('--p', String(progress));
      });

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const lineProgress = clamp((triggerStart - rect.top) / (rect.height + span), 0, 1);
        containerRef.current.style.setProperty('--lp', String(lineProgress));
      }

      if (listening) raf = requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          listening = entry.isIntersecting;
          if (listening) raf = requestAnimationFrame(update);
        });
      },
      { threshold: 0 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <p ref={containerRef} className={`${styles.reveal} ${className ?? ''}`}>
      <span className={styles.line} aria-hidden="true" />
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          ref={(el) => {
            wordRefs.current[i] = el;
          }}
          className={styles.word}
        >
          {word}&nbsp;
        </span>
      ))}
    </p>
  );
}