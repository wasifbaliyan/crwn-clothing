import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ hidden, toggleCartHidden, itemCount }) => (
  <div className="cart-icon">
    <ShoppingIcon onClick={toggleCartHidden} className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulaterQuantity, cartItem) => accumulaterQuantity + cartItem.quantity,
    0
  ),
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
