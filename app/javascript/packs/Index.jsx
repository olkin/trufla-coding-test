import React from 'react';
import ReactDOM from 'react-dom';
import ProductSearch from "../components/ProductSearch";

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <ProductSearch />,
        document.body.appendChild(document.createElement('div')),
    )
})
