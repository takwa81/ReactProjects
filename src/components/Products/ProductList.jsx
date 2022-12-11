import { motion } from "framer-motion";
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

const ProductList = (props) => {

    const {products } = props;
    const {categoryName} = useParams();
    
    return (
        <Container className="container-fluid mt-3">
            <Row className="justify-content-center">
                {
                    !categoryName ? 
                    (
                        
                        products.map((product)=>(
                            <Col md='4' lg='3' sm='4' className="mb-3" key={product.id}>
                            <div class="card-style border-0 shadow-sm">
                                <div class="card-body p-2">
                                    <p className="primary-color price text-end">{product.price}$</p>
                                    <div className="img-card">
                                    <motion.img whileHover={{scale:1.1}} src={product.images[0].image} alt="" width="100%" height="100%"/>
                                    </div>
                                    <h4 className="text-center mt-3 product-name">{product.name}</h4>
                                </div>
                            </div>
                        </Col>
                         
                        ))
                    ) :
                    (
                        
                        products.map((product)=>(
                            product.categoryName === categoryName ? (
                                <Col md='4' lg='3' sm='4' className="mb-3" key={product.id}>
                                <div class="card-style border-0 shadow-sm">
                                    <div class="card-body p-2">
                                        <p className="primary-color text-end">{product.price}</p>
                                        <div className="img-card">
                                        <motion.img whileHover={{scale:1.1}} src={product.images[0].image} alt="" width="100%" height="100%"/>
                                        </div>
                                        <h4 className="text-center mt-3">{product.name}</h4>
                                    </div>
                                </div>
                            </Col>
                            ): <></>
                         
                        ))
                    )
                }
            </Row>
        </Container>
    );
}

export default ProductList;