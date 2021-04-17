import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

function User({ user, updateStatus }) {
    const { role, email, fullName, ban, _id: id } = user;

    return (
        <tr>
            <td className="align-middle" data-label="Name">
                {fullName}
            </td>
            <td className="align-middle" data-label="Price">
                {email}
            </td>
            <td className="align-middle" data-label="Paid By">
                {role}
            </td>
            <td className="align-middle" data-label="Paid By">
                {ban ? 'True' : 'False'}
            </td>
            <td className="align-middle" data-label="Paid By">
                <DropdownButton id="dropdown-basic-button" title="User Role Or Ban">
                    {role === 'admin' ? (
                        <Dropdown.Item>
                            <button
                                type="button"
                                className="btn "
                                onClick={() =>
                                    updateStatus({ type: 'role', action: 'customer' }, id)
                                }
                            >
                                Make Customer
                            </button>
                        </Dropdown.Item>
                    ) : (
                        <Dropdown.Item>
                            <button
                                type="button"
                                className="btn "
                                onClick={() => updateStatus({ type: 'role', action: 'admin' }, id)}
                            >
                                Make Admin
                            </button>
                        </Dropdown.Item>
                    )}

                    {ban ? (
                        <Dropdown.Item>
                            <button
                                type="button"
                                className="btn "
                                onClick={() => updateStatus({ type: 'ban', action: false }, id)}
                            >
                                UnBan User
                            </button>
                        </Dropdown.Item>
                    ) : (
                        <Dropdown.Item>
                            <button
                                type="button"
                                className="btn "
                                onClick={() => updateStatus({ type: 'ban', action: true }, id)}
                            >
                                Ban User
                            </button>
                        </Dropdown.Item>
                    )}
                </DropdownButton>
            </td>
        </tr>
    );
}

export default User;
