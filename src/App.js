import React from "react";
import ChildComponent from "./ChildComponent";

export default function App() {
  return (
    <div>
      <h1>Initial useEffect not fired</h1>
      <ChildComponent />
    </div>
  );
}
