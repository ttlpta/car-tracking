import React, { useState } from "react";
import PropTypes from "prop-types";

import SearchInputWrapper from "./SearchInputWrapper";
import SearchSuggest from "../SearchSuggest/SearchSuggest";

export default function SearchInput(props) {
  const [focus, focusOn] = useState(false);
  const [searching, search] = useState(false);

  function onSearch(e) {
    const txt = e.target.value;
    if (props.hasSuggestion) {
      search(!!txt.length);
    }

    props.onChange(txt);
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
            onChange={onSearch}
            title="Search"
            onFocus={() => focusOn(true)}
            onBlur={() => focusOn(false)}
          />
        </div>
      </div>
      {props.hasSuggestion && <SearchSuggest searching={searching} />}
    </SearchInputWrapper>
  );
}

SearchInput.propTypes = {
  hasSuggestion: PropTypes.bool,
  onChange: PropTypes.func
};

SearchInput.defaultProps = {
  hasSuggestion: false
};
