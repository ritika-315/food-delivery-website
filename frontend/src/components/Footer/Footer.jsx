import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quo tempore illum eligendi, esse corrupti omnis hic numquam blanditiis magnam earum. Totam vel sed inventore similique, quos blanditiis veniam deserunt?</p>
            <div className="footer-social-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src={assets.facebook_icon} alt="Facebook" /></a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                <img src={assets.twitter_icon} alt="Twitter" /></a>
                <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src={assets.linkedin_icon} alt="Linkedin" /></a>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyright">Copyright 2024 &copy; Tomato.com -All Right Reserved.</p>
    </div>
  )
}

export default Footer
