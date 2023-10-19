// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './header'; 
import Main from './firstPage/main';
import Footer from './footer';
function App() {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
      <div className='trythisinappcss'>
        <img src='images/EROX/Website_Icon/Printer.svg' alt='sorry2' className='printer-image'></img>
      </div>
    </>
  );
}

export default App;
