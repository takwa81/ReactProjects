import React from "react";
import axios from "axios";

export default function Config (){
    const http = axios.create({
        baseURL:"http://127.0.0.1:8000/api",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return {
        http
    }
}

