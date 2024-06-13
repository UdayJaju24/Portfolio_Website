import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class="uil uil-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">34 Years in Education</span>
        </div>

        <div className="about__box">
        <i class="uil uil-file-alt about__icon" ></i> 
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">80+ Projects</span>
        </div>

        <div className="about__box">
        <i class='uil uil-book-alt about__icon'></i>
            <h3 className="about__title">Publication</h3>
            <span className="about__subtitle">100+ Papers Published</span>
        </div>
    </div>
  )
}

export default Info
