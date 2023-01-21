
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div >
  )
};


export default App;
