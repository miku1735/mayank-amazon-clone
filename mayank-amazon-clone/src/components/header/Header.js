import React from "react";
import "./Header.css";
import amazonLogo from "../../pictures/header/amazon-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

function Header() {
  const [categories, setCategories] = React.useState([
    {
      value: "All Categories",
      label: "All Categories",
    },
    {
      value: "Deals",
      label: "Deals",
    },
    {
      value: "Alexa Skills",
      label: "Alexa Skills",
    },
    {
      value: "Amazon Fashion",
      label: "Amazon Fashion",
    },
    {
      value: "Amazon Pantry",
      label: "Amazon Pantry",
    },
    {
      value: "Appliances",
      label: "Appliances",
    },
    {
      value: "Apps & Games",
      label: "Apps & Games",
    },
  ]);
  return (
    <div className="Header">
      {/* Left Header */}
      <div className="Header__left">
        <img className="Header__amazon__logo" alt="" src={amazonLogo}></img>
      </div>

      {/* Middle Header */}
      <div className="Header__middle">
        <select
          onSubmit={(e) => {
            setCategories(e.target.values);
          }}
        >
          {categories.map((obj) => {
            return <option value={obj.value}>{obj.label}</option>;
          })}
        </select>
        <div className="Header__middle__textfield">
          <input type="text"></input>
        </div>
        <SearchIcon />
      </div>

      {/* Right Header */}
      <div className="Header__right">
        <div className="Header__right__Buttons">
          <h6>Hello,</h6>
          <h5>Sign In</h5>
        </div>
        <div className="Header__right__Buttons">
          <h6>Returns</h6>
          <h5>& Orders</h5>
        </div>
        <div className="Header__right__Buttons">
          <h6>Your</h6>
          <h5>Prime</h5>
        </div>
        <ShoppingCartOutlinedIcon className="Header__right__cart" />
        <h5> {0} </h5>
      </div>
    </div>
  );
}

export default Header;
