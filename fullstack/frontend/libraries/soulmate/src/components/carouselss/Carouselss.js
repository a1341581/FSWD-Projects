import React from 'react'
import {Carousel} from 'react-bootstrap'
import Ca1 from '../../assets/img/img2.jpg'
import Ca2 from '../../assets/img/img3.jpg'
import Ca3 from '../../assets/img/img4.jpg'

function carouselss() {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img height="400px"
      className="d-block w-100"
      src={Ca1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="400px"
      className="d-block w-100"
      src={Ca2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height="400px"
      className="d-block w-100"
      src={Ca3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    )
}

export default carouselss
