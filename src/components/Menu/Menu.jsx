import React from "react";
import Button from '../../Structure/Button/Button';

const Menu = () => {
    return (
        <>
            <div className="flex-row menu">
                <ul className="list flex-2 display-flex flex-start nav-list">
                    <li>
                        <form className="d-flex form-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input className="form-control" type="search"
                                placeholder="بحث عن منتجات" aria-label="Search" />
                            <Button color="success">بحث</Button>

                        </form>
                    </li>

                </ul>
                <ul className="list icon-list display-flex flex-end flex-1">
                    <li>
                        <div className="icon"><i class="ri-whatsapp-fill"></i></div>
                    </li>
                    {/* <li>
                        <div className="icon"><i class="ri-map-pin-fill"></i></div>
                    </li> */}
                    <li>
                        <div className="icon"><i class="ri-phone-fill"></i></div>
                    </li>

                    {/* <li>
                        <img src={Avatar} width="40px" height="40px" className="rounded-circle" />
                    </li> */}
                </ul>

            </div>

        </>
    );
}

export default Menu;