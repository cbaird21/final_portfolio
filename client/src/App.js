import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';


import Home from "./pages/Home";
import About from './components/About/About';
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";




function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Footer" element={<Footer />} />
          </Routes>
        </Router>
      <Footer/>
    </div >
  )
};


export default App;
