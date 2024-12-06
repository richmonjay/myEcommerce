import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../image/logo.png';
import axios from 'axios'
import Swal from 'sweetalert2';

function RegisterAcc() {
    const [isRegister, setIsRegister] = useState(false);

    // for registration

    const [users, setUsers] = useState({

        f_name: "",
        l_name: "",
        email: "",
        password: "",
    });


    // for log in

    const [userLog, setUserLog] = useState({

        emailLog: "",
        passwordLog: ""
    })

    const handleSignUpClick = () => {
        setIsRegister(true);
    };

    const handleSignInClick = () => {
        setIsRegister(false);
    };

    const handleChange = (e) => {
        setUsers((prev) => ({...prev, [e.target.name]:e.target.value}))

        setUserLog((prev) => ({...prev, [e.target.name]:e.target.value}))
        
    }

    const handleClick = async(e) => {
        e.preventDefault();

        if (!users.f_name || !users.l_name || !users.email || !users.password) {           
            document.body.classList.add('no-scroll');
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Please fill all fields", 
                showConfirmButton: false,
                timer: 1500,
                backdrop: 'static',
                allowOutsideClick: false
              }).then(() => {
                document.body.classList.remove('no-scroll');
              });
            return;
        }

        try {

            await axios.post("http://localhost:8800/registered_accounts", users);

            setUsers({
                f_name: "",
                l_name: "",
                email: "",
                password: "",
            });

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

    const handleLog = async (e) => {
        e.preventDefault();
    
        try {
            const res = await axios.post("http://localhost:8800/register", userLog);
    
            if (res.data.success) {
                alert(`Hello ${res.data.f_name}`);
            } else {
                alert('Invalid login');
            }
        } catch (error) {
            console.log(error);
        }
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLog(e);
        }
    }

    return (
        <div className='register-container'>
            <div className="upper-register">
                <img src={Logo} alt="Logo" className='reg-logo' />               
            </div>

            {isRegister ? (
                <div className="registration-form">
                    <div className="upper-registration">
                        <input type="text" placeholder='First name' id="user-fname" name='f_name'  value={users.f_name} onChange={handleChange}/>
                        <input type="text" placeholder='Last name' id="user-lname" name='l_name'  value={users.l_name} onChange={handleChange}/>
                        <input type="text" placeholder='Email' id="user-email" name='email'  value={users.email} onChange={handleChange}/>
                        <input type="password" placeholder='Password' id="user-pass"  name='password'  value={users.password} onChange={handleChange}/>
                    </div>
                    <div className="middle-registration">
                        <button type='button' onClick={handleClick} className='accountLogButton'>REGISTER ACCOUNT</button>
                    </div>
                    <div className="lower-registration">
                        <p className='signFont'>Have account? <button className='accountSign signFont' onClick={handleSignInClick}>Sign in</button></p>
                    </div>
                </div>
            ) : (
                <div className="register-form">
                    <div className="upper-register">
                        <p className='log text-color'>Login</p>
                        <p className='text-color log-des'>Enter your email and password to login:</p>
                    </div>
                    <div className="middle-register">
                        <input type="text" placeholder='Email' id="userEmail" name="emailLog" value={userLog.emailLog} onChange={handleChange}/>
                        <input type="password" placeholder='Password' id="userPassword" name="passwordLog" value={userLog.passwordLog} onChange={handleChange} onKeyPress={handleKeyPress}/>
                    </div>
                    <div className="lower-register">
                        <button className='accountLogButton' onClick={handleLog}>LOGIN</button>
                        <p className='signFont'>Don't have account? <button className='accountSign signFont' onClick={handleSignUpClick}>Sign up</button></p>
                    </div>
                </div>
            )}
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    );
}

export default RegisterAcc;