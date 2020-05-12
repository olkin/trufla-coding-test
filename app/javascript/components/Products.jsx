import React from "react";
import Product from "./Product";

class Products extends React.Component {
    constructor(props) {
        super(props)
        this.state = { products: [] }
    }

    componentDidMount() {
        const url = "/api/v1/products";

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ products: response }))
            .catch(() => this.props.history.push("/"));
    }


    render() {
        return (
            <div>
                {this.state.products.map((product) =>
                    <Product key={product.id} name={product.name} />
                )}
            </div>
        );
    }
}

export default Products;

