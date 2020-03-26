import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { throttle } from "throttle-debounce";

import SearchInputWrapper from "./SearchInputWrapper";
import SearchSuggest from "../SearchSuggest/SearchSuggest";

import * as SuggestionService from "../../Services/SuggestionService";

export default function SearchInput(props) {
  const [focus, focusOn] = useState(false);
  const [searching, search] = useState(false);
  const [searchTxt, doSearch] = useState("");
  const [suggestionData, setSuggestionData] = useState([]);

  function debounce(fn, delay) {
    var timer = null;
    return function() {
      var context = this,
        args = arguments;
      clearTimeout(timer);
      console.log("----");
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, delay);
    };
  }

  const haha = () => console.log("333");
  // const handleChange = function(e) {
  //   if (props.hasSuggestion) {
  //     const txt = e.target.value;
  //     debounce(() => {
  //       console.log("==>", txt);
  //     }, 300)();

  //     throttle(300, () => {
  //       console.log("==>>>>", txt);
  //     })();
  //     console.log("------", e.target.value);
  //     search(!!txt.length);
  //     // doSearch(txt);

  //     // try {
  //     //   const suggestionItems = await SuggestionService.searchCar();
  //     //   setSuggestionData(suggestionItems);
  //     // } catch (error) {
  //     //   console.log(error);
  //     // }
  //   }
  // };

  const handleChange = throttle(500, e => {
    console.log("==>>>>", e);
  });

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
            onChange={({ target: { value } }) => handleChange(value)}
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
