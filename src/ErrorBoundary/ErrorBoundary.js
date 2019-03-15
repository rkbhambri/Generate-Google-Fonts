import React from 'react';
import fallbackImage from '../images/fallback.gif';

class ErrorBoundary extends React.Component {

	state = {
		hasError: false
	};

	static getDerivedStateFromError(error) {
		return { hasError: true };
	};

	componentDidCatch(error, info) {
		console.log('----error----', error, '---info----', info);
	};

	render() {
		if (this.state.hasError) {
			return (
				<div className="fallback text-center">
					<div className="fallback-message w-100 text-center" style={{ paddingTop: '180px' }}>
						<img src={fallbackImage} alt="Not available" />
						<h2 className="mt-5" style={{ color: '#A9A9A9' }}>Hmm...Looks like something went wrong</h2>
					</div>
				</div>
			);
		}
		return this.props.children;
	}
};
export default ErrorBoundary;
