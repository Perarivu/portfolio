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

      <div className={styles.card}>
        <div className={styles.cardHeader}>Reach me</div>
        <div className={styles.cardBody}>
          <div className={styles.row}>
            <span className={styles.label}>Email —</span>
            <a
              className={styles.link}
              href="https://mail.google.com/mail/?view=cm&to=Perarivu2516@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Perarivu2516@gmail.com
            </a>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>GitHub —</span>
            <a className={styles.link} href="https://github.com/Perarivu" target="_blank" rel="noreferrer">
              github.com/Perarivu
            </a>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>LinkedIn —</span>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/perarivuv"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/perarivuv
            </a>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Phone —</span>
            <span>+91 91592-76752</span>
          </div>
          <div className={styles.row}>
            <span className={styles.label}>Status —</span>
            <span>Available for opportunities</span>
          </div>
        </div>
      </div>

      <div className={styles.socials}>
        <a className={styles.socBtn} href="https://mail.google.com/mail/?view=cm&to=Perarivu2516@gmail.com" target="_blank" rel="noreferrer">Email me</a>
        <a className={styles.socBtn} href="https://github.com/Perarivu" target="_blank" rel="noreferrer">GitHub</a>
        <a className={styles.socBtn} href="https://www.linkedin.com/in/perarivuv" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className={styles.socBtn} href="/resume.pdf" download="Perarivu-Resume.pdf">Resume ↓</a>
      </div>
    </section>
  );
}
