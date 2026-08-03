import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

interface RevealProps {
  children: React.ReactNode;
  /** Optional stagger delay in ms, for offsetting adjacent sections slightly. */
  delay?: number;
}

/**
 * Wraps a section so it fades + slides up into place as it enters the
 * viewport while scrolling — mirrors the per-section reveal on the
 * reference site. Reveals once and stops observing (doesn't re-hide
 * if the user scrolls back up past it).
 */
export default function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${styles.reveal} ${visible ? styles.visible : ''}`}>
      {children}
    </div>
  );
}