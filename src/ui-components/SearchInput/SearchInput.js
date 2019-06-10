import React, { useState } from "react";
import SearchInputContainer from "./SearchInputStyle";

export default function SearchInput(props){

  const [ focus, focusOn ] = useState(false);

  return(
    <SearchInputContainer>
      <div className={`searchWraper ${focus ? 'focus' : ''}`}>
        <div className="inputWraper">
          <input maxLength="2048" name="q" type="text" 
            autoComplete='off' placeholder="Type the plate"
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