import React, {useState, useEffect} from "react";
import Products from "./Products";
import ReactPaginate from 'react-paginate';
import ProductFilter from "./ProductFilter";

const ProductSearch = (props) => {
    const pageLimit = 20;
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [productTotal, setProductTotal] = useState(0);
    const [filters, setFilters] = useState({department: '', promoCode: '', productName: ''});


    const loadProductsFromServer = () => {
        const url = `/api/v1/products?page=${page}&department_id=${filters.department}&active_promo_code=${filters.promoCode}&product_name=${filters.productName}&per_page=${pageLimit}`;

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

    // handlePageClick = data =>
    //     setPage(data.selected + 1);

    const handleFilterSubmit = (filters) => {
        setPage(1);
        setFilters(filters);
    };

    return (
        <>
            <h1>Products</h1>
            <ProductFilter onSubmit={handleFilterSubmit}/>
            <Products
                products={products}
                total={productTotal}
            />
            {/*<ReactPaginate*/}
            {/*    previousLabel={'previous'}*/}
            {/*    nextLabel={'next'}*/}
            {/*    breakLabel={'...'}*/}
            {/*    breakClassName={'break-me'}*/}
            {/*    pageCount={pageData.pageCount}*/}
            {/*    marginPagesDisplayed={2}*/}
            {/*    pageRangeDisplayed={5}*/}
            {/*    onPageChange={handlePageClick}*/}
            {/*    containerClassName={'pagination'}*/}
            {/*    subContainerClassName={'pages pagination'}*/}
            {/*    activeClassName={'active'}*/}
            {/*/>*/}
        </>
    );
}

export default ProductSearch;

