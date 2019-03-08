import React from 'react';

const Property = (props) => {
    let property = null;
    let option = null;
    if (props.category === 'All') {
        option = props.data.map((item, index) => {
            return <option value={item.family} key={index}>{item.family}</option>
        });
    } else {
        console.log('=========p======', props.data, '------', props.category)

        property = props.data.filter(item => item.category.toLowerCase() === props.category.toLowerCase());
        option = property.map((item, index) => {
            return <option value={item.family} key={index}>{item.family}</option>
        });
    }
    return (
        <div className="font-property mt-2">
            <div className="selectProperty">
                <select
                    className="form-control"
                    id="selectProperty"
                    defaultValue=""
                    onChange={(event) => props.sortByPrice(event)}
                    disabled={props.isCategoryDisable}>
                    <option value="" disabled>{props.label}</option>
                    {option}
                </select>
            </div>
        </div>
    );
};

export default Property;
