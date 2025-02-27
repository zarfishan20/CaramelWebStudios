import React from "react";
import { Link, useNavigate } from "react-router-dom";



function Header() {

    const navigate = useNavigate(); // Hook to go back

    return (<>
        <header className="header-container">
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

                            <li class="nav-item"><a class="nav-link" href="/Services">Services</a></li>
                            <li class="nav-item"><a class="nav-link" href="/Projects">Projects</a></li>
                            <li class="nav-item"><a class="nav-link" href="/Contact">Contact</a></li>
                        </ul>
                    </div>
                    <button>Request A Quote</button>
                </div>
            </nav>
            
        </header>

        <div>
                <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
            </div>
    </>
    );

}
export default Header;