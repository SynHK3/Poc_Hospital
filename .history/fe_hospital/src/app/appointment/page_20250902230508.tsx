import Header from "@/components/header/header";
import "./appointment.css";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

import { BiPhoneCall } from "react-icons/bi";

export default function Appointment() {
  return (
    <div>
      <Header></Header>
      <div className="container__content--appointment">
        <div className="content__banner--appointment"></div>

        {/* Start Form Book AppointMent */}
        <div className="content--form--appointment">
          <div className="layout__content--submit--form--appointment">
            {/* Start Form Book Appointment */}
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
                <button type="submit" className="btn__submit--appointment">
                  SUBMIT
                </button>
                {/* End Form Book Appointment */}
              </form>
            </div>

            {/* Start Shedule Appoinment */}
            <div className="container__shedule--appointment">
              <h2 className="shedule__title">Shedule hours</h2>
              <ul className="shedule__list">
                <li className="shedule__item">
                  <span className="day">Monday</span>
                  <span className="line--day--time"></span>
                  <span className="time">09:00 AM - 07:00 PM</span>
                </li>
                <li className="shedule__item">
                  <span className="day">Tuesday</span>
                  <span className="line--day--time"></span>
                  <span className="time">09:00 AM - 07:00 PM</span>
                </li>
                <li className="shedule__item">
                  <span className="day">Wednesday</span>
                  <span className="line--day--time"></span>
                  <span className="time">09:00 AM - 07:00 PM</span>
                </li>
                <li className="shedule__item">
                  <span className="day">Thursday</span>
                  <span className="line--day--time"></span>
                  <span className="time">09:00 AM - 07:00 PM</span>
                </li>
                <li className="shedule__item">
                  <span className="day">Friday</span>
                  <span className="line--day--time"></span>
                  <span className="time">09:00 AM - 07:00 PM</span>
                </li>
                <li className="shedule__item">
                  <span className="day">Saturday</span>
                  <span className="line--day--time"></span>
                  <span className="time">09:00 AM - 07:00 PM</span>
                </li>
                <li className="shedule__item">
                  <span className="day">Sunday</span>
                  <span className="line--day--time"></span>
                  <span className="time">Closed</span>
                </li>
              </ul>

              <div className="shedule__line"></div>

              <div className="shedule__info--contact">
                <div className="shedule__info--contact--item">
                  <BiPhoneCall className="icon__contact--item"></BiPhoneCall>

                  <div className="shedule__info--contact--desc">
                    <h3>EMERGENCY</h3>
                    <h5>(237) 681-812-255</h5>
                  </div>
                </div>
              </div>

              {/* End Schedule Hours */}
            </div>
          </div>
        </div>
        {/* End Form Book AppointMent */}

        <div className="container__content--map"></div>
      </div>

      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
