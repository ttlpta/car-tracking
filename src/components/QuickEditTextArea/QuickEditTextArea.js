import React, { useState } from 'react';

import { Span, TextArea } from "./QuickEditTextAreaStyle";

export default function QuickEditTextArea(props){
  const [ editing, edit ] = useState(false);
  
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
    return (
      <TextArea rows={3} onChange={handleChange} onKeyDown={handleKeyDown} onBlur={() => edit(false)} value={props.value} autoFocus>
      </TextArea>
    );

  return (<Span onDoubleClick={handleDbClick}>{props.value}</Span>);
}