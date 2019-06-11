import React, { useState, useRef } from 'react';

import { Span } from "./QuickEditInputStyle";

export default function QuickEditInput(props){
  const [ editing, edit ] = useState(false);
  const inputRef = useRef(null);
  
  function handleKeyDown(e) {
    if(e.keyCode == 13) {
      edit(false)
    }
  }

  function handleChange(e) {
  }

  function handleDbClick() {
    edit(true);
  }

  if(editing)
    return (<input type='text' value={props.value} 
      autoFocus
      ref={inputRef}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onBlur={() => edit(false)}/>);

  return (<Span onDoubleClick={handleDbClick}>{props.value}</Span>);
}