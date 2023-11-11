import { useState } from "react";
import {
  ArrowIcon,
  FacebookIcon,
  InstIcon,
  MenuIcon,
  TelegramIcon,
  YouTube,
  Close,
} from "../assets/icons";
import logo from "../assets/images/logo.png";
import "../assets/styles/navbar.css";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((e) => !e);
  };

  return (
    <nav>
      <div className="container">
        <div className="navbar__flex">
          <div className="nav__logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="navbar__link">
            <li className="nav__link">
              <a href="#news">Новости</a>
              <span className="nav__underline"></span>
            </li>
            <li className="nav__link">
              <a href="#cinema">Кинопоказы</a>
              <ArrowIcon />
            </li>
            <li className="nav__link">
              <a href="#actiors">Лица</a>
              <ArrowIcon />
            </li>
            <li className="nav__link">
              <a href="#prog">Программа</a>
              <ArrowIcon />
            </li>
            <li className="nav__link">
              <a href="#media">Медиа</a>
              <span className="nav__underline"></span>
            </li>
            <li className="nav__link">
              <a href="#history">История</a>
              <span className="nav__underline"></span>
            </li>
            <li className="nav__link">
              <a href="#location">Локации</a>
              <span className="nav__underline"></span>
            </li>
          </ul>
          <ul className="nav__social">
            <li className="social__link">
              <a href="https://www.facebook.com/" target="_blank">
                <FacebookIcon />
              </a>
            </li>
            <li className="social__link">
              <a
                href="https://www.instagram.com/accounts/login/"
                target="_blank"
              >
                <InstIcon />
              </a>
            </li>
            <li className="social__link">
              <a href="https://web.telegram.org/a/" target="_blank">
                <TelegramIcon />
              </a>
            </li>
            <li className="social__link">
              <a href="https://www.youtube.com/" target="_blank">
                <YouTube />
              </a>
            </li>
            <li>
              <select>
                <option value="ru">Ru</option>
                <option value="uz">Uz</option>
                <option value="en">En</option>
              </select>
            </li>
          </ul>
          <div className="navbar__menu" onClick={handleClick}>
            <MenuIcon />
          </div>

          <div
            className={
              show ? "responsive__menu active__menu" : "responsive__menu"
            }
          >
            <div className="close__icon" onClick={handleClick}>
              <Close />
            </div>
            <div className="res__nav__logo" onClick={handleClick}>
              <img src={logo} alt="logo" />
            </div>
            <ul className="res__navbar__link">
              <li className="res__nav__link" onClick={handleClick}>
                <a href="#news">Новости</a>
                <span className="res__nav__underline"></span>
              </li>
              <li className="res__nav__link" onClick={handleClick}>
                <a href="#cinema">Кинопоказы</a>
                <ArrowIcon />
              </li>
              <li className="res__nav__link" onClick={handleClick}>
                <a href="#actors">Лица</a>
                <ArrowIcon />
              </li>
              <li className="res__nav__link" onClick={handleClick}>
                <a href="#prog">Программа</a>
                <ArrowIcon />
              </li>
              <li className=" res__nav__link" onClick={handleClick}>
                <a href="#mendia">Медиа</a>
                <span className="res__nav__underline"></span>
              </li>
              <li className="res__nav__link" onClick={handleClick}>
                <a href="#history">История</a>
                <span className="res__nav__underline"></span>
              </li>
              <li className="res__nav__link" onClick={handleClick}>
                <a href="#location">Локации</a>
                <span className="res__nav__underline"></span>
              </li>
              <li className="res__change__language">
                <select>
                  <option value="ru">Ru</option>
                  <option value="uz">Uz</option>
                  <option value="en">En</option>
                </select>
              </li>
            </ul>
            <ul className="res__nav__social">
              <li className="res__social__link">
                <a href="https://www.facebook.com/" target="_blank">
                  <FacebookIcon />
                </a>
              </li>
              <li className="res__social__link">
                <a
                  href="https://www.instagram.com/accounts/login/"
                  target="_blank"
                >
                  <InstIcon />
                </a>
              </li>
              <li className="res__social__link">
                <a href="https://web.telegram.org/a/" target="_blank">
                  <TelegramIcon />
                </a>
              </li>
              <li className="res__social__link">
                <a href="https://www.youtube.com/" target="_blank">
                  <YouTube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
