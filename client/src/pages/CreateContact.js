import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import ToastContext from '../context/ToastContext';

import './CreateContact.css';

const CreateContact = () => {
    const { toast } = useContext(ToastContext);
    const [userDetails, setUserDetails] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
    });
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleChange = event => {
        const { name, value } = event.target;
        setUserDetails({ ...userDetails, [name]: value })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const res = await fetch(`http://localhost:8000/api/contact`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(userDetails),
        });

        const result = await res.json();
        if (!result.error) {
            toast.success(`Created [${userDetails.name}] contact`);

            setUserDetails({ name: "", address: "", email: "", phone: "" });
        } else {
            toast.error(result.error);
        }
    }
    return (<>
        <div className='wrapper'>
            <h2>Create your contact</h2>
            <div className='contact-form'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Name of Person</label>
                        <input type='text' id='nameInput' name='name' placeholder='Enter name' value={userDetails.name} onChange={handleChange} required />
                    </div>
                    <div className='form-group'>
                        <label>Address of Person</label>
                        <input type='text' id='addressInput' name='address' placeholder='Enter address' value={userDetails.address} onChange={handleChange} required />
                    </div>
                    <div className='form-group'>
                        <label>Email of Person</label>
                        <input type='text' id='emailInput' name='email' placeholder='Enter email' value={userDetails.email} onChange={handleChange} required />
                    </div>
                    <div className='form-group'>
                        <label>Phone of Person</label>
                        <input type='text' id='phoneInput' name='phone' placeholder='Enter phone' value={userDetails.phone} onChange={handleChange} required />
                    </div>
                    <div className='form-group no-border'>
                        <label>Location of Person</label>
                    </div>
                    <div className='submit-btn'>
                        <input type='submit' value='Add Contact' className='btn' />
                    </div>
                </form>
            </div>
        </div>
    </>);
};

export default CreateContact;