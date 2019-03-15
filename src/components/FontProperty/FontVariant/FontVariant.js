import React from 'react';

const FontVariant = (props) => {
	let property = null;
	let option = null;

	if (!props.isCategoryDisable) {
		property = props.data.filter(item => item.family.toLowerCase() === props.fontFamily.toLowerCase());
		property.map(item => {
			option = item.variants.map(data => {
				return <option value={data} key={data}>{data}</option>
			})
			return 1;
		});
	}
	return (
		<div className="font-property mt-2">
			<div className="selectProperty">
				<select
					className="form-control"
					id="selectProperty"
					defaultValue=""
					onChange={(event) => props.changeFontVariant(event)}
					disabled={props.isCategoryDisable}>
					<option value="" disabled>{props.label}</option>
					{option}
				</select>
			</div>
		</div>
	);
};

export default FontVariant;
