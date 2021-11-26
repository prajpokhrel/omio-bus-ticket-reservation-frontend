import React, {useState} from "react";
import "./NavbarTransparent.css";
import logoLight from "../../assets/logo-light.svg";
import {Link} from "react-router-dom";

const NavbarTransparent = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light navigation-transparent-top">
                <div className="container">
                    <div className="logo-transparent-container">
                        <Link to='/'>
                            <img className="img-fluid logo-navigation-transparent" src={logoLight} alt="logo light" />
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>

                        <div className="d-flex navigation-transparent-controls">
                        <span className="nav-transparent-controllers">
                            <Link className="nav-transparent-link" to='/booking-retrieve'>
                                Your bookings
                            </Link>
                        </span>
                            <span className="nav-transparent-controllers">
                                <Link className="nav-transparent-link" to='/login'>Sign in</Link>
                            </span>
                            <span>
                                <Link className="nav-transparent-link" to='/register'>Create an account</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavbarTransparent;