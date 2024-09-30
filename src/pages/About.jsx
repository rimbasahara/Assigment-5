import pict from "../assets/milesmorales.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <main className="container">
      <div className="about d-flex justify-content-center">
        <div className="col-sm-4 text-center" data-aos="fade-right">
          <img src={pict} alt="me" className="img-fluid about-img rounded" />
        </div>
        <div data-aos="fade-left">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            laudantium ipsa numquam porro repellendus sequi iste officiis
            deleniti. Fugit illum qui sunt perspiciatis ratione beatae saepe
            necessitatibus, neque nesciunt suscipit eius accusamus fuga omnis
            reiciendis, tenetur, illo officia pariatur vero rem! Dignissimos
            eaque recusandae delectus odio iste dolorem quos? Non placeat qui,
            voluptas numquam inventore pariatur sint dolore commodi neque veniam
            harum officiis sit asperiores nihil eligendi aliquid nulla magnam
            corporis nesciunt mollitia dolorum vero. Optio quo iure molestias
            ducimus repellat iste, neque nam cumque ea? Aut exercitationem neque
            quos fuga rem aliquid dolore cum praesentium magni recusandae, id
            magnam.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
