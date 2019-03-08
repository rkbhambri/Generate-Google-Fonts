import React from 'react';
import FontCategory from './FontCategory/FontCategory';

const FontClassification = (props) => {
    return (
        <div className="font-classification">
            <p> CLASSIFICATION</p>
            <div className="classification ml-1">
                <div className="row category">
                    <FontCategory text="All" selectCategory={(category) => props.selectCategory(category)} />
                    <FontCategory text="Sans-Serif" selectCategory={(category) => props.selectCategory(category)} />
                </div>
                <div className="row category">
                    <FontCategory text="Serif" selectCategory={(category) => props.selectCategory(category)} />
                    <FontCategory text="Display" selectCategory={(category) => props.selectCategory(category)} />
                </div>
                <div className="row category">
                    <FontCategory text="Handwriting" selectCategory={(category) => props.selectCategory(category)} />
                    <FontCategory text="Monospace" selectCategory={(category) => props.selectCategory(category)} />
                </div>
            </div>
        </div>
    );
};

export default FontClassification;