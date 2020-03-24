import React, { useState } from "react";

import SearchInput from "../SearchInput/SearchInput";
import ButtonLink from "../ButtonLink/ButtonLink";
import SearchSuggest from "../SearchSuggest/SearchSuggest";
import SearchFormWrapper from "./SearchFormWrapper";

export default function SearchForm() {
  const [searching, search] = useState(false);

  function handleSearching(txt) {
    search(!!txt.length);
  }

  return (
    <SearchFormWrapper>
      <SearchInput onChange={handleSearching} hasSuggestion={true} />
      <div className="btnContainer">
        <center>
          <ButtonLink to="/list" label="Add new truck" />
          <ButtonLink to="/list" label="Go to the list" />
        </center>
      </div>
    </SearchFormWrapper>
  );
}
