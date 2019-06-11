import React, { useState } from "react";
import styled from "styled-components";

import { Logo, SearchInput, ListVehicle, AddVehicleForm, Button } from "../../ui-components";

const SearchContainer = styled.div`
  padding : 20px 30px;
  border-bottom: 1px solid #ebebeb;
  position : sticky;
  > div {
    display : flex;
    align-items : center;
  }
`;
const LogoHere = styled(Logo)`
  margin : 1em 15px;
`;

const SearchInputHere = styled(SearchInput)`
  width : 40%;
`;

const CustomDiv = styled.div`
  padding : 10px;
  margin : 10px 0px;
`;

export default function List(props) {
  
  const [ showAddForm, openAddForm ] = useState(false);
  

  return (
    <div>
      <SearchContainer>
        <div>
          <LogoHere size='small'/>
          <SearchInputHere/>
        </div>
      </SearchContainer>
      <CustomDiv>
        <Button label="Add" onClick={() => openAddForm(!showAddForm)}/>
      </CustomDiv>
      {
        showAddForm && 
        <AddVehicleForm />
      }
      <ListVehicle />
    </div>
  )
}