import Product_cart from "../components/product/product_cart";
import EnquiryPage from "../components/product/enquiry";
import NavBar from "../components/product/navbar";
import Newcarousel from "../components/product/newCarousel";
import NavBar2 from "../components/Navbar"
import React from "react";
import FooterPage from "../components/Footer";

class productPage extends React.Component {
    render() {
        return (
            <div>
                <NavBar2 />
                <div>
                    <Newcarousel />
                </div>
                <Product_cart />
                {/* <EnquiryPage /> */}
                <FooterPage />
            </div>
        );
    }
}

export default productPage