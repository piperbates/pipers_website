import "./style.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Art from "../pages/Art";
import Contact from "../pages/Contact";

import Socials from "../Socials";
import Footer from "../Footer";
import MenuToggle from "../MenuToggle"; 

function App() {
  return (<div id="main-container">
  
    <MenuToggle />
    <main>
    <div id="main-container">
    {/* main encompasses the "page" components */}
      <Home />
      <About />
      <Projects />
      <Art />
      <Contact />
      <Socials/>
      </div>
    </main>
      <Footer />
  </div>
  );
}

export default App;
