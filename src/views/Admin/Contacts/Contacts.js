/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../../Spinner/Spinner';
import Contact from './Contact';

function Contacts() {
    const [allContacts, setAllContacts] = useState([]);
    const userData = JSON.parse(localStorage.getItem('growUser'));
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        const getUserOrder = async () => {
            try {
                const fetchAllContacts = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/public/getContact`
                );
                setAllContacts(fetchAllContacts.data);
                setSpinner(false);
            } catch (err) {
                console.log(err);
            }
        };
        getUserOrder();
    }, [userData.token]);
    return (
        <div>
            {spinner && <Spinner />}
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
