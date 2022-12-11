import React from "react";
import { CategoriesApi } from "../../Data/Api/Data";
// import Avatar from '../../Data/images/avatar.png'
import Button from '../../Structure/Button/Button';
import CategoryMobile from "../Categories/CategoryMobile";


const MenuMobile = () =>{

    const {categories} = CategoriesApi();
    return(

          <div className="flex-row menu-mobile">
            <div className="bg-menu">
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

          </ul>
          <CategoryMobile categories={categories}/>

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
          </div>
      </div>

    )
}
export default MenuMobile ;