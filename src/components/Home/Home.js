import React from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "../Categories/CategoryList";
import '../styles/style.css'
import Menu from "../Menu/Menu";
import Banner from "../Banners/Banner";
import ProductList from "../Products/ProductList";
import CategoryMobile from "../Categories/CategoryMobile";
import { motion } from "framer-motion";
import MenuMobile from "../Menu/MenuMobile";

const Home = () =>{
    return(
        <div className="container-fluid p-2 h-100">
        <Row className="h-100">
            <Col md='2' className="">
                <CategoryList />

            </Col>
            <Col md='10' className="main p-3">
                <Menu />
                <MenuMobile />
                <Banner/>
                <section className="popular-items mt-3">
                        <Row>
                            <Col md='6'>
                                <h4>Popular Items</h4>
                            </Col>
                            <Col md='6'>
                                <motion.button whileTap={{scale:1.2}} className="btn-see primary-color">See All <i class="ri-arrow-right-fill"></i></motion.button>
                            </Col>
                        </Row>
                        <ProductList />
                    </section>
            </Col>
        </Row>
    </div>
    );

}
export default Home ;