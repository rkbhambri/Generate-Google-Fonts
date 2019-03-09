import React from 'react';

const TextArea = (props) => {
    return (
        <div className="textarea col-md-8">
            <form className="w-100 ml-5">
                <textarea
                    className="form-control"
                    placeholder="Write Something......"
                    style={{ fontSize: props.fontSize, color: props.fontColor, height: '300px' }}
                />
            </form>
        </div>
    );
};

export default TextArea;