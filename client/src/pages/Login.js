import './Styles.css';

const Login = () => {
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
                            type="password"
                            class="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                        <i class="uil uil-lock icon"></i>
                        <i class="uil uil-eye-slash showHidePw"></i>
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
                        <a href="#" class="text signup-link">Signup now</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
}

export default Login;