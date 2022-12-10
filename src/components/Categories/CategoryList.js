import React, { useState } from "react";
import Logo from "../../Structure/Logo/logo";
import LogoImage from '../../Data/images/logo.png';
import { motion } from 'framer-motion'
import ProductsApi, { CategoriesApi } from "../../Data/Api/Data";
import CategoryShimmer from "../Loading/CategoryShimmer";
import { Link } from "react-router-dom";

const CategoryList = (props) => {
    const { categories } = props;
    // const {products} = ProductsApi() ;
    // const [filter , setFilter] = useState(products);

    // const filterProduct =(categoryName) =>{
    //     const updatedList = products.filter((x)=>x.categoryName === categoryName);
    //     setFilter(updatedList);
    // }


    const { loading } = CategoriesApi();
    return (
        <>
            <div className="category">
                <Link to="/"><Logo image={LogoImage} /></Link>
                <div className="mt-3 mb-3"><h3>الأصناف</h3></div>
                <ul className="category-list">
                    <li class="category-item" >
                        <a>
                            {/* <motion.img whileHover={{ scale: 1.1 }} className="rounded-circle" src={category.image} width="40px" height="40px" alt="Category image" /> */}
                            <span className="category-name" style={{ marginRight: "10px", fontSize: "1.1rem" }}>الكل</span>
                        </a>
                    </li>
                    {loading ? <CategoryShimmer></CategoryShimmer> :
                        (
                            categories.map((category) =>
                                <li class="category-item" key={category.id}>
                                    <a>
                                        <motion.img whileHover={{ scale: 1.1 }} className="rounded-circle" src={category.image} width="40px" height="40px" alt="Category image" />
                                        <span className="category-name" style={{ marginRight: "10px", fontSize: "1.1rem" }}>{category.name}</span>
                                    </a>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        </>
    )
}
export default CategoryList;