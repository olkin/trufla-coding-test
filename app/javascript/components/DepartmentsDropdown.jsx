import React, { useState, useEffect }  from "react";
import styled from 'styled-components';

const Select = styled.select`
    width: 100%;
`;
const DepartmentsDropdown = ({department, onChange}) => {
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

    return (
        <Select value={department} name="department" onChange={onChange}>
            <option />
            {departments.map((department) =>
                <option key={department.id} value={department.id}>
                    {department.name}
                </option>
            )}
        </Select>
    );
}

export default DepartmentsDropdown;