import Home from "./components/Home/Home";
import About from "./components/About/About";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import { SliderData } from "./components/Projects/SlideData";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Projects slides={SliderData} />
      <Contact />
    </div>
  );
}

export default App;
