import "./style.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Art from "../pages/Art";
import Contact from "../pages/Contact";

import Footer from "../Footer";
import MenuToggle from "../MenuToggle"; 

function App() {
  return (<div id="main-container">
  
    <MenuToggle />
    <main>
    {/* main encompasses the "page" components */}
      <Home />
      <About />
      <Projects />
      <Art />
      <Contact />
      <Footer />
    </main>
  </div>
  );
}

export default App;
