import React from 'react';

const TextArea = (props) => {
    console.log('----fontFamily----', props.fontFamily)
    return (
        <div className="textarea col-md-8">
            <form className="w-100 ml-5">
                <textarea
                    className="form-control"
                    placeholder="Write Something......"
                    style={{ height: '300px', fontSize: props.fontSize, color: props.fontColor, fontFamily: props.fontFamily }}
                />
            </form>
        </div>
    );
};

export default TextArea;