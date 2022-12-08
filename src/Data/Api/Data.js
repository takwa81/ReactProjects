import React, { useEffect, useState } from "react";
import Config from "./Config"

export default function ProductsApi() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    const { http } = Config();

    const loadProducts = async () => {
        setLoading(true);
       await http.get("/products").then((res) => {
            
            if (componentMounted) {
                setProducts(res.data);
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        });
    }

    useEffect(() => {
        loadProducts();
    }, []);


    return {products,
            loading,
    }
}