import { Component } from "react";

// Error boundaries must be class components
export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("TaskList failed to render:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fallback" role="alert">
          <p>Something went wrong while showing your tasks.</p>
          <button
            type="button"
            className="btn-primary"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
