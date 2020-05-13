import React from "react";

const Product = (props) => {

    const discountedPrice = props.promotion
        ? (props.price - props.price * props.promotion.discount/100).toFixed(2)
        : props.price;

    return (
        <div>
            {props.department}
            <strong>{props.name}</strong> ${props.price} {props.promotion?.code} {props.promotion?.discount} ${discountedPrice}
        </div>
    );
}

export default Product;

