import React from "react";

const CategoryShimmer = () =>{

    return(
        <ul className="category-list loader">
            <li class="category-item">
                <div className="rounded-circle value" style={{width: "40px" , height:"40px"}}></div>
                <span className="category-name value" style={{marginRight: "10px" , fontSize: "1.1rem"}}></span>
              </li>
        </ul>
    );
}

export default CategoryShimmer;