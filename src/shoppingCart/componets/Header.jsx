import React from 'react';

const Header = () => {
  return (
    <div className="headerSection">
      <div className="logo">
        <div className="title">
          <h2>Shopping</h2>
        </div>
      </div>
      <div className="navBar">
        <ul>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Beauty</li>
        </ul>
      </div>
      <div className="searchbar">
        <div className="inputSearch">
          <input type="text" placeholder="Please enter here..." />
        </div>
      </div>
      <div className="rightBar">
        <div className="loginSingRigh">Login/ Singup</div>
        <div className="cart">Cart</div>
      </div>
    </div>
  );
};

export default Header;
