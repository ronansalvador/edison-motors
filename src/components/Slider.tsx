import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
import firstCar from '../assets/images/1.jpg';
import secondCar from '../assets/images/2.jpg';
import thirdCar from '../assets/images/3.jpg';

export default function Slider() {
  return (
    <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ firstCar }
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ secondCar }
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ thirdCar }
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
  )
}

// teste