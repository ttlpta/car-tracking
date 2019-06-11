import styled from "styled-components";

const ListVehicleContainer = styled.div`
  padding : 30px;
  table {
    border-collapse: collapse;
    width: 100%;
    tr {
      &:nth-child(even) {
        background-color: #F1F1F1;
      }
      &:nth-child(odd) {
        background-color: #FFF;
      }
      th {
        font-weight : bold;
        background-color : #ffffcc
      }
      th, td {
        height: 44px;
        border: 1px solid #d4d4d4;
        color: #555555;
        padding: 11px 5px 11px 5px;
        vertical-align: middle;
        text-align : center;
        width : 7%;
        &:nth-last-child(1){
          width : 10%;
          > div {
            display: flex;
            justify-content: space-around;
            > span {
              cursor : pointer;
              &:hover {
                text-decoration : underline;
              }
            }
          }
        }
        &:nth-last-child(2) {
          width : 22%;
        }
      }
    }
  }
`;

export default ListVehicleContainer;