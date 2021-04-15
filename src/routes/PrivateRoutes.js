import React from 'react';
import { isExpired } from 'react-jwt';
import { Redirect, Route } from 'react-router';

function PrivateRoutes({ children, ...rest }) {
    const user = JSON.parse(localStorage.getItem('growUser'));
    const isMyTokenExpired = isExpired(user?.token);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                // eslint-disable-next-line no-constant-condition
                !isMyTokenExpired ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/auth',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoutes;
