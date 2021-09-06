import React from "react";
import s from "./FooterIcon.module.scss";
type FooterIcon={
  style:{[key:string]:string}
}

function FooterIcon(props:FooterIcon) {
  return <div className={s.footerIcon} style={props.style}>
     {/* <a href='#'>{props.style}</a> */}
     
  </div>;
}

export default FooterIcon;
