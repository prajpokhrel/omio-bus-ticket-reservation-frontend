import React from "react";
import "./NavbarOne.css";
import logoDark from "../../assets/logo-dark.svg";
import {Link} from "react-router-dom";

const NavbarOne = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light navigation-top">
            <div className="container">
                <div className="logo-container">
                    <Link to='/'>
                        <img className="img-fluid logo-navigation" src={logoDark} alt="logo dark" />
                    </Link>
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

                        <span className="nav-controllers">
                            <Link to='/login'>Sign in</Link>
                        </span>
                        <span>
                            <Link to='/register'>Create an account</Link>
                        </span>
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default NavbarOne;