import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/home";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { About } from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
