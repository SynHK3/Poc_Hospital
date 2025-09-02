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
                <div className="container--item--email">
                    
                </div>
            </div>
          </li>
          <li>
            <div className="contact--item">
              <MdOutlineLocationOn className="contact__item--icon"></MdOutlineLocationOn>
                <div className="container--item--email">
                    
                </div>
            </div>
          </li>
          <li>
            <div className="contact--item">
              <LuMail className="contact__item--icon"></LuMail>
                <div className="container--item--email">
                    
                </div>
            </div>
          </li>
          <li>
            <div className="contact--item">
              <BsClock className="contact__item--icon"></BsClock>
                <div className="container--item--email">
                    
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
