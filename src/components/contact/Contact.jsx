import React from 'react';
import "./contact.css";

const Contact = () => { 
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          {/* <h3 className="contact__title">Talk to me</h3> */}

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bxl-gmail contact__card icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">patil.st@vit.edu</span>

              <a
                href="mailto:patil.st@vit.edu"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card icon"></i>

              <h3 className="contact__card-title">Whatsapp </h3>
              <span className="contact__card-data">+91 9604181937</span>

              <a
                href="https://api.whatsapp.com/send?phone=9604181937&text=Hello!"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card icon"></i>

              <h3 className="contact__card-title">Linkedin </h3>
              <span className="contact__card-data">ST PATIL Ph D</span>

              <a
                href="https://in.linkedin.com/in/st-patil-ph-d-aa986047?trk=public_post_feed-actor-name"
                className="contact__button"
              >
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact
