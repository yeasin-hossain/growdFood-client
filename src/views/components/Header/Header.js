import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GrowContext } from '../../../context/GrowContext';
import dashboardIcon from '../../../Images/dashboard.svg';
import logoutIcon from '../../../Images/exit.svg';
import HomeIcon from '../../../Images/home.svg';
import loginIcon from '../../../Images/join.svg';
import Logo from '../../../Images/order-food.svg';
import ProfileIcon from '../../../Images/profile.svg';

function Header() {
    const { isLoggedIn, setCurrentUser, setLoggedIn, currentUser } = useContext(GrowContext);
    const history = useHistory();
    const logoutBtn = () => {
        localStorage.removeItem('growUser');
        setCurrentUser({});
        setLoggedIn(false);
        history.push('/');
    };
    const { role } = currentUser;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top px-5">
            <div className="container-fluid">
                <Link
                    className="nav-link "
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Logo"
                    to="/"
                >
                    <img src={Logo} alt="" className="img-fluid" style={{ width: '50px' }} />
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
                            <Link
                                className="nav-link mx-3"
                                data-bs-toggle="tooltip"
                                data-bs-placement="bottom"
                                title="Home"
                                to="/"
                            >
                                <img
                                    src={HomeIcon}
                                    alt=""
                                    className="img-fluid"
                                    style={{ width: '30px' }}
                                />
                            </Link>
                        </li>
                        <li className="nav-item">
                            {role === 'admin' ? (
                                <Link
                                    className="nav-link mx-3"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    title="Profile"
                                    to="/admin/orders"
                                >
                                    <img
                                        src={dashboardIcon}
                                        alt=""
                                        className="img-fluid"
                                        style={{ width: '30px' }}
                                    />
                                </Link>
                            ) : (
                                <Link
                                    className="nav-link mx-3"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    title="DashBoard"
                                    to="/user/order"
                                >
                                    <img
                                        src={ProfileIcon}
                                        alt=""
                                        className="img-fluid"
                                        style={{ width: '30px' }}
                                    />
                                </Link>
                            )}
                        </li>

                        <li className="nav-item">
                            {isLoggedIn ? (
                                <button
                                    className="btn"
                                    type="button"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    title="Logout"
                                    onClick={logoutBtn}
                                >
                                    <img
                                        src={logoutIcon}
                                        alt=""
                                        className="img-fluid"
                                        style={{ width: '40px' }}
                                    />
                                </button>
                            ) : (
                                <Link
                                    className="nav-link "
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="bottom"
                                    title="Login"
                                    to="/auth"
                                >
                                    <img
                                        src={loginIcon}
                                        alt=""
                                        className="img-fluid"
                                        style={{ width: '40px' }}
                                    />
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
