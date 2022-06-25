import { useEffect, useState } from 'react';
import './Home.css';
import './AllContact.css';

const AllContact = () => {
    const [contacts, setContacts] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const handleSearchSubmit = event => {
        event.preventDefault();

        const newSearchUser = contacts.filter((contact) =>
            contact.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setContacts(newSearchUser);
    }


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

            {
                contacts.length === 0 ? (
                    <h5>No contacts created yet.</h5>
                ) : (
                    <>
                        <form className='form-flex' onSubmit={handleSearchSubmit}>
                            <div className='form-group'>
                                <input type='text' name='searchInput' id='searchInput' className='form-control' value={searchInput} onChange={
                                    (e) => setSearchInput(e.target.value)
                                } placeholder='Search Contact' />
                            </div>
                            <div className='submit-btn'>
                                <input type='submit' className='btn' value='Search' />
                            </div>
                        </form>
                        <p className='total'>Your total: <strong>{contacts.length}</strong></p>
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
                    </>
                )
            }

        </div>
    </>);
};

export default AllContact;