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
  return (
    <nav>
      <div className="container">
        <div className="navbar__flex">
          <div className="nav__logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className="navbar__link">
            <li className="nav__link">
              <a href="#">Новости</a>
              <span className="nav__underline"></span>
            </li>
            <li className="nav__link">
              <a href="#">Кинопоказы</a>
              <ArrowIcon />
            </li>
            <li className="nav__link">
              <a href="#">Лица</a>
              <ArrowIcon />
            </li>
            <li className="nav__link">
              <a href="#">Программа</a>
              <ArrowIcon />
            </li>
            <li className="nav__link">
              <a href="#">Медиа</a>
              <span className="nav__underline"></span>
            </li>
            <li className="nav__link">
              <a href="#">История</a>
              <span className="nav__underline"></span>
            </li>
            <li className="nav__link">
              <a href="#">Локации</a>
              <span className="nav__underline"></span>
            </li>
          </ul>
          <ul className="nav__social">
            <li className="social__link">
              <a href="#">
                <FacebookIcon />
              </a>
            </li>
            <li className="social__link">
              <a href="#">
                <InstIcon />
              </a>
            </li>
            <li className="social__link">
              <a href="#">
                <TelegramIcon />
              </a>
            </li>
            <li className="social__link">
              <a href="#">
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
          <div className="navbar__menu">
            <MenuIcon />
          </div>

          <div className="responsive__menu">
            <div className="close__icon">
              <Close />
            </div>
            <div className="res__nav__logo">
              <img src={logo} alt="logo" />
            </div>
            <ul className="res__navbar__link">
              <li className="res__nav__link">
                <a href="#">Новости</a>
                <span className="res__nav__underline"></span>
              </li>
              <li className="res__nav__link">
                <a href="#">Кинопоказы</a>
                <ArrowIcon />
              </li>
              <li className="res__nav__link">
                <a href="#">Лица</a>
                <ArrowIcon />
              </li>
              <li className="res__nav__link">
                <a href="#">Программа</a>
                <ArrowIcon />
              </li>
              <li className=" res__nav__link">
                <a href="#">Медиа</a>
                <span className="res__nav__underline"></span>
              </li>
              <li className="res__nav__link">
                <a href="#">История</a>
                <span className="res__nav__underline"></span>
              </li>
              <li className="res__nav__link">
                <a href="#">Локации</a>
                <span className="res__nav__underline"></span>
              </li>
              <li className="res__change__language"></li>
            </ul>
            <ul className="res__nav__social">
              <li className="res__social__link">
                <a href="#">
                  <FacebookIcon />
                </a>
              </li>
              <li className="res__social__link">
                <a href="#">
                  <InstIcon />
                </a>
              </li>
              <li className="res__social__link">
                <a href="#">
                  <TelegramIcon />
                </a>
              </li>
              <li className="res__social__link">
                <a href="#">
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

{
  /* <p onClick={(e) => handleClick(e)}>
                Ru <ArrowIcon />
              </p>
              <div className="language__drop">
                <button
                  onClick={(e) => handleClick(e)}
                  className={active ? "unactive__btn" : ""}
                >
                  Uz
                </button>
                <button
                  onClick={(e) => handleClick(e)}
                  className={active ? "unactive__btn" : ""}
                >
                  Eng
                </button>
              </div> */
}
