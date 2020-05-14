import React from "react";

const Product = ({product}) => {
    const promotion = product.active_promotions[0];
    const discount = promotion?.discount;

    const priceWithDiscount = (price, discount) =>
        (product.price - product.price * discount/100).toFixed(2);
    
    const discountedPrice = discount ? priceWithDiscount(product.price, discount) : '';

    return (
        <div>
            <span>
                {product.department.name}
            </span>
            <span>
                {product.name}
            </span>
            <span>
                ${product.price}
            </span>
            <span>
                {promotion?.code}
            </span>
            <span>
                {discount}
            </span>
            <span>
                ${discountedPrice}
            </span>
        </div>
    );
}

export default Product;

