import React from "react";

const Product = ({department, name, price, promoCode, discount}) => {
    const priceWithDiscount = (price, discount) =>
        (price - price * discount/100).toFixed(2);
    
    const discountedPrice = discount ? priceWithDiscount(price, discount) : '';

    return (
        <div>
            <span className="product__department">
                {department}
            </span>
            <span className="product__name">
                {name}
            </span>
            <span className="product__price">
                ${price}
            </span>
            <span className="product__promo_code">
                {promoCode}
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

