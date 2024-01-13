import React from "react";
import ReactDOM from "react-dom/client";

// React element
const jsxHeading = (
  <h1 className="hero-heading" tabIndex="2">
    Hello from JSX 👋
  </h1>
);

//functional components
const HeadingComponent = () => (
  <div id="hero-heading">
    <h1 id="heading">Hello from react functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
