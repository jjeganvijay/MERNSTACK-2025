
import About from './components/functionalComponents/About'
import Gallery from './components/functionalComponents/Gallery'
import Home from './components/functionalComponents/Home'
import Contact from './components/functionalComponents/Contact'
import Navbar from './components/functionalComponents/Navbar'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
function App() {
  return (
  
      <BrowserRouter>
      <Navbar />
      <Routes>

    <Route path="/Home" element={<Home />}></Route>
    <Route path="/About" element={<About />}></Route>
    <Route
    path="/gallery"
    element={<Gallery page="Gallery" img="SECE Logo"/>}
    ></Route>
    <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    </BrowserRouter>
   
)
}

export default App