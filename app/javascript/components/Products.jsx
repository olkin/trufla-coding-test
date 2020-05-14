import React from "react";
import Product from "./Product";

const Products = ({products, total}) => {
    return (
        <div>
            <span className="products__result_stats">
                Results: {products.length} of {total}
            </span>
            {products.map((product) =>
                <Product key={product.id}
                         product={product}
                />
            )}
        </div>
    );
}

export default Products;

