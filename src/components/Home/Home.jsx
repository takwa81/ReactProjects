import React from "react";
import { Col, Row } from "reactstrap";
import Banner from "../Banners/Banner";
import ProductList from "../Products/ProductList";
import CategoryList from "../Categories/CategoryList";
import MenuMobile from "../Menu/MenuMobile";
import Menu from "../Menu/Menu";
import ProductsApi, { CategoriesApi } from "../../Data/Api/Data";
import ProductShimmer from "../Loading/ProductShimmer";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {

    const { products } = ProductsApi();
    const { loading } = ProductsApi();
    const {categories} = CategoriesApi();
    const [filter, setFilter] = useState(products);


    return (

        <div className="container-fluid p-2 h-100">
        <Row className="h-100">
            <Col md='2' className="">
                <CategoryList categories={categories} />
            </Col>
            <Col md='10' className="main p-3">
                <Menu />
                <MenuMobile />
                <Banner />
            <section className="popular-items mt-3">
                <Row>
                    <Col md='6'>
                        <h4>أشهر المنتجات</h4>
                    </Col>
                    <Col md='6'>
                        <Link className="btn-see primary-color" to="/products">  عرض الكل <i class="ri-arrow-left-line"></i></Link>
                    </Col>
                </Row>
                {
                    loading ? <ProductShimmer></ProductShimmer>: <ProductList products={products}></ProductList>
                }
            </section>

            </Col>
        </Row>
    </div>

    );

}
export default Home;