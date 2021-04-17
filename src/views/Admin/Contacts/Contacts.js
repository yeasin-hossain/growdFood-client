/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Contact from './Contact';

function Contacts() {
    const [allContacts, setAllContacts] = useState([]);
    const userData = JSON.parse(localStorage.getItem('growUser'));
    useEffect(() => {
        const getUserOrder = async () => {
            try {
                const fetchAllContacts = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/public/getContact`
                );
                setAllContacts(fetchAllContacts.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUserOrder();
    }, [userData.token]);
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Query</th>
                        <th>Query Date</th>
                    </tr>
                </thead>
                <tbody>
                    {allContacts.map((contact, index) => (
                        <Contact key={index} contact={contact} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Contacts;
