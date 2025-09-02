import "./footer.css";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import LogoFooter from "../../images/Logo__Footer.png";
import { BsFillSendFill } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="container__footer">
      <div className="container__layout--footer">
        <ul className="list__footer--item">
          <li>
            <div>
              <Image src={LogoFooter} width={125} height={42} alt=""></Image>
              <h1 className="headline__footer">
                Leading the Way in Medical Execellence, Trusted Care.
              </h1>
            </div>
          </li>
          <li>
            <div>
              <h1 className="footer--item--headline">Important Links</h1>
              <ul className="list--item--footer--link">
                <li>Appointment</li>
                <li>Doctors</li>
                <li>Services</li>
                <li>About Us</li>
              </ul>
            </div>
          </li>

          <li>
            <div>
              <h1 className="footer--item--headline">Contact Us</h1>
              <ul className="list--item--footer--contact">
                <li>Call: (+254) 717 783 146</li>
                <li>Email: medin@gmail.com</li>
                <li>Address: 0123 Some place</li>
                <li>Some country</li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <h1 className="footer--item--headline">Newsletter</h1>
              <div>
                <input
                  className="input__footer--send--mail"
                  placeholder="Enter your email address"
                ></input>

                <BsFillSendFill className="footer__icon--send--mail"></BsFillSendFill>
              </div>
            </div>
          </li>
        </ul>

        <div className="footer--line"></div>

        <div className="footer--link--social">
          <h3>© 2022 MEDIN All Rights Reserved by knhs</h3>

          <ul className="list--icon--link--social">
            <li>
              <RiLinkedinFill></RiLinkedinFill>
            </li>
            <li>
              <FaFacebookF></FaFacebookF>
            </li>
            <li>
              <FaInstagram></FaInstagram>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
