import React from "react";
import ProductList from "./ProductList";
import ProductShimmer from "../Loading/ProductShimmer";
import ProductsApi from "../../Data/Api/Data";


const Products = () =>{
    const { products } = ProductsApi();
    const { loading } = ProductsApi();

    return(
        <section className="products mt-5">
            <h3 className="text-center primary-color mb-5">المنتجات</h3>
            {
                loading ? <ProductShimmer></ProductShimmer>: <ProductList products={products}></ProductList>
            }
        </section>
    );
}

export default Products ;