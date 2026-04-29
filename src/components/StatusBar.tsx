import { useEffect, useState } from 'react';
import styles from './StatusBar.module.css';

const SECTION_MAP: Record<string, string> = {
  home: 'Hero.tsx',
  about: 'About.tsx',
  skills: 'Skills.tsx',
  experience: 'Exp.tsx',
  projects: 'Projects.tsx',
  contact: 'Contact.tsx',
};

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
}

export default function StatusBar() {
  const [currentFile, setCurrentFile] = useState('Hero.tsx');
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setCurrentFile(SECTION_MAP[e.target.id] ?? '');
          }
        });
      },
      { threshold: 0.25 }
    );
    Object.keys(SECTION_MAP).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function handleToggle() {
    toggleTheme();
    setIsDark((d) => !d);
  }

  return (
    <div className={styles.statusBar}>
      <div className={styles.item}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
        React + TypeScript
      </div>
      <div className={styles.item}>⚛ Vite</div>
      <div className={styles.item}>{currentFile}</div>

      <div className={styles.right}>
        <div className={styles.item}>UTF-8</div>
        <div className={styles.item}>Ln 1, Col 1</div>
        <button className={styles.themeToggle} onClick={handleToggle}>
          {isDark ? '☀ Light' : '◑ Dark'}
        </button>
      </div>
    </div>
  );
}
