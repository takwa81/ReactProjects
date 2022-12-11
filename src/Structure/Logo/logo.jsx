import React from "react";
import './logo.css';

const Logo = (props)=>{
    const {image , title} = props;
    return(
        <div className="logo">
            <img src={image} alt="Logo"/>
            <div>
                <h1>{title}</h1>
            </div>
            
        </div>
    );
}
export default Logo;