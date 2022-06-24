import './Navbar.css';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

import AuthContext from '../context/AuthContext';

const Navbar = ({ title = "CMS" }) => {
    const { user, setUser } = useContext(AuthContext);
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
            <Link to="/">
                <a className="navbar-brand" href="#">{title}</a>
            </Link>
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav">
                    {
                        user ?
                            <>
                                <li className="nav-item">
                                    <button className="logout-btn" onClick={() => {
                                        setUser(null);
                                        localStorage.clear();
                                    }}>Logout</button>
                                </li>
                            </> :
                            <>
                                <li className="nav-item">
                                    <Link to="/login">
                                        <a className="nav-link" href="#">Login</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register">
                                        <a className="nav-link" href="#">Register</a>
                                    </Link>
                                </li>
                            </>
                    }
                </ul>
            </div>
        </div>
    </nav>);
}
export default Navbar;