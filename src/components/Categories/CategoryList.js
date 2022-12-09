import React from "react";
import Logo from "../../Structure/Logo/logo";
import LogoImage from '../../Data/images/logo.png';
import {motion} from'framer-motion'
import { CategoriesApi } from "../../Data/Api/Data";
import Loading from "../Loading/Loading";

const CategoryList = (props) =>{
    const {categories} = props ;
    const {loading} = CategoriesApi();
    return(
        <>
        <div className="category">
        <Logo image={LogoImage} />
        <div className="mt-3 mb-3"><h3>Categories</h3></div>
        <ul className="category-list">
        {loading ? <Loading></Loading> :
            (
                categories.map((category)=>
                    <li class="category-item" key={category.id}><motion.img whileHover={{scale:1.1}} className="rounded-circle" src={category.image} width="40px" height="40px" alt="Category image"/> {category.name}</li>
                )
            )
            }
        </ul>
        </div>
        </>
    )
}
export default CategoryList ;