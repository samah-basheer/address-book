import './Styles.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [eyeIcon, setEyeIcon] = useState(false);

    const toggleEye = () => {
        setEyeIcon(!eyeIcon);
    }

    return <div className="bd">
        <div class="container">
            <div class="form login">
                <span class="title">Login</span>
                <form action="#" method="post">
                    <div class="input-field">
                        <input type="text" placeholder="Enter your email" id="email" name="email" required />
                        <i class="uil uil-envelope icon"></i>
                    </div>
                    <div class="input-field">
                        <input
                            type={eyeIcon ? 'text' : 'password'}
                            class="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                        <i class="uil uil-lock icon"></i>
                        <i className={eyeIcon ? 'uil uil-eye showHidePw' : 'uil uil-eye-slash showHidePw'} onClick={toggleEye}></i>
                    </div>
                    <div class="response">
                        <p class="login-response" id="status"></p>
                    </div>
                    <div class="input-field button">
                        <input type="button" id="login-btn" value="Login Now" />
                    </div>
                </form>
                <div class="login-signup">
                    <span class="text">Not a member?
                        <Link to="/register">
                            <a href="#" class="text signup-link">Signup now</a>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    </div>
}

export default Login;