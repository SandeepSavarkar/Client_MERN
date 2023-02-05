import React from 'react'
import ErrorHandler from './ErrorHandler';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
    }
    
    render() {
       return this.state.errorInfo ? <ErrorHandler isShowDefault {...{...this.state}} /> : this.props.children
    }  
  }

  export default ErrorBoundary