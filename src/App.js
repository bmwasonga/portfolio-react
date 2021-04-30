import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Projects from './components/pages/Projects/Projects';
import Profile from './components/pages/Profile/Profile';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact" component={Contact} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
