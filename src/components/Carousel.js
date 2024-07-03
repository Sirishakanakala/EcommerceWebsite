// src/components/Carousel.js
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/Reviews/1.png';
import img2 from '../assets/Reviews/2.png';
import img3 from '../assets/Reviews/3.png';
import img4 from '../assets/Reviews/4.png';
import img5 from '../assets/Reviews/5.png';
import img6 from '../assets/Reviews/6.png';

const reviews = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  // Add more review images as needed
];

const CarouselContainer = styled.div`
  width: 90%;
  margin: 1rem auto;
`;

const ReviewImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 2px;
`;

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        {reviews.map((review, index) => (
          <div key={index}>
            <ReviewImage src={review.image} alt={`Review ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </CarouselContainer>
  );
}

export default Carousel;
