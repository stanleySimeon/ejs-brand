import React from 'react';
import Navigation from './components/navigation/Navigation';
import Home from './components/Home';
import About from './components/About';
import './index.css';

function App() {
  return (
    <div className="container-fluid p-0">
      <Navigation />
      <Home />
      <About />
    </div>
  );
}

export default App;
