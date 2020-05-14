import React, { useState, useEffect }  from "react";

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
        <select value={department} name="department" onChange={onChange}>
            <option />
            {departments.map((department) =>
                <option key={department.id} value={department.id}>
                    {department.name}
                </option>
            )}
        </select>
    );
}

export default DepartmentsDropdown;