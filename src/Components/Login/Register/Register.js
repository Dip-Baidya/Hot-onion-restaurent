import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const { handleNameChange, handleEmailChange, handlePasswordChange, error, registerNewUser,handleRegistration } = useAuth();
    return (
        <div className="Login-banner-image ">
            <div className="container text-center">

                <form onClick={handleRegistration}>
                    <div className="form-group mt-5">
                        <input onBlur={handleNameChange} type="text" className="form-control" placeholder="Name" required />
                    </div>

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
                    <button type="submit" className="btn btn-danger mt-3  w-25 ms-3"> Register</button>

                    <div className="text-center mt-2">
                        <NavLink to="/login">
                            <a className="text-danger btn" >Already Have an Account..?</a>
                        </NavLink>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Register;