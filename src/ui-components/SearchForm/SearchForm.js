import React, { useState } from "react";

import SearchInput from "../SearchInput/SearchInput";
import Button from "../Button/Button";
import SearchSuggest from '../SearchSuggest/SearchSuggest';
import SearhFormContainer from './SearchFormStyle';

export default function SearchForm(params) {
  
  const [ searching, search ] = useState(false);
  function handleSearching(searching){
    search(searching);
  }

  return (
    <SearhFormContainer>
      <SearchInput onChange={handleSearching}/>
      <SearchSuggest searching={searching}/>
      <div className='btnContainer'>
        <center>
          <Button label="Google Search"/> 
          <Button label="I'm Feeling Lucky"/>
        </center>
      </div>
    </SearhFormContainer>
  );
}