import { useState } from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Herobtm from './components/herobtm/Herobtm';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';


function App() {


  return (
    <div className='bg-[#F7F7F7]'>
     <Header/> 
     <Hero/>
     <Herobtm/>
     <Menu/>
     <Footer/>
    </div>
  );
}

export default App;
