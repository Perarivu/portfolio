import styles from './About.module.css';
import ScrollReveal from '../scrollReveals/Scrollreveal';

const FACTS: [string, string][] = [
  ['Name', 'Perarivu Vallatharasu'],
  ['Role', 'Frontend Developer'],
  ['Location', 'Vellore, Tamil Nadu 🇮🇳'],
  ['Email', 'Perarivu2516@gmail.com'],
  ['GitHub', 'github.com/Perarivu'],
  ['LinkedIn', 'linkedin/perarivuv'],
  ['Experience', '1+ year'],
  ['Education', 'B.E. CS · GPA 3.8/4.0'],
];

export default function About() {
  return (
    <section id="about">
      <div className="section-number" data-n="01">About</div>
      <h2 className="section-heading">Who is Perarivu?</h2>


      <div className={styles.grid}>
        <div className={styles.text}>
          <ScrollReveal text="I'm a Frontend Developer from Vellore, Tamil Nadu with a passion for turning complex problems into simple, elegant interfaces. I care deeply about the details — the kind that make an experience feel effortlessly polished." />
          <p>
            I hold a <strong>B.E. in Computer Science</strong> (GPA 3.8/4.0) from St. Joseph
            College of Engineering (2020–2024). I've shipped production apps at{' '}
            <strong>Ascent e-digit Solutions</strong> — HRMS document systems and
            government-scale projects, built with React.js, JavaScript and Laravel APIs.
          </p>
          <p>
            Outside of work I geek out over <strong>component architecture</strong>, readable
            code, and coffee. Always looking for the next interesting build.
          </p>
          <div style={{ marginTop: '24px' }}>
            <a
              href="https://mail.google.com/mail/?view=cm&to=Perarivu2516@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Hire me
            </a>
          </div>
        </div>

        <div className={styles.card}>
          {FACTS.map(([label, value]) => (
            <div className={styles.row} key={label}>
              <span className={styles.label}>{label}</span>
              <span className={styles.value}>{value}</span>
            </div>
          ))}
          <div className={styles.row}>
            <span className={styles.label}>Available</span>
            <span className={styles.accent}>Yes, for opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}