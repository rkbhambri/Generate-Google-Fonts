import React, { Component } from 'react';
import TextArea from '../../components/TextArea/TextArea';
import FontSelection from '../../components/FontSelection/FontSelection';

const url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAu5dCU2-4pNltm6Fh2WhQO7ReMBocstbc';

class Layout extends Component {

    state = {
        data: [],
        isCategoryDisable: true,
        category: 'All'
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
    render() {
        return (
            <div className="layout col-md-10 offset-1 border">
                <div className="row">
                    <TextArea />
                    <FontSelection
                        selectCategory={(category) => this.selectCategory(category)}
                        isCategoryDisable={this.state.isCategoryDisable}
                        data={this.state.data}
                        category={this.state.category} />
                </div>
            </div>
        );
    };
};

export default Layout;