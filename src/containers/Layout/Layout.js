import React, { Component } from 'react';
import TextArea from '../../components/TextArea/TextArea';
import FontSelection from '../../components/FontSelection/FontSelection';

const url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAu5dCU2-4pNltm6Fh2WhQO7ReMBocstbc';

class Layout extends Component {

	state = {
		data: [],
		isCategoryDisable: true,
		category: 'All',
		fontSize: '20px',
		fontColor: '#000',
		fontFamily: '',
		fontVariant: '',
		isHowToUseActive: false
	};

	static getDerivedStateFromProps = (nextProps, nextState) => {
		if (nextState.fontFamily.length === 0) {
			return { isCategoryDisable: true }
		} else {
			return { isCategoryDisable: false }
		}
	};

	componentDidMount() {
		fetch(url)
			.then(response => response.json())
			.then(data => this.setState({ data: data.items }))
			.catch((error) => {
				return error;
			})
	};

	selectCategory = (category) => {
		this.setState({
			category
		});
	};

	changeFontSize = (event) => {
		this.setState({
			...this.state,
			fontSize: event.target.value + 'px'
		});
	};

	changeColor = (event) => {
		this.setState({
			...this.state,
			fontColor: event.target.value
		});
	};

	changeFontFamily = (event) => {
		this.setState({
			...this.state,
			fontFamily: event.target.value
		});
	};

	changeFontVariant = (event) => {
		this.setState({
			...this.state,
			fontVariant: event.target.value
		});
	};

	howToUseToggle = () => {
		this.setState({ isHowToUseActive: !this.state.isHowToUseActive })
	};

	render() {
		return (
			<div className="layout col-md-10 offset-1 mt-4">
				<div className="layout-wrapper row">
					<TextArea
						fontFamily={this.state.fontFamily}
						fontSize={this.state.fontSize}
						fontColor={this.state.fontColor}
						fontVariant={this.state.fontVariant}
						howToUseToggle={this.howToUseToggle}
						isHowToUseActive={this.state.isHowToUseActive} />
					<FontSelection
						selectCategory={(category) => this.selectCategory(category)}
						isCategoryDisable={this.state.isCategoryDisable}
						data={this.state.data}
						category={this.state.category}
						fontFamily={this.state.fontFamily}
						changeFontSize={(event) => this.changeFontSize(event)}
						changeColor={(event) => this.changeColor(event)}
						changeFontFamily={(event) => this.changeFontFamily(event)}
						changeFontVariant={(event) => this.changeFontVariant(event)}
					/>
				</div>
			</div>
		);
	};
};

export default Layout;