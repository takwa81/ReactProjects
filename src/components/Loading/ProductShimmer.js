import React from "react";
import { Container, Row, Col } from "reactstrap";


const ProductShimmer = () => {
    return (

        <Container className="container-fluid mt-3 loader">
            <Row className="justify-content-center">
                <Col md='4' lg='3' sm='4' className="mb-3">
                    <div class="card-style border-0 shadow-sm">
                        <div class="card-body p-2">
                            <p className="primary-color text-end value"></p>
                            <div className="img-card value">
                            </div>
                            <h4 className="text-center mt-3 value"></h4>
                        </div>
                    </div>
                </Col>
                </Row>
        </Container>
    );
}
    

export default ProductShimmer;
