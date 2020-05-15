import React, {useState, useEffect} from "react";
import ProductResults from "./ProductResults";
import ReactPaginate from 'react-paginate';
import ProductFilter from "./ProductFilter";
import {Pagination} from "./style";

const encodeQueryData = (data) => {
    return Object.keys(data).map(function(key) {
        return [key, data[key]].map(encodeURIComponent).join("=");
    }).join("&");
}

const ProductSearch = (props) => {
    const pageLimit = 20;
    const [products, setProducts] = useState([]);
    const [productTotal, setProductTotal] = useState(0);
    const [filters, setFilters] = useState({data: {department: '', promoCode: '', productName: ''}, page: 1});

    const loadProductsFromServer = () => {
        const urlData = {
            department_id: filters.data.department,
            active_promo_code: filters.data.promoCode,
            product_name: filters.data.productName,
            page: filters.page
        }
        const url = `/api/v1/products?${encodeQueryData(urlData)}`

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => {
                setProducts(response.products);
                setProductTotal(response.meta.total_count);
            })
    }

    const pageCount = () =>
        Math.ceil(productTotal / pageLimit);


    useEffect(loadProductsFromServer, [filters]);

    const handlePageClick = data =>
        setFilters(prevState => {
            return {...prevState, ...{page: data.selected + 1}}
        });

    const handleFilterSubmit = (filters) => {
        setFilters({data: filters, page: 1});
    };

    return (
        <>
            <h1>Products</h1>
            <ProductFilter onSubmit={handleFilterSubmit}/>
            <ProductResults
                products={products}
                total={productTotal}
            />
            <Pagination>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'paginationBreak'}
                    pageCount={pageCount()}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'paginationContainer'}
                    activeClassName={'active'}
                />
            </Pagination>
        </>
    );
}

export default ProductSearch;

