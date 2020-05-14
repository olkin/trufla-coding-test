import React from "react";
import styled from 'styled-components';

const Discount = styled.td`
  color: green;
`;

const Product = ({product) => {
    const promotion = product.active_promotions[0];
    const discount = promotion?.discount;

    const priceWithDiscount = (price, discount) =>
        (product.price - product.price * discount/100).toFixed(2);
    
    const discountedPrice = discount ? priceWithDiscount(product.price, discount) : '';

    return (
        <tr>
            <td>
                {product.department.name}
            </td>
            <td>
                {product.name}
            </td>
            <td>
                ${product.price}
            </td>
            <td>
                {promotion?.code}
            </td>
            <Discount>
                {discount}
            </Discount>
            <td>
                ${discountedPrice}
            </td>
        </tr>
    );
}

export default Product;

