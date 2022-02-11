import Product_cart from "../components/product/product_cart";
import EnquiryPage from "../components/product/enquiry";
import Carousell from "../components/product/carousel";
import ProductNavbar from "../components/product/carousel_nav";
import React from "react";
import FooterPage from "../components/Footer";

class productPage extends React.Component {
    render(){
        return(
        <div>
            
            <div color={"white"} isimage={false} >
            <ProductNavbar/>
            <Carousell />
            </div>
           {/* <Carousell /> */}
           <Product_cart />
           <EnquiryPage />
           <FooterPage/> 
        </div>
        );
    }
}

export default productPage