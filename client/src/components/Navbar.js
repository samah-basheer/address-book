import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ title = "CMS" }) => {
    return (<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <Link to="/">
                <a class="navbar-brand" href="#">{title}</a>
            </Link>
            <div class="collapse navbar-collapse" id="navbarColor01">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/login">
                            <a class="nav-link" href="#">Login</a>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/register">
                            <a class="nav-link" href="#">Register</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>);
}
export default Navbar;