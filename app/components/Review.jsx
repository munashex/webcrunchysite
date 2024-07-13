"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { clientsReview } from "../data/reviews";
import { ImQuotesLeft } from "react-icons/im";



const Review = () => {
  const settings = {
    dots: true, 
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Customize other settings as per your requirements
  };

  return (
    <div className="mt-24 mx-0.5 lg:mx-14">
      <span><ImQuotesLeft size={45}/></span>
      <div className="border-b-2 border-slate-500 py-16 rounded"> 
        <Slider {...settings}>
          {clientsReview.map((review) => (
            <div key={review.name} className="space-y-4">
              <h1 className="text-lg md:text-xl lg:text-2xl">{review.description}</h1> 
              <div className="space-y-2">
                <h1 className="font-bold md:text-xl">{review.name}</h1> 
                <h1 className="md:text-lg">{review.company}</h1>
              </div>
            </div>
          ))}
        </Slider>
      </div>  
    </div>
  );
}

export default Review;
