import Logo from "../../images/Logo.svg";
import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsClock } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import "./header.css";

export default function Header() {
  return (
    <div className="container__header">
      <div className="header__layout">
        <div className="header__headline">
          <Image src={Logo} width={125} height={42} alt=""></Image>

          <div className="header__headline--info">
            <div className="header__headline--info--item">
              <BiPhoneCall className="icon__info--item"></BiPhoneCall>

              <div className="header__headline--info--desc">
                <h3>EMERGENCY</h3>
                <h5>(+254) 717 783 146</h5>
              </div>
            </div>

            <div className="header__headline--info--item">
              <BsClock className="icon__info--item"></BsClock>

              <div className="header__headline--info--desc">
                <h3>EMERGENCY</h3>
                <h5>(+254) 717 783 146</h5>
              </div>
            </div>

            <div className="header__headline--info--item">
              <BiPhoneCall className="icon__info--item"></BiPhoneCall>

              <div className="header__headline--info--desc">
                <h3>EMERGENCY</h3>
                <h5>(+254) 717 783 146</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="header__nav">
          <div className="layout__header--nav">
            <ul className="header__list--nav">
              <li>Home</li>
              <li>About Us</li>
              <li>Services </li>
              <li>Doctors </li>
              <li>News </li>
              <li>Contact</li>
            </ul>

            <div className="header__nav--appoinment">
              <FaMagnifyingGlass fontSize={30}></FaMagnifyingGlass>

              <button className="header__btn--appointment">Appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
