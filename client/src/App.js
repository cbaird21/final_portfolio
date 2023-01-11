import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Work from './components/Work';

function App() {
  return (
    <div className="App">
      <header className="Navbar">
        <Navbar />
      </header>
      <>
        <Aboutme />
      </>
      <>
        <Work />
      </>
    </div>
  );
}

export default App;
