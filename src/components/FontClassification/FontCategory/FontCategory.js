import React from 'react';
const FontCategory = (props) => {
    return (
        <div
            className="font-category col-md-5 m-2 pt-2 text-center border"
            onClick={() => props.selectCategory(props.text)}>
            <p> {props.text}</p>
        </div>
    );
};

export default FontCategory;