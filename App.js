import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
    - logo 
    - nav items
 * body
    - search input
       -restraunt container
          - restraunt card
 * footer
    - Links
    - Address
    - contact us
 */
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?w=900&t=st=1705701049~exp=1705701649~hmac=93c91fbcdb9fe38d89490e46645d30b2ee1a3d569c0465a3284e3c9a08d828b6"
        />
      </div>

      <div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div>
        <form action="/">
          <div>
            <input typeof="text" placeholder="Search the restaurants" />
          </div>
          <div>
            <button typeof="submit">Search</button>
          </div>
        </form>
        <hr />
      </div>
      <div className="res-container">
        {/* Restaurant card  */}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
