import React from 'react';

function Contact({ contact }) {
    const { userEmail, query, createdAt } = contact;
    const date = new Date(createdAt).toISOString().slice(0, 10);
    return (
        <tr>
            <td className="align-middle" data-label="Email">
                {userEmail}
            </td>
            <td className="align-middle" data-label="Query">
                {query}
            </td>
            <td className="align-middle" data-label="Date">
                {date}
            </td>
        </tr>
    );
}

export default Contact;
