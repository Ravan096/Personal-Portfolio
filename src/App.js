import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './Components/Header';
import Home from './Components/Home';
import Service from './Components/Service';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
