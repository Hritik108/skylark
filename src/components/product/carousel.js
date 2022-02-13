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
        return (
            <div style={{backgroundColor:"blue"}}>
                <Slider {...settings}>
                    <div>
                        {/* <img src={Hen} /> */}
                    </div>
                    <div>
                        {/* <img src={Hen} /> */}
                    </div>
                    <div>
                        {/* <img src={Hen} /> */}
                    </div>
                </Slider>
            </div>
        );
    }
}

export default ProductCarousel;

// <div>

// <div class="col-md-6 col-sm-6" id="slider">

//     <div id="myCarousel" class="carousel slide" data-ride="carousel">

//         <ol class="carousel-indicators">
//             <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
//             <li data-target="#myCarousel" data-slide-to="1"></li>
//             <li data-target="#myCarousel" data-slide-to="2"></li>
//         </ol>

//         <div class="carousel-inner">

//             <div class="item active" >
//               <img src={Hen} style={{"width": "100%", "height": "100%" }}/>            
//             </div>

//             <div class="item" >
//               <img src={Hen} style={{"width": "100%", "height": "100%" }} />            
//             </div>

//             <div class="item" >
//               <img src={Hen} style={{"width": "100%", "height": "100%" }} />            
//             </div>

//         </div>

//         <a class="left carousel-control" href="#myCarousel" data-slide="prev">
//             <span class="glyphicon glyphicon-chevron-left"></span>
//             <span class="sr-only">Previous</span>
//         </a>
//         <a class="right carousel-control" href="#myCarousel" data-slide="next">
//             <span class="glyphicon glyphicon-chevron-right"></span>
//             <span class="sr-only">Next</span>
//         </a>

//     </div>

// </div>


// </div>