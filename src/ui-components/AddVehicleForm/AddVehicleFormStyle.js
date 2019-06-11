import styled from "styled-components";

const AddVehicleFormContainer = styled.div`
  border: 1px solid #d4d4d4;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  -webkit-transition: 2s;
  transition: 2s;
  > div.topSection {
    display: flex;
    flex-direction: row;
    > div {
      flex : 1
    }
  }
  > .actionSection {
    text-align: right;
  }
`;

export default AddVehicleFormContainer;