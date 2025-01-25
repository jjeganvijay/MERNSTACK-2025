
import ClassCompEG  from './components/classComponents/ClassCompEG';
import About from './components/functionalComponents/About';
import Contact from './components/functionalComponents/Contact';
import Gallery from './components/functionalComponents/Gallery';
import Home from './components/functionalComponents/Home';
import Navbar from './components/functionalComponents/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/functionalComponents/Signup';
import UserState from './components/functionalComponents/Hooks/UseState';
import UseEffect from './components/functionalComponents/Hooks/UseEffect';

import UseEffectApi from "./components/functionalComponents/Hooks/UseEffectAPI";
import UseEffectAPIimage from './components/functionalComponents/Hooks/UseEffectAPIimage';
import UseRef from './components/functionalComponents/Hooks/UseRef';
import UseMemo from './components/functionalComponents/Hooks/UseMemo';
import UseCallback from './components/functionalComponents/Hooks/UseCallback';
import ReactLifecycleMethods from './components/classComponents/ReactLifecycleMethods';
import Student from './components/functionalComponents/Hooks/UseContext';
import Memo from './components/functionalComponents/Memoization/Memo';

 function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/react-lifecycle-methods" element={<ReactLifecycleMethods
        />}></Route>
        
        <Route path="/ClassCompEG" element={<ClassCompEG />}></Route>
        <Route path="/Gallery" element={<Gallery/>}></Route>
        <Route path="/use-state" element={<Contact />}></Route>
        <Route path='/useEffect' element={<UseEffect />}></Route>
        <Route path="/UseState" element={<UserState/>}></Route>
        <Route path="/UseEffectAPI" element={<UseEffectApi/>}></Route>
        <Route path="/useimg" element={<UseEffectAPIimage/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/UseRef" element={<UseRef/>}></Route>
        <Route path="/memo" element={<Memo/>}></Route>
        <Route path="/UseMemo" element={<UseMemo/>}></Route>
        <Route path="/Student" element={<Student
        />}></Route>
        <Route path="/UseCallback" element={<UseCallback
        />}></Route>
        
        
      </Routes>
      </BrowserRouter>

    </>
)
}

export default App;