import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Home = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    useEffect(() => {
        !user && navigate("/login", { replace: true });
    }, [])
    return (<>
        This is home page
    </>);
};

export default Home;