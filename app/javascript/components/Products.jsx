import React from "react";
import styled from 'styled-components';
import Product from "./Product";

const ResultStats = styled.div`
  margin: 20px 0px; 
`;

const ResultsTable = styled.table`
  border-spacing: 20px 0px;
`;

const Products = ({products, total}) => {
    return (
        <>
            <ResultStats>
                Results: {products.length} of {total}
            </ResultStats>
            <ResultsTable>
                <thead>
                    <tr>
                        <th>Department</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Promo code</th>
                        <th>Discount, %</th>
                        <th>Discounted price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) =>
                        <Product key={product.id}
                                 product={product}
                        />
                    )}
                </tbody>
            </ResultsTable>
        </>
    );
}

export default Products;

