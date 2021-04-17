import React from 'react';
import { Redirect, Route } from 'react-router';

function AdminRoutes({ children, ...rest }) {
    const user = JSON.parse(localStorage.getItem('growUser'));
    const adminRole = user?.role;
    return (
        <Route
            {...rest}
            render={({ location }) =>
                // eslint-disable-next-line no-constant-condition
                adminRole === 'admin' ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default AdminRoutes;
