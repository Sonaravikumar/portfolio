import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About /> 
      <Skills />
      <Experience />
      <Projects />
    </>
  );
}

export default App;