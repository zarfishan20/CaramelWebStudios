import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 300); // Delay for smooth fade-in
    }, []);

    return (
        <div className="app">
            {/* Background */}
            <div className="background">
                <div className={`overlay ${loaded ? "fade-in" : ""}`}>
                    {/* Header */}
                    
                    <div className="container">
                        <div >

                            <a  href="#">
                                <img src="logo.svg" alt="Caramel Web Studios" className="logo" />
                            </a>

                        </div>
                            <div class='alert alert-primary' role='alert'>
                  <p style={{ display: "none" }} className='d-block'>
                      Bootstrap is now successfully installed 
                            </p>
                  <div>
                            <ul>
                                {["Home", "About", "Services", "Contact"].map((item, index) => (
                                    <li className="nav-item" key={index}>
                                        <a className="nav-link animated-link" href="#">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
              </div>
          
                        </div>
                

                   
                </div>






            </div>
            
            <footer className="footer">
                <p>&copy; 2025 Caramel Web Studios. All Rights Reserved.</p>
            </footer>

           
          
        </div>
    );
};

export default Home;
