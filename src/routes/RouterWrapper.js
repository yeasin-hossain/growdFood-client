import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { authRoutes, privateRoutes, publicRoutes } from '.';
import PrivateRoutes from './PrivateRoutes';

function RouterWrapper() {
    return (
        <Router>
            <Suspense fallback={<div>...Loading</div>}>
                <Switch>
                    {privateRoutes.map((route, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <PrivateRoutes exact key={index} path={route.path}>
                            <route.component />
                        </PrivateRoutes>
                    ))}
                    {publicRoutes.map((route, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Route exact key={index} path={route.path}>
                            <route.component />
                        </Route>
                    ))}
                    {authRoutes.map((route, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <authRoutes exact key={index} path={route.path}>
                            <route.component />
                        </authRoutes>
                    ))}
                </Switch>
            </Suspense>
        </Router>
    );
}

export default RouterWrapper;
