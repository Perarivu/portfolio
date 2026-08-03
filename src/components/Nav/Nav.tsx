import { useEffect, useState } from 'react';
import styles from './Nav.module.css';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

function scrollToSection(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') !== 'light';
  const next = isDark ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  return next === 'dark';
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(
  () => document.documentElement.getAttribute('data-theme') !== 'light'
);

 

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { threshold: 0.35 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  function handleNav(href: string) {
    setMenuOpen(false);
    scrollToSection(href);
  }

  function handleToggle() {
    setIsDark(toggleTheme());
  }

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <button className={styles.logo} onClick={() => handleNav('#home')} aria-label="Home">
          P<span className={styles.logoAccent}>/</span>V
        </button>

        <div className={styles.links}>
          {LINKS.map((l) => (
            <button
              key={l.href}
              className={`${styles.link} ${active === l.href ? styles.active : ''}`}
              onClick={() => handleNav(l.href)}
            >
              {l.label}
            </button>
          ))}
          <button className={styles.themeToggle} onClick={handleToggle}>
            {isDark ? 'Light' : 'Dark'}
          </button>
        </div>

        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {LINKS.map((l) => (
          <button key={l.href} className={styles.link} onClick={() => handleNav(l.href)}>
            {l.label}
          </button>
        ))}
        <button className={styles.themeToggle} onClick={handleToggle}>
          {isDark ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
    </>
  );
}