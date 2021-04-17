/* eslint-disable react/no-array-index-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NewsLetter from './NewsLetter';

function NewsLetters() {
    const [allNewsLetters, setAllNewsLetters] = useState([]);
    const userData = JSON.parse(localStorage.getItem('growUser'));
    useEffect(() => {
        const getUserOrder = async () => {
            try {
                const fetchAllLetter = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/public/getNewsLetter`
                );
                setAllNewsLetters(fetchAllLetter.data);
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
