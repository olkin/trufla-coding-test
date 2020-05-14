import React from "react";

const Product = ({product}) => {
    const promotion = product.active_promotions[0];
    const discount = promotion?.discount;

    const priceWithDiscount = (price, discount) =>
        (product.price - product.price * discount/100).toFixed(2);
    
    const discountedPrice = discount ? priceWithDiscount(product.price, discount) : '';

    return (
        <div>
            <span className="product__department">
                {product.department.name}
            </span>
            <span className="product__name">
                {product.name}
            </span>
            <span className="product__price">
                ${product.price}
            </span>
            <span className="product__promo_code">
                {promotion?.code}
            </span>
            <span className="product__discount">
                {discount}
            </span>
            <span className="product__discounted_price">
                ${discountedPrice}
            </span>
        </div>
    );
}

export default Product;

