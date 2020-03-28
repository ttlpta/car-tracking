import styled from "styled-components";

export default styled.div`
  .search-container {
    padding: 20px 30px;
    border-bottom: 1px solid #ebebeb;
    position: sticky;
    > div {
      display: flex;
      align-items: center;
      .logo {
        margin: 1em 15px;
      }
      .search-input {
        width: 40%;
      }
    }
  }
`;
