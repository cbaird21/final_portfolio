
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';


import Home from "./components/Home/Home";
import About from './components/About/About';
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route className="text-decoration-none" path="/" element={<Home />} />
          <Route className="text-decoration-none" path="/about" element={<About />} />
          <Route className="text-decoration-none" path="/Contact" element={<Contact />} />
          <Route className="text-decoration-none" path="/Project" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div >
  )
};


export default App;
