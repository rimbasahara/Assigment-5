import "../styles/Footer.css";
import { useState, useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <footer className="footer position-relative light-background ">
        <div
          id="guuter"
          className="social-links d-flex justify-content-center pb-2 fixed-bottom lamp-effect"
        >
          <div className="copyright">
            <span className="navbar-text ms-auto pe-4">{currentTime}</span>
            <span>Copyright&copy;</span>{" "}
            <strong className="px-1 sitename">{currentYear}</strong>{" "}
            <span>Rimba Sahara. All Rights Reserved</span>
          </div>
          <a
            href="https://github.com/rimbasahara/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.instagram.com/rimbaashr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rimba-s-862050196/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
