import React from 'react';

const FontColor = (props) => {
    return (
        <div className="font-color row ml-1 mt-3">
            <div>TEXT COLOR</div>
            <div className="font-input" style={{ marginLeft: '106px' }}>
                <input type="color" className="form-control" style={{ width: '59px' }} />
            </div>
        </div>
    );
};

export default FontColor;