import React from "react";

const Product = (props) => {
    return (
        <div>{props.name} ${props.price} {props.promotion?.code}</div>
    );
}

export default Product;

