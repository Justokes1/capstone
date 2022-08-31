import React from "react";
import "./Contact.css";
import phone from "../../assets/phone.gif";
import email from "../../assets/email.gif";
import location from "../../assets/location.gif";
import { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p5oebas",
        "template_e7oypgr",
        formRef.current,
        "GHSehUptmAR-UgEvD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactForm" id="cPage">
      <div className="contact-bg"></div>
      <div className="cWrapper">
        <div className="c-left">
          <h1 className="cTitle">Let's Create Something Beautiful!</h1>

          <div className="cInfo">
            <div className="cItem">
              <img src={phone} alt="phone icon" className="icon" />
              +1 803-554-1694
            </div>

            <div className="cItem">
              <img src={email} alt="phone icon" className="icon" />
              Zaire.Dev@gmail.com
            </div>

            <div className="cItem">
              <img src={location} alt="phone icon" className="icon" />
              Charlotte, NC
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="cDesc">
            <b>Get in Touch</b> Fill out the form below with some details about
            your inquiry and I will respond to you as quickly as I can. Please
            allow 24-48 hours for me to respond.
          </p>

          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_ubject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
