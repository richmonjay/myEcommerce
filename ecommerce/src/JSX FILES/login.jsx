import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Logo from '../image/logo.png';
import axios from 'axios';

function Login() {
    const [userLogin, setUserLogin] = useState({
        emailLogin: "",
        passwordLogin: ""
    });

    const navigate = useNavigate();

    const handleLoginChange = (e) => {
        setUserLogin((prev) => ({...prev, [e.target.name]:e.target.value}));
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8800/login', userLogin);
    
            console.log(response.data); 
    
            if (response.data.success) {
                navigate('/homepage');
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.log(error);
            alert('An error occurred while logging in. Please try again.');
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin(e);
        }
    }
  
    return (
        <div className='login-container'>
            <div className="login-form">
                <div className="login-logo">
                    <Link to="/">
                    <img src={Logo} alt="Logo" className='logo-css'/>
                    </Link>
                </div>

                <div className="loginInput">
                    <div className="upperLog">
                        <p className='p-log'>Login</p>
                        <p className='log-desc'>Enter your email and password to login:</p>
                    </div>
                    <div className="lowerLog">
                        <input type="text" placeholder='Email' className='login-input' name='emailLogin' value={userLogin.emailLogin} onChange={handleLoginChange}/>
                        <input type="password" placeholder='Password' className='login-input' name='passwordLogin' value={userLogin.passwordLogin} onChange={handleLoginChange} onKeyPress={handleKeyPress}/>
                    </div>
                </div>

                <div className="login-button">
                    <button className='loginButton-css' onClick={handleLogin}>LOGIN</button>
                    <p className='createAccount-css'>Don't have an account?
                        <Link to="/registration">
                            <motion.button
                                className='createAccount-css createAccount-button'
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Sign up
                            </motion.button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;