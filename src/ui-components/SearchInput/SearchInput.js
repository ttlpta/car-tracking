import React, { useState } from "react";
import SearchInputContainer from "./SearchInputStyle";

export default function SearchInput(props){

  const [ focus, focusOn ] = useState(false);
  const [ searching, search ] = useState(false);

  function onSearch(e){
    const txt = e.target.value;
    if(props.suggestion) {
      search(!!txt.length);
    }
    
    props.onChange(txt);
  }

  return(
    <SearchInputContainer className={props.className}>
      <div className={`searchWraper ${searching ? 'searching' : ''} ${focus ? 'focus' : ''}`}>
        <div className="inputWraper">
          <input maxLength="2048" name="q" type="text" 
            autoComplete='off' placeholder="Type the plate"
            onChange={onSearch}
            title="Search" onFocus={() => focusOn(true)} onBlur={() => focusOn(false)}
          />
        </div>
        <div className="btnWraper" aria-label="Search by voice">
          <span></span>
        </div>
      </div>
    </SearchInputContainer>
  );
}