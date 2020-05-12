import React from "react";

const Product = (props) => {
    return (
        <div>{props.name} ${props.price}</div>
    );
}

export default Product;

