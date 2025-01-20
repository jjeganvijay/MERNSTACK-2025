import ClassCompEG from './components/classComponents/ClassCompEG'
import About from './components/functionalComponents/About'
import Gallery from './components/functionalComponents/Gallery'
import Home from './components/functionalComponents/Home'
import Contact from './components/functionalComponents/Contact'

function App() {
  return (
    <section>
    <Home/>
    <About/>
    <h2>without props</h2>
   <Gallery />
    <ClassCompEG/>
    <h2>with props</h2>
    <Gallery image="SECE logo" page="Gallery" />
    <Contact />
    </section>
)
}

export default App