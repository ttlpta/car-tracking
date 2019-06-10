import React from "react";

import Button from "./ButtonStyle";

export default function Btn(props){

  return (
    <Button value={props.label} aria-label={props.label} type="button" /> 
  );
}