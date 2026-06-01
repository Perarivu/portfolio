import styles from './About.module.css';

export default function About() {
  return (
    <section id="about">
      <div className="section-number" data-n="01">About</div>
      <h2 className="section-heading">Who is Perarivu?</h2>

      <div className={styles.grid}>
        <div className={styles.text}>
          <p>
            I'm a <strong>Frontend Developer</strong> from Vellore, Tamil Nadu with a passion
            for turning complex problems into simple, elegant interfaces. I care deeply about the{' '}
            <strong>details</strong> — the kind that make UX feel effortlessly polished.
          </p>
          <p>
            I hold a <strong>B.E. in Computer Science</strong> (GPA 3.8/4.0) from St. Joseph
            College of Engineering (2020–2024). I've shipped production apps at{' '}
            <strong>Ascent e-digit Solutions</strong> — HRMS document systems and
            government-scale projects, all built with React.js, JavaScript and Laravel APIs.
          </p>
          <p>
            Outside of work I geek out over <strong>component architecture</strong>, readable
            code, and coffee. Always looking for the next interesting build.
          </p>
          <div style={{ marginTop: '24px' }}>
            <a href="https://mail.google.com/mail/?view=cm&to=Perarivu2516@gmail.com" target="_blank" rel="noreferrer" className="btn-primary">
              &lt;HireMe email="Perarivu2516@gmail.com" /&gt;
            </a>
          </div>
        </div>

        <div className={styles.codeBlock}>
          <div><span className={styles.cm}>{'/** About.tsx — bio object */'}</span></div>
          <div><span className={styles.kw}>const</span> <span className={styles.fn}>bio</span> = {'{'}</div>
          <div>&nbsp;&nbsp;<span className={styles.prop}>name</span>: <span className={styles.str}>"Perarivu Vallatharasu"</span>,</div>
          <div>&nbsp;&nbsp;<span className={styles.prop}>role</span>: <span className={styles.str}>"Frontend Developer"</span>,</div>
          <div>&nbsp;&nbsp;<span className={styles.prop}>location</span>: <span className={styles.str}>"Vellore, Tamil Nadu 🇮🇳"</span>,</div>
          <div>&nbsp;&nbsp;<span className={styles.prop}>email</span>: <span className={styles.str}>"Perarivu2516@gmail.com"</span>,</div>
          <div>&nbsp;&nbsp;<span className={styles.prop}>github</span>: <span className={styles.str}>"github.com/Perarivu"</span>,</div>
          <div>&nbsp;&nbsp;<span className={styles.prop}>linkedin</span>: <span className={styles.str}>"linkedin/perarivuv"</span>,</div>
          <div>&nbsp;&nbsp;<span className={styles.prop}>experience</span>: <span className={styles.str}>"1+ year"</span>,</div>
          <div>&nbsp;&nbsp;<span className={styles.prop}>education</span>: {'{'}</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.prop}>degree</span>: <span className={styles.str}>"B.E. Computer Science"</span>,</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.prop}>gpa</span>: <span className={styles.num}>3.8</span>,</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.prop}>year</span>: <span className={styles.str}>"2020–2024"</span>,</div>
          <div>&nbsp;&nbsp;{'}'},</div>
          <div>&nbsp;&nbsp;<span className={styles.prop}>availableForWork</span>: <span className={styles.kw}>true</span>,</div>
          <div>{'};'}</div>
        </div>
      </div>
    </section>
  );
}
