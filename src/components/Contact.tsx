import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-number" data-n="05">Contact</div>
      <h2 className="section-heading">Get in Touch</h2>

      <p className={styles.intro}>
        Open to new opportunities, collaborations, and interesting problems.
        I reply within 24 hours.
      </p>

      <div className={styles.terminal}>
        <div className={styles.terminalBar}>
          <div className={`${styles.dot} ${styles.red}`} />
          <div className={`${styles.dot} ${styles.amber}`} />
          <div className={`${styles.dot} ${styles.green}`} />
          <div className={styles.terminalTitle}>bash — contact.sh</div>
        </div>

        <div className={styles.terminalBody}>
          <div className={styles.line}>
            <span className={styles.prompt}>perarivu@portfolio</span>
            <span className={styles.muted}>:~$</span>
            <span className={styles.cmd}>&nbsp;cat</span>
            <span className={styles.arg}>&nbsp;contact.json</span>
          </div>

          <div className={styles.output}>
            {'{'}<br />
            &nbsp;&nbsp;"email":&nbsp;
            <a className={styles.link} href="mailto:Perarivu2516@gmail.com">
              "Perarivu2516@gmail.com"
            </a>,<br />
            &nbsp;&nbsp;"github":&nbsp;
            <a className={styles.link} href="https://github.com/Perarivu" target="_blank" rel="noreferrer">
              "github.com/Perarivu"
            </a>,<br />
            &nbsp;&nbsp;"linkedin":&nbsp;
            <a className={styles.link} href="https://www.linkedin.com/in/perarivuv" target="_blank" rel="noreferrer">
              "linkedin.com/in/perarivuv"
            </a>,<br />
            &nbsp;&nbsp;"phone": "+91 91592-76752",<br />
            &nbsp;&nbsp;"status": "available for opportunities"<br />
            {'}'}
          </div>

          <div className={`${styles.line} ${styles.lastLine}`}>
            <span className={styles.prompt}>perarivu@portfolio</span>
            <span className={styles.muted}>:~$</span>
            <span>&nbsp;</span>
            <span className={styles.cursor} />
          </div>
        </div>
      </div>

      <div className={styles.socials}>
        <a className={styles.socBtn} href="mailto:Perarivu2516@gmail.com">✉ Email me</a>
        <a className={styles.socBtn} href="https://github.com/Perarivu" target="_blank" rel="noreferrer">⌥ GitHub</a>
        <a className={styles.socBtn} href="https://www.linkedin.com/in/perarivuv" target="_blank" rel="noreferrer">in LinkedIn</a>
        <a className={styles.socBtn} href="/resume.pdf" download="Perarivu-Resume.pdf">↓ Resume</a>
      </div>
    </section>
  );
}
