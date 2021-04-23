import React from "react";
import "./styles.css";

import history from "../../utils/history";

function Header() {
  return (
    //  Header
    <header id="home" className="header">
      <nav className="navigation">
        <div className="nav-center container">
          <a href="#home" className="logo">
            <h1>
              SHOP<span>P</span>E
            </h1>
          </a>

          <div className="nav-menu">
            <div className="nav-top">
              <div className="logo">
                <h1>
                  SHOP<span>P</span>E
                </h1>
              </div>
              <div className="close">
                <i className="fas fa-times"></i>
              </div>
            </div>

            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link scroll-link">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="#shop" className="nav-link scroll-link">
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a href="#new" className="nav-link scroll-link">
                  New
                </a>
              </li>

              <li className="nav-item">
                <a href="#recent" className="nav-link scroll-link">
                  Recent
                </a>
              </li>

              <li className="nav-item">
                <a href="#blog" className="nav-link scroll-link">
                  <span>
                    <i>Blog</i>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-icons">
            <span>
              <i
                onClick={() => history.push("./login")}
                className="fas fa-user"
              ></i>
            </span>
            <span>
              <i className="fas fa-search"></i>
            </span>
            <span>
              <i className="fas fa-shopping-basket"></i>
            </span>
          </div>

          <div className="hamburger">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
