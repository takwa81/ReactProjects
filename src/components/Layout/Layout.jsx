import React from "react";
import Router from "../../Router/Router";
import '../styles/layout.css';


const Layout = () => {
    const Style = {
        background: "linear-gradient(0deg, rgba(237,185,56,1) 0%, rgba(246,250,105,1) 52%)",
    }
   
    
    return (
        <div className="gradient-container" style={Style}>
            <div className="content">
                <div className="inner-container" id="scroll">
                  <Router />
                </div>
            </div>
        </div>
    );
}

export default Layout;