import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';


function Registration(){

    const [userRegistration, setUserRegistration] = useState({
        fullName: "",
        email: "",
        contactNumber: "",
        address: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    //
    const generateRandomUsername = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };
    //
    const handleRegistrationChange = (e) => {
        setUserRegistration((prev) => ({...prev, [e.target.name]:e.target.value}));
    }

    //
    useEffect(() => {
        setUserRegistration(prevState => ({
            ...prevState,
            username: generateRandomUsername()
        }));
    }, [userRegistration.fullName, userRegistration.email, userRegistration.contactNumber, userRegistration.address]);
    //

    const handleRegistration = async (e) => {
        e.preventDefault();

        try {

            await axios.post("http://localhost:8800/users_informations", userRegistration);

            setUserRegistration({
                fullName: "",
                email: "",
                contactNumber: "",
                address: "",
                username: generateRandomUsername(),
                password: ""
            })

            document.body.classList.add('no-scroll');
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Account created successfully",
                showConfirmButton: false,
                timer: 1500,
                backdrop: 'static',
                allowOutsideClick: false
              }).then(() => {
                document.body.classList.remove('no-scroll');
              });



        }catch(error){
            console.log(error);
        }
    }


    return(
        <div className="registration-container">
            <div className="registration-form">
                <div className="left-registration-form">
                    <div className="upper-left">
                        <p className="welcome">Welcome!</p>
                        <p className="welcome-desc">Your new way to get your personal watch.</p>
                    </div>
                    <div className="middle-left">
                        <p className="middle-desc">Personal Information</p>
                        <p className="text-color input-desc-margin">Enter full name</p>
                        <input type="text" className="middle-input" name='fullName' value={userRegistration.fullName} onChange={handleRegistrationChange}/>
                        <p className="text-color input-desc-margin">Enter email address</p>
                        <input type="text" className="middle-input" name='email' value={userRegistration.email} onChange={handleRegistrationChange}/>
                        <p className="text-color input-desc-margin">Enter contact number</p>
                        <input type="tel" className="middle-input" name='contactNumber' value={userRegistration.contactNumber} onChange={handleRegistrationChange} onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) {
                                e.preventDefault();
                                alert('Please enter numbers only');
                            }else if(userRegistration.contactNumber.length >= 11){
                                e.preventDefault();
                                alert('Contact number should be 11 digits only');
                            }
                        }}/>
                        <p className="text-color input-desc-margin">Enter address</p>
                        <input type="text" className="middle-input" name='address' value={userRegistration.address} onChange={handleRegistrationChange}/>
                    </div>
                    <div className="lower-letf"></div>
                </div>
                <div className="right-registration-form">
                    <div className="upper-right">
                        <p className="text-color logDetails">LOGIN DETAILS</p>
                    </div>
                    <div className="middle-right">
                        <p className="text-color input-desc-margin">Username</p>
                        <input type="text" className="middle-input" name='username' value={userRegistration.username} onChange={handleRegistrationChange} readOnly/>
                        <p className="text-color input-desc-margin">Password</p>
                        <input type="password" className="middle-input" name='password' value={userRegistration.password} onChange={handleRegistrationChange}/>
                        <p className="text-color input-desc-margin">Confirm password</p>
                        <input type="password" className="middle-input" />
                    </div>
                    <div className="lower-right">
                        <button type='button' onClick={handleRegistration} className='registration-button'>Register Account</button>
                            <p className='text-color'>
                                Already have an account?
                                <Link to="/login">
                                    <button className='backToLogin'>Back</button>
                                </Link>
                            </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Registration;