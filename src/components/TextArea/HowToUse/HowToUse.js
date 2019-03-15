import React, { Component } from 'react';
import HowToUseData from './HowToUseData/HowToUseData';

import './HowToUse.css';

class HowToUse extends Component {

    state = {
        loadStandardTabActive: true
    }

    clickTab = (id) => {
        if (id === 'standard') {
            document.getElementById('standard').style.background = "#ccc";
            document.getElementById('import').style.background = "#fff";
            this.setState({
                loadStandardTabActive: true
            });
        } else {
            document.getElementById('standard').style.background = "#fff";
            document.getElementById('import').style.background = "#ccc";
            this.setState({
                loadStandardTabActive: false
            });
        }
    };

    render() {
        return (
            <div className="how-to-use w-100 ml-5 pl-3 mt-3">
                <ul class="list-inline row">
                    <li class="list-group-item col-md-6" id="standard" onClick={() => this.clickTab('standard')}>STANDARD</li>
                    <li class="list-group-item col-md-6" id="import" onClick={() => this.clickTab('import')}>@IMPORT</li>
                </ul>
                <HowToUseData fontFamily={this.props.fontFamily} loadStandardTabActive={this.state.loadStandardTabActive} />
            </div>
        );
    }

};

export default HowToUse;