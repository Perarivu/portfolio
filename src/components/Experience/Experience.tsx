import styles from './Experience.module.css';

const ITEMS = [
  {
    date: '2025 — 2026',
    role: 'Front-end Developer',
    company: 'Ascent e-digit Solutions Private Limited',
    bullets: [
      'Developed and maintained web applications using React.js, JavaScript, and Laravel APIs',
      'Built reusable UI components to improve development speed and consistency across projects',
      'Integrated REST APIs for dynamic data handling and backend communication',
      'Improved application performance and reduced load time by 50%',
      'Worked on HRMS Letter Management and government-based projects in Agile teams',
    ],
  },
  {
    date: '2020 — 2024',
    role: 'B.E. Computer Science',
    company: 'St. Joseph College of Engineering — GPA 3.8/4.0',
    bullets: [
      'Graduated with distinction in Computer Science fundamentals, networking, OS & databases',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-number" data-n="03">Experience</div>
      <h2 className="section-heading">Work History</h2>

      <div className={styles.timeline}>
        {ITEMS.map((item, i) => (
          <div
            key={item.company}
            className={styles.item}
            style={i === ITEMS.length - 1 ? { paddingBottom: 0 } : undefined}
          >
            <div className={styles.date}>{item.date}</div>
            <div className={styles.role}>{item.role}</div>
            <div className={styles.company}>{item.company}</div>
            <ul className={styles.bullets}>
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
