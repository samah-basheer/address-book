import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    useEffect(() => {
        !user && navigate("/login", { replace: true });
    }, [])
    return (<>
        <div className='wrapper'>
            <h2>Welcome <span className='user-name'>{user ? user.name : null }</span></h2>
            <div className='spacer'></div>
            <div>
                <a className='btn' href=''>Add Contacts</a>
            </div>
        </div>
    </>);
};

export default Home;