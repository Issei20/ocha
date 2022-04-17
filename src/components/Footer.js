import React from "react"
import "./styles/footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const logoFooter = <FontAwesomeIcon className="logoIcon" icon={faLeaf} />
const locationDot = <FontAwesomeIcon className="locationDot" icon={faLocationDot} />
const iconTwitter = <FontAwesomeIcon className="iconFooter social" icon={faTwitter} />
const iconFacebook = <FontAwesomeIcon className="iconFooter social" icon={faFacebookF} />
const iconInsta = <FontAwesomeIcon className="iconFooter social" icon={faInstagram} />

const Footer = () => {

    return (
        <footer>
            <div className="footer-container">
            <h1>ocha {logoFooter} </h1>
            <div className="container-links">
            
            <div className="locationContainer">
            {locationDot}
            <p className="location">Lorem Ipsum</p>
                </div>
            <ul>
                <li>About Us</li>
                <li>Jobs</li>
                <li>Press</li>
                <li>Blog</li>
            </ul>
            <ul>
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
            </ul>
            <ul className="mediaUl">
                <li>Follow Us</li>
                <div className="mediaLogos">
                {iconTwitter}
                {iconFacebook}
                {iconInsta}
                </div>
            </ul>
            </div>
            </div>
        </footer>
    )

}

export default Footer;