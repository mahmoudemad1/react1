import React from "react";

const About = () => {
  return (
    <section id="About" className="about py-5" aria-labelledby="about-title">
      <div className="container">
        
        <h2 id="about-title" className="text-center text-light fs-1  mb-5">
          ABOUT ME
        </h2>

        <div className="row align-items-center">
          
          <div className="col-lg-6 text-center text-lg-start  ">
            <p className="fs-4 text-light mr-botoon ">
              My name is <strong>Mahmoud El-Gohary</strong>,  
              I am a Frontend Developer with experience in modern web
              technologies.
            </p>
            <img src="" alt="" />
          </div>

           
          <div className="col-lg-6    fs-2">
            <h3 className="  text-light    ">SKILLS</h3>
            <ul className="list-unstyled text-light mr-botoon ">
              <li>✅ React.js  </li>
              <li>✅ JavaScript    </li>
              <li>✅ Tailwind CSS  </li>
              <li>✅ Bootstrap </li>
              <li>✅ HTML & CSS  </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
