import React from 'react';
import FontClassification from '../FontClassification/FontClassification';
import FontProperty from '../FontProperty/FontProperty';
import FontSize from '../FontSize/FontSize';
import FontColor from '../FontColor/FontColor';

const FontSelection = (props) => {
    return (
        <div className="font-selection col-md-3 offset-1 border">
            <FontClassification selectCategory={(category) => props.selectCategory(category)} />
            <FontProperty isCategoryDisable={props.isCategoryDisable} data={props.data} category={props.category} />
            <FontSize />
            <FontColor />
        </div>
    );
};

export default FontSelection;