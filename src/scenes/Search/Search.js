import React, { addReducer } from "reactn";

import initStore from "../../store";
import combineReducers from "../../reducers";
import { Logo, SearchForm, Test, TestAbc } from "../../ui-components";
initStore();
combineReducers();

export default function Search(props) {
    
  return (
    <div>
      <center>
        <Test />
        <TestAbc />
        <Logo />
        <SearchForm />
      </center>
    </div>
  )
}