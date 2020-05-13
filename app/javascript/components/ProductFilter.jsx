import React from "react";

class ProductFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDepartment: props.department,
            departments: [] };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const url = "/api/v1/departments";

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({departments: response}))
    }

    handleChange = (event) => {
        this.setState({currentDepartment: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({department: this.state.currentDepartment});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick department
                        <select value={this.state.currentDepartment} onChange={this.handleChange}>
                            <option></option>
                            {this.state.departments.map( (department) =>
                                <option key={department.id} value={department.id}>{department.name}</option>
                            )}

                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default ProductFilter;

