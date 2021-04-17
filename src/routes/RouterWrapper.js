/* eslint-disable react/no-array-index-key */
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { authRoutes, privateRoutes, publicRoutes } from '.';
import Header from '../views/components/Header/Header';
import Contact from '../views/Contact/Contact';
import Footer from '../views/Footer/Footer';
import Spinner from '../views/Spinner/Spinner';
import AuthRoutes from './AuthRoutes';
import PrivateRoutes from './PrivateRoutes';

function RouterWrapper() {
    return (
        <Router>
            <Suspense fallback={<Spinner />}>
                <Header />
                <Contact />
                <Switch>
                    {privateRoutes.map((route, index) => (
                        <PrivateRoutes exact key={index} path={route.path}>
                            <route.component />
                        </PrivateRoutes>
                    ))}
                    {publicRoutes.map((route, index) => (
                        <Route exact key={index} path={route.path}>
                            <route.component />
                        </Route>
                    ))}
                    {authRoutes.map((route, index) => (
                        <AuthRoutes exact key={index} path={route.path}>
                            <route.component />
                        </AuthRoutes>
                    ))}
                </Switch>
                <Footer />
            </Suspense>
        </Router>
    );
}

export default RouterWrapper;
