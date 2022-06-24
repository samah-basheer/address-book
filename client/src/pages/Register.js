import './Styles.css';

const Register = () => {
    return <div className="bd">
        <div class="container">
            <div class="form signup">
                <span class="title">Registration</span>
                <form action="#" method="post">
                    <div class="input-field">
                        <input type="text" placeholder="Enter your first name" id="first_name" required />
                        <i class="uil uil-user"></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Enter your last name" id="last_name" required />
                        <i class="uil uil-user"></i>
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="Enter your email" id="user_email" required />
                        <i class="uil uil-envelope icon"></i>
                    </div>
                    <div class="input-field">
                        <input
                            type="password"
                            class="password"
                            id="user_password"
                            placeholder="Create a password"
                            required
                        />
                        <i class="uil uil-lock icon"></i>
                        <i class="uil uil-eye-slash showHidePw"></i>
                    </div>
                    <div class="login-response" id="sign_status"></div>
                    <div class="input-field button">
                        <input type="button" value="Login Now" id="signup_button" />
                    </div>
                </form>
                <div class="login-signup">
                    <span class="text">You're a member?
                        <a href="#" class="text login-link">Login Now</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
}

export default Register;