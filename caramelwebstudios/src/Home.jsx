import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from './components/Contact';
import "./App.css";
import Footer from './components/Footer';
import backgroundImage from "./assets/background.jpg";

function Home (){
   

    return (


        <>
            {/* Mobile view */}

            <div className="d-block d-md-none ">
              

                        <nav class="navbar navbar-expand-lg ">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">
                                    <img src="logo.svg" alt="Caramel Web Studios" width="50" height="50" class="d-inline-block " />
                                    Caramel Web Studios
                                </a>


                                <button
                                    className="navbar-toggler "
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNavAltMarkup"
                                    aria-controls="navbarNavAltMarkup" 
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <ul className="navbar-nav">

                                        <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Projects</a></li>
                                        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                                    </ul>
                                </div>

                            </div>
                </nav>
           


            <div className="container text-center mt-5">
                
                <button>Request a Quote</button>

                {/* Sections */}
                <section id="services" className="mt-4">
                    <h2>Services</h2>
                    <p>Details about services...</p>
                </section>

                <section id="projects" className="mt-4">
                    <h2>Projects</h2>
                    <p>Some portfolio projects...</p>
                </section>

                <section id="reviews" className="mt-4">
                    <h2>Reviews</h2>
                    <p>Client testimonials...</p>
                </section>

                <section id="contact" className="mt-4">
                    <h2>Contact</h2>
                    <p>Contact details...</p>
                </section>
                
                </div>

            </div>
            
            {/* Desktop and tablet view*/}
            
      
            
               
            <div className=" container d-none d-md-flex">
                        {/* Left Column */}
                        <div className="col-10 d-flex flex-column">
                            <h1>Caramel Web Studios</h1>
                            <a href="#">
                                <img src="logo.svg" alt="Caramel Web Studios" className="logo" />
                            </a>
                        </div>

                        {/* Right Column */}
                        <div className="col-2 d-flex flex-column justify-content-center align-items-center">
                            <h4>Right Column</h4>
                            <div class='alert alert-primary' role='alert'>
                                <ul class="list-group list-group-flush">

                                    <li className="nav-item">
                                        <a className="nav-link animated-link" href="#"> Services

                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link animated-link" href="#"> Projects

                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link animated-link" href="#"> Request A Quote

                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link animated-link" href="/Contact"> Contact

                                        </a>
                                    </li>

                                </ul>


                            </div>
                        </div>
                    </div>
                

            <Footer /> 
        </>
    );
};

export default Home;
