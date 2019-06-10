import React from "react";

import SearchInput from "../SearchInput/SearchInput";
import SearhFormContainer from './SearchFormStyle';

export default function SearchForm(params) {
    
  return (
    <SearhFormContainer>
      <SearchInput />
      <div className='btnContainer'>
        <center>
          <input value="Google Search" aria-label="Google Search" type="button" /> 
          <input value="I'm Feeling Lucky" aria-label="I'm Feeling Lucky" type="button" />
        </center>
      </div>
    </SearhFormContainer>
  );
}