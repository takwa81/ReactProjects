import  { useEffect, useState } from "react";
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



export function CategoriesApi() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    const { http } = Config();

    const loadCategories = async () => {
        setLoading(true);
       await http.get("/categories").then((res) => {
            if (componentMounted) {
                setCategories(res.data);
                setLoading(false);
            }
            
            return () => {
                componentMounted = false;
            }
        });
    }

    useEffect(() => {
        loadCategories();
    }, []);

    return {categories,
            loading,
    }
}