import { useEffect, useRef, useState } from 'react';
import styles from './Cursor.module.css';

const HOVER_SELECTOR = 'a, button, [role="button"], input, textarea, .cursor-hover';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouch) return;
    setEnabled(true);

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let raf: number;

    function onMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px) translate(-50%, -50%)`;
      }
      const target = e.target as HTMLElement;
      setHovering(!!target?.closest?.(HOVER_SELECTOR));
    }

    function onDown() { setClicking(true); }
    function onUp() { setClicking(false); }

    // Ring trails behind the dot with easing, giving the same
    // lag/settle feel as the reference site's cursor.
    function loop() {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className={`${styles.dot} ${hovering ? styles.hovering : ''}`} aria-hidden="true" />
      <div
        ref={ringRef}
        className={`${styles.ring} ${hovering ? styles.hovering : ''} ${clicking ? styles.clicking : ''}`}
        aria-hidden="true"
      />
    </>
  );
}
