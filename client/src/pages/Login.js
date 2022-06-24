import './Styles.css';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../context/AuthContext';
import ToastContext from '../context/ToastContext';

const Login = () => {
    const { toast } = useContext(ToastContext);
    const { loginUser } = useContext(AuthContext);
    const [eyeIcon, setEyeIcon] = useState(false);

    const toggleEye = () => {
        setEyeIcon(!eyeIcon);
    }

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setCredentials({ ...credentials, [name]: value });
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!credentials.email || !credentials.password) {
            toast.error("Please enter all the required fields.");
            return;
        }

        loginUser(credentials);

    }

    return (
        <>
            <div className="bd">
                <div class="container">
                    <div class="form login">
                        <span class="title">Login</span>
                        <form onSubmit={handleSubmit}>
                            <div class="input-field">
                                <input type="text" placeholder="Enter your email" id="email" name="email" value={credentials.email} onChange={handleInputChange} required />
                                <i class="uil uil-envelope icon"></i>
                            </div>
                            <div class="input-field">
                                <input
                                    type={eyeIcon ? 'text' : 'password'}
                                    class="password"
                                    id="password"
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleInputChange}
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
                                <input type="submit" id="login-btn" value="Login Now" />
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
        </>
    );
}

export default Login;