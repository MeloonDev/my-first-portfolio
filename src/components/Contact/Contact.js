import React, { useState, useEffect, useRef } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Contact() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mdu5gbq",
        "template_pgt3qmq",
        refForm.current,
        "_uLanPuVnzmwx_kr4"
      )
      .then(
        () => {
          alert("Message succesfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              lettersArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              index={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            velit, labore vitae ducimus ex rerum cupiditate, dicta provident
            officia ipsum sunt cum corrupti a asperiores aut explicabo dolorum
            at delectus.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Mateusz Melaniuk
          <br />
          Poland
          <br />
          Złota 15, 2200
          <br />
          Warsaw
          <br />
          <span>mateusz.melaniuk98@gmai.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>Mateusz lives here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Contact;
