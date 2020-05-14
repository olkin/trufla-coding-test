import React from 'react';

const DepartmentsDropdown = ({onChange}) => {
    return <select value="" name="department" onChange={onChange}>
        <option />
        <option value="19">Department Mockster</option>
    </select>
}

export default DepartmentsDropdown;