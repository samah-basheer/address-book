import './Styles.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [eyeIcon, setEyeIcon] = useState(false);
    const [eyeIconConfirm, setEyeIconConfirm] = useState(false);

    const toggleEye = () => {
        setEyeIcon(!eyeIcon);
    }
    const toggleEyeConfrim = () => {
        setEyeIconConfirm(!eyeIconConfirm);
    }

    const [credentials, setCredentials] = useState({
        fname: "",
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
    }

    return <div className="bd">
        <div class="container">
            <div class="form signup">
                <span class="title">Registration</span>
                <form onSubmit={handleSubmit}>
                    <div class="input-field">
                        <input type="text" placeholder="Enter your full name" value={credentials.fname} onChange={handleInputChange} name="fname" id="name" required />
                        <i class="uil uil-user"></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Enter your email" value={credentials.email} onChange={handleInputChange} name="email" id="user_email" required />
                        <i class="uil uil-envelope icon"></i>
                    </div>
                    <div class="input-field">
                        <input
                            type={eyeIcon ? 'text' : 'password'}
                            class="password"
                            id="user_password"
                            placeholder="Create a password"
                            name="password"
                            onChange={handleInputChange}
                            value={credentials.password}
                            required
                        />
                        <i class="uil uil-lock icon"></i>
                        <i className={eyeIcon ? 'uil uil-eye showHidePw' : 'uil uil-eye-slash showHidePw'} onClick={toggleEye}></i>
                    </div>
                    <div class="input-field">
                        <input
                            type={eyeIconConfirm ? 'text' : 'password'}
                            class="password"
                            onChange={handleInputChange}
                            id=""
                            name="confirmPassword"
                            value={credentials.confirmPassword}
                            placeholder="Confirm password"
                            required
                        />
                        <i class="uil uil-lock icon"></i>
                        <i className={eyeIconConfirm ? 'uil uil-eye showHidePw' : 'uil uil-eye-slash showHidePw'} onClick={toggleEyeConfrim}></i>
                    </div>
                    <div class="login-response" id="sign_status"></div>
                    <div class="input-field button">
                        <input type="submit" value="Login Now" id="signup_button" />
                    </div>
                </form>
                <div class="login-signup">
                    <span class="text">You're a member?
                        <Link to="/login">
                            <a href="#" class="text login-link">Login Now</a>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
}

export default Register;