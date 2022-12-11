import React, { useEffect, useRef, useState } from "react";
import './category.css'
import { motion } from "framer-motion";
import { CategoriesApi } from "../../Data/Api/Data";
import CategoryMobileShimmer from "../Loading/CategoryMobileShimmer";
import { Link } from "react-router-dom";
const CategoryMobile = (props) => {

    const { categories } = props;
    const { loading } = CategoriesApi();

    return (

        <div className="category-mobile" id="category-scroll" >
            <ul className="list category-container">

                <li>
                    <Link to="/products">
                        {/* <motion.img whileHover={{scale:1.1}} src={category.image} width="50px" height="50px" className="rounded-circle" /> */}
                        <br></br>
                        <div className="text-center primary-color category-name">الكل</div>
                    </Link>
                </li>
                {loading ? <CategoryMobileShimmer></CategoryMobileShimmer> :
                    (
                        categories.map((category) =>
                            <li key={category.id}>
                                <Link to={`/products/${category.name}`}>
                                    <motion.img whileHover={{ scale: 1.1 }} src={category.image} width="50px" height="50px" className="rounded-circle" />
                                    <br></br>
                                    <div className="text-center primary-color category-name">{category.name}</div>
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}

export default CategoryMobile;