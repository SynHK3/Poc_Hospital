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
        <div className="content__banner--appointment"></div>

        <div className="content--form--appointment">
          <div className="layout__content--submit--form--appointment"></div>
          <div className="container__form--submit--appointment"></div>

          <div className="container__shedule--appointment"></div>
        </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
