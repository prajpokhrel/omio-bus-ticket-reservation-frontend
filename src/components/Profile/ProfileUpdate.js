import React, {useState, useEffect} from "react";
import "../BookingRetrieve/BookingRetrieve.css";
import retrieveBooking from "../../assets/email-tickets.svg";
import "../FormElements/FormElements.css";
import NavbarOne from "../NavbarOne/NavbarOne";
import axios from "../../axios-omio-frontend";
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";

const ProfileUpdate = () => {

    const [personalInfo, setPersonalInfo] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const { currentUser, refresh } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        setPersonalInfo({
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            email: currentUser.email
        });
    }, []);

    const inputChangeHandler = (event) => {
        setPersonalInfo({...personalInfo, [event.target.name]: event.target.value});
    }

    const handleUpdateBtnSubmit = (event) => {
        event.preventDefault();
        axios.patch(`/users/update/${currentUser.id}`, personalInfo, {
            withCredentials: true, credentials: 'include'
        }).then((response) => {
            refresh().then(() => {
                navigate('/profile');
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error.response);
        });
    }

    return (
        <>
            <NavbarOne />
            <section className="retrieve-booking">
                <div className="container">
                    <div className="row p-2">
                        <h1 className="booking-title"><b>Update Profile</b></h1>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-6 retrieve-container">
                            <div className="row">
                                <div className="col-12 mt-3">
                                    <form className="row g-3">
                                        <div className="col-lg-6">
                                            <label htmlFor="first-name" className="form-label custom-labels">First Name</label>
                                            <input onChange={inputChangeHandler} value={personalInfo.firstName} name="firstName" type="text" className="form-control custom-inputs" id="first-name" />
                                        </div>
                                        <div className="col-lg-6">
                                            <label htmlFor="last-name" className="form-label custom-labels">Last Name</label>
                                            <input onChange={inputChangeHandler} value={personalInfo.lastName} name="lastName" type="text" className="form-control custom-inputs" id="last-name" />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="email" className="form-label custom-labels">You email address</label>
                                            <input onChange={inputChangeHandler} value={personalInfo.email} name="email" type="email" className="form-control custom-inputs" id="email" />
                                        </div>
                                        <div className="col-12">
                                            <button onClick={handleUpdateBtnSubmit} className="default-button">Update profile</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-6 ticket-image-container">
                            <div className="ticket-image-div">
                                <img className="img-fluid" src={retrieveBooking} alt="email tickets" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProfileUpdate;