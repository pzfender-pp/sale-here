import React from "react";
import "./Button.scss";

const ButtonText = (props) => {
    return (
        <button {...props} className={`base__button base__button__text ${props.className}`}>
            {props.children}
        </button>
    );
};
export default ButtonText;
