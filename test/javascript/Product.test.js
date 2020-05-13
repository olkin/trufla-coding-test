import React from 'react';
import {render} from '@testing-library/react';
import Product from "../../app/javascript/components/Product";

describe('Product', () => {
        it('shows data', () => {
            const {getByText} = render (
                <Product
                    name="PName"
                    price="123.99"
                    promoCode="10_PLUS_10_OFF"
                    discount={20}
                    department="XYZ Store"
                />
            );

            expect(getByText('PName')).toBeDefined();
            expect(getByText('$123.99')).toBeDefined();
            expect(getByText('XYZ Store')).toBeDefined();
            expect(getByText('10_PLUS_10_OFF')).toBeDefined();
            expect(getByText('$99.19')).toBeDefined();
        });

        it('shows data without promotion', () => {
            const {getByText} = render (
                <Product
                    name="PName"
                    price="123.99"
                    promoCode=""
                    discount=""
                    department="XYZ Store"
                />
            );

            expect(getByText('PName')).toBeDefined();
            expect(getByText('$123.99')).toBeDefined();
            expect(getByText('XYZ Store')).toBeDefined();
        });
    }
)