import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Home'
import Services from './components/Services'
import Contact from './components/Contact'
import Quote from './components/RequestAQuote'
import Footer from './components/Footer'
import Header from './components/Header';

function App() {

    return (

        <div className="App">
            
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Services" element={<Services />}/>
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/RequestAQuote" element={<Quote />} />

                </Routes>
            </Router>

            <Footer />
            
        </div>
  )
}

export default App
