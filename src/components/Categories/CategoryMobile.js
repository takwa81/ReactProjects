import React, { useEffect, useRef, useState } from "react";
import CategoryImage from '../../Data/images/f1.png'
import './category.css'
import { motion } from "framer-motion";
import { CategoriesApi } from "../../Data/Api/Data";
import Loading from "../Loading/Loading";
const CategoryMobile = (props) => {

    const {categories} = props ;
    const {loading} = CategoriesApi();

    return (

        <div className="category-mobile"  id="category-scroll" >
            <ul className="list category-container">
            {loading ? <Loading></Loading> :
            (
                categories.map((category)=>
                <li key={category.id}>
                <motion.img whileHover={{scale:1.1}} src={category.image} width="50px" height="50px" className="rounded-circle" />
                <br></br>
                <div className="text-center primary-color category-name">{category.name}</div>
            </li>
                )
            )
            }
            </ul>
        </div>
    );
}

export default CategoryMobile;