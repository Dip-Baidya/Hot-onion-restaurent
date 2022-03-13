import React from 'react';
import img_not_found from '../../Pictures/404.png';

const NotFound = () => {
    return (
        <div className="container">
            <img src={img_not_found}></img>
        </div>
    );
};

export default NotFound;