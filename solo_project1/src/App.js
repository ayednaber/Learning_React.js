import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Interests from './components/Interests';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Interests />
    </div>
  )
}

export default App;
