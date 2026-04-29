import styles from './ActivityBar.module.css';

function scrollToSection(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function openResume() {
  const a = document.createElement('a');
  a.href = '/resume.pdf';
  a.download = 'Perarivu-Resume.pdf';
  a.click();
}

const NAV_ITEMS = [
  {
    id: '#home', title: 'Home',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 7l9-4 9 4v10l-9 4-9-4V7z" />
        <path d="M12 3v18M3 7l9 4 9-4" />
      </svg>
    ),
  },
  {
    id: '#about', title: 'About',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="7" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: '#skills', title: 'Skills',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: '#projects', title: 'Projects',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    id: '#contact', title: 'Contact',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function ActivityBar() {
  return (
    <div className={styles.activityBar}>
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          className={styles.actIcon}
          onClick={() => scrollToSection(item.id)}
          title={item.title}
          aria-label={item.title}
        >
          {item.icon}
        </button>
      ))}

      <div className={styles.spacer} />

      <button
        className={styles.actIcon}
        onClick={openResume}
        title="Download Resume"
        aria-label="Download Resume"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      </button>
    </div>
  );
}
