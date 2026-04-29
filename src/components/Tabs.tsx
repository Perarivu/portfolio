import { useEffect, useState } from 'react';
import styles from './Tabs.module.css';

const TABS = [
  { label: 'Hero.tsx',       href: '#home',       dot: '#4ec9b0' },
  { label: 'About.tsx',      href: '#about',      dot: '#d2a8ff' },
  { label: 'Skills.tsx',     href: '#skills',     dot: '#79c0ff' },
  { label: 'Exp.tsx',        href: '#experience', dot: '#f2cc60' },
  { label: 'Projects.tsx',   href: '#projects',   dot: '#f85149' },
  { label: 'Contact.tsx',    href: '#contact',    dot: '#3fb950' },
];

const SECTION_IDS = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

function scrollToSection(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Tabs() {
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { threshold: 0.25 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.tabs}>
      {TABS.map((tab) => (
        <button
          key={tab.href}
          className={`${styles.tab} ${active === tab.href ? styles.active : ''}`}
          onClick={() => scrollToSection(tab.href)}
        >
          <span className={styles.dot} style={{ background: tab.dot }} />
          {tab.label}
        </button>
      ))}
    </div>
  );
}
