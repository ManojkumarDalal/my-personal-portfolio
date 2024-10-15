import About from "./component/About";
import Blogs from "./component/Blogs";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Projects from "./component/Projects";
import Services from "./component/Services";
import Skills from "./component/Skills";
import { PortfolioProvider } from "./context/PortfolioContext";

function App() {
  return (
    <PortfolioProvider>
      <div className="bg-white">
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Blogs />
        <Contact />
      </div>
    </PortfolioProvider>
  );
}

export default App;
