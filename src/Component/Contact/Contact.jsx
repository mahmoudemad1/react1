import React from "react";

export default function Contact() {
  return (
    <form>
      <div id="contact"  className="  hight mt">
     <div className=" text-center icon">

     <h2 className=" text-light " >
        CONTACT SECTION
        </h2>
       
     </div>
        <div className="form-row margin-form ">
          <div className="form-group col-md-12 w-50 m-auto ">
            <label htmlFor="inputEmail4"> </label>
            <input
              type="email"
              className="form-control  "
              id="inputEmail4"
              placeholder="User Name"
            />
          </div>
          <div className="form-group col-md-12 w-50 m-auto">
            <label htmlFor="inputPassword4"> </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="User Age"
            />
          </div>
          <div className="form-group col-md-12 w-50 m-auto">
            <label htmlFor="inputPassword4"> </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="User Email"
            />
          </div>
          <div className="form-group col-md-12 w-50 m-auto">
            <label htmlFor="inputPassword4"> </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="User Password"
            />
          </div>
        </div>
      <div className="d-flex justify-content-center align-items-center">

        
      <button type="submit" className="btn btn-primary mrb ">
          Send Message
        </button>
      </div>
      </div>
    </form>
  );
}
