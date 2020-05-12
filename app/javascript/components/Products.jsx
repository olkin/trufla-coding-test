import React from "react";
import Product from "./Product";

const Products = (props) => {
    return (
        <div>
            {props.products.map((product) =>
                <Product key={product.id} name={product.name} />
            )}
        </div>
    );
}

export default Products;

