import React from "react";
import Product from "./Product";
import {ResultStats, ResultsTable} from "./style";

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
                        <th>Discount</th>
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

