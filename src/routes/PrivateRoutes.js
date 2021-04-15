import React from 'react';
import { Redirect, Route } from 'react-router';

function PrivateRoutes({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                // eslint-disable-next-line no-constant-condition
                true ? (
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
