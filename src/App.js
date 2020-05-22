import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/main'
import LandingPage from './Components/landingPage';
import Project from './Components/projects';
import About from './Components/info'; 
import FooterPage from './Components/footer';

function App() {
  return (
    <div className="App">
      <Main/>
      <LandingPage/>
      <Project id='projets'/>
      <About id='contact'/>
      <FooterPage/>
    </div>
  );
}

export default App;
