import React from "react";
import ReactDOM from "react-dom/client";

// React element
const Heading = (
  <h1 className="hero-heading" tabIndex="2">
    Hello from JSX 👋
  </h1>
);

//another component
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

//another component
const Title = () => (
  <div>
    <h1>This is my title component 📗</h1>
  </div>
);

//JSX
const title = (
  <div>
    <h1>This is another title </h1>
  </div>
);
const number = 100;

//functional components
const HeadingComponent = () => (
  <div id="hero-heading">
    <Navbar />
    {title}
    <Title />
    <h1 id="heading">Hello from react functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
