import React from 'react';
import Property from './Property/Property';

const FontProperty = (props) => {
    return (
        <div className="font-property">
            <p className="mt-1">PROPERTY</p>
            <Property label="Select Font Family" data={props.data} category={props.category} />
            <Property label="Select Font Variant" isCategoryDisable={props.isCategoryDisable} data={props.data} category={props.category} />
        </div>
    );
};

export default FontProperty;