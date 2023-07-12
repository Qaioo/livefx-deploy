import toggleNavBtn from './toggleNavBtn';
import hideNav from './toggleHide';

import './Navbar.css'

import { FaTwitter, FaInstagram, FaEnvelope, FaFacebook } from 'react-icons/fa6';

function Navbar() {

    const toBottom = () => {
        window.scrollTo(0, document.body.scrollHeight)
    }

    const doubleAction = () => {
        toBottom();
        hideNav();
    }

    return ( 
        <div className="navBody" id='navBar'>
            <div className='logo-box'>
                <h1 className="logoName">LiveFX</h1>
                <p className='logoSubName'>special effects</p>
            </div>

            <div href="" className='toggle-btn' onClick={toggleNavBtn}>
                <img src="socials/arrow-204-32.png" alt="arrow-down" className='arrow-icon'></img>
            </div>

            <div className="navList">
                <a className="nav-a" href="#home" onClick={hideNav}>HOME</a>
                <a className="nav-a" href="#customers" onClick={hideNav}>ZAUFALI NAM</a>
                <a className="nav-a" href="#gallery" onClick={hideNav}>GALERIA</a>
                <a className="nav-a" href="#gear" onClick={hideNav}>SPRZĘT</a>
                <a className="nav-a mobile-last" href="#contact" onClick={doubleAction}>KONTAKT</a>
            </div>

            <div className="socials">
                {/* <a className='socialIcons' href="#"><FaTwitter size="xs" color='white'/></a>
                <a className='socialIcons' href="#"><FaFacebook className='social-icon' size="xs" color='white'/></a> */}
                <a className='socialIcons' href="https://www.instagram.com/livefxpolska/?igshid=NjIwNzIyMDk2Mg%3D%3D&fbclid=IwAR2xodUvDxfpDWUrAAIYwge8vwLERZhglGbsc2ZDhwa7zUpIpkgWPYcUBB8">
                    <FaInstagram size="xs" color='white'/>
                </a>
                <a className='socialIcons' href="mailto:livefxpolska@gmail.com">
                    <FaEnvelope size="xs" color='white'/>
                </a>
            </div>
        </div>
     );
}

export default Navbar;