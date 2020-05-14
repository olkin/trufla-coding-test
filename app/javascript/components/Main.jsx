import React from "react";
import styled from 'styled-components';
import ProductSearch from "./ProductSearch";

const ProductSearchContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`;

const Main = () => {
    return (
        <ProductSearchContainer>
            <ProductSearch />
        </ProductSearchContainer>
    )
}
export default Main;