import React from 'react';
import {render} from '@testing-library/react';
import Products from "../../app/javascript/components/Products";


jest.mock('../../app/javascript/components/Product');

describe('Products', () => {
        it('shows data', () => {
            const {getByText} = render (
                <Products
                    products={[
                        {
                            id: 189,
                            name: 'Teddy Bear',
                            price: '123.99',
                            active_promotions: [],
                            department: 'Toys'
                        }
                            ]}
                    total={17}
                />
            );

            expect(getByText("Results: 1 of 17")).toBeDefined();
            expect(getByText("Product Teddy Bear")).toBeDefined();
        });
    }
)