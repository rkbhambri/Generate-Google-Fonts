import React from 'react';

const TextArea = (props) => {
    return (
        <div className="textarea col-md-8">
            <form>
                <textarea className="form-control" rows="15" placeholder="Write Something......" />
            </form>
        </div >
    );
};

export default TextArea;