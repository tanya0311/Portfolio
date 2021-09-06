import React, { ReactElement } from "react";
import s from "./SkillItem.module.scss";

type SkillItemType = {
	title: string
  icon:  
		any
	
	text: string[]
}
function SkillItem(props:SkillItemType) {
  return (
    <div className={s.skillItem}>
      <div className={s.skillIcon}>{props.icon}</div>
      <h3> {props.title}</h3>
      <div className={s.text}>
        {props.text.map( (skill, index)=> <p key={index}>{skill}</p>)}
      </div>
    </div>
  );
}


export default SkillItem;
