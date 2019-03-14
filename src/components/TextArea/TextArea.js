import React from 'react';
import WebFont from 'webfontloader';

const TextArea = (props) => {
    if (props.fontFamily.length > 0) {
        WebFont.load({
            google: {
                families: [props.fontFamily.toString()]
            }
        });
    }
    return (
        <div className="textarea col-md-8">
            <form className="w-100 ml-5">
                <textarea
                    className="form-control"
                    placeholder="Write Something......"
                    style={{ height: '300px', boxShadow: 'none', fontSize: props.fontSize, color: props.fontColor, fontFamily: props.fontFamily + ', sans-serif' }}
                />
            </form>
        </div>
    );
};

export default TextArea;