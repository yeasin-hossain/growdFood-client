import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GrowContext } from '../../../context/GrowContext';

function Header() {
    const { isLoggedIn, setCurrentUser, setLoggedIn } = useContext(GrowContext);
    const history = useHistory();
    const logoutBtn = () => {
        localStorage.removeItem('growUser');
        setCurrentUser({});
        setLoggedIn(false);
        history.push('/auth');
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="nav-link " to="/">
                    Home
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/checkout">
                                Checkout
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            {isLoggedIn ? (
                                <button className="btn" type="button" onClick={logoutBtn}>
                                    Logout
                                </button>
                            ) : (
                                <Link className="nav-link " to="/auth">
                                    Login
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
