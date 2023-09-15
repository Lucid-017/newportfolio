import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import './pages/css/index.css'
import './pages/css/Home.css'
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar/>
      <Cursor/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/contact" element={<Contact/>}/> 
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
