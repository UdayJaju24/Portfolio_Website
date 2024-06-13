import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualificaton__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ph.D.: Computer Engineering And Technology</h3>
                <span className="qualification__subtitle">
                Bharati Vidyapeeth University - Pune, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> August 2009
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Master of Science: Computer Science and Engineering</h3>
                <span className="qualification__subtitle">
                Visveswaraya Technological University - Belgaum, India 
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> August 2003
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor of Science: Electronics Engineering</h3>
                <span className="qualification__subtitle">
                Dr. Babasaheb Ambedkar <br />Marathwada University - Aurangabad, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> May 1988 
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*<div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2017 - 2018
                </div>
              </div>
            </div>*/}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Professor</h3>
                <span className="qualification__subtitle">
                  Vishwakarma Institute, of Technology – Pune, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> February-2011 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Professor and Principal</h3>
                <span className="qualification__subtitle">
                  Imperial College of Engineering and Research – Pune, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> November 2009 - February 2011
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Professor</h3>
                <span className="qualification__subtitle">Bharati Vidyapeeth College Of Engineering- Pune, India</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 	April 2004 - November 2009
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Assistant Professor and HOD</h3>
                <span className="qualification__subtitle">
                  Sharada Group of Institutes -Agra, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> November 2003 - March 2004
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Lecturer</h3>
                <span className="qualification__subtitle">Solapur Education Society -Solapur, India</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> August 1989 - November 2003
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Lecturer and HOD</h3>
                <span className="qualification__subtitle">
                  Mandar Education Society -Chiplun, India
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> August 1988 - August 1989
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification
