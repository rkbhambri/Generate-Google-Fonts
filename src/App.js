import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

import Layout from './containers/Layout/Layout';

class App extends Component {
	render() {
		return (
			<div className="App">
				<ErrorBoundary>
					<Layout />
				</ErrorBoundary>
			</div>
		);
	};
};

export default App;
