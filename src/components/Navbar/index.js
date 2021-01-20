import React from "react";
import "./style.css";


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="/">Kennedy Oginga</a>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto my-2 my-lg-0">
                            <li className="nav-item"><a className="nav-link" href="#about">About Me</a></li>
                            <li className="nav-item"><a className="nav-link" href="#services">Social Media</a></li>
                            <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;