import React from 'react';

function withLogging(WrappedComponent) {

    class WithLogging extends React.Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
            console.log(`Component ${displayName} is mounted`);
        }

        componentWillUnmount() {
            console.log(`Component ${displayName} is going to unmount`);
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    const displayName = getDisplayName(WrappedComponent);
    WithLogging.displayName = `WithLogging(${ displayName })`;

    return WithLogging;
}

function getDisplayName(WrappedComponent) {
    if (WrappedComponent.displayName === undefined) {
        if (WrappedComponent.name === '' || WrappedComponent.name === undefined) {
            return 'Component';
        }
        return WrappedComponent.name;
    }
    return WrappedComponent.displayName;
}

export default withLogging;