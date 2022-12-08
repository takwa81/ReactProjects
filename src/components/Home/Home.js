import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import Banner from "../Banners/Banner";
import ProductList from "../Products/ProductList";
import { motion } from "framer-motion";
import ProductsApi from "../../Data/Api/Data";
import Loading from "../Loading/Loading";

const Home = () => {

    const { products } = ProductsApi();
    const { loading } = ProductsApi();

    return (
        <>
            <Banner />
            <section className="popular-items mt-3">
                <Row>
                    <Col md='6'>
                        <h4>Popular Items</h4>
                    </Col>
                    <Col md='6'>
                        <motion.button whileTap={{ scale: 1.2 }} className="btn-see primary-color">See All <i class="ri-arrow-right-fill"></i></motion.button>
                    </Col>
                </Row>
                {
                    loading ? <Loading></Loading>: <ProductList products={products}></ProductList>
                }
            </section>
        </>
    );

}
export default Home;