import Product_cart from "../components/product/product_cart";
import EnquiryPage from "../components/product/enquiry";
import ProductCarousel from "../components/product/carousel";
import CarouselPage from "../components/product/carouselProduct";
import NavBar from "../components/Navbar"
import React from "react";
import FooterPage from "../components/Footer";

class productPage extends React.Component {
    render() {
        return (
            <div>

                <div>
                    <NavBar />
                    {/* <ProductCarousel /> */}
                    <CarouselPage />
                </div>
                <Product_cart />
                <EnquiryPage />
                <FooterPage />
            </div>
        );
    }
}

export default productPage