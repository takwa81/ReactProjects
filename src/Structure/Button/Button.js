import React from "react";
import './button.css';
import {motion} from 'framer-motion';
const Button = (props)=>{
    const {to , color} = props ;
    const getClass = () =>{
        switch(color){
            case 'primary':
               return 'primary button' ;
            case 'secondary':
                return 'secondary button';
            case 'danger':
                return 'danger' ;
            case 'warning':
                return 'warning button' ;
            case 'info':
                return 'info button' ;
            case 'dark':
                return 'dark button' ;
            case 'link':
                return 'link button' ;
            case 'light':
                return 'light button' ;
            case 'success':
                return 'success button' ;
            case 'outline-primary button':
                return 'outline-primary button' ;
            case 'outline-secondary':
                return 'outline-secondary button' ;
            case 'outline-sucsses':
                return 'outline-sucsses button' ;
            case 'outline-danger':
                return 'outline-danger button' ;
            case 'outline-warning':
                return 'outline-warning button' ;
            case 'outline-info button':
                return 'outline-info button' ;
            case 'outline-dark':
                return 'outline-dark button' ;
            case 'outline-light':
                return 'outline-light button' ;
            
        }
    
    }
    return(
        <motion.a href={to} whileTap={{scale:1.2}} className={`${getClass()} button`}>{props.children}</motion.a>
    );
}

export default Button ;