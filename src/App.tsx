import React from 'react';
import './App.css';
import Contacts from './contacts/Contact';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import Projects from './projects/Projects';

function App() {
  return (
    <div className="App">
      <div className="AppContent">
        <Header />
        <Main />
        <Skills/>
        <Projects/>
        <Contacts/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
