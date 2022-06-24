import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

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
            const user = await res.json();
            console.log(user);

        } catch(err) {
            console.log(err);
        }
    }

    // register request

    return <AuthContext.Provider value={{loginUser}}>{children}</AuthContext.Provider>
}

export default AuthContext;