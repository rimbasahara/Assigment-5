import awards from "../data/AwardsList";

const Awards = () => {
  return (
    <div className="container py-5" data-aos="zoom-in">
      <h1 className="text-center">Awards</h1>
      <div className="row">
        {awards.map((award, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{award.name}</h5>
                <p className="card-text">{award.organizer}</p>
                <p className="card-text">{award.description}</p>
                <p className="card-text">
                  <small className="text-muted">{award.date}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
