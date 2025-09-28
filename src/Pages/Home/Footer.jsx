import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <img src="./img/logo.png" className="w-36" alt="Logoipsum" />
        </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Hero"
                className="text-md cursor-pointer hover:text-indigo-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="About"
                className="text-md cursor-pointer hover:text-indigo-600"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Education"
                className="text-md cursor-pointer hover:text-indigo-600"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Projects"
                className="text-md cursor-pointer hover:text-indigo-600"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md cursor-pointer hover:text-indigo-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon lg:mt-0 mt-10">
          <ul>
            <li>
              <a
                href="https://web.facebook.com/profile.php?id=100069813968886"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/facebook.svg"
                  alt="Facebook"
                  width="30"
                  height="30"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nisalwishwajith/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/instagram.svg"
                  alt="WhatsApp"
                  width="30"
                  height="30"
                />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+94715714175"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/whatsapp.svg"
                  alt="WhatsApp"
                  width="30"
                  height="30"
                />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/nisal-wishwajith-163aa5314/"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/img/linkedin.svg"
                  alt="LinkedIn"
                  width="30"
                  height="30"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>


    </footer>
  );
}

export default Footer;


