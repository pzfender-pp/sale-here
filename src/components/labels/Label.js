import React from "react";
import "./Label.scss";

const Label = ({ text, id, style }) => {
    return (
        <label htmlFor={id} className="label" style={style}>
            {text}
        </label>
    );
};

export default Label;
