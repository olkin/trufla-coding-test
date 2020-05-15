import styled from 'styled-components';

const discountedColor = '#186147';
const activeColor = '#328FA8';
const disabledColor = '#808791';

export const ProductSearchContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`;

export const Discount = styled.td`
  color: ${discountedColor};
`;

export const DepartmentSelect = styled.select`
    width: 100%;
`;

export const Button = styled.input`
  background-color: transparent;
  border: 1px solid ${activeColor};
  color: inherit;
  padding: 10px 20px;
  margin: 8px 0;
  border-radius: 4px;
  cursor: pointer;
`;

export const SubmitButton = styled(Button)`
  background-color: ${activeColor};
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: row;
  align-items: flex-end;
`;

export const Label = styled.label`
    margin: 5px 10px;
`;

export const TextInput = styled.input`
  width: 90%;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ddd;  
`;

export const ResultStats = styled.div`
  margin: 20px 0px; 
`;

export const ResultsTable = styled.table`
  border-spacing: 20px 0px;
`;

export const Pagination = styled.div`
  text-align: center;
  
  .paginationContainer {
       display: inline-block;
    
        li {
            display: inline-block;
            padding: 10px 20px;
            border-radius: 5px;
    
            &.disabled {
                color: ${disabledColor};
            }
        }
    
        li:not(.disabled):not(.paginationBreak) {
            &.active {
                background-color: ${activeColor};
                color: white;
            }
    
            &:hover:not(.active) {
                background-color: ${activeColor};
                color: white;
            }
        }
    }
`;