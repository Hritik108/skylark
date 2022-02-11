import Product_cart from "../components/product/product_cart";
import EnquiryPage from "../components/product/enquiry";
import Carousell from "../components/product/carousel";
import ProductNavbar from "../components/product/carousel_nav";
import NavBar from "../components/Navbar"
import React from "react";
import FooterPage from "../components/Footer";

class productPage extends React.Component {
    render() {
        return (
            <div>

                <div>
                    <NavBar />
                    <Carousell />
                </div>
                {/* <Carousell /> */}
                <Product_cart />
                <EnquiryPage />
                <FooterPage />
            </div>
        );
    }
}

export default productPage