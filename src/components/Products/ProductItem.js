import React from "react";
import P1 from '../../Data/images/product22.png';
import P2 from '../../Data/images/product23.png';
import P3 from '../../Data/images/product33.png';
import P4 from '../../Data/images/product31.png';
import P5 from '../../Data/images/f4.png';
import P6 from '../../Data/images/product2.png';
import P7 from '../../Data/images/product28.png';
import { Col } from "reactstrap";
import { motion } from "framer-motion";
const ProductItem = (props) =>{

    const {product } = props ;
    return(
        <>
            <Col md='2' lg='3' className="mb-3">
                <div class="card-style border-0 shadow-sm">
                    <div class="card-body p-2">
                        <p className="primary-color text-end">500$</p>
                        <div className="img-card">
                        <motion.img whileHover={{scale:1.1}} src={P1} alt="" width="100%" height="100%"/>
                        </div>
                        <h4 className="text-center mt-3">Carrot</h4>
                    </div>
                </div>
            </Col>
            <Col md='2' lg='3' className="mb-3">
                <div class="card-style border-0 shadow-sm">
                    <div class="card-body p-2">
                        <p className="primary-color text-end">50$</p>
                        <div className="img-card">
                        <motion.img whileHover={{scale:1.1}} src={P2} alt="" width="100%" height="100%" />
                        </div>
                        <h4 className="text-center mt-3">Onion</h4>
                    </div>
                </div>
            </Col>
            <Col md='2' lg='3' className="mb-3">
                <div class="card-style border-0 shadow-sm">
                    <div class="card-body p-2">
                        <p className="primary-color text-end">220$</p>
                        <div className="img-card">
                        <motion.img whileHover={{scale:1.1}} src={P3} alt="" width="100%" height="100%" />
                        </div>
                        <h4 className="text-center mt-3">Orange</h4>
                    </div>
                </div>
            </Col>
            <Col md='2' lg='3' className="mb-3">
                <div class="card-style border-0 shadow-sm">
                    <div class="card-body p-2">
                        <p className="primary-color text-end">50$</p>
                        <div className="img-card">
                        <motion.img whileHover={{scale:1.1}} src={P4} alt="" width="100%" height="100%"/>
                        </div>
                        <h4 className="text-center mt-3">Banana</h4>
                    </div>
                </div>
            </Col>
            <Col md='2' lg='3' className="mb-3">
                <div class="card-style border-0 shadow-sm">
                    <div class="card-body p-2">
                        <p className="primary-color text-end">30$</p>
                        <div className="img-card">
                        <motion.img whileHover={{scale:1.1}} src={P5} alt="" width="100%" height="100%"/>
                        </div>
                        <h4 className="text-center mt-3">Strewberry</h4>
                    </div>
                </div>
            </Col>
            <Col md='2' lg='3' className="mb-3">
                <div class="card-style border-0 shadow-sm">
                    <div class="card-body p-2">
                        <p className="primary-color text-end">250$</p>
                        <div className="img-card">
                        <motion.img whileHover={{scale:1.1}} src={P6} alt="" width="100%" height="100%"/>
                        </div>
                        <h4 className="text-center mt-3">Egg</h4>
                    </div>
                </div>
            </Col>
            <Col md='2' lg='3' className="mb-3">
                <div class="card-style border-0 shadow-sm">
                    <div class="card-body p-2">
                        <p className="primary-color text-end">60$</p>
                        <div className="img-card">
                        <motion.img whileHover={{scale:1.1}} src={P7} alt="" width="100%" height="100%"/>
                        </div>
                        <h4 className="text-center mt-3">Garlic</h4>
                    </div>
                </div>
            </Col>
            </>
    );
}

export default ProductItem ;