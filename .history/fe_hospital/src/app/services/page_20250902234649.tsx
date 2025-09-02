import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { FaChevronRight } from "react-icons/fa";
import "./service.css";

export default function Services() {
  return (
    <div>
      <Header></Header>
      <div className="container__content--service--banner"></div>

      <div className="container__content---service">
        <ul className="list__content--service">
          <li>
            <div className="content__service--item--desc">
              <h1>Free Checkup</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing Quisque
                placerat Convallis felis vitae tortor augue. Velit nascetur
                massa in.
              </p>

              <div className="content__servivce--item--desc--read--more">
                <h1>Learn More</h1>
              </div>
            </div>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
