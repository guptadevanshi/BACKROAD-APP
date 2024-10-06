import React from 'react'
import { MenuItems } from "../data";
const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {MenuItems.map((menu) => (
            <li>
              <a href={menu.link} className="nav-link">
                {menu.name}
              </a>
            </li>
          ))}
          
        </ul>
        <ul className="footer-icons">
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="footer-icon"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="footer-icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="footer-icon"
            >
              <i className="fab fa-squarespace"></i>
            </a>
          </li>
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;