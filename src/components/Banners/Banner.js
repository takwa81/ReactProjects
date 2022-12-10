import React from "react";
import Banner2 from '../../Data/images/Banner2.jpg'
import Banner01 from '../../Data/images/Banner.jpg'
import Banner02 from '../../Data/images/Banner1.jpg'
import { Col, Row } from "reactstrap";
import Button from "../../Structure/Button/Button";
import { motion } from "framer-motion";

const Banner = () =>{

 return(
    <section className="banner">
    <Row>
        <Col lg='6' md='6'>
           
            <div className="banner-01 pad-1 d-flex">
            
                <div className="text">
                <p className="primary-color">أفضل أنواع الطين وأمهر الحرفيين</p>
                    <h3>منتجات الفخار</h3>
                    <br></br>
                    <Button color="success" to="/products">تصفح المنتجات</Button>
                </div>
                <motion.img whileHover={{scale:1.1}}  src={Banner02} width="50%" height="50%"></motion.img>
            </div>
            <div className="banner-02 pad-1 d-flex">
            
                <div className="text">
                <p className="primary-color">تصميمات مميزة بأجود أنواع الخشب</p>
                    <h3>منتجات الموزاييك</h3>
                    <br></br>
                    <Button color="success" to="/products">تصفح المنتجات</Button>
                </div>
                <motion.img whileHover={{scale:1.1}}  src={Banner01} width="50%" height="50%"></motion.img>
            </div>
           
            
        </Col>
        <Col lg='6' md='6'>
            <div className="banner2 pad-1 d-flex">
                <motion.img whileHover={{scale:1.1}}  src={Banner2} width="50%" height="50%"></motion.img>
                <div className="text">
                <p className="primary-color">نحاس عالي الجودة مقاوم للتاكل ودقة بالتصنيع</p>
                    <h3>منتجات النحاسيات</h3>
                    <br></br>
                    <Button color="success" to="/products">تصفح المنتجات</Button>
                </div>
                
            </div>
        </Col>
        
    </Row>
</section>
 );
}

export default Banner;