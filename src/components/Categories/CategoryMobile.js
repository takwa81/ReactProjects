import React, { useEffect, useRef, useState } from "react";
import CategoryImage from '../../Data/images/f1.png'
import './category.css'
import { motion } from "framer-motion";
const CategoryMobile = () => {

    const Style ={
        background: "var(--card-color)" ,
    }
    return (

        <div className="category-mobile mb-3"  id="category-scroll" style={Style}>
            <ul className="list category-container">
                <li>
                    <motion.img whileHover={{scale:1.1}} src={CategoryImage} width="50px" height="50px" className="rounded-circle" />
                    <br></br>
                    <div className="text-center primary-color category-name">Fruit</div>
                </li>
                <li>
                    <motion.img whileHover={{scale:1.1}} src={CategoryImage} width="50px" height="50px" className="rounded-circle" />
                    <br></br>
                    <div className="text-center primary-color category-name">Fruit</div>
                </li>
                <li>
                    <motion.img whileHover={{scale:1.1}} src={CategoryImage} width="50px" height="50px" className="rounded-circle" />
                    <br></br>
                    <div className="text-center primary-color category-name">Fruit</div>
                </li>
                <li>
                    <motion.img whileHover={{scale:1.1}} src={CategoryImage} width="50px" height="50px" className="rounded-circle" />
                    <br></br>
                    <div className="text-center primary-color category-name">Fruit</div>
                </li>
                <li>
                    <motion.img whileHover={{scale:1.1}} src={CategoryImage} width="50px" height="50px" className="rounded-circle" />
                    <br></br>
                    <div className="text-center primary-color category-name">Fruit</div>
                </li>
                <li>
                    <motion.img whileHover={{scale:1.1}} src={CategoryImage} width="50px" height="50px" className="rounded-circle" />
                    <br></br>
                    <div className="text-center primary-color category-name">Fruit</div>
                </li>
                    <li>
                        <motion.img whileHover={{scale:1.1}} src={CategoryImage} width="50px" height="50px" className="rounded-circle" />
                        <br></br>
                        <div className="text-center primary-color category-name">Fruit</div>
                    </li>
                    <li>
                        <motion.img whileHover={{scale:1.1}} src={CategoryImage} width="50px" height="50px" className="rounded-circle" />
                        <br></br>
                        <div className="text-center primary-color category-name">Fruit</div>
                    </li>
               


            </ul>
        </div>
    );
}

export default CategoryMobile;