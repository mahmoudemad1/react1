import React from "react";
import img from "../myImage.jpg";
export default function Home() {
  return (
<section id="Home">
<div style={{ textAlign: "center", padding: "40px" }}>
      <img className=" mt-5 style"
        src={img}  
        alt="My Image"
        style={{
          width: "200px",  
          height: "auto",  
          borderRadius: "35%",  
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.6)", // Add shadow
          marginTop: "20px",
        }}
      />
      <h2 className="mt-4  fw-bold  text-light ">Mahmoud Elgohary</h2>
      <p className=" mt-2 mb-5 text-light">I am a Frontend Developer with experience in modern web technologies.

</p>
      
      
    </div>
</section>
  );
}
