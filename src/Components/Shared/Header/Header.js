import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Pictures/logo2.png';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <NavLink to="/home">
                        <a className="navbar-brand">
                            <img src={logo} alt="Onion Logo" height="50px" />
                        </a>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link navbar-font-size" aria-current="page" href="#">
                                    <i class="fa-solid fa-cart-arrow-down "></i>
                                </a>
                            </li>
                            {user?.email ?
                                <a className="nav-link">
                                    <button className="btn btn-danger btn-rounded" onClick={logOut}>Log Out</button>
                                </a> :
                                <li className="nav-item ps-3 pe-3">
                                    <NavLink to="/login">
                                        <a className="nav-link navbar-font-size">Login</a>
                                    </NavLink>
                                </li>
                            }
                            <li className="nav-item">
                                <NavLink to="/login">
                                    <a className="nav-link">
                                        <button className="btn btn-danger btn-rounded">Sign Up</button>
                                    </a>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login">
                                    <a className="nav-link">Sign As: {user?.displayName}</a>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;