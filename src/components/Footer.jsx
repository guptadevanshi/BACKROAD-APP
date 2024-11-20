import { MenuItem, socialMediaIcons } from "../data";

const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links">
          {MenuItem.map((menu) => (
            <li>
              <a href={menu.link} className="footer-link">
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
        <ul className="footer-icons">
          {socialMediaIcons.map((item) => (
            <li>
              <a href={item.link} target="_blank" className="footer-icon">
                <i className={item.icon}></i>
              </a>
            </li>
          ))}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date"></span> all rights reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;
