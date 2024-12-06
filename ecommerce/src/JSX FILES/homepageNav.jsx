import React, { useState } from 'react';
import { Link} from 'react-router-dom';

function HomepageNav() {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className="homepageNavContainer">
            <div className="left-homeNav">
                <i className="fa-regular fa-clock">JAYTIMEPIECES</i>
            </div>
            <div className="middle-homeNav">
                <button className='homeNavButton'>Watches</button>
                <button className="homeNavButton">Men</button>
                <button className='homeNavButton'>Women</button>
            </div>
            <div className="right-homeNav">
                <button
                    className={`userLikeItem ${isLiked ? 'liked' : ''}`}
                    onClick={handleLikeClick}
                >
                    <i className="fa-regular fa-heart"></i>
                </button>
                <Link to="/login">
                <button className='userButton'><i className="fa-regular fa-user"></i></button>
                </Link>
                <button className='userCartButton'><i className="fa-solid fa-bag-shopping"></i></button>
                
            </div>
        </div>
    );
}

export default HomepageNav;