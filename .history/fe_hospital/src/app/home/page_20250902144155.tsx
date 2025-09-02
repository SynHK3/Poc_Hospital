import Header from "@/components/header/header";
import Image from "next/image";
import IntroDuce from "./images/home_introduce.png";
import Calendar from "./images/home__calendar.png";
import Teams from "./images/home_teams.png";
import Cash from "./images/home_cash.png";

import "./home.css";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="relative w-full h-[83vh] mt-1 ">
        <Image src={IntroDuce} alt="Logo" fill className="object-cover" />
        <div className="container__content--home">
          <div className="layout--content--home">
            <div className="content__btn--future--item">
              <h1>Book An Appointment</h1>

              <Image src={Calendar} width={50} height={50} alt=""></Image>
            </div>

            <div className="content__btn--future--item content__btn--future--item--teams">
              <h1>Book An Appointment</h1>

              <Image src={Teams} width={50} height={50} alt=""></Image>
            </div>

            <div className="content__btn--future--item">
              <h1>Book An Appointment</h1>

              <Image src={Cash} width={50} height={50} alt=""></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
