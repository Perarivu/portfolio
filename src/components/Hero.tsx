import styles from './Hero.module.css';
import DevIllustration from './DevIllustration';

function scrollToSection(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
     <div className={styles.heroLayout}>  
      <div className={styles.inner}>
        <div className={styles.codeLine}><span className={styles.cm}>// src/components/Hero.tsx</span></div>
        <div className={styles.codeLine}><span className={styles.kw}>import</span> React, {'{ useState }'} <span className={styles.kw}>from</span> <span className={styles.str}>'react'</span>;</div>
        <div className={styles.codeLine}>&nbsp;</div>
        <div className={styles.codeLine}><span className={styles.kw}>const</span> <span className={styles.fn}>Perarivu</span> = (): <span className={styles.fn}>JSX.Element</span> =&gt; {'{'}</div>
        <div className={styles.codeLine}>&nbsp;&nbsp;<span className={styles.kw}>return</span> (</div>

        <h1 className={styles.name}>
          Perarivu <span className={styles.nameAccent}>V</span>
        </h1>

        <div className={styles.role}>FRONTEND DEVELOPER · REACT.JS</div>

        <p className={styles.bio}>
          Building <strong>responsive</strong>, performant web applications with{' '}
          <strong>React.js</strong>, JavaScript & modern CSS. Based in{' '}
          <strong>Vellore, Tamil Nadu</strong>. 1+ year shipping HRMS &
          government-scale products in Agile teams.
        </p>

        <div className={styles.cta}>
          <button className="btn-primary" onClick={() => scrollToSection('#projects')}>
            &lt;ViewWork /&gt;
          </button>
          <a href="mailto:Perarivu2516@gmail.com" className="btn-ghost">
            $ send --message
          </a>
          <a href="/resume.pdf" download="Perarivu-Resume.pdf" className="btn-ghost">
            ↓ resume.pdf
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <div className={styles.statNum}>1+</div>
            <div className={styles.statLabel}>Years exp</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>50%</div>
            <div className={styles.statLabel}>Load time reduced</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNum}>3.8</div>
            <div className={styles.statLabel}>GPA / 4.0</div>
          </div>
        </div>

        <div className={styles.closingBrace}>
          <span className={styles.kw}>&nbsp;&nbsp;);</span><br />
          <span className={styles.kw}>{'};'}</span><br /><br />
          <span className={styles.kw}>export default</span> Perarivu;
        </div>
      </div>
      <div className={styles.illustration}>    {/* ← NEW right column */}
          <DevIllustration />
      </div>
    </div>
    </section>
  );
}
