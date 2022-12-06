import React from "react";
import { Col, Row } from "reactstrap";
import Button from '../../Structure/Button/Button';
import Avatar from '../../Data/images/avatar.png'
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div className="flex-row menu">
                <ul className="list flex-2 display-flex flex-start nav-list">
                    <li>
                        <form className="d-flex form-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input className="form-control" type="search"
                                placeholder="Search your groceries items" aria-label="Search" />
                            <Button color="success">Search</Button>

                        </form>
                    </li>
                    <li>
                        <div className="icon"><i class="ri-mist-fill"></i></div>
                    </li>
                </ul>
                <ul className="list icon-list display-flex flex-end flex-1">
                    <li>
                        <div className="icon"><i class="ri-heart-line"></i></div>
                    </li>
                    <li>
                        <div className="icon"><i class="ri-chat-heart-line"></i></div>
                    </li>

                    <li>
                        <img src={Avatar} width="40px" height="40px" className="rounded-circle" />
                    </li>
                </ul>

            </div>
            {/***************************************** Menu Mobile  ******************************************************/}

            <div className="flex-row menu-mobile">

                <ul className="list icon-list display-flex justify-content-center flex-1">
                    <li>
                        <div className="icon"><i class="ri-mist-fill"></i></div>
                    </li>
                    <li>
                        <div className="icon"><i class="ri-heart-line"></i></div>
                    </li>
                    <li>
                        <div className="icon"><i class="ri-chat-heart-line"></i></div>
                    </li>

                    <li>
                        <img src={Avatar} width="40px" height="40px" className="rounded-circle" />
                    </li>
                </ul>
                <br></br>
                <ul className="list flex-2 display-flex flex-start nav-list">
                    <li>
                        <form className="d-flex form-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input className="form-control" type="search"
                                placeholder="Search your groceries items" aria-label="Search" />
                            <Button color="success">Search</Button>

                        </form>
                    </li>

                </ul>

            </div>

        </>
    );
}

export default Menu;