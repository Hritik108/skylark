import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css';
import "../../assests/styles/product/carouselProduct.css";
import Hen from "../../assests/images/product_images/Group 18140547.png";
class CarouselPage extends React.Component {
  render() {
    const Height = window.height
    console.log("Heihgt")
    const imagees = [
      {
        id: "12", title: "All our livestock are fresh and healthy..",
        subTitle: "Our diverse portfolio of operations ranging from Grandparent farms",
        product: "Our products include", span1: "ABIS Poultry Feed", span2: "ABIS Fish Feed", span3: "ABIS Shrimp Feed",
        src: `${Hen}`
      },
      {
        id: "12", title: "All our livestock are fresh and healthy..",
        subTitle: "Our diverse portfolio of operations ranging from Grandparent farms",
        product: "Our products include", span1: "ABIS Poultry Feed", span2: "ABIS Fish Feed", span3: "ABIS Shrimp Feed",
        src: `${Hen}`
      },
      {
        id: "12", title: "All our livestock are fresh and healthy..",
        subTitle: "Our diverse portfolio of operations ranging from Grandparent farms",
        product: "Our products include", span1: "ABIS Poultry Feed", span2: "ABIS Fish Feed", span3: "ABIS Shrimp Feed",
        src: `${Hen}`
      },
      {
        id: "12", title: "All our livestock are fresh and healthy...",
        subTitle: "Our diverse portfolio of operations ranging from Grandparent farms",
        product: "Our products include", span1: "ABIS Poultry Feed", span2: "ABIS Fish Feed", span3: "ABIS Shrimp Feed",
        src: `${Hen}`
      },
    ]

    return (
      <>
        <Carousel id="carousel" interval={5000} keyboard={false} style={{ "height": "89vh"}}>
          {imagees.map((imgs, key) => (
            // <Carousel.Item key={key} style={{ maxHeight: "400px" } }>
            <Carousel.Item key={key}>
              <img
                className="d-block w-100"
                id="img"
                src={imgs.src}
                alt={imgs.title}
              />
              <Carousel.Caption>
                <div id="div">
                  <h2 id="title">{imgs.title}</h2>
                  <h5 id="subTitle">{imgs.subTitle}</h5>
                  <p id="product">{imgs.product}</p>
                  <div id="product-title">
                    <h5 id="span1">{imgs.span1}</h5>
                    <h5 id="span2">{imgs.span2}</h5>
                    <h5 id="span3">{imgs.span3}</h5>
                  </div>
                  <div id="view-all-products">
                    <div id="pro">
                      <h5 id="span4">View all products</h5>
                    </div>

                    <h5 id="span5"><span id="right-arrow">&#8594;</span></h5>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>))}

        </Carousel>

      </>
    );
  }
}

export default CarouselPage;