import React from "react";
import withCounter from "./functionalWithCounter";

const MyComponent = (props) => {
  const { count, incrementCount } = props;

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};

export default withCounter(MyComponent);
