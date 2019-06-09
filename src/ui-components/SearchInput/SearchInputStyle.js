import styled from "styled-components";

const SearchInputContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding-left: 12px;
  padding-top: 6px;
  width : 45%;
  
  > div.inputWrapper {
    width : 45%;
    background: #fff;
    display: flex;
    border: 1px solid #dfe1e5;
    box-shadow: none;
    border-radius: 24px;
    z-index: 3;
    height: 44px;
    margin: 0 auto;
  }
`;

export default SearchInputContainer;