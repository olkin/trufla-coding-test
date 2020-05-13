import React from "react";
import Products from "./Products";
import ReactPaginate from 'react-paginate';
import ProductFilter from "./ProductFilter";

class Main extends React.Component {
    initialState = {
        data: [],
        page: 1,
        department: '',
        promoCode: '',
        productName: ''
    };

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    loadProductsFromServer() {
        const url = `/api/v1/products?page=${this.state.page}&department_id=${this.state.department}&promo_code=${this.state.promoCode}&product_name=${this.state.productName}`;

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({
                data: response.products,
                pageCount: Math.ceil(response.meta.total_count / response.meta.limit)
            }))
    }

    componentDidMount() {
        this.loadProductsFromServer();
    }

    handlePageClick = data => {
        this.setState({ page: data.selected + 1 }, () => {
            this.loadProductsFromServer();
        });
    };

    handleFilterSubmit = ({department, promoCode, productName}) => {
        this.setState({ department: department, promoCode: promoCode, productName: productName, page: 1 }, () => {
            this.loadProductsFromServer();
        });
    };

    handleFilterReset = (event) => {
        event.preventDefault();
        this.setState(this.initialState, () => {
            this.loadProductsFromServer();
        });
    }


    render() {
        return (
            <>
                <h1>Products</h1>
                <ProductFilter
                    onSubmit={this.handleFilterSubmit}
                    onReset={this.handleFilterReset}
                    department={this.state.department}
                    promoCode={this.state.promoCode}
                    productName={this.state.productName}
                />
                <Products
                    products={this.state.data}
                />
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </>
        );
    }
}

export default Main;

