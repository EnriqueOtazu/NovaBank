import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './media/estudiantes.jpeg';
import image2 from './media/parejaMayor.jpg';
import image3 from './media/playa.jpg';
import image4 from './media/familia-sonriendo.jpg';


export const CarouselImage = () => {
  return (
    <Carousel className='p-5'>
      <Carousel.Item>
        <img style={{height: '70vh'}}
          className="d-flex w-100"
          src={image1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '70vh'}}
          className="d-block w-100"
          src={image2}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '70vh'}}
          className="d-block w-100"
          src={image3}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height: '70vh'}}
          className="d-block w-100"
          src={image4}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselImage;