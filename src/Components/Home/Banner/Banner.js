import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <section className="banner-image d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="">
                    <h1>Best Food Waiting  for your Belly</h1>

                    <div className="d-flex search-box col-md-6 mx-auto mt-4">
                        
                        <input className="rounded-pill form-control from-design" placeholder="Search food items" type="search" aria-label="Search"></input>

                        <button className="search-btn btn btn-danger rounded-pill ps-4 pe-4">Search</button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;