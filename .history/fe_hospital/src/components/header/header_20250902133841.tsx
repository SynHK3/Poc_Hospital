import Logo from "../../images/Logo.svg";
import Image from "next/image";
import { BiPhoneCall } from "react-icons/bi";

export default function Header() {
  return (
    <div className="container__header">
      <div className="header__layout">
        <div className="header__headline">
          <Image src={Logo} width={125} height={42} alt=""></Image>

          <div className="header__headline--info">
            <div className="header__headline--info--item">
              <BiPhoneCall></BiPhoneCall>
              
            </div>
          </div>
        </div>

        <div className="header__nav"></div>
      </div>
    </div>
  );
}
