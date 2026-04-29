import styles from './Sidebar.module.css';

function scrollToSection(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const FILE_ROWS = [
  { label: '⚛ Hero.tsx',       id: '#home',       type: 'tsx' },
  { label: '⚛ About.tsx',      id: '#about',      type: 'tsx' },
  { label: '⚛ Skills.tsx',     id: '#skills',     type: 'tsx' },
  { label: '⚛ Experience.tsx', id: '#experience', type: 'tsx' },
  { label: '⚛ Projects.tsx',   id: '#projects',   type: 'tsx' },
  { label: '⚛ Contact.tsx',    id: '#contact',    type: 'tsx' },
];

const STATIC_FILES = [
  { label: '◉ globals.css',    type: 'css' },
  { label: '⚙ package.json',  type: 'json' },
  { label: '⚙ vite.config.ts',type: 'ts' },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.header}>Explorer</div>

      <div className={styles.fileTree}>
        <div className={styles.folderLabel}>📁 PERARIVU-PORTFOLIO</div>

        {FILE_ROWS.map((f) => (
          <button
            key={f.id}
            className={`${styles.fileRow} ${styles[f.type]}`}
            onClick={() => scrollToSection(f.id)}
          >
            {f.label}
          </button>
        ))}

        {STATIC_FILES.map((f) => (
          <div
            key={f.label}
            className={`${styles.fileRow} ${styles[f.type]} ${styles.static}`}
          >
            {f.label}
          </div>
        ))}
      </div>

      <div className={styles.social}>
        <div className={styles.socialLabel}>Social</div>
        <a className={styles.socialLink} href="https://github.com/Perarivu" target="_blank" rel="noreferrer">
          <span>⌥</span> github.com/Perarivu
        </a>
        <a className={styles.socialLink} href="https://www.linkedin.com/in/perarivuv" target="_blank" rel="noreferrer">
          <span>in</span> linkedin/perarivuv
        </a>
        <a className={styles.socialLink} href="mailto:Perarivu2516@gmail.com">
          <span>✉</span> Perarivu2516@gmail.com
        </a>
      </div>
    </aside>
  );
}
