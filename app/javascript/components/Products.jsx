import React from "react";
import Product from "./Product";

const Products = (props) => {
    return (
        <div>
            {props.products.map((product) =>
                <Product key={product.id}
                         name={product.name}
                         price={product.price}
                         promotion={product.active_promotions[0]}/>
            )}
        </div>
    );
}

export default Products;

