import React, { Component } from "react";
import Hen from "../../assests/images/product_images/Group 18140547.png";
import "../../assests/styles/product/carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class ProductCarousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
        };
        const myStyle={
            backgroundImage: `url(${Hen})`,
            height:'100vh',
            marginTop:'-70px',
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        };
        return (
            <div style={{backgroundColor:"blue"}}>
                <Slider {...settings}>
                    <div style={myStyle}>
                        <h1>Hello</h1>
                    </div>
                    <div style={myStyle}>
                        <h1>Hello</h1>
                    </div>
                    <div style={myStyle}>
                        <h1>Hello</h1>
                    </div>
                    <div>
                        <img src={Hen} />
                    </div>
                    <div>
                        <img src={Hen} />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default ProductCarousel;


