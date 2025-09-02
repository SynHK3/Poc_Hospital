import "./contact.css";

import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuMail } from "react-icons/lu";
import { BsClock } from "react-icons/bs";

export default function Contact() {
  return (
    <div className="container__contact">
      <div className="container__layout--contact">
        <div className="content__contact--headline">
          <h6>GET IN TOUCH</h6>
          <h1>Contact</h1>
        </div>

        <ul className="content__list--contact">
          <li>
            <div className="contact--item">
              <BiPhoneCall className="contact__item--icon"></BiPhoneCall>
              <h1>EMERGENCY</h1>
              
                <h3>dnx@gmil.com</h3>
                <h3>dnx@gmil.com</h3>
              </div>
            </div>
          </li>
          <li>
            <div className="contact--item">
              <MdOutlineLocationOn className="contact__item--icon"></MdOutlineLocationOn>
              <h1>LOCATION</h1>
             
                <p>dnx@gmil.com</p>
                <p>dnx@gmil.com</p>
              
            </div>
          </li>
          <li>
            <div className="contact--item">
              <LuMail className="contact__item--icon"></LuMail>
              <h1>EMAIL</h1>

              <p>dnx@gmil.com</p>
              <p>dnx@gmil.com</p>
            </div>
          </li>
          <li>
            <div className="contact--item">
              <BsClock className="contact__item--icon"></BsClock>
              <h1 className="headline--item">WORKING HOURS</h1>

              <p>dnx@gmil.com</p>
              <p>dnx@gmil.com</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
