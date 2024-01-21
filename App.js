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
              - name of res
              - img
              - star rating
              - ETA 
              - cuisines
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

const RestaurantCard = ({ resName, cuisine }) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gt1qlbsgaklbzlg0olga"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>30 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div>
        <div className="search">search</div>
        <div className="res-container">
          <RestaurantCard resName="Megna Food" cuisine="North Indian" />
          <RestaurantCard resName="KFC" cuisine="Fast food" />
        </div>
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
