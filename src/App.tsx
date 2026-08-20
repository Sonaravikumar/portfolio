import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About /> 
      <Skills />
      <Experience />
    </>
  );
}

export default App;