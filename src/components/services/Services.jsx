import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Resources</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Video Lecture
            </h3>
          </div>
    
          <span className="services__button" onClick={() => toggleTab(1)}>
            <Link to="/login?redirect=resource" style={{ color: '#000' }}>View More</Link>
            <i onClick={() => toggleTab(1)} className="uil uil-arrow-right services__button-icon"></i>
          </span>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Notes
            </h3>
          </div>

          <span onClick={() => toggleTab(2)} className="services__button">
            <Link to="/login?redirect=resource1" style={{ color: '#000' }}>View More</Link>
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Services;
