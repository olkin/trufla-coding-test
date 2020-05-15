import React, { useState }  from "react";
import DepartmentsDropdown from './DepartmentsDropdown';
import styled from 'styled-components';

const Button = styled.input`
  background-color: transparent;
  border: 1px solid #328FA8;
  color: inherit;
  padding: 10px 20px;
  margin: 8px 0;
  border-radius: 4px;
  cursor: pointer;
`;

const SubmitButton = styled(Button)`
  background-color: #328FA8;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-flow: row;
  align-items: flex-end;
`;

const Label = styled.label`
    margin: 5px 10px;
`;

const TextInput = styled.input`
  //vertical-align: middle;
  // margin-left: 10px;
  width: 90%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;  
`;

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