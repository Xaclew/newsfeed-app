import { Link } from "react-router-dom";
import '../styles/Footer.css';


function Footer() {

  
    return (
      <nav className="footer">
        <ul>
          <li key="about">
            <Link to="/about">About</Link>
          </li>
          <li key="contact">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Footer;