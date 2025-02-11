import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 

function Home (){
   

    return (
      
            <div className="container centered-box d-none d-md-flex shadow rounded-4 " style={{ width: "2000px", height: "300px" }}>
               
                    <div className="row justify-content-center">
                        {/* Left Column */}
                        <div className="col-3 d-flex flex-column justify-content-center align-items-center  text-white">
                            <h4>Left Column</h4>
                            <a href="#">
                                <img src="logo.svg" alt="Caramel Web Studios" className="logo" />
                            </a>
                        </div>

                        {/* Right Column */}
                        <div className="col-9 d-flex flex-column justify-content-center align-items-center">
                            <h4>Right Column</h4>
                            <div class='alert alert-primary ' role='alert'>
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
                                        <a className="nav-link animated-link" href="#"> Contact

                                        </a>
                                    </li>

                                </ul>


                            </div>
                        </div>
                    </div>
                
            </div>
                    
      
    );
};

export default Home;
