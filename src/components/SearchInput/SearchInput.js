import React, { useState } from "react";
import PropTypes from "prop-types";

import SearchInputWrapper from "./SearchInputWrapper";
import SearchSuggest from "../SearchSuggest/SearchSuggest";

import * as SuggestionService from "../../Services/SuggestionService";

export default function SearchInput(props) {
  const [focus, focusOn] = useState(false);
  const [searching, search] = useState(false);
  const [suggestionData, setSuggestionData] = useState([]);

  async function handleChange(e) {
    if (props.hasSuggestion) {
      const txt = e.target.value;
      search(!!txt.length);
      try {
        const suggestionItems = await SuggestionService.searchCar();
        setSuggestionData(suggestionItems);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <SearchInputWrapper>
      <div
        className={`searchWraper ${searching ? "searching" : ""} ${
          focus ? "focus" : ""
        }`}
      >
        <div className="inputWraper">
          <input
            maxLength="2048"
            type="text"
            autoComplete="off"
            placeholder="Type the plate"
            onChange={handleChange}
            title="Search"
            onFocus={() => focusOn(true)}
            onBlur={() => focusOn(false)}
          />
        </div>
      </div>
      {props.hasSuggestion && (
        <SearchSuggest searching={searching} items={suggestionData} />
      )}
    </SearchInputWrapper>
  );
}

SearchInput.propTypes = {
  hasSuggestion: PropTypes.bool
};

SearchInput.defaultProps = {
  hasSuggestion: false
};
