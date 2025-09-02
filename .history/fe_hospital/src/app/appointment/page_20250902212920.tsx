import Header from "@/components/header/header";
import "./appointment.css";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import ContentHeaderAppointMent from "./images/Content__Header__Appointment.png";

export default function Appointment() {
  return (
    <div>
      <Header></Header>
      <div className="container__content--appointment">
        <Image
          src={ContentHeaderAppointMent}
          width={100}
          height={100}
          alt=""
        ></Image>
        <div className="layout__content--appointment"></div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
