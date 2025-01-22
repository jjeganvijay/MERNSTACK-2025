import { useState } from 'react';
import About from './components/functionalComponents/About';
import Gallery from './components/functionalComponents/Gallery';
import Home from './components/functionalComponents/Home';
import Contact from './components/functionalComponents/Contact';
import Navbar from './components/functionalComponents/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/functionalComponents/Signup';
import Login from './components/functionalComponents/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/Signup" element={<Signup onLogin={handleLogin} />} />
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery image="chocolate" page="gallery" />} />
            <Route path="/contact" element={<Contact />} />
            
            
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
