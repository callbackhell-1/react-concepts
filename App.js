import React from "react";
import ReactDOM from "react-dom/client";

// React element
const jsxHeading = (
  <h1 className="hero-heading" tabIndex="2">
    Hello from JSX 👋
  </h1>
);

//functional components
// 1st way :
const HeadingComponents = () => {
  return <h1>Hello from 1st functional component</h1>;
};

// 2nd way :
const HeadingComponents2 = () => (
  <h1>Hello from 2nd react functionalcomponent</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
