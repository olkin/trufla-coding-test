import React from "react";
import Product from "./Product";

const Products = ({products, total}) => {
    return (
        <div>
            Results: {products.length} of {total}
            {products.map((product) =>
                <Product key={product.id}
                         name={product.name}
                         price={product.price}
                         promoCode={product.active_promotions[0]?.code}
                         discount={product.active_promotions[0]?.discount}
                         department={product.department.name}
                />
            )}
        </div>
    );
}

export default Products;

