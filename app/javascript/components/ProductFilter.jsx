import React, { useState }  from "react";
import DepartmentsDropdown from './DepartmentsDropdown';

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
        <form onSubmit={onFiltersSubmit}>
            <label>
                Pick department
                <DepartmentsDropdown
                    department={filters.department}
                    onChange={onFilterChange}
                />
            </label>
            <label>
                Add promo code
                <input type="text"
                       name="promoCode"
                       value={filters.promoCode}
                       onChange={onFilterChange}/>
            </label>
            <label>
                Add product name
                <input type="text"
                       name="productName"
                       value={filters.productName}
                       onChange={onFilterChange}/>
            </label>
            <input type="submit"
                   value="Submit"/>
            <button onClick={onReset}>Reset</button>
        </form>
    );
}

export default ProductFilter;