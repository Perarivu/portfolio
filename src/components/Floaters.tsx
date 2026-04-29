import { useEffect, useRef } from 'react';
import styles from './Floaters.module.css';

const SYMBOLS = ['</>', '⚛', '{ }', '=>', '[ ]', '( )', '///', '···'];

export default function Floaters() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    SYMBOLS.forEach((text) => {
      const el = document.createElement('div');
      el.className = styles.floater;
      el.textContent = text;
      const size = 11 + Math.random() * 3;
      const peak = 0.06 + Math.random() * 0.07;
      el.style.cssText = `
        left: ${8 + Math.random() * 84}%;
        bottom: ${5 + Math.random() * 75}%;
        font-size: ${size}px;
        --dur: ${30 + Math.random() * 30}s;
        --delay: ${-Math.random() * 40}s;
        --peak: ${peak};
      `;
      container.appendChild(el);
    });

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className={styles.floaters} aria-hidden="true" />;
}
