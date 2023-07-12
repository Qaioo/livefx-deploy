import { FaTwitter, FaInstagram, FaEnvelope, FaFacebook } from 'react-icons/fa6';

import "./Contact.css"

function Contact() {
    return ( 
        <div className="contact">

            <div className="email-box icon-box info-box">
                <img className="icon-filler email-icon" src='contact-icons/email.png'></img>
                <p>livefxpolska@gmail.com</p>
            </div>
            
            <div className="phone-box icon-box info-box">
                <img className="icon-filler phone-icon" src='contact-icons/smartphone-call.png'></img>
                <p className="phone-number">+48 692 088 906</p>
            </div>

            <div className="adress-box info-box">
                <p>Live Lab Tomasz Łysiak</p>
                <p>Ul. Torowa 27 B</p>
                <p>46-073 Mechnice</p>
                <p>VAT PL 753 232 25 12</p>
            </div>

            <div className="socials-contact info-box">
                {/* <a className='socialIcons-contact' href="#"><FaTwitter size="xs" color='white'/></a>
                <a className='socialIcons-contact' href="#"><FaFacebook size="xs" color='white'/></a> */}
                <a className='socialIcons-contact' href="https://www.instagram.com/livefxpolska/?igshid=NjIwNzIyMDk2Mg%3D%3D&fbclid=IwAR2xodUvDxfpDWUrAAIYwge8vwLERZhglGbsc2ZDhwa7zUpIpkgWPYcUBB8">
                    <FaInstagram size="xs" color='white'/>
                </a>
                <a className='socialIcons-contact' href="mailto:livefxpolska@gmail.com">
                    <FaEnvelope size="xs" color='white'/>
                </a>
            </div>

        </div>
     );
}

export default Contact;