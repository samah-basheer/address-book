import './Styles.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthContext from '../context/AuthContext';

const Register = () => {
    const { registerUser } = useContext(AuthContext);
    const [eyeIcon, setEyeIcon] = useState(false);
    const [eyeIconConfirm, setEyeIconConfirm] = useState(false);

    const toggleEye = () => {
        setEyeIcon(!eyeIcon);
    }
    const toggleEyeConfrim = () => {
        setEyeIconConfirm(!eyeIconConfirm);
    }

    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setCredentials({ ...credentials, [name]: value });
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!credentials.name || !credentials.email || !credentials.password || !credentials.confirmPassword) {
            toast.error("Please enter all the required fields.");
            return;
        }

        if(credentials.password !== credentials.confirmPassword) {
            toast.error("Password do not match.");
            return;
        }

        const userData = {...credentials, confirmPassword: undefined}

        registerUser(userData);
    }

    return (
        <>
            <ToastContainer autoClose={2000} />
            <div className="bd">
                <div className="container">
                    <div className="form signup">
                        <span className="title">Registration</span>
                        <form onSubmit={handleSubmit}>
                            <div className="input-field">
                                <input type="text" placeholder="Enter your full name" value={credentials.name} onChange={handleInputChange} name="name" required />
                                <i className="uil uil-user"></i>
                            </div>
                            <div className="input-field">
                                <input type="text" placeholder="Enter your email" value={credentials.email} onChange={handleInputChange} name="email" id="user_email" required />
                                <i className="uil uil-envelope icon"></i>
                            </div>
                            <div className="input-field">
                                <input
                                    type={eyeIcon ? 'text' : 'password'}
                                    className="password"
                                    id="user_password"
                                    placeholder="Create a password"
                                    name="password"
                                    onChange={handleInputChange}
                                    value={credentials.password}
                                    required
                                />
                                <i className="uil uil-lock icon"></i>
                                <i className={eyeIcon ? 'uil uil-eye showHidePw' : 'uil uil-eye-slash showHidePw'} onClick={toggleEye}></i>
                            </div>
                            <div className="input-field">
                                <input
                                    type={eyeIconConfirm ? 'text' : 'password'}
                                    className="password"
                                    onChange={handleInputChange}
                                    id=""
                                    name="confirmPassword"
                                    value={credentials.confirmPassword}
                                    placeholder="Confirm password"
                                    required
                                />
                                <i className="uil uil-lock icon"></i>
                                <i className={eyeIconConfirm ? 'uil uil-eye showHidePw' : 'uil uil-eye-slash showHidePw'} onClick={toggleEyeConfrim}></i>
                            </div>
                            <div className="login-response" id="sign_status"></div>
                            <div className="input-field button">
                                <input type="submit" value="Login Now" id="signup_button" />
                            </div>
                        </form>
                        <div className="login-signup">
                            <span className="text">You're a member?
                                <Link to="/login">
                                    <a href="#" className="text login-link">Login Now</a>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;