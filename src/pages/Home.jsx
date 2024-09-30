import { TypeAnimation } from "react-type-animation";
import "../styles/Home.css";

const Home = () => {
  return (
    <section
      id="hero"
      className="hero section light-background d-flex align-items-center justify-content-center"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="aos col-lg-9 text-center" data-aos="zoom-out">
            <h2>Rimba Sahara</h2>
            <TypeAnimation
              sequence={[
                "Front End Web Developer",
                1000,
                "DTS x Hacktiv8 x IBM",
                1000,
                "Assignment 5",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
            <div className="social-links">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
