import { useEffect, useRef } from 'react';
import styles from './FallingDots.module.css';

const DOT_COUNT = 70;

interface Dot {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  opacity: number;
}

export default function FallingDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let raf = 0;
    const dots: Dot[] = [];

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function makeDot(randomY = true): Dot {
      return {
        x: Math.random() * W,
        y: randomY ? Math.random() * H : -10,
        r: 1 + Math.random() * 1.8,
        speed: 0.35 + Math.random() * 0.9,
        drift: (Math.random() - 0.5) * 0.3,
        opacity: 0.15 + Math.random() * 0.35,
      };
    }

    for (let i = 0; i < DOT_COUNT; i++) dots.push(makeDot());

    function currentColor() {
      // Reads the live theme so the same loop works for both
      // dark and light mode without any separate branching logic.
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      return isDark ? '243, 240, 233' : '23, 21, 15';
    }

    function loop() {
      ctx!.clearRect(0, 0, W, H);
      const rgb = currentColor();

      dots.forEach((d) => {
        d.y += d.speed;
        d.x += d.drift;

        if (d.y > H + 10) {
          d.y = -10;
          d.x = Math.random() * W;
        }
        if (d.x < -10) d.x = W + 10;
        if (d.x > W + 10) d.x = -10;

        ctx!.beginPath();
        ctx!.fillStyle = `rgba(${rgb}, ${d.opacity})`;
        ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx!.fill();
      });

      raf = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}