import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
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
    const { role, name } = currentUser;
    return (
        <Navbar bg="light" expand="lg" className="sticky-top">
            <Navbar.Brand href="#home">
                <Link
                    className="nav-link "
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Logo"
                    to="/"
                >
                    <img src={Logo} alt="" className="img-fluid" style={{ width: '50px' }} />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
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
                    </Nav.Link>
                    <Nav.Link>
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
                    </Nav.Link>
                    <Nav.Link>
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
                    </Nav.Link>
                    {name && <p className="text-danger m-3">{name}❤</p>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
