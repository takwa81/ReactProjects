import React from "react";
import Router from "../../Router/Router";
import '../styles/layout.css';

const Layout = () =>{
    const Style = {
        background : "-webkit-gradient(linear , left top , left bottom , from(#d2f370), to(#d3657e))" ,
    }
    
    return (
        <div className="gradient-container" style={Style}>
            <div className="content">
                <div className="inner-container" id="scroll">
                    <Router />
                </div>
                {/* <div className="blur"></div> */}
            </div>
        </div>
    );
}

export default Layout;