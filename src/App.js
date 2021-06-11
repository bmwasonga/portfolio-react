import Navbar from './components/NavBar/Navbar';
import Home from './components/pages/Home/Home';
import Skills from './components/pages/Skills/Skills';
import Projects from './components/pages/Projects/Projects';
import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
