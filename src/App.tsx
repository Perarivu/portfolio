import ActivityBar  from './components/ActivityBar';
import Sidebar      from './components/Sidebar';
import Tabs         from './components/Tabs';
import BgCanvas     from './components/BgCanvas';
import Floaters     from './components/Floaters';
import StatusBar    from './components/StatusBar';
import Hero         from './components/Hero';
import About        from './components/About';
import Skills       from './components/Skills';
import Experience   from './components/Experience';
import Projects     from './components/Projects';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  return (
    <>
      <BgCanvas />
      <Floaters />
      <ActivityBar />
      <Sidebar />

      <main className="main">
        <Tabs />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>

      <StatusBar />
    </>
  );
}
