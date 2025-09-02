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
          <div className="layout__content--submit--form--appointment">
            <div className="container__form--submit--appointment">
              <h1 className="form__title">Book an Appointment</h1>
              <p className="form__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                placerat scelerisque tortor ornare ornare. Convallis felis vitae
                tortor augue. Velit nascetur proin massa in. Consequat faucibus
                porttitor enim et.
              </p>
              <form className="form__appointment">
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form__input form__input--half"
                  />
                  <select className="form__select form__select--half">
                    <option>Gender</option>
                  </select>
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form__input form__input--half"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="form__input form__input--half"
                  />
                </div>
                <div className="form__group">
                  <select className="form__select form__select--half">
                    <option>Date</option>
                  </select>
                  <select className="form__select form__select--half">
                    <option>Time</option>
                  </select>
                </div>
                <div className="form__group">
                  <select className="form__select form__select--half">
                    <option>Doctor</option>
                  </select>
                  <select className="form__select form__select--half">
                    <option>Department</option>
                  </select>
                </div>
                <textarea
                  placeholder="Message"
                  className="form__textarea"
                ></textarea>
                <button type="submit" className="form__submit">
                  SUBMIT
                </button>
              </form>
            </div>

            <div className="container__shedule--appointment"></div>
          </div>
        </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
