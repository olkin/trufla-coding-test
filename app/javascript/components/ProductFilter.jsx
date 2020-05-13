import React from "react";

class ProductFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            department: props.department,
            promoCode: props.promoCode,
            productName: props.productName,
            departments: []
        };

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
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            department: this.state.department,
            promoCode: this.state.promoCode,
            productName: this.state.productName
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick department
                        <select name="department" value={this.state.department} onChange={this.handleChange}>
                            <option></option>
                            {this.state.departments.map( (department) =>
                                <option key={department.id} value={department.id}>{department.name}</option>
                            )}

                        </select>
                    </label>
                    <label>
                        Add promo code
                        <input type="text" name="promoCode" value={this.state.promoCode} onChange={this.handleChange} />
                    </label>
                    <label>
                        Add product name
                        <input type="text" name="productName" value={this.state.productName} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default ProductFilter;

