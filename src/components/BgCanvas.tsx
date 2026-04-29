import { useEffect, useRef } from 'react';
import styles from './BgCanvas.module.css';

export default function BgCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let animId: number;

    let W = 0, H = 0;

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      size: number; opacity: number;
      life: number; maxLife: number;
      reset(): void;
      update(): void;
      draw(): void;
    }

    const particles: Particle[] = [];

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function makeParticle(): Particle {
      return {
        x: 0, y: 0, vx: 0, vy: 0, size: 0, opacity: 0, life: 0, maxLife: 0,
        reset() {
          this.x = Math.random() * W;
          this.y = Math.random() * H;
          this.vx = (Math.random() - 0.5) * 0.3;
          this.vy = (Math.random() - 0.5) * 0.3;
          this.size = Math.random() * 1.5 + 0.5;
          this.opacity = Math.random() * 0.5 + 0.1;
          this.life = 0;
          this.maxLife = 200 + Math.random() * 300;
        },
        update() {
          this.x += this.vx;
          this.y += this.vy;
          this.life++;
          if (this.life > this.maxLife || this.x < 0 || this.x > W || this.y < 0 || this.y > H) {
            this.reset();
          }
        },
        draw() {
          const alpha = Math.sin((this.life / this.maxLife) * Math.PI) * this.opacity;
          const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
          ctx.fillStyle = isDark
            ? `rgba(97,218,251,${alpha})`
            : `rgba(45,100,200,${alpha})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        },
      };
    }

    function drawGrid() {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      ctx.strokeStyle = isDark ? 'rgba(97,218,251,0.03)' : 'rgba(45,100,200,0.04)';
      ctx.lineWidth = 1;
      const step = 60;
      for (let x = 0; x < W; x += step) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += step) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
    }

    function drawConnections() {
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            const a = (1 - d / 120) * 0.15;
            ctx.strokeStyle = isDark
              ? `rgba(97,218,251,${a})`
              : `rgba(45,100,200,${a})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    for (let i = 0; i < 80; i++) {
      const p = makeParticle();
      p.reset();
      particles.push(p);
    }

    function loop() {
      ctx.clearRect(0, 0, W, H);
      drawGrid();
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      animId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
