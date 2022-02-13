import Product_cart from "../components/product/product_cart";
import EnquiryPage from "../components/product/enquiry";
<<<<<<< HEAD
import CarouselPage from "../components/product/carouselProduct";
=======
import ProductCarousel from "../components/product/carousel";
>>>>>>> 3799a0ce226bfd580570c46167db771af06ccf88
import NavBar from "../components/Navbar"
import React from "react";
import FooterPage from "../components/Footer";

class productPage extends React.Component {
    render() {
        return (
            <div>

                <div>
                    <NavBar />
<<<<<<< HEAD
                    <CarouselPage />
=======
                    <ProductCarousel />
>>>>>>> 3799a0ce226bfd580570c46167db771af06ccf88
                </div>
                <Product_cart />
                <EnquiryPage />
                <FooterPage />
            </div>
        );
    }
}

export default productPage