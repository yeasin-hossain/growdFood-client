import React from 'react';

function NewsLetter() {
    return (
        <div className="bg-danger p-5 d-block  m-auto">
            <h3 className="text-center text-white mb-5">
                For Getting Our Hot Offers, Just Put your Email Here
            </h3>

            <div className="input-group mb-3 ">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Email@example.com"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <button className="btn-5 btn_custom" type="button">
                    Subscribe
                </button>
            </div>
        </div>
    );
}

export default NewsLetter;
