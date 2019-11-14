import React, { Component } from 'react';

class ErrorBoundary extends Component {
	state = {
		hasError: false,
	};

	static getDerivedStateFromError(error) {
		return {
			hasError: true,
		};
	}
	componentDidCatch(error, info) {}

	render() {
		return this.state.hasError ? this.props.fallback : this.props.children;
	}
}

function getComponentDisplayName(Component) {
	return Component.displayName || Component.name || 'Component';
}

export function withErrorBoundary(WrappedComponent) {
	function WithErrorBoundary(props) {
		return (
			<ErrorBoundary fallback={props.fallback}>
				<WrappedComponent {...props} />
			</ErrorBoundary>
		);
	}

	WithErrorBoundary.displayName = `withErrorBoundary(${getComponentDisplayName(
		WrappedComponent
	)})`;

	return WithErrorBoundary;
}

export default ErrorBoundary;
