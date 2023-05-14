import React from "react";
import withCounter from "./classBasedWithCount";

class MyComponent extends React.Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment count</button>
      </div>
    );
  }
}

export default withCounter(MyComponent);
