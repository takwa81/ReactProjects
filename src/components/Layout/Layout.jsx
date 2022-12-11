import React from "react";
import Router from "../../Router/Router";
import '../styles/layout.css';
import { Col, Row } from "reactstrap";
import CategoryList from "../Categories/CategoryList";
import Menu from "../Menu/Menu";
import MenuMobile from "../Menu/MenuMobile";
import { CategoriesApi } from "../../Data/Api/Data";
import Loading from "../Loading/Loading";

const Layout = () => {
    const {categories} = CategoriesApi();
    const Style = {
        background: "linear-gradient(0deg, rgba(237,185,56,1) 0%, rgba(246,250,105,1) 52%)",
    }
   
    
    return (
        <div className="gradient-container" style={Style}>
            <div className="content">
                <div className="inner-container" id="scroll">
                    <div className="container-fluid p-2 h-100">
                        <Row className="h-100">
                            <Col md='2' className="">
                                <CategoryList categories={categories} />
                            </Col>
                            <Col md='10' className="main p-3">
                                <Menu />
                                <MenuMobile />
                                <Router />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;