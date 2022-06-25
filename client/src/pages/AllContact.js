import { useEffect, useState } from 'react';
import './Home.css';
import './AllContact.css';

const AllContact = () => {
    const [contacts, setContacts] = useState([

    ]);

    useEffect(async () => {
        try {
            const res = await fetch(`http://localhost:8000/api/mycontacts`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const result = await res.json();

            if (!result.error) {
                setContacts(result.contacts);
            } else {
                console.log(result);
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (<>
        <div className='wrapper'>
            <h2>Your Contacts</h2>
            <div className='spacer'></div>
            <div className='table-wrapper'>
                <table className="fl-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map(contact => (
                                <tr key={contact._id}>
                                    <td>{contact.name}</td>
                                    <td>{contact.address}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phone}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>);
};

export default AllContact;