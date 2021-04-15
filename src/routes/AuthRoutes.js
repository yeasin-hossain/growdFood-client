/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function PublicRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                // eslint-disable-next-line no-constant-condition
                false ? (
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

export default PublicRoute;
