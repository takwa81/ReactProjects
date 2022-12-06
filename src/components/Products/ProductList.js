import React from "react";
import { Container, Row } from "reactstrap";
import ProductItem from "./ProductItem";

const ProductList = (props) => {

    const { products } = props;
    return (
        <Container className="container-fluid mt-5">
            <Row className="justify-content-center">
                <ProductItem />
            </Row>
        </Container>
    );
}

export default ProductList;