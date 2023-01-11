import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './components/Header/Navbar';
import Work from './components/Project/Work';

import Home from "./pages/Home";
import Aboutme from './components/Aboutme/Aboutme';
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
            <Route path="/aboutme" element={<Aboutme />} />
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
