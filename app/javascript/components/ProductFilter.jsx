import React, { useState, useEffect }  from "react";

const ProductFilter = ({onSubmit}) => {
    const initialFilters = {
        department: '',
        promoCode: '',
        productName: ''
    };

    const [filters, setFilters] = useState(initialFilters);
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetch("/api/v1/departments")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => setDepartments(response))
    }, []);

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
        <div>
            <form onSubmit={onFiltersSubmit}>
                <label>
                    Pick department
                    <select value={filters.department} name="department" onChange={onFilterChange}>
                        <option></option>
                        {departments.map((department) =>
                            <option key={department.id} value={department.id}>
                                {department.name}
                            </option>
                        )}
                    </select>
                </label>
                <label>
                    Add promo code
                    <input type="text" name="promoCode" value={filters.promoCode} onChange={onFilterChange}/>
                </label>
                <label>
                    Add product name
                    <input type="text" name="productName" value={filters.productName} onChange={onFilterChange}/>
                </label>
                <input type="submit" value="Submit"/>
                <button onClick={onReset}>Reset</button>
            </form>
        </div>
    );
}

export default ProductFilter;