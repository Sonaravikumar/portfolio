import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Architecture from "./components/Architecture";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Architecture />
      <Certifications />
      <Contact />
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sona Pandi. Built with React & TypeScript.</p>
      </footer>
    </>
  );
}

export default App;