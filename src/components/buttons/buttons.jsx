import React from "react";
import './buttons.css';

const Button = ({textBtn,styleBtn}) =>{
    return(
        <button className={styleBtn} >{textBtn}</button>
    )
}

export default Button;