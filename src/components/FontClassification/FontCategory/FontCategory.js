import React from 'react';
import './FontCategory.css';

const setColor = (text) => {
    document.getElementById(text).style.background = "#ccc";
};
const FontCategory = (props) => {
    return (
        <div
            className="font-category radio col-md-5 m-2 pt-2 text-center border"
            data-value={props.text}
            id={props.text}
            onClick={() => {
                props.selectCategory(props.text);
                setColor(props.text);
            }}>
            <p> {props.text}</p>
        </div>
    );
};

export default FontCategory;