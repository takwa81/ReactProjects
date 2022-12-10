import React from "react";
import { Col, Row } from "reactstrap";
import Banner from "../Banners/Banner";
import ProductList from "../Products/ProductList";
import { motion } from "framer-motion";
import ProductsApi from "../../Data/Api/Data";
import ProductShimmer from "../Loading/ProductShimmer";

const Home = () => {

    const { products } = ProductsApi();
    const { loading } = ProductsApi();

    return (
        <>
            <Banner />
            <section className="popular-items mt-3">
                <Row>
                    <Col md='6'>
                        <h4>أشهر المنتجات</h4>
                    </Col>
                    <Col md='6'>
                        <motion.a whileTap={{ scale: 1.2 }} className="btn-see primary-color" >  عرض الكل <i class="ri-arrow-left-line"></i></motion.a>
                    </Col>
                </Row>
                {
                    loading ? <ProductShimmer></ProductShimmer>: <ProductList products={products}></ProductList>
                }
            </section>
        </>
    );

}
export default Home;