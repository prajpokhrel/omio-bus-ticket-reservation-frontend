import React from "react";
import "./NavbarTransparent.css";
import logoLight from "../../assets/logo-light.svg";

const NavbarTransparent = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light navigation-transparent-top">
            <div className="container">
                <div className="logo-transparent-container">
                    <a href="#">
                        <img className="img-fluid logo-navigation-transparent" src={logoLight} alt="logo light" />
                    </a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>

                    <div className="d-flex navigation-transparent-controls">
                        <span className="nav-transparent-controllers">Your bookings</span>
                        <span onClick={props.loginRegisterModalHandler} className="nav-transparent-controllers">Sign in</span>
                        <span onClick={props.loginRegisterModalHandler}>Create an account</span>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default NavbarTransparent;