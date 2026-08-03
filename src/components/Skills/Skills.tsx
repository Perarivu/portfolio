import styles from './Skills.module.css';

const CATEGORIES = [
  {
    label: 'Frontend',
    tags: ['React.js', 'JavaScript ES6+', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'CSS Modules'],
  },
  {
    label: 'Backend & DB',
    tags: ['Laravel', 'Python', 'Django', 'REST APIs', 'MySQL'],
  },
  {
    label: 'Tools & Workflow',
    tags: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite', 'Agile/SDLC'],
  },
  {
    label: 'Concepts',
    tags: ['Component Architecture', 'Responsive Design', 'API Integration', 'Debugging', 'Reusable UI'],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-number" data-n="02">Skills</div>
      <h2 className="section-heading">Tech Stack</h2>

      <div className={styles.grid}>
        {CATEGORIES.map((cat) => (
          <div key={cat.label} className={styles.card}>
            <div className={styles.cardLabel}>{cat.label}</div>
            <div className={styles.tags}>
              {cat.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
