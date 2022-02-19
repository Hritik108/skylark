import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assests/styles/product/newcasousel.css"
import Hen from "../../assests/images/product_images/Group 18140547.png"

class Newcarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "",

        }
    }

    componentDidMount() {
        this.setState({height: window.innerHeight});
    }
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div >
                        <div className="main-carousel" id="first-item" style={{"height":this.state.height - 2}}>
                            <div className="carousel-content">
                                <div className="carousel-head">
                                    All our livestock are
                                    <br />
                                    fresh and healthy...
                                </div>
                                <div className="carousel-sub">
                                    our diverse portfolio of operations
                                    <br />
                                    ranging from grandparents farms
                                </div>
                                <div className="carousel-sub2">
                                    our products include
                                </div>
                                <div className="carousel-sub3">
                                    ABIS Poultry Feed &nbsp;&nbsp;&nbsp; ABIS Fish Feed
                                </div>
                                <div className="carousel-sub3">
                                    ABIS Shrimp Feed
                                </div>
                                <div className="carousel-button">
                                    <button >view all products</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="main_carousel" id="first-item" style={{"height":this.state.height - 2}}>
                            <div className="carousel-content">
                                <div className="carousel-head">
                                    All our livestock are
                                    <br />
                                    fresh and healthy...
                                </div>
                                <div className="carousel-sub">
                                    our diverse portfolio of operations
                                    <br />
                                    ranging from grandparents farms
                                </div>
                                <div className="carousel-sub2">
                                    our products include
                                </div>
                                <div className="carousel-sub3">
                                    ABIS Poultry Feed &nbsp;&nbsp;&nbsp; ABIS Fish Feed
                                </div>
                                <div className="carousel-sub3">
                                    ABIS Shrimp Feed
                                </div>
                                <div className="carousel-button">
                                    <button >view all products</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main_carousel" id="first-item" style={{"height":this.state.height - 2}}>
                        <div className="carousel-content">
                                <div className="carousel-head">
                                    All our livestock are
                                    <br />
                                    fresh and healthy...
                                </div>
                                <div className="carousel-sub">
                                    our diverse portfolio of operations
                                    <br />
                                    ranging from grandparents farms
                                </div>
                                <div className="carousel-sub2">
                                    our products include
                                </div>
                                <div className="carousel-sub3">
                                    ABIS Poultry Feed &nbsp;&nbsp;&nbsp; ABIS Fish Feed
                                </div>
                                <div className="carousel-sub3">
                                    ABIS Shrimp Feed
                                </div>
                                <div className="carousel-button">
                                    <button >view all products</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main_carousel" id="first-item" style={{"height":this.state.height - 2}}>
                        <div className="carousel-content">
                                <div className="carousel-head">
                                    All our livestock are
                                    <br />
                                    fresh and healthy...
                                </div>
                                <div className="carousel-sub">
                                    our diverse portfolio of operations
                                    <br />
                                    ranging from grandparents farms
                                </div>
                                <div className="carousel-sub2">
                                    our products include
                                </div>
                                <div className="carousel-sub3">
                                    ABIS Poultry Feed &nbsp;&nbsp;&nbsp; ABIS Fish Feed
                                </div>
                                <div className="carousel-sub3">
                                    ABIS Shrimp Feed
                                </div>
                                <div className="carousel-button">
                                    <button >view all products</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main_carousel" id="first-item" style={{"height":this.state.height - 2}}>
                        <div className="carousel-content">
                                <div className="carousel-head">
                                    All our livestock are
                                    <br />
                                    fresh and healthy...
                                </div>
                                <div className="carousel-sub">
                                    our diverse portfolio of operations
                                    <br />
                                    ranging from grandparents farms
                                </div>
                                <div className="carousel-sub2">
                                    our products include
                                </div>
                                <div className="carousel-sub3">
                                    ABIS Poultry Feed &nbsp;&nbsp;&nbsp; ABIS Fish Feed
                                </div>
                                <div className="carousel-sub3">
                                    ABIS Shrimp Feed
                                </div>
                                <div className="carousel-button">
                                    <button >view all products</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main_carousel" id="first-item" style={{"height":this.state.height - 2}}>
                        <div className="carousel-content">
                                <div className="carousel-head">
                                    All our livestock are
                                    <br />
                                    fresh and healthy...
                                </div>
                                <div className="carousel-sub">
                                    our diverse portfolio of operations
                                    <br />
                                    ranging from grandparents farms
                                </div>
                                <div className="carousel-sub2">
                                    our products include
                                </div>
                                <div className="carousel-sub3">
                                    ABIS Poultry Feed &nbsp;&nbsp;&nbsp; ABIS Fish Feed
                                </div>
                                <div className="carousel-sub3">
                                    ABIS Shrimp Feed
                                </div>
                                <div className="carousel-button">
                                    <button >view all products</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default Newcarousel