import React from 'react'
import img from "../img1.png";
import img2 from "../img2.png";
import img3 from "../img3.png";
import img4 from "../img4.png";
 import img5 from"../img5.png"
 import img6 from"../img6.png"
 
export default function Portfolio() {
  return (
    <div className=' '> 
<div    className="container  port">
  <h2 className=" fw-bold  text-center   ">Portfolio </h2>
  <div className="row    ">
    <div className="col-md-4 ">
      <img src={img} alt=""   style={{
          width: "100%",    
          borderRadius: "1%",  
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow
          marginTop: "20px",
        }} />
    </div>
    <div className="col-md-4 ">
      <img src={img2} alt=""   style={{
          width: "100%",    
          borderRadius: "1%",  
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow
          marginTop: "20px",
        }} />
    </div>
    <div className="col-md-4 ">
      <img src={img3} alt=""   style={{
          width: "100%",    
          borderRadius: "1%",  
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow
          marginTop: "20px",
        }} />
    </div>
    <div className="col-md-4 ">
      <img src={img4} alt=""   style={{
          width: "100%",    
          borderRadius: "1%",  
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow
          marginTop: "20px",
        }} />
    </div>
    <div className="col-md-4 ">
      <img src={img6} alt=""   style={{
          width: "100%",    
          borderRadius: "1%",  
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow
          marginTop: "20px",
        }} />
    </div>
    <div className="col-md-4 ">
      <img src={img5} alt=""   style={{
          width: "100%",    
          borderRadius: "1%",  
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow
          marginTop: "20px",
        }} />
    </div>
   
  </div>
</div>
   
    </div>
  )
}
