import React, { useState } from "react";

import SearchInput from "../SearchInput/SearchInput";
import ButtonLink from "../ButtonLink/ButtonLink";
import SearchSuggest from '../SearchSuggest/SearchSuggest';
import SearhFormContainer from './SearchFormStyle';

export default function SearchForm(params) {
  
  const [ searching, search ] = useState(false);

  function handleSearching(txt){
    search(!!txt.length);
  }

  return (
    <SearhFormContainer>
      <SearchInput onChange={handleSearching} suggestion={true}/>
      <SearchSuggest searching={searching}/>
      <div className='btnContainer'>
        <center>
          <ButtonLink to="/list" label="Add new truck"/> 
          <ButtonLink  to="/list" label="Go to the list"/>
        </center>
      </div>
    </SearhFormContainer>
  );
}