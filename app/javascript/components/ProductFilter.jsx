import React, { useState }  from "react";
import DepartmentsDropdown from './DepartmentsDropdown';
import {Button, SubmitButton, Form, Label, TextInput} from "./style";

const ProductFilter = ({onSubmit}) => {
    const initialFilters = {
        department: '',
        promoCode: '',
        productName: ''
    };

    const [filters, setFilters] = useState(initialFilters);

    const onFilterChange = (event) => {
        const changedFilter = {[event.target.name]: event.target.value};
        setFilters(prevState => {
            return {...prevState, ...changedFilter}
        });
    }

    const onFiltersSubmit = (event) => {
        event.preventDefault();
        onSubmit(filters);
    }

    const onReset = () => {
        setFilters(initialFilters);
        onSubmit(filters);
    }

    return (
        <Form onSubmit={onFiltersSubmit}>
            <Label>
                Pick department
                <DepartmentsDropdown
                    department={filters.department}
                    onChange={onFilterChange}
                />
            </Label>
            <Label>
                Add promo code
                <TextInput type="text"
                       name="promoCode"
                       value={filters.promoCode}
                       onChange={onFilterChange}/>
            </Label>
            <Label>
                Add product name
                <TextInput type="text"
                       name="productName"
                       value={filters.productName}
                       onChange={onFilterChange}/>
            </Label>
            <SubmitButton type="submit" value="Submit"/>
            <Button type="button" onClick={onReset} value="Reset" />
        </Form>
    );
}

export default ProductFilter;