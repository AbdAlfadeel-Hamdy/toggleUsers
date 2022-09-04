import React from "react";
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) return <p>No users provided!</p>;
    return this.props.children;
  }
}

export default ErrorBoundary;
