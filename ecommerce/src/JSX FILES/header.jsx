import Logo from '../image/logo.png'
import Magnifying from '../image/magnifying.svg'

import { Link } from 'react-router-dom';

console.log(Logo);

function header() {

return (
    <div className="header-container">
        <div className="company-name">
            <img src={Logo} alt='Logo' className='company-logo' />
        </div>
        <div className="search-item">
            <div class="search-container">
            <img src={Magnifying} alt="Magnifying" class="magnifying" />
            <input type="text" placeholder='Search watches worldwide' id="search"/>
            </div>
        </div>
        <div className="register">
            
           <Link to = "/login"  className='Link'>
            <button className='log-button'><i class="fa-regular fa-user profile"></i> Log in or Sign up</button>
           </Link> 
            
        </div>
    </div>
)
}

export default header;