import React, { Fragment, useEffect, useRef, useState } from "react";
import "../Style/GalleySlider.css";
import image from '../image.js'
import Carousel from "better-react-carousel";

export default function Bottomslider() {

  const [width , setwidth] = useState(0)
const carousel = useRef()
useEffect(()=>{
<Carousel autoplay={1000}
/>
},[])
  return (
    <Fragment>
      <div ref={carousel} className="maincontainer">
  
 
      </div>

      <div className="buttoncontainer">
  
        <button className="buttno">Phones</button>
        <button className="buttno">tv</button>
        <button className="buttno">laptop</button>


      </div>
      <Carousel
      cols={4}
      rows={1}
      gap={1}
      loop={true}
      autoplay={1200}
      infinte={true}
     
      scrollSnap={true}
    >
     
    {image.map((user) => (
    

     
     <Carousel.Item>
        <div  width="100%" className="Gallerysliders">

     
        
          <img src={user} alt="image" />

    </div>
    </Carousel.Item> 


    ))}
        </Carousel>
        <hr style={{ width: "100%", margin: "" , height:"20px", backgroundColor :'black' }}></hr>
    </Fragment>
  );
}
