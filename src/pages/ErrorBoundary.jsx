// import React from "react";

// class ErrorBoundary extends React.Component {
//   state = { hasError: false };

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//     console.error(error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <h2>Something went wrong.</h2>; // fallback UI
//     }
//     return this.props.children;
//   }
// }
// export default ErrorBoundary;
// ... 

import React from "react";
class ErrorBoundary extends React.Component {
    state={hasError: false};

    static getDerivedStateFromError(Error){
        return {hasError: true};
    }
    componentDidCatch(error,info){
        console.log(error,info);
    }
    render(){
        if(this.state.hasError){
            return <h1>Something went wrong</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;