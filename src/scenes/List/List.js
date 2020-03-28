import React from "react";
import ListWrapper from "./ListWrapper";

import {
  Logo,
  SearchInput,
  ListVehicle,
  AddVehicleForm
} from "../../components";

export default function List(props) {
  return (
    <ListWrapper>
      <div className="search-container">
        <div>
          <Logo small className="logo" />
          <SearchInput className="search-input" />
        </div>
      </div>
      <AddVehicleForm />
      <ListVehicle />
    </ListWrapper>
  );
}
