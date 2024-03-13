import React from "react";
import "./TextArea.scss";

const TextArea = (props) => {
    return <textarea {...props} className="base__textarea" maxLength="255" />;
};

export default TextArea;
