import React from 'react';

import useAuth from '../../Hooks/useAuth';

import { NavLink } from 'react-router-dom';


import './Login.css'

const Login = () => {
    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, error, processLogin, handleResetPassword } = useAuth();

    return (

        <div className="Login-banner-image ">
            <div className="container text-center">

                <form onClick={processLogin}>

                    <div className="form-group mt-3">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                    </div>

                    <div className="form-group mt-3">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                    </div>

                    <p className="text-danger">{error}</p>

                    <button type="submit" className="btn btn-danger mt-3  w-25 ms-3">Log In</button>
                    <button onClick={handleResetPassword} type="submit" className="btn btn-primary mt-3  w-25 ms-3">Reset Password</button>

                    <div className="text-center mt-2">
                        <NavLink to="/register">
                            <a className="text-danger btn" >Red Onion Restaurant? Create A New Account</a>
                        </NavLink>
                    </div>

                </form>

                <button onClick={signInUsingGoogle} className="btn btn-warning mt-3 ms-3 w-25">Google Sign In</button>

            </div>

        </div>
    );
};

export default Login;