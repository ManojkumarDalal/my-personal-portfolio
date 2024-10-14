import About from "./component/About"
import Blogs from "./component/Blogs"
import Contact from "./component/Contact"
import Home from "./component/Home"
import Projects from "./component/Projects"
import Services from "./component/Services"
import Skills from "./component/Skills"

function App() {
  return (
    <div className="bg-white">
      <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  )
}

export default App
