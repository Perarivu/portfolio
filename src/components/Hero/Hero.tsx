import { useEffect, useState } from 'react';
import styles from './Hero.module.css';

function scrollToSection(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const ROLES = ['Frontend Developer', 'React.js Engineer', 'UI Craftsman', 'Problem Solver'];
const ROTATE_MS = 2200;

function RoleCarousel() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'idle' | 'leaving' | 'entering'>('idle');

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase('leaving');
      setTimeout(() => {
        setIndex((i) => (i + 1) % ROLES.length);
        setPhase('entering');
        // settle back to idle so the next cycle's "leaving" class re-triggers cleanly
        setTimeout(() => setPhase('idle'), 30);
      }, 450);
    }, ROTATE_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.carousel}>
      <span className={styles.carouselPrefix}>//</span>
      <span
        key={index}
        className={`${styles.carouselWord} ${phase === 'leaving' ? styles.leaving : ''} ${
          phase === 'entering' ? styles.entering : ''
        }`}
      >
        {ROLES[index]}
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.layout}>
        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            Available for opportunities
          </div>

          <h1 className={styles.name}>Perarivu V.</h1>

          <RoleCarousel />

          <p className={styles.bio}>
            I build <strong>responsive</strong>, performant web applications with{' '}
            <strong>React.js</strong>, JavaScript &amp; modern CSS. Based in{' '}
            <strong>Vellore, Tamil Nadu</strong>, shipping HRMS &amp; government-scale
            products in Agile teams.
          </p>

          <div className={styles.cta}>
            <button className="btn-primary" onClick={() => scrollToSection('#projects')}>
              View work
            </button>
            <a href="https://mail.google.com/mail/?view=cm&to=perarivu2516@gmail.com" className="btn-ghost">
              Say hello
            </a>
            <a href="/resume.pdf" download="Perarivu-Resume.pdf" className="btn-ghost">
              Resume ↓
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statNum}>1+</div>
              <div className={styles.statLabel}>Years of Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNum}>2+</div>
              <div className={styles.statLabel}>Completed Projects</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNum}>1K+</div>
              <div className={styles.statLabel}>Hours Worked</div>
            </div>
          </div>
        </div>

        <div className={styles.statsRail}>
          <div className={styles.railItem}>
            <div className={styles.railNum}>1+</div>
            <div className={styles.railLabel}>Years of Experience</div>
          </div>
          <div className={styles.railItem}>
            <div className={styles.railNum}>2+</div>
            <div className={styles.railLabel}>Completed Projects</div>
          </div>
          <div className={styles.railItem}>
            <div className={styles.railNum}>1K+</div>
            <div className={styles.railLabel}>Hours Worked</div>
          </div>
        </div>
      </div>
    </section>
  );
}