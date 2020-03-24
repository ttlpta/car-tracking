import React from "react";

import ButtonLink from "../ButtonLink/ButtonLink";
import SearchSuggestWrapper from "./SearchSuggestWrapper";

export default function SearchSuggest(props) {
  if (!props.searching) {
    return null;
  }

  return (
    <SearchSuggestWrapper>
      <div className="suggestWrapper">
        <ul>
          <li>
            <div className="suggestItem">
              <div className="info">
                <b>30A-32122, Nguyen Van A, Honda Vios</b>
              </div>
              <div className="action">
                <div>Detail</div>
                <div>Del</div>
              </div>
            </div>
          </li>
          <li>
            <div className="suggestItem">
              <div className="info">
                <b>30A-45555, Nguyen Van B, Honda Vios</b>
              </div>
              <div className="action">
                <div>Detail</div>
                <div>Del</div>
              </div>
            </div>
          </li>
          <li>
            <div className="suggestItem">
              <div className="info">
                <b>30A-36963, Nguyen Van B, Honda Vios</b>
              </div>
              <div className="action">
                <div>Detail</div>
                <div>Del</div>
              </div>
            </div>
          </li>
        </ul>
        <div className="btnContainer">
          <center>
            <ButtonLink to="/list" label="Add new truck" />
            <ButtonLink to="/list" label="Go to the list" />
          </center>
        </div>
      </div>
    </SearchSuggestWrapper>
  );
}
