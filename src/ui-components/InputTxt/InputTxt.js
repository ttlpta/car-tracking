import React from "react";

export default function InputTxt(props){

  return (
    <div>
      <label for={props.name}>{props.label}</label>
      <input type='text' name={props.name} placeholder={props.placeholder}/>
    </div>
  );
}