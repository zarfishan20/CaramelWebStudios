import { useState } from 'react'
import './App.css'
import Home from './Home'
import backgroundImage from "./assets/background.jpg";
function App() {

  return (
      
      <div className="full-page-bg" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <Home />
          <div className="row container">
          <footer className="footer text-white">
              <p>&copy; 2025 Caramel Web Studios. All Rights Reserved.</p>
              </footer>
          </div>
    </div>
    
  )
}

export default App
