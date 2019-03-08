import React from 'react';

const FontSize = (props) => {
    return (
        <div className="font-size row ml-1 mt-3">
            <div> FONT SIZE</div>
            <div className="font-input" style={{ marginLeft: '124px' }}>
                <input type="number" defaultValue="20" className="form-control" style={{ width: '59px' }} />
            </div>
        </div>
    );
};

export default FontSize;