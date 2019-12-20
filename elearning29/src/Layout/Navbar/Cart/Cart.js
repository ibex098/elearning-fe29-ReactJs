import React, { Component } from "react";
import CartItem from "./CartItem";

class Cart extends Component {
  render() {
    return (
      <li className="nav-item nav__cart mr-3">
        <a
          className="nav-link dropdown-toggle"
          href=".."
          data-toggle="dropdown"
        >
          <i className="lnr lnr-cart" />
          <span className="cart__number">1</span>
        </a>
        <ul className="dropdown-menu dropdown__cart">
          <li className="cart__list">
            {/* CartItem */}
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </li>
          <li className=" text-center cart__bottom">
            <h5 className="cart__total">
              ToTal:
              <span>$49.16</span>
            </h5>
            <button className="btn_blue">Go To Cart</button>
          </li>
        </ul>
      </li>
    );
  }
}

export default Cart;
