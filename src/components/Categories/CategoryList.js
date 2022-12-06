import React from "react";
import Logo from "../../Structure/Logo/logo";
import CategoryItem from "./CategoryItem";
import LogoImage from '../../Data/images/logo.png';

const CategoryList = (props) =>{
    return(
        <>
        <div className="category">
        <Logo image={LogoImage} />
        <div className="mt-3 mb-3"><h3>Categories</h3></div>
        <ul className="category-list">
            <CategoryItem />
        </ul>
        </div>
        </>
    )
}
export default CategoryList ;