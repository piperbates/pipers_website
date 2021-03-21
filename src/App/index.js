import "./style.css";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Projects from "../components/pages/Projects";
import Art from "../components/pages/Art";
import Contact from "../components/pages/Contact";

import Socials from "../components/Socials";
import Footer from "../components/Footer";
import MenuToggle from "../components/MenuToggle"; 

function App() {
  return (<div id="main-container">
  
    <MenuToggle />
    <main>
    <div id="main-container">
    {/* main encompasses the "page" components */}
      <Home />
      <Projects />
      <Art />
      <About />
      <Contact />
      <Socials/>
      </div>
    </main>
      <Footer />
  </div>
  );
}

export default App;
