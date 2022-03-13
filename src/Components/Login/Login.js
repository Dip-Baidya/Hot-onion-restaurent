import React from 'react';
import useAuth from '../../Hooks/useAuth';

import './Login.css'

const Login = (props) => {
    const { signInUsingGoogle, user } = useAuth();
    

    return (
        <div className="Login-banner-image">
            <div className="container">
               
                <form>
                    <div className="form-group mt-5">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                    </div>

                    <div className="form-group mt-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>

                    <div className="form-group mt-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    
                    <div className="form-group mt-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                    </div>


                    <button type="submit" className="btn btn-primary mt-3">Sign Up</button>
                    
                </form>
                <button onClick={signInUsingGoogle} className="btn btn-warning mt-3 ms-3" >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;