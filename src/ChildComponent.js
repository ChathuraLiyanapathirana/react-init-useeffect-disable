import React, { useState, useEffect, useRef } from "react";

const ChildComponent = () => {
  let [counter, SetCounter] = useState(0);
  const isFirstaTimeRender = useRef(true);

  useEffect(() => {
    if (isFirstaTimeRender.current) {
      isFirstaTimeRender.current = false;
      return;
    }
    console.log("Execute Use Effect");
  }, [counter]);

  return (
    <div>
      Count Value: {counter}
      <br/>
      <input
        type="button"
        onClick={() => SetCounter(counter++)}
        value="Click Me"
      />
    </div>
  );
};

export default ChildComponent;
