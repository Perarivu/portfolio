import styles from './Projects.module.css';

const PROJECTS = [
  {
    num: '_01',
    icon: '📄',
    title: 'HRMS Letter Management Module',
    desc: 'Scalable employee document lifecycle management — forms, templates, approvals, and real-time data rendering with React.js and REST APIs.',
    tags: ['React.js', 'REST API', 'Laravel', 'Component Architecture'],
    href: 'https://github.com/Perarivu',
  },
  {
    num: '_02',
    icon: '🌐',
    title: 'This Portfolio',
    desc: 'A VS Code–themed developer portfolio with dark/light mode, animated background, and code-editor aesthetic. Built from scratch.',
    tags: ['React', 'TypeScript', 'CSS Modules', 'Vite'],
    href: 'https://github.com/Perarivu',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-number" data-n="04">Projects</div>
      <h2 className="section-heading">Selected Work</h2>

      <div className={styles.grid}>
        {PROJECTS.map((p) => (
          <a
            key={p.num}
            className={styles.card}
            href={p.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.header}>
              <span className={styles.icon}>{p.icon}</span>
              <span className={styles.num}>{p.num}</span>
              <span className={styles.arrow}>↗</span>
            </div>
            <div className={styles.title}>{p.title}</div>
            <div className={styles.desc}>{p.desc}</div>
            <div className={styles.tags}>
              {p.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <div style={{ marginTop: '24px' }}>
        <a href="https://github.com/Perarivu" target="_blank" rel="noreferrer" className="btn-ghost">
          ⌥ See more on GitHub
        </a>
      </div>
    </section>
  );
}
