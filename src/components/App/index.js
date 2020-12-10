import "./style.css";
import Home from "../Home";
import About from "../About";
import Projects from "../Projects";
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
      <Footer />
    </main>
  </div>
  );
}

export default App;
