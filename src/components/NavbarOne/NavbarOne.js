import React from "react";
import "./NavbarOne.css";
import logoDark from "../../assets/logo-dark.svg";

const NavbarOne = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light navigation-top">
            <div className="container">
                <div className="logo-container">
                    <a href="#">
                        <img className="img-fluid logo-navigation" src={logoDark} alt="logo dark" />
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/*  If this is other nav, show the lists  */}
                    </ul>

                    <div className="d-flex navigation-controls">
                        <span className="nav-controllers"><a href="#">Sign in</a></span>
                        <span><a href="#">Create an account</a></span>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default NavbarOne;