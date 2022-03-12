import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className="Login-banner-image">
            <div className="container">
                <form >
                    <div className="form-group mt-5">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
                    </div>
                    <div className="form-group mt-3">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group mt-3">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group mt-3">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                    </div>
                   

                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;