// src/components/Carousel.js
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/products/Header.png'


const latestCollection = [
  { image: img1 },
  { image: img1 },
  { image: img1 },
  
  
  // Add more review images as needed
];

const CarouselContainer = styled.div`
  width: 80%;
  margin: 2rem auto;
`;

const ReviewImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

function LatestCollection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {latestCollection.map((review, index) => (
          <div key={index}>
            <ReviewImage src={review.image} alt={`Review ${index + 1}`} />
          
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
}

export default LatestCollection;
