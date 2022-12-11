import React from "react";

const CategoryMobileShimmer = () =>{

    return(
        <ul className="list category-container loader">
            <li>
            <div className="rounded-circle value" style={{width: "50px" , height:"50px"}}></div>
            <br></br>
            <div className="text-center primary-color category-name value"></div>
        </li>
        </ul>
    );
}

export default CategoryMobileShimmer ;