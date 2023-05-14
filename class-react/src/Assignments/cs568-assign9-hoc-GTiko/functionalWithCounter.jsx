import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    return (
      <WrappedComponent
        {...props}
        count={count}
        incrementCount={incrementCount}
      />
    );
  };
};

export default withCounter;
