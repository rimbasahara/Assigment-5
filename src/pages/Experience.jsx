const Experience = () => {
  return (
    <div
      className="experience container"
      style={{ marginTop: "8%" }}
      data-aos="zoom-out-down"
    >
      <h1 className="mb-3">Experience</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              PT. Artha Infotama - IT Functional Consultant
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <ul>
                <li>
                  Collaborated with operations and technical teams to define
                  system requirements and prepare standard operating procedures.
                </li>
                <li>
                  Communicated effectively with product development
                  stakeholders.
                </li>
                <li>
                  Conducted testing and validation of developed features or
                  functions.
                </li>
                <li>
                  Created and maintained documentation, including UAT scripts
                  and test results.
                </li>
                <li>
                  Managed tickets in CRM, addressing client needs and
                  complaints.
                </li>
                <li>Prepared weekly CRM status reports for stakeholders.</li>
                <li>
                  Led project development and implementation in ERP systems.
                </li>
                <li>
                  Created and maintained documentation, including UAT scripts
                  and test results.
                </li>
                <li>Conducted query optimization for stored procedures.</li>
                <li>Provided onsite support to clients as needed.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              PT. Samudra Kreatif Studio - Research, Support, & Development
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <ul>
                <li>Making controller game with bicycle system</li>
                <li>
                  Build and maintain a network connection troughout the office
                </li>
                <li>Creating a Racing Sim Controller</li>
                <li>
                  Creating a game controller system with a temperature sensor
                  (MLX90614), pulse hear rate, force-sensing resistor, and a
                  galvanic skin response (GSR) based on Unity Engine integration
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Faculty of Applied Sciences - Assistant Practicum
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <p>For the following courses:</p>
              <ul>
                <li>Database</li>
                <li>Digital System</li>
                <li>Shell Programming</li>
                <li>Computer Network System</li>
                <li>Network Service</li>
                <li>Interfaces, peripherals, and communications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
