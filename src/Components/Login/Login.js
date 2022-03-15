import React from 'react';

import useAuth from '../../Hooks/useAuth';

import './Login.css'

const Login = (props) => {
    const { signInUsingGoogle, handleNameChange, handleEmailChange, handlePasswordChange, registerNewUser, error } = useAuth();

    return (

        <div className="Login-banner-image ">
            <div className="container text-center">

                <form onClick={registerNewUser}>
                    {/* <div className="form-group mt-5">
                        <input onChange={handleNameChange} type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" required />
                    </div> */}

                    <div className="form-group mt-3">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                    </div>

                    <div className="form-group mt-3">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                    </div>

                    {/* <div className="form-group mt-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" required />
                    </div> */}
                    <p className="text-danger">{error}</p>
                    <button type="submit" className="btn btn-danger mt-3  w-25 ms-3">Sign Up</button>

                </form>

                <button onClick={signInUsingGoogle} className="btn btn-warning mt-3 ms-3 w-25">Google Sign In</button>

            </div>

        </div>
    );
};

export default Login;