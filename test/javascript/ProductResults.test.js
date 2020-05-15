import React from 'react';
import {render} from '@testing-library/react';
import ProductResults from "../../app/javascript/components/ProductResults";


jest.mock('../../app/javascript/components/ProductRow');

describe('ProductResults', () => {
        it('shows data', () => {
            const {getByText} = render(
                <ProductResults
                    products={[
                        {
                            id: 189,
                            name: 'Teddy Bear'
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