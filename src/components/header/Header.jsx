import React, { useEffect, useState } from 'react';
import "./header.css";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/paper');
  }
  const handleClick1 = () => {
    navigate('/award');
  }


  /*================= Change Background Header =======================*/
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

  /*=================Toggle Menu=======================*/
  const[Toggle, showMenu] = useState(false); 
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="Header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          {" "}
          Dr. S.T. Patil
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a 
              onClick={handleClick}
                // onClick={() => setActiveNav("#publication")}
                className={
                  activeNav === "#publication" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-file-alt nav__icon"></i> Publications
              </a>
            </li>

            <li className="nav__item">
            <a 
              onClick={handleClick1}
                // onClick={() => setActiveNav("#publication")}
                className={
                  activeNav === "award" ? "nav__link active-link" : "nav__link"
                }>
                <i class='uil uil-award nav__icon'></i> Awards
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#Services") }
                className={
                  activeNav === "#Services" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-book nav__icon"></i> Resources
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header
