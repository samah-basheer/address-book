import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

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
                localStorage.setItem('token', result.token);
            } else {
                
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
                
            }
        } catch (err) {
            console.log(err);
        }
    }

    return <AuthContext.Provider value={{ loginUser, registerUser }}>
        <ToastContainer autoClose={2000} />
        {children}
    </AuthContext.Provider>
}

export default AuthContext;