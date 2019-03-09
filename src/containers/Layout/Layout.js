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
        fontColor: '#000'
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
        let isCategoryDisable = this.state.isCategoryDisable;
        if (category === 'All') {
            isCategoryDisable = true;
        }
        if (category === 'Sans-Serif') {
            isCategoryDisable = false;
        }
        if (category === 'Serif') {
            isCategoryDisable = false;
        }
        if (category === 'Display') {
            isCategoryDisable = false;
        }
        if (category === 'Handwriting') {
            isCategoryDisable = false;
        }
        if (category === 'Monospace') {
            isCategoryDisable = false;
        }
        this.setState({
            isCategoryDisable,
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
        })
    }

    render() {
        return (
            <div className="layout col-md-10 offset-1">
                <div className="row">
                    <TextArea fontSize={this.state.fontSize} fontColor={this.state.fontColor} />
                    <FontSelection
                        selectCategory={(category) => this.selectCategory(category)}
                        isCategoryDisable={this.state.isCategoryDisable}
                        data={this.state.data}
                        category={this.state.category}
                        changeFontSize={(event) => this.changeFontSize(event)}
                        changeColor={(event) => this.changeColor(event)}
                    />
                </div>
            </div>
        );
    };
};

export default Layout;