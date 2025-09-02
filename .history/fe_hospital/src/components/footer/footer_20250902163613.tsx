import "./footer.css";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Logo from "../../images/Logo.svg";

export default function Footer() {
  return (
    <div className="container__footer">
      <div className="container__layout--footer">
        <ul className="list__footer--item">
          <li>
            <div>
              <Image src={Logo} width={125} height={42} alt=""></Image>
              <h1></h1>
            </div>
          </li>
          <li></li>
          <li></li>
          <li></li>
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
