import Header from "@/components/header/header";
import Image from "next/image";
import IntroDuce from "./images/home_introduce.png";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="relative w-full h-[81vh] ">
        {" "}
        <Image src={IntroDuce} alt="Logo" fill className="object-cover" />{" "}
        <div className="container__content--home">
          {" "}
          <div className="content__btn--future--item">
            {" "}
            <h1>Book An Appointment</h1>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
