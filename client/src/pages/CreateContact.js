import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

import './CreateContact.css';

const CreateContact = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    return (<>
        <div className='wrapper'>
            <h2>Create your contact</h2>
            <div className='contact-form'>
                <form>
                    <div className='form-group'>
                        <label>Name of Person</label>
                        <input type='text' id='nameInput' name='name' placeholder='Enter name' required />
                    </div>
                    <div className='form-group'>
                        <label>Address of Person</label>
                        <input type='text' id='addressInput' name='address' placeholder='Enter address' required />
                    </div>
                    <div className='form-group'>
                        <label>Email of Person</label>
                        <input type='text' id='emailInput' name='email' placeholder='Enter email' required />
                    </div>
                    <div className='form-group'>
                        <label>Phone of Person</label>
                        <input type='text' id='phoneInput' name='phone' placeholder='Enter phone' required />
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