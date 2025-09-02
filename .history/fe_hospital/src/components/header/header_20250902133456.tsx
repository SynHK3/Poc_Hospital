import Logo from "../../images/Logo.svg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="container__header">
      <div className="header__layout">
        <div className="header__headline">
          <Image src={Logo} width={125} height={42} alt=""></Image>
        </div>

        <div className="header__nav"></div>
      </div>
    </div>
  );
}
