import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from './components/Contact';
import "./App.css";
import Footer from './components/Footer';

function Home (){
   

    return (


        <>
            {/* Mobile view */}

            <div class="d-block d-md-none ">
              

                        <nav class="navbar navbar-expand-lg ">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="/">
                                    <img src="logo.svg" alt="Caramel Web Studios" width="50" height="50" class="d-inline-block " />
                                    Caramel Web Studios
                                </a>


                                <button
                                    class="navbar-toggler "
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavAltMarkup"
                                    aria-controls="navbarNavAltMarkup" 
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <ul class="navbar-nav">

                                        <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Projects</a></li>
                                        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                                    </ul>
                                </div>

                            </div>
                </nav>
           


            <div class="container text-center mt-5">
                
                <button>Request a Quote</button>

                {/* Sections */}
                <section id="services" class="mt-4">
                    <h2>Services</h2>
                    <p>Details about services...</p>
                </section>

                <section id="projects" class="mt-4">
                    <h2>Projects</h2>
                    <p>Some portfolio projects...</p>
                </section>

                <section id="reviews" class="mt-4">
                    <h2>Reviews</h2>
                    <p>Client testimonials...</p>
                </section>

                <section id="contact" class="mt-4">
                    <h2>Contact</h2>
                    <p>Contact details...</p>
                </section>
                
                </div>

            </div>
            
            {/* Desktop and tablet view*/}
            
      
            
               
            <div class=" container-fluid d-none d-md-flex">
                        {/* Left Column */}
                <div class="col-7 justify-content-center align-items-center left-column ">
                          
                    <a href="/">
                        <img src="logo.svg" alt="Caramel Web Studios" className="logo" />
                    </a>

                    <h1>Caramel Web Studios</h1>

                        <img src="main-image.jpg" alt="Studios" className="main-image" />

                </div>

       

                        {/* Right Column */}
                        <div class="col-6 d-flex right-column flex-column justify-content-center align-items-center">
                                 

                                <nav class=" nav-link">

                                        <a  href="/Services"> Services

                                        </a>
                                    
                                        <a  href="/Projects"> Projects

                                        </a>
                                    
                                        <a  href="/Contact"> Contact

                                        </a>
                                        <a href="/RequestAQuote"> Request A Quote

                                         </a>

                                </nav>

                        </div>
                    </div>
                

            
        </>
    );
};

export default Home;
