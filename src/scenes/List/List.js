import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import ListWrapper from "./ListWrapper";

import {
  Logo,
  SearchInput,
  ListVehicle,
  AddVehicleForm,
} from "../../components";
import Detail from "../Detail/Detail";

export default function List(props) {
  const { path, url } = useRouteMatch();

  console.log(path, url);
  return (
    <ListWrapper>
      <div className="search-container">
        <div>
          <Logo small className="logo" />
          <SearchInput className="search-input" />
        </div>
      </div>
      <AddVehicleForm />
      <div className="list-body">
        <ListVehicle className="list" />
        <div className="preview">
          <h3>Preview detail car</h3>
          <Switch>
            <Route path={`${path}/:carId`} name="Home page" component={Detail} />
          </Switch>
        </div>
      </div>
    </ListWrapper>
  );
}
