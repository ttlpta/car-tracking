import React from "react";

import ButtonLinkStyle from "./ButtonLinkStyle";

export default function ButtonLink({ label, ...remainProps }) {
  
  return (<ButtonLinkStyle {...remainProps}>{label}</ButtonLinkStyle>)
}