import React from 'react';

const FontVariant = (props) => {
    let property = null;
    let option = null;

    if (!props.isCategoryDisable) {
        property = props.data.filter(item => item.category.toLowerCase() === props.category.toLowerCase());
        console.log(property, props.category)
        property.map((item, index) => {
            option = item.variants.map(data => {
                return <option value={data} key={data}>{data}</option>
            })
            return 1;
        });
    }

    // if (props.category === 'All') {
    //     option = props.data.map((item, index) => {
    //         return <option value={item.family} key={index}>{item.family}</option>
    //     });
    // } else {

    //     property = props.data.filter(item => item.category.toLowerCase() === props.category.toLowerCase());
    //     option = property.map((item, index) => {
    //         return <option value={item.family} key={index}>{item.family}</option>
    //     });
    //     console.log('=========p======', property, '------', props.category)

    // }
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

export default FontVariant;
