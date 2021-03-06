import React, {useState} from "react";
import "./AuthForms.css";
import "../FormElements/FormElements.css";
import NavbarOne from "../NavbarOne/NavbarOne";
import busImage from "../../assets/no-buses-found.svg";
import {Link, useNavigate, useLocation} from "react-router-dom";
import axios from "../../axios-omio-frontend";
import useAuth from '../../hooks/useAuth';

const LoginContainer = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [loginError, setLoginError] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const {login} = useAuth();

    const loginHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/users/auth/login', formData, {
                withCredentials: true, credentials: 'include'
            });
            if (response.status === 200) {
                login().then(() => {
                    navigate('/');
                }).catch((error) => {
                    console.log(error);
                });
            }

        } catch (error) {
            console.log(error.response.data);
            setLoginError(error.response.data);
        }

    };

    const inputChangedHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleCheckboxChecked = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <NavbarOne />
            <section className="auth-section">
                <div className="container">
                    <div className="row mb-5 p-2">
                        {/*<h1 className="text-center auth-title"><b>Sign in</b></h1>*/}
                        <div className="col-md-6 auth-image-container">
                            <img className="img-fluid" src={busImage} alt="bus-image-register" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 auth-form-container">
                            <div className="row p-2">
                                <div className="col-12">
                                    <h3 className="auth-title"><b>Sign in</b></h3>
                                    <form className="row g-3" onSubmit={loginHandler}>
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label custom-labels">You email address</label>
                                            <input onChange={inputChangedHandler} name="email" type="email" className="form-control custom-inputs" id="email" required/>
                                            {loginError.length !== 0 && <span className="text-danger small">{loginError}</span>}
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="password" className="form-label custom-labels">Your password</label>
                                            <input onChange={inputChangedHandler} name="password" type={showPassword ? 'text' : 'password'} className="form-control custom-inputs" id="password" required />
                                            {loginError.length !== 0 && <span className="text-danger small">{loginError}</span>}
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input onChange={handleCheckboxChecked} className="form-check-input custom-inputs-check" type="checkbox" value="" id="show-hide" />
                                                <label className="form-check-label custom-labels" htmlFor="show-hide">
                                                    Show password
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="default-button default-btn-full-width">Sign in</button>
                                        </div>
                                        <div className="col-12 text-center">
                                            <span>
                                                <Link className="forgot-password-text" to='/forgot-password'>I forgot my password</Link>
                                            </span>
                                        </div>
                                        <div className="col-12 text-center">
                                            <span className="register-status-text me-2">Don't have an account?</span>
                                            <span>
                                                <Link className="register-status-action" to='/register'>Create Account</Link>
                                            </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LoginContainer;