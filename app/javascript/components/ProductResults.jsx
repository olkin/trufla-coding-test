import React from "react";
import ProductRow from "./ProductRow";
import {ResultStats, ResultsTable} from "./style";

const ProductResults = ({products, total}) => {
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
                        <ProductRow key={product.id}
                                    product={product}
                        />
                    )}
                </tbody>
            </ResultsTable>
        </>
    );
}

export default ProductResults;

