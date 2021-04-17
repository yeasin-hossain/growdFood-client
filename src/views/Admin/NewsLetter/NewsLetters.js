/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../../Spinner/Spinner';
import NewsLetter from './NewsLetter';

function NewsLetters() {
    const [allNewsLetters, setAllNewsLetters] = useState([]);
    const userData = JSON.parse(localStorage.getItem('growUser'));
    const [spinner, setSpinner] = useState(true);
    useEffect(() => {
        const getUserOrder = async () => {
            try {
                const fetchAllLetter = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/public/getNewsLetter`
                );
                setAllNewsLetters(fetchAllLetter.data);
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
                        <th>NewsLetter Date</th>
                    </tr>
                </thead>
                <tbody>
                    {allNewsLetters.map((contact, index) => (
                        <NewsLetter key={index} contact={contact} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NewsLetters;
