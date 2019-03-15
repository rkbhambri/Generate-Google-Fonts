import React from 'react';
import WebFont from 'webfontloader';
import HowToUse from './HowToUse/HowToUse';

const TextArea = (props) => {
    let fontVariant = props.fontVariant;
    let fontWeight = 400;
    if (props.fontFamily.length > 0) {
        WebFont.load({
            google: {
                families: [props.fontFamily.toString()]
            }
        });
    }
    if (props.fontVariant === 'regular') {
        fontVariant = 'normal';
    }
    if (props.fontVariant !== 'regular' && props.fontVariant !== 'italic') {
        fontWeight = fontVariant;
    }

    return (
        <div className="textarea col-md-8">
            <form className="w-100 ml-5">
                <textarea
                    className="form-control"
                    placeholder="Write Something......"
                    style={{ height: '300px', boxShadow: 'none', fontSize: props.fontSize, color: props.fontColor, fontFamily: props.fontFamily + ', sans-serif', fontStyle: fontVariant, fontWeight: fontWeight }}
                />
            </form>
            <div className="btn btn-sm btn-primary ml-5 mt-2" onClick={props.howToUseToggle}>&lt;/&gt;How to use</div>
            {
                props.isHowToUseActive && <HowToUse fontFamily={props.fontFamily} />
            }
        </div>
    );
};

export default TextArea;