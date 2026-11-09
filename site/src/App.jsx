import {BrowserRouter , Routes , Route , Link} from "react-router-dom";
import Home from './components/Home'
import Paintings from './components/Paintings'
import Navbar from "./components/Navbar"

import './App.css'
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/paintings" element={<Paintings />} />
    </Routes>
    
    
    </BrowserRouter>
  )
}
export default App
