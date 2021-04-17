/* eslint-disable no-return-assign */
import React from 'react';
import Modal from 'react-modal';
import contactIcon from '../../Images/contact.svg';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
function Contact() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const contactStyles = {
        position: 'fixed',
        top: '50%',
        right: '3%',
        zIndex: '999999999',
    };
    return (
        <div style={contactStyles}>
            <button className="btn rounded-circle" onClick={openModal} type="button">
                <img src={contactIcon} alt="" style={{ height: '45px' }} />
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div>Email</div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                    />
                </div>
                <div>Write Your Query</div>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
                </div>
                <button className="btn btn-warning" type="button">
                    Submit
                </button>
                <button onClick={closeModal} type="button" className="btn btn-danger ms-5">
                    close
                </button>
            </Modal>
        </div>
    );
}

export default Contact;
