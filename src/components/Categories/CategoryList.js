import React from "react";
import Logo from "../../Structure/Logo/logo";
import LogoImage from '../../Data/images/logo.png';
import CategoryImage from '../../Data/images/f1.png'
import {motion} from'framer-motion'

const CategoryList = (props) =>{
    // const {categories} = props ;
    // console.log(categories);
    return(
        <>
        <div className="category">
        <Logo image={LogoImage} />
        <div className="mt-3 mb-3"><h3>Categories</h3></div>
        <ul className="category-list">
            {/* {
                categories.map((category)=>
                    <li class="category-item" key={category.id}><motion.img whileHover={{scale:1.1}} className="rounded-circle" src={category.image} width="40px" height="40px" alt="Category image"/> {category.name}</li>
                )
            } */}
        <li class="category-item"><motion.img whileHover={{scale:1.1}} className="rounded-circle" src={CategoryImage}width="40px" height="40px" alt="Category image"/> Fruit</li>
        <li class="category-item"><motion.img whileHover={{scale:1.1}} className="rounded-circle" src={CategoryImage}width="40px" height="40px" alt="Category image"/> Fruit</li>
        <li class="category-item"><motion.img whileHover={{scale:1.1}} className="rounded-circle" src={CategoryImage}width="40px" height="40px" alt="Category image"/> Fruit</li>
        <li class="category-item"><motion.img whileHover={{scale:1.1}} className="rounded-circle" src={CategoryImage}width="40px" height="40px" alt="Category image"/> Fruit</li>
        <li class="category-item"><motion.img whileHover={{scale:1.1}} className="rounded-circle" src={CategoryImage}width="40px" height="40px" alt="Category image"/> Fruit</li>
        <li class="category-item"><motion.img whileHover={{scale:1.1}} className="rounded-circle" src={CategoryImage}width="40px" height="40px" alt="Category image"/> Fruit</li>
        <li class="category-item"><motion.img whileHover={{scale:1.1}} className="rounded-circle" src={CategoryImage}width="40px" height="40px" alt="Category image"/> Fruit</li>

        </ul>
        </div>
        </>
    )
}
export default CategoryList ;