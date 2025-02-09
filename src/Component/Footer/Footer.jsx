
export default function Footer() {
  return (
    <>
      <div className="w-100      bg d-flex align-items-center justify-content-center  " style={{ minHeight: "150px" }}>
        <div className="container">
          <div className="row d-flex align-items-center text-center mt-5">
            <div className="col-md-4 text-center">
              <h3 className="text-color">LOCATION</h3>
              <p className="text-color">
                2215 John Daniel Drive <br />
                Clark, MO 65243
              </p>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center text-center">
              <h3 className="text-color">AROUND THE WEB</h3>
              <div className="d-flex gap-3 mt-3">
                <div className="team-icon d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-facebook fa-xl" />
                </div>
                <div className="team-icon d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-twitter fa-xl" />
                </div>
                <div className="team-icon d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-pinterest fa-xl" />
                </div>
                <div className="team-icon d-flex justify-content-center align-items-center">
                  <i className="fa-brands fa-linkedin fa-2xl" />
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <h3 className="text-color">ABOUT FREELANCER</h3>
              <p className="text-color">
                Freelance is a free to use, licensed Bootstrap theme created by Route
              </p>
            </div>
          </div><br /><br /><br />
          <p className="text-color text-center" >Copyright © <br />mode by mahmoud elgohary</p>
        </div>
      </div>
    </>
  );
}
