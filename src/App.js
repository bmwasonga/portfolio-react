import Navbar from './components/NavBar/Navbar';
import Home from './components/pages/Home/Home';
import Skills from './components/pages/Skills/Skills';
import Contact from './components/pages/Contact/Contact';
import Projects from './components/pages/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
