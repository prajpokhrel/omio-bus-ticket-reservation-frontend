import React, {useState} from "react";
import "./AuthForms.css";
import "../FormElements/FormElements.css";
import NavbarOne from "../NavbarOne/NavbarOne";
import busImage from "../../assets/no-buses-found.svg";
import {Link, useNavigate} from "react-router-dom";
import axios from "../../axios-omio-frontend";

const RegisterContainer = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const registerHandler = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/users/auth/register', formData,
                {withCredentials: true, credentials: 'include'});
            console.log(response.data);
            // navigate to login
            // maybe with some sweet alert messages
            navigate('/login');
        } catch (error) {
            console.log(error.response.data);
            setError(error.response.data);
        }
    }

    const inputChangedHandler = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    const handleCheckboxChecked = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <NavbarOne />
            <section className="auth-section">
                <div className="container">
                    <div className="row mb-5 p-2">
                        {/*<h1 className="text-center auth-title"><b>Create an account</b></h1>*/}
                        <div className="col-md-6 auth-image-container">
                            <img className="img-fluid" src={busImage} alt="bus-image-register" />
                        </div>
                        <div className="col-md-6 auth-form-container">
                            <div className="row p-2">
                                <div className="col-12">
                                    <h3 className="auth-title"><b>Create an account</b></h3>
                                    <form className="row g-3" onSubmit={registerHandler}>
                                        <div className="col-lg-6">
                                            <label htmlFor="first-name" className="form-label custom-labels">First Name</label>
                                            <input onChange={inputChangedHandler} name="firstName" type="text" className="form-control custom-inputs" id="first-name" required/>
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="last-name" className="form-label custom-labels">Last Name</label>
                                            <input onChange={inputChangedHandler} name="lastName" type="text" className="form-control custom-inputs" id="last-name" required/>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label custom-labels">You email address</label>
                                            <input onChange={inputChangedHandler} name="email" type="email" className="form-control custom-inputs" id="email" required/>
                                            {error.length !== 0 && <span className="text-danger small">{error}</span>}
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="password" className="form-label custom-labels">Your password</label>
                                            <input onChange={inputChangedHandler} name="password" type={showPassword ? "text" : "password"} className="form-control custom-inputs" id="password" required/>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-check">
                                                <input onChange={handleCheckboxChecked} className="form-check-input custom-inputs-check" type="checkbox"  id="show-hide" />
                                                <label className="form-check-label custom-labels" htmlFor="show-hide">
                                                    Show password
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="default-button default-btn-full-width">Create Account</button>
                                        </div>
                                        <div className="col-12 text-center">
                                            <span className="register-status-text me-2">Already have an account?</span>
                                            <span>
                                                <Link className="register-status-action" to='/login'>Sign in</Link>
                                            </span>
                                        </div>
                                        <div className="col-12 text-center">
                                            <span className="privacy-policy">
                                                By creating an account you agree to our <span className="styled-text">Terms of Use </span>
                                                and <span className="styled-text">Privacy Policy.</span>
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

export default RegisterContainer;