import React from "react";

import InputTxtContainer from "./InputTxtStyle";

export default function InputTxt(props){

  return (
    <InputTxtContainer>
      <label htmlFor={props.name}>{props.label}</label> 
      {
        props.multiline && 
        <textarea name={props.name} placeholder={props.placeholder} rows={3}>
        </textarea>
      }
      {
        ! props.multiline && 
        <input type='text' name={props.name} placeholder={props.placeholder}/>
      }
    </InputTxtContainer>
  );
}