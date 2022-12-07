import React from "react";
import Banner2 from '../../Data/images/f1.png'
import Banner01 from '../../Data/images/f4.png'
import Banner02 from '../../Data/images/1.png'
import { Col, Row } from "reactstrap";
import Button from "../../Structure/Button/Button";
import { motion } from "framer-motion";

const Banner = () =>{

 return(
    <section className="banner">
    <Row>
        <Col lg='6' md='6'>
            <div className="banner-01 p-2 d-flex">
            
            <div className="text">
                <p className="primary-color">50% Off for 14 days</p>
                    <h3>Order Your Favourite Groceries</h3>
                    <br />
                    <Button color="success">Shop Now</Button>
                </div>
                <motion.img whileHover={{scale:1.1}}  src={Banner01} width="50%" height="50%"></motion.img>
            </div>
            <div className="banner-02 p-2 d-flex">
            
                <div className="text">
                <p className="primary-color">50% Off for 14 days</p>
                    <h3>Order Your Favourite Groceries</h3>
                    <br />
                    <Button color="success">Shop Now</Button>
                </div>
                <motion.img whileHover={{scale:1.1}}  src={Banner02} width="50%" height="50%"></motion.img>
            </div>
        </Col>
        <Col lg='6' md='6'>
            <div className="banner2 p-2 d-flex">
                <motion.img whileHover={{scale:1.1}}  src={Banner2} width="50%" height="50%"></motion.img>
                <div className="text">
                <p className="primary-color">50% Off for 14 days</p>
                    <h3>Order Your Favourite Groceries</h3>
                    <br/>
                    <Button color="success">Shop Now</Button>
                </div>
                
            </div>
        </Col>
        
    </Row>
</section>
 );
}

export default Banner;