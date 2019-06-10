import React from "react";

import Button from "../Button/Button";
import SearchSuggestContainer from "./SearchSuggestStyle";

export default function SearchSuggest(props){

  if(!props.searching) {
    return null;
  }

  return (
    <SearchSuggestContainer >
      <div className="suggestWrapper">
        <ul>
          <li>
            <div className="suggestItem">
              <div className="info">
                <b>30A - 32122aaa</b>
              </div>
              <div className="action">
                <div>Delete</div>
              </div>
            </div>
          </li>
          <li>
            <div className="suggestItem">
              <div className="info">
                <b>30A - 32122aaa</b>
              </div>
              <div className="action">
                <div>Delete</div>
              </div>
            </div>
          </li>
          <li>
            <div className="suggestItem">
              <div className="info">
                <b>30A - 32122aaa</b>
              </div>
              <div className="action">
                <div>Delete</div>
              </div>
            </div>
          </li>
        </ul>
        <div className='btnContainer'>
          <center>
            <Button label="Google Search"/> 
            <Button label="I'm Feeling Lucky"/>
          </center>
        </div>
      </div>
    </SearchSuggestContainer>
  );
}
