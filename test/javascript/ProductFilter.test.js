import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import FilterForm from "../../app/javascript/components/FilterForm";

jest.mock('../../app/javascript/components/DepartmentsDropdown');

describe('ProductFilter', () => {
        it('sends data onSubmit', () => {
            const mockOnSubmit = jest.fn();

            const {getByText, getByLabelText, container} = render(
                <FilterForm
                    onSubmit={mockOnSubmit}
                />
            );

            fireEvent.change(getByLabelText("Pick department"), {target: {value: '19'}});
            fireEvent.change(getByLabelText("Add promo code"), {target: {value: 'PROMO X'}});
            fireEvent.change(getByLabelText("Add product name"), {target: {value: 'Teddy'}});

            fireEvent.submit(container.querySelector('form'));
            expect(mockOnSubmit.mock.calls.length).toBe(1);
            expect(mockOnSubmit.mock.calls[0][0]).toEqual({
                department: '19',
                productName: 'Teddy',
                promoCode: 'PROMO X'
            });
        });

        it('updates department', () => {
            const mockOnSubmit = jest.fn();
            const {getByLabelText, getByText} = render(
                <FilterForm
                    onSubmit={mockOnSubmit}
                />
            );

            fireEvent.change(getByLabelText("Pick department", {selector: 'select'}), {target: {value: '19'}});
            // TODO: having troubles with this test
            //expect(container.querySelector('select').val).toEqual('Department Mockster');
        });

        it('updates product name', () => {
            const mockOnSubmit = jest.fn();
            const {getByLabelText} = render(
                <FilterForm
                    onSubmit={mockOnSubmit}
                />
            );

            fireEvent.change(getByLabelText("Add product name"), {target: {value: 'Teddy'}});
            expect(getByLabelText("Add product name").value).toBe('Teddy');
        });

        it('updates promo code', () => {
            const mockOnSubmit = jest.fn();
            const {getByLabelText} = render(
                <FilterForm
                    onSubmit={mockOnSubmit}
                />
            );

            fireEvent.change(getByLabelText("Add promo code"), {target: {value: 'PROMO X'}});
            expect(getByLabelText("Add promo code").value).toBe('PROMO X');
        });
    }
)