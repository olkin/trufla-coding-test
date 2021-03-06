import React from 'react';
import {render} from '@testing-library/react';
import ProductRow from "../../app/javascript/components/ProductRow";

describe('ProductRow', () => {
        it('shows data', () => {
            const product = {
                name: "PName",
                price: 123.99,
                active_promotions: [
                    {
                        code: '10_PLUS_10_OFF',
                        discount: 20
                    }
                ],
                department: {
                    name: 'XYZ Store'
                }
            };

            const {getByText} = render(
                <table><tbody><ProductRow product={product} /></tbody></table>
            );

            expect(getByText('PName')).toBeDefined();
            expect(getByText('$123.99')).toBeDefined();
            expect(getByText('XYZ Store')).toBeDefined();
            expect(getByText('10_PLUS_10_OFF')).toBeDefined();
            expect(getByText('$99.19')).toBeDefined();
        });

        it('shows data without promotion', () => {
            const product = {
                name: "PName",
                price: 123.99,
                active_promotions: [],
                department: {
                    name: 'XYZ Store'
                }
            };

            const {getByText} = render(
                <table><tbody><ProductRow product={product} /></tbody></table>
            );

            expect(getByText('PName')).toBeDefined();
            expect(getByText('$123.99')).toBeDefined();
            expect(getByText('XYZ Store')).toBeDefined();
        });
    }
)