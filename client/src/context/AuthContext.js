import { createContext, useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from "react-router-dom";
import ToastContext from "./ToastContext";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const {toast} = useContext(ToastContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        checkUserLoggedIn();
    }, []);

    // check if the user is logged in
    const checkUserLoggedIn = async () => {
        try {
            const res = await fetch(`http://localhost:8000/api/me`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const result = await res.json();
            if (!result.error) {
                if (
                    location.pathname === "/login" ||
                    location.pathname === "/register"
                ) {
                    setTimeout(() => {
                        navigate("/", { replace: true });
                    }, 500);
                } else {
                    navigate(location.pathname ? location.pathname : "/");
                }
                setUser(result);
            } else {
                navigate("/login", { replace: true });
            }
        } catch (err) {
            console.log(err);
        }
    };

    // login request
    const loginUser = async (userData) => {
        try {
            const res = await fetch(`http://localhost:8000/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...userData }),
            });
            const result = await res.json();
            if (!result.error) {
                console.log(result)
                localStorage.setItem('token', result.token);
                setUser(result.user);
            } else {
                toast.error(result.error);
            }
        } catch (err) {
            console.log(err);
        }
    }

    // register request
    const registerUser = async (userData) => {
        try {
            const res = await fetch(`http://localhost:8000/api/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...userData }),
            });
            const result = await res.json();
            if (!result.error) {
                console.log(result)
            } else {
                toast.error(result.error)
            }
        } catch (err) {
            console.log(err);
        }
    }

    return <AuthContext.Provider value={{ loginUser, registerUser, user, setUser }}>
        <ToastContainer autoClose={2000} />
        {children}
    </AuthContext.Provider>
}

export default AuthContext;