import React from "react";
import "./NavbarOne.css";
import logoDark from "../../assets/logo-dark.svg";
import {Link, useNavigate} from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const NavbarOne = () => {

    const { authed, logout, currentUser } = useAuth();
    const navigate = useNavigate();

    const handleCustomerLogout = () => {
        logout();
        navigate('/');
    }

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
                            <Link  to='/booking-retrieve'>
                                Your bookings
                            </Link>
                        </span>
                        {
                            authed
                                ? <div className="dropdown">
                                    <a className="dropdown-toggle" href="#" role="button"
                                       id="dropdownMenuLink" data-bs-toggle="dropdown">
                                        Welcome, {currentUser.firstName.toLowerCase()}
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><span className="dropdown-item"><Link to="/profile">My profile</Link></span></li>
                                        <li><span className="dropdown-item"><Link to="/profile/update">Update info</Link></span></li>
                                        <li><span className="dropdown-item"><Link to="/profile/change-password">Settings</Link></span></li>
                                        <li><span className="dropdown-item">Logout</span></li>
                                    </ul>
                                </div>
                                : <>
                                    <span className="nav-controllers">
                                        <Link to='/login'>Sign in</Link>
                                    </span>
                                    <span>
                                        <Link to='/register'>Create an account</Link>
                                    </span>
                                </>
                        }
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default NavbarOne;