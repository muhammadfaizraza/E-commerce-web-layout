import React from "react";
import Carousel from "better-react-carousel";
import "../Style/slider.css";
import {slider} from "../data.js"


export default function Slider() {
  return (
   
    
      <Carousel
        cols={1}
        rows={1}
        gap={1}
        hideArrow={true}
        autoplay={1500}
        loop={true}
        showDots ={false}

      >

         {slider.map((user) => (
        <Carousel.Item>
        <div className="sliders1">

     
        <span className="sliderData1">
          <h1>{user.heading}</h1>
          <p>{user.title}</p>
          
            
          </span>
          <img src={user.source} alt="image1" />

    </div>
    </Carousel.Item> 
    ))}
    
        {/* <span className="sliderData1">  
            <h1>HEllo world</h1>
            <p>
              How Daraz Transformed Online Shopping in Pakistan Daraz first made
              waves in Pakistan’s e-commerce market after its introduction in
              2012. We have since grown to become Pakistan’s largest platform
              for online shopping with a network spread across Asia in Pakistan,
              Bangladesh, Sri Lanka, Myanmar, and Daraz.com.np. Our vision was
              to provide a safe, efficient online marketplace platform for
              vendors and customers across the country to come together. We
              started off exclusively as an online fashion retail platform and
              over the years expanded to become a complete one-stop solution for
              all your buying
            </p>
          </span>

          <img src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </Carousel.Item>

        <Carousel.Item>
          <span className="sliderData1">
            <h1>HEllo world</h1>
            <p>
              How Daraz Transformed Online Shopping in Pakistan Daraz first made
              waves in Pakistan’s e-commerce market after its introduction in
              2012. We have since grown to become Pakistan’s largest platform
              for online shopping with a network spread across Asia in Pakistan,
              Bangladesh, Sri Lanka, Myanmar, and Daraz.com.np. Our vision was
              to provide a safe, efficient online marketplace platform for
              vendors and customers across the country to come together. We
              started off exclusively as an online fashion retail platform and
              over the years expanded to become a complete one-stop solution for
              all your buying
            </p>
          </span>
          <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </Carousel.Item>
        <Carousel.Item>
          <span className="sliderData1">
            <h1>HEllo world</h1>
            <p>
              How Daraz Transformed Online Shopping in Pakistan Daraz first made
              waves in Pakistan’s e-commerce market after its introduction in
              2012. We have since grown to become Pakistan’s largest platform
              for online shopping with a network spread across Asia in Pakistan,
              Bangladesh, Sri Lanka, Myanmar, and Daraz.com.np. Our vision was
              to provide a safe, efficient online marketplace platform for
              vendors and customers across the country to come together. We
              started off exclusively as an online fashion retail platform and
              over the years expanded to become a complete one-stop solution for
              all your buying
            </p>
          </span>
          <img
            src="https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1600"
            
          />
        </Carousel.Item>
        <Carousel.Item>

        <span className="sliderData1">
            <h1>hammad</h1>
            <p>
              How Daraz Transformed Online Shopping in Pakistan Daraz first made
              waves in Pakistan’s e-commerce market after its introduction in
              2012. We have since grown to become Pakistan’s largest platform
              for online shopping with a network spread across Asia in Pakistan,
              Bangladesh, Sri Lanka, Myanmar, and Daraz.com.np. Our vision was
              to provide a safe, efficient online marketplace platform for
              vendors and customers across the country to come together. We
              started off exclusively as an online fashion retail platform and
              over the years expanded to become a complete one-stop solution for
              all your buying
            </p>
          </span>
          <img src="https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </Carousel.Item>
    */}
      </Carousel>
 
  );
}
