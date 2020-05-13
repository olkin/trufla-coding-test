import React from "react";

const Product = (props) => {
    const discountedPrice = props.promotion ? (props.price - props.price * props.promotion.discount/100).toFixed(2) : props.price;

    const discount = props.promotion ? `${props.promotion.discount}%` : '';

    return (
        <div>
            {props.department} <strong>{props.name}</strong> ${props.price} {props.promotion?.code} {discount} ${discountedPrice}
        </div>
    );
}

export default Product;

