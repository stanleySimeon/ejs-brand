import React from 'react';
import Navigation from './components/navigation/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './index.css';
import './App.css';

function App() {
  return (
    <div className="container-fluid p-0 overflow-x-hidden">
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Blogs />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
