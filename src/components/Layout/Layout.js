import React from "react";
import Router from "../../Router/Router";
import '../styles/layout.css';
import { Col, Row } from "reactstrap";
import CategoryList from "../Categories/CategoryList";
import Menu from "../Menu/Menu";
import MenuMobile from "../Menu/MenuMobile";

const Layout = () => {
    const Style = {
        background: "-webkit-gradient(linear , left top , left bottom , from(#d2f370), to(#d3657e))",
    }

    return (
        <div className="gradient-container" style={Style}>
            <div className="content">
                <div className="inner-container" id="scroll">
                    <div className="container-fluid p-2 h-100">
                        <Row className="h-100">
                            <Col md='2' className="">
                                <CategoryList />

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