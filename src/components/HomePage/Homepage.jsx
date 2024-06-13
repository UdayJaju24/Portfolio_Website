import React, { useEffect, useState } from 'react';
import './homepage.css';
import Header from './../header/Header';
import Home from './../home/Home';
import About from './../about/About';
import Skills from './../skills/Skills';
import Services from './../services/Services';
import Qualification from './../qualification/Qualification';
import Contact from './../contact/Contact';
import Footer from './../footer/Footer';
import ScrollUp from './../scrollup/ScrollUp';




const App = () => {
    
  return (
    <div>
      
    <Header />  

    <main className='main'>
      <Home />
      <About />
      <Qualification />
      <Skills />
      <Services />
      <Contact />


    </main>

    <Footer /> 
    <ScrollUp />
    </div>
  )
}

export default App;
