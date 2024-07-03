// src/components/Carousel.js
import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/newarrivals/1.png';
import img2 from '../assets/newarrivals/2.png';
import img3 from '../assets/newarrivals/3.png';


const reviews = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
];

const CarouselContainer = styled.div`
  width: 90%;
  margin: 1rem auto;
`;

const ReviewImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  border-radius: 2px;
`;

function NewArrivals() {
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

export default NewArrivals;
