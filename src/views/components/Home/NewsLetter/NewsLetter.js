import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function NewsLetter() {
    const [useEmail, setUserEmail] = useState('');
    const setNewLetter = async (e) => {
        e.preventDefault();
        try {
            if (useEmail) {
                const saveLetter = await axios.get(
                    `${process.env.REACT_APP_API_BASE_URL}api/public/NewsLetter/${useEmail}`
                );
                if (saveLetter.data) {
                    toast.success('Thanks For Subscribe Us');
                    setUserEmail('');
                }
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="bg-danger p-5 d-block  m-auto">
            <h3 className="text-center text-white mb-5">
                For Getting Our Hot Offers, Just Put your Email Here
            </h3>

            <div className="input-group mb-3 newsLetter">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Email@example.com"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={useEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <button className="btn-5 btn_custom" onClick={setNewLetter} type="submit">
                    Subscribe
                </button>
            </div>
        </div>
    );
}

export default NewsLetter;
