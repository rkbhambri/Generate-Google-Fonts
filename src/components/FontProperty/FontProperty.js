import React from 'react';
import FontFamily from './FontFamily/FontFamily';
import FontVariant from './FontVariant/FontVariant';

const FontProperty = (props) => {
    return (
        <div className="font-property">
            <p className="mt-1">PROPERTY</p>
            <FontFamily
                label="Select Font Family"
                data={props.data} category={props.category}
                changeFontFamily={(event) => props.changeFontFamily(event)}
            />
            <FontVariant label="Select Font Variant" isCategoryDisable={props.isCategoryDisable} data={props.data} category={props.category} />
        </div>
    );
};

export default FontProperty;