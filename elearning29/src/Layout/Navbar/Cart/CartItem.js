import React, { Component } from "react";

class CartItem extends Component {
  render() {
    return (
      <a href="." className="cart__item row py-1">
        <div className="cart__img col-3">
          <img src="./img/course.jpg" alt="." />
        </div>
        <div className="cart__info col-9">
          <h5 className="cart__item-name m-0">
            Management Skills: Team Leadership Skills Master Class
          </h5>
          <p className="cart__item-moTa m-0">
            Lawrence M. Miller, Best Selling Instructor, Author &amp; Leadership
            Coach
          </p>
          <p className="cart__item-price m-0">$11.99</p>
        </div>
      </a>
    );
  }
}

export default CartItem;
