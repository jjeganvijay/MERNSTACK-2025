import { useState } from "react";
import ClassCompEG  from './components/classComponents/ClassCompEG';
import About from './components/functionalComponents/About';
import Contact from './components/functionalComponents/Contact';
import Gallery from './components/functionalComponents/Gallery';
import Home from './components/functionalComponents/Home';
import Navbar from './components/functionalComponents/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/functionalComponents/signup';
import UserState from './components/functionalComponents/Hooks/UseState';
import UseEffect from './components/functionalComponents/Hooks/UseEffect';
import Login from './components/functionalComponents/Login'; // Import Login


 function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/ClassCompEG" element={<ClassCompEG />}></Route>
        <Route path="/Gallery" element={<Gallery/>}></Route>
        <Route path="/use-state" element={<Contact />}></Route>
        <Route path='/useEffect' element={<UseEffect />}></Route>
        <Route path="/UseState" element={<UserState/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        
        
      </Routes>
      </BrowserRouter>

    </>
)
}

export default App;